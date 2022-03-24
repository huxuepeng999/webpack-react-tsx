
import React from 'react'

export default class Home extends React.Component {

    constructor(props:any) {
        super(props)
    }
    clipBtn(e:any) {
        console.log("clipBtn======")
        // cordova.plugins.clipboard.copy('123456');
    }
    render() {
        return (
            <div>
                <button style={{height:'100px',color:'red'}} onClick={this.clipBtn.bind(this)}>aa</button>
            </div>
        )
    }
}
