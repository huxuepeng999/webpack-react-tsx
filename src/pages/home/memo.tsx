import React, { useState } from "react";
import { render } from "react-dom";


function ParenntComp() {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={add}>点击次数:{count}</button>
            <Child></Child>
        </div>
    )
}

function Child() {
    console.log('child');
    return (
        <div>child</div>
    )
}

export default ParenntComp;