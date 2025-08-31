import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import { Link, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Cart from './Pages/Cart/index.jsx'
import Blog from './Pages/Blog/index.jsx'
import Account from './Pages/Account/index.jsx'
import Details from './Pages/Account/DashboardPages/Details.jsx'
import Orders from './Pages/Account/DashboardPages/Orders.jsx'
import Reviews from './Pages/Account/DashboardPages/Reviews.jsx'
import Returns from './Pages/Account/DashboardPages/Returns.jsx'
import Settings from './Pages/Account/DashboardPages/Settings.jsx'
import Product from './Pages/Home/ProductPages/index.jsx'
import Login from './Pages/Login/index.jsx'
import NotFound from './Pages/Page404/index.jsx'

function App() {
  const [accValue, setAccValue] = useState()
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    user ? setAccValue(
        <p className='loginLink'>{user.name}</p>
      ) : setAccValue(
        <p className='loginLink'>Login</p>
      )
  }, [])



  return (
    <>
      <Header logo='DealKart' accValue={accValue} />

      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route index element={<Home />} />
        <Route path='product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myAccount' element={<Account />}>
          <Route path='/myAccount' element={<Details />} />
          <Route path='my-orders' element={<Orders />} />
          <Route path='my-reviews' element={<Reviews />} />
          <Route path='my-returns' element={<Returns />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>

      <Footer logo='DealKart' />


    </>
  )
}

export default App