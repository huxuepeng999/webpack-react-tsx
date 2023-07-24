import React, { useEffect } from 'react'

const SubTitle = (props: any) => {

    useEffect(() => {
        console.log('res===1');
    }, [])

    return (
        <div>
            <div>subTitle</div>
            <div>{props.title}</div>
        </div>
    )
}

export default SubTitle