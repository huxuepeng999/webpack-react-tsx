

export const globalProps = {
  isIos: false,
};

const handleJson = (name, param, success, error) => {
  const successCB = () => {
    console.log("res===successCB");
    success();
  };
  const errorCB = () => {
    error();
  };
  let json = {
    ...{ name: name, param: param },
    ...{ success: `${name}Success`, error: `${name}Error` },
  };
  window[`${json["success"]}`] = successCB;
  window[`${json["error"]}`] = errorCB;
  return json;
};

/**
 * h5调用原生
 */
export const nativeApi = {
  common: (name, param) => {
    return new Promise((resolve, reject) => {
      if (!window.webkit) {
        return;
      }
      const json = handleJson(name, param, resolve, reject);
      if (globalProps.isIos) {
        window.webkit.messageHandlers.common.postMessage(json);
      } else {
        window.common.handlerAction(json);
      }
    });
  },
  getToken: (json) => {
    window.webkit &&
      window.webkit.messageHandlers.getToken.postMessage(JSON.stringify(json));
  },
  getName: (json) => {
    window.webkit &&
      window.webkit.messageHandlers.getName.postMessage(JSON.stringify(json));
  },
};
export const unNativeApi = (name) => {
  delete window[`${name}Success`];
  delete window[`${name}Error`];
};

export const webApi = (name, fn1) => {
  window[name] = fn1;
};
export const unWebApi = (name) => {
  delete window[name];
};
