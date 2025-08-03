import React from 'react'
import { Link } from 'react-router'

const Orders = () => {
  return (
    <div className='dashBoardContent'>
      <h1>Orders</h1>
      <div className='flex-col-wrap align-center justify-center p-3'>
        <h2>There are no orders you have made</h2>
        <p>go to our shop and order something for your self</p>
          <Link to={'/'} style={{color:'blue'}}>Go shop</Link>
      </div>
    </div>
  )
}

export default Orders