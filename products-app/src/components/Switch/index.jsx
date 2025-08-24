import React, { useState } from 'react'
import './switch.css'

const Switch = () => {
    const [ switchState , setSwitchState] = useState(false)
// ${switchState ? 'switchOn' : ''}
//  onClick={()=>setSwitchState(!switchState)}
    return (
        <div className={`switchBody ${switchState ? 'switchOn' : ''}`} onClick={()=>setSwitchState(!switchState)}>
            <div className="switchBall"></div>
        </div>
    )
}

export default Switch
