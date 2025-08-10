import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    let [count, setCount] = useState(0)
    return (
        <>
            <div className='flex-row-nowrap '>
                <button onClick={()=> setCount(++count)}>+</button>
                <input type="number" name="counter" id="counter" disabled placeholder={count}/>
                <button onClick={()=> setCount(--count)}>-</button>
            </div>
        </>
    )
}

export default Counter
