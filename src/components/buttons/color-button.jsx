import React from 'react'

const ColorButton = ({color, changeColor, styles}) => {

  return (
    <div className='colorButton' 
        onClick={() => changeColor(color)}
        style={{background: color, ...styles}}>
    </div>
  )
}

export default ColorButton