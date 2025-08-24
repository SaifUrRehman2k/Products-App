import React from 'react'
import { Link } from 'react-router'
import NoDataImg from '../../assets/images/noData.webp'

const NoData = () => {
  return (
    <>
      <div className='flex-col-wrap align-center justify-center p-1'>
        <img src={NoDataImg} alt="" width={'300px'}/>
        <h2 className='noDataHead'>There are no orders you have made</h2>
        <p className='noDataPara'>go to our shop and order something for your self</p>
          <Link to={'/'} style={{color:'blue'}}>Go shop</Link>
      </div>
    </>
  )
}

export default NoData
