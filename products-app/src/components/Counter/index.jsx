import React, { useEffect, useState } from 'react'
import './counter.css'

const Counter = ({ dataToPriceTag }) => {
    let [count, setCount] = useState(1)
    dataToPriceTag(count)
    // useEffect(()=>{
    //     dataToPriceTag(count)
    // },[count])
    return (
        <>
            <div className='flex-row-nowrap '>
                <button className='addSubBtns' onClick={() => {
                    setCount(++count)
                    dataToPriceTag(count)
                }}>+</button>
                <div id="counter" > {count}</div>
                <button className='addSubBtns' disabled={count == 1} onClick={() => {
                    setCount(--count)
                    dataToPriceTag(count)
                }}>-</button>
            </div>
        </>
    )
}

export default Counter
