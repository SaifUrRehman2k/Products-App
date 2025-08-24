import React from 'react'
import Switch from '../Switch'
import './list.css'

const List = () => {
  return (
    <>
      <ul className='l-style-none p-0 flex-col-wrap gap-1 '>
        <li className='settingRow flex-row-nowrap align-center w-100 justify-between p-0-1'>
            <p>Example</p>
            <Switch/>
        </li>
        <li className='settingRow flex-row-nowrap align-center w-100 justify-between p-0-1'>
            <p>Example</p>
            <Switch/>
        </li>
        <li className='settingRow flex-row-nowrap align-center w-100 justify-between p-0-1'>
            <p>Example</p>
            <Switch/>
        </li>
        <li className='settingRow flex-row-nowrap align-center w-100 justify-between p-0-1'>
            <p>Example</p>
            <Switch/>
        </li>
        <li className='settingRow flex-row-nowrap align-center w-100 justify-between p-0-1'>
            <p>Example</p>
            <Switch/>
        </li>
      </ul>
    </>
  )
}

export default List
