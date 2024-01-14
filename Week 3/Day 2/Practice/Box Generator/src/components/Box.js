import React from 'react'

const Box = (props) => {

    const {data} = props;
    const {style, ...others} = data;

    return (
        <div className="m-2" style={style}>
    
        </div>
    )
}

export default Box