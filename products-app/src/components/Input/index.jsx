import React from 'react'
import './input.css'


const Input = (props) => {
  return (
    <div>
      <div className='input'>  
            <label htmlFor={props.inputID}>{props.inputID}</label>
            <input type={props.type} placeholder={props.placeHolder} disabled={props.disabled} id={props.inputID} onChange={props.updatedVal}/>
        </div>
    </div>
  )
}

export default Input
