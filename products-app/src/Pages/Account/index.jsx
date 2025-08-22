import { Outlet, useNavigate } from 'react-router'
import LeftSideBar from '../../components/LeftSideBar'
import './account.css'
import HeroSection from '../../components/HeroSection'
import { use, useEffect, useState } from 'react'

const Account = () => {
  const navigate = useNavigate();
  let [user, setUser] = useState([])
  useEffect(()=>{
    localStorage.getItem('user')? setUser(JSON.parse(localStorage.getItem('user'))) : navigate('/login')
  },[])
  console.log(user);
  


  return (
    <>

      <div className='accPage flex-row-nowrap align-center justify-around gap-1 m-1-0  w-100'>
        <LeftSideBar/>


        <div className='accWindow m-1'>
          
        <h1 className='mainHeading'>Welcome {user.name}</h1>


          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Account
