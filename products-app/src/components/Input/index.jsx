import React from 'react'
import './input.css'


const Input = (props) => {
  return (
    <div>
      <div className='input'>  
            <label htmlFor={props.inputID}>{props.inputName}</label>
            <input type={props.inputType} placeholder={props.placeHolder} id={props.inputID} onChange={props.updatedVal}/>
        </div>
    </div>
  )
}

export default Input
