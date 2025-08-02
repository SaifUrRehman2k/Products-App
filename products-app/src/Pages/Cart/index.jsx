import React from 'react'
import HeroSection from '../../components/HeroSection'
import kettel from '../../assets/images/kettel.svg'

const Cart = () => {
  const heroContent = { pageHeading: 'Shopping Cart', pageLine: 'Add things you want to purchase.' }


  return (
    <div style={{height:'100vh'}}>
      <HeroSection  pageHeading={heroContent.pageHeading} pageLine={heroContent.pageLine} images={[kettel]}/>
        <div className="cartItems w-100 m-2"></div>
        <small className='p-2' style={{color:'var(--fontColor2)', display:'inline-block'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio est sequi sunt vitae necessitatibus atque, non quasi similique officiis eaque laborum eius, delectus hic suscipit sapiente temporibus amet rerum!</small>
    </div>
  )
}

export default Cart
