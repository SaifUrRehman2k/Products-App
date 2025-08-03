import { Outlet } from 'react-router'
import LeftSideBar from '../../components/LeftSideBar'
import './account.css'
import HeroSection from '../../components/HeroSection'
import { useState } from 'react'

const Account = () => {
  const heroContent = { pageHeading: 'Account Center', pageLine: "Manage all your your Account's data" } 


  return (
    <>

      <div className='accPage flex-row-nowrap align-center justify-around gap-1 m-1-0  w-100'>
        
        <LeftSideBar/>


        <div className='accWindow m-1'>
        <h1 className='mainHeading'>Accounts Centers</h1>

          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Account
