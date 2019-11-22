
class Clipboard {

    constructor() {
        
    }    

    init() {
        const _this = this
        window.onload = function() {
            console.log('Clipboard init==============')
            document.addEventListener("deviceready", _this.onDeviceReady, false)
        }
    }

    onDeviceReady() {
        //当Cordova完全加载好deviceready事件会触发
        console.log('Clipboard onDeviceReady==============')
        // window.cordova.plugins.clipboard.copy(text)
        //给其他事件添加类似的监听
    }
}

export default new Clipboard()