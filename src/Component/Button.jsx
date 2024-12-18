
import React from 'react'

const Button = (props) => {
  return (
    <div >
        
        <button style={{
        width: props.width,
        height: props.height,
        borderRadius: '15px',
        backgroundColor: props.bgcolor,
        color: props.color,
        border: '1px solid #126A10',
        cursor: 'pointer',
        marginRight: '20px'
    }}>{props.name}</button>
    </div>
  )
}

export default Button

