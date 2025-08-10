import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
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

function App() {


  return (
    <>
      <Header logo='DealKart' />
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/myAccount' element={<Account/>}>
          <Route path='my-details' element={<Details/>}/>
          <Route path='my-orders' element={<Orders/>}/>
          <Route path='my-reviews' element={<Reviews/>}/>
          <Route path='my-returns' element={<Returns/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
        <Route path=''/>

      </Routes>
      
      <Footer logo='DealKart' />

      
    </>
  )
}

export default App