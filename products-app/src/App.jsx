import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact/contact'
import Cart from './Pages/Cart/index.jsx'
import Blog from './Pages/Blog/index.jsx'


function App() {
  const navLinks = ['Home', 'About', 'Contact', 'Cart']


  return (
    <>
      <Header nav={navLinks} logo='DealKart' />
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='blog' element={<Blog/>}/>

      </Routes>
      
      <Footer links={navLinks} logo='DealKart' />

      
    </>
  )
}

export default App