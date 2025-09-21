import React, { useEffect, useState } from 'react'
import './counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../App/Slices/counterSlice'

const Counter = ({ dataToPriceTag }) => {
    let count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    dataToPriceTag(count == 0 ? count++ : count)

    return (
        <>
            <div className='flex-row-nowrap '>
                <button className='addSubBtns' onClick={() => {
                    dispatch(increment())
                }}>+</button>
                <div id="counter" > {count}</div>
                <button className='addSubBtns' disabled={count == 1} onClick={() => {
                    dispatch(decrement())
                }}>-</button>
            </div>
        </>
    )
}

export default Counter
