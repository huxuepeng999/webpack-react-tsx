
import React from 'react'
import { CusVideo } from "./CusVideo";
import cordova from '../cordova/cordova';
import camera from '../cordova/camera';

export default class Home extends React.Component {

    constructor(props:any) {
        super(props)
    }
    clipBtn(e:any) {
        console.log("clipBtn======")
        // cordova.plugins.clipboard.copy('123456');
    }
    cameraBtn(e:any) {
        console.log("cameraBtn======")
        camera.getPicture()
    }
    render() {
        return (
            <div>
                <CusVideo compiler="TypeScript" framework="React" />
                <button style={{height:'100px',color:'red'}} onClick={this.clipBtn.bind(this)}>复制</button>
                <button style={{height:'100px',color:'red'}} onClick={this.cameraBtn.bind(this)}>照相1</button>
            </div>
        )
    }
}
