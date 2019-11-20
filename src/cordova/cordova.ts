

class Cordova {

    constructor() {
        
    }    

    init() {
        const _this = this
        window.onload = function() {
            console.log('Cordova init==============')
            document.addEventListener("deviceready", _this.onDeviceReady, false)
        }
    }

    onDeviceReady() {
        //当Cordova完全加载好deviceready事件会触发
        console.log('onDeviceReady==============')
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
        document.addEventListener("menubutton", this.onMenuKeyDown, false);
        //给其他事件添加类似的监听
    }

    onPause() {
        //处理暂停事件
    }
    
    onResume() {
        //处理恢复事件
    }
    
    onMenuKeyDown() {
        //处理"菜单"按钮事件
    }
}

export default new Cordova()