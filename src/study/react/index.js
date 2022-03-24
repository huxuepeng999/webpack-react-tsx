import { App } from "./app";

console.log("res===1", App);

function render(vDom, container) {
    let dom;
    if (typeof vDom !== 'object') {
        dom = document.createTextNode(vDom)
    } else {
        dom = document.createElement(vDom.type)
    }

    if (vDom.props) {
        Object.keys(vDom.props)
            .filter(key => key != 'children')
            .forEach(item => {
                dom[item] = vDom.props[item]
            })
    }
}