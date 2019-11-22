

class Camera {

    constructor() {
        
    }

    init() {
        const _this = this
        window.onload = function() {
            console.log('Camera init==============')
            document.addEventListener("deviceready", _this.onDeviceReady, false)
        }
    }

    onDeviceReady() {
        //当Cordova完全加载好deviceready事件会触发
        console.log('Camera onDeviceReady==============')
        // this.getPicture()
    }

    getPicture() {
        if (navigator.camera) {
            let cameraOptions = {"sourceType":0}
            navigator.camera.getPicture(this.cameraSuccess, this.cameraError, cameraOptions);
        }else {
            //不存在
        }
    }

    cameraSuccess(result:any) {
        console.log("Camera cleanup success.")
    }
    
    cameraError(result:any) {
        alert('Failed because: ');
    }

    // openCamera(selection) {

    //     var srcType = Camera.PictureSourceType.CAMERA;
    //     var options = setOptions(srcType);
    //     var func = createNewFileEntry;
    
    //     navigator.camera.getPicture(function cameraSuccess(imageUri) {
    
    //         displayImage(imageUri);
    //         // You may choose to copy the picture, save it somewhere, or upload.
    //         func(imageUri);
    
    //     }, function cameraError(error) {
    //         console.debug("Unable to obtain picture: " + error, "app");
    
    //     }, options);
    // }

    setOptions(srcType:any) {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            // destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            // encodingType: Camera.EncodingType.JPEG,
            // mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
    }
}

export default new Camera()