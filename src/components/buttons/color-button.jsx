import React from 'react'

const ColorButton = ({color, changeColor, styles}) => {

    console.log(styles);

  return (
    <div className='colorButton' 
        onClick={() => changeColor(color)}
        style={{background: color, ...styles}}>
    </div>
  )
}

export default ColorButton