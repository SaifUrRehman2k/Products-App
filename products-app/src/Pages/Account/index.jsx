import { Outlet, useNavigate } from 'react-router'
import LeftSideBar from '../../components/LeftSideBar'
import './account.css'
import HeroSection from '../../components/HeroSection'
import { createContext, use, useEffect, useState } from 'react'

export const UserContext = createContext()

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    let storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.log(error);
        navigate('/login')
      }
    } else {
      navigate('/login')
    }
    setLoading(false)
  },[])
  if (loading) return null

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(user);
  
  const userName = user?.name?.firstname && user?.name?.lastname ? `${user?.name?.firstname} ${user?.name?.lastname}` : '--- ---'

  console.log(userName);
  
  return (
    <>

      <div className='accPage flex-row-nowrap align-center justify-around gap-1 m-0  w-100'>
        <LeftSideBar/>


        <div className='accWindow m-1'>
          
        <h1 className='mainHeading'>Welcome {capitalizeFirstLetter(userName)}</h1>

          <UserContext.Provider value={{ user }}>
            <Outlet />
          </UserContext.Provider>
        </div>
      </div>
    </>
  )
}

export default Account
