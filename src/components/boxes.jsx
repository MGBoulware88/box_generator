import React from 'react';

const Box = (props) => {
    const boxStyle = {
        height:'100px',
        width: '100px',
        background: props.thisBoxColor,
        display: 'inline-block'
    };
    

    return (
        <div style={boxStyle}></div>
    )
};

export default Box;