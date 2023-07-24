import { isIos } from '@/utils/utils';
import { format } from '@konata9/milk-shake';
import { v4 as uuidv4 } from 'uuid';
import EventEmitter from 'eventemitter3';

function callNativeApi(fn, payload, option = {}) {
    console.log(
        `===========callNativeApi: =========\n         fn:${fn}, payload:${payload}`,
        fn,
        payload
    );
    const { hideError = true } = option;
    if (process.env.NODE_ENV != 'production') {
        const e = 'process.env.NODE_ENV != production';
        console.error(
            `===========callNativeApi failed =========\n         fn:${fn}, errorMsg:${e}`
        );
        throw e;
    }
    const params = payload ? JSON.stringify(payload) : undefined;

    try {
        if (isIos()) {
            if (params) {
                return window.webkit.messageHandlers[fn].postMessage(params);
            } else {
                return window.webkit.messageHandlers[fn].postMessage('');
            }
        } else {
            if (params) {
                return window.JSBridge[fn](params);
            } else {
                return window.JSBridge[fn]();
            }
        }
    } catch (e) {
        console.error(
            `===========callNativeApi failed =========\n         fn:${fn}, errorMsg:${e}`
        );
        if (hideError) {
            return undefined;
        } else {
            throw e;
        }
        // return undefined;
    }
}

/**
 * 调用nativeApi接口设计
 */
const nativeEE = new EventEmitter();
// 暴露给native回调
const onCallResponse = function(json) {
    console.log('============onCallResponse=============', json);
    const response = format('toCamel')(JSON.parse(json));
    const { msgId, event } = response;
    nativeEE.emit(`${event}-${msgId}`, response);
};

// 向native发请求
const requestNative = function(event, param = {}) {
    if (!window.onCallResponse) {
        window.onCallResponse = onCallResponse;
    }
    console.log(`==============requestNative:${event}============\n param:`, param);
    const REQUEST = 'invoke';
    const msgId = uuidv4();
    const timeout = param.timeout;
    if (timeout !== undefined) {
        delete param.timeout;
    }
    const payload = format('toSnake')({ msgId, event, param });
    function timeoutPromise(promise, ms) {
        if (ms) {
            const timeout = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    reject({ code: 0, msg: 'Time out', data: {} });
                }, ms);
            });
            return Promise.race([promise, timeout]);
        } else {
            return promise;
        }
    }

    const request = new Promise((resolve, reject) => {
        nativeEE.once(`${event}-${msgId}`, response => {
            if (response) {
                resolve(response);
            } else {
                reject({});
            }
        });
        // sync
        try {
            callNativeApi(REQUEST, payload, { hideError: false });
        } catch (e) {
            reject({
                code: -1,
                msg: 'No support for the API requestNative',
                data: {},
            });
        }
    });

    return timeoutPromise(request, timeout);
};

export { callNativeApi, requestNative };