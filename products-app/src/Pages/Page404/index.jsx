import React from 'react'
import Error404 from '../../assets/images/error404.png'

const NotFound = () => {
  return (
    <div style={{padding: '1em'}} className='flex-col-wrap align-center justify-center m-3'>
        <img src={Error404} width={'600px'} alt="" />
        <h1>The page you are looking for doesn't exist</h1>
    </div>
  )
}

export default NotFound
