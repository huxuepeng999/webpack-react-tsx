
import React from 'react'
import SubTitle from './subTitle';

export default class Home extends React.Component {

    state = {
        title: 1
    }

    constructor(props: any) {
        super(props)
    }
    clipBtn(e: any) {
        console.log("clipBtn======")
        // cordova.plugins.clipboard.copy('123456');
        this.setState({ title: this.state.title + 1 })
    }
    render() {
        return (
            <div>
                <button style={{ height: '100px', color: 'red' }} onClick={this.clipBtn.bind(this)}>aa</button>
                <SubTitle title={this.state.title}></SubTitle>
            </div >
        )
    }
}
