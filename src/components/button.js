import React from 'react'


const Button = props => {
    const style = (p) => ({
        width: "96px",
        height: '32px',
        background: p.background || "#69306d" ,
        color: p.color || "#fff",
        border: `1px solid ${p.background || "#69306d"}`,
        borderRadius: '16px'
    })


    return (
        <button style={style({
            background: props.background,
            color: props.color
        })}>{props.children}</button>
    )
}

export {Button}