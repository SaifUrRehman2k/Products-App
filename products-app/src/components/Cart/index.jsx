import React, { useEffect } from 'react'
import HeroSection from '../HeroSection'
import kettel from '../../assets/images/kettel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../../App/Slices/cartDrawer'
import "./cart.css";
import { removeFromCart } from '../../App/Slices/cartData'

const Cart = () => {
  const cartDisplayValue = useSelector((state) => state.cartDrawer.value)
  const cartProducts = useSelector((state) => state.cartData.products)
  const dispatch = useDispatch()


  return (
    <div id='Cart' className={`flex-col-wrap align-start justify-start gap p-1 p-rel displayCart-${cartDisplayValue}`}>

      <svg className='closeBtn p-abs' onClick={() => dispatch(closeCart())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>

      <div className="cartProducts flex-col-wrap align-start jusrtify-start gap-1">
        {
          cartProducts?.map((item, index) => (
            <div key={index} className="cartItem flex-row-nowrap align-start justify-between">
              <img src={item.image} alt="" />

              <div className='flex-col-wrap' style={{ width:'65%', gap:'8px'}}>
                <h4 className="m-0">{item.title}</h4>
                <small style={{color:'var(--fontColor3)', fontWeight: 50}}>${item.price}</small>
              <span className='delete m-0 flex-row-nowrap align-center ' onClick={() => {
                  dispatch(removeFromCart(item.id))
                  console.log(cartProducts);
                }} type='button'>
                  Remove <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" style={{ fill: 'var()--fontColor1' }} ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </span>
              </div>

              <div className='flex-col-wrap' style={{ gap: '0.5em' }}>
                <small style={{ color: 'var(--fontColor3)' }}>x{item.count}</small>
                
              </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Cart
{/* <svg className='closeBtn p-abs' onClick={()=> dispatch(closeCart())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>  
        <h1>Cart</h1>
        <img src={kettel} alt="" />
        <p>Add things you want to purchase.</p>
        <div className="cartItems w-100 m-2"></div>
        <small style={{color:'var(--fontColor2)', display:'inline-block'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio est sequi sunt vitae necessitatibus atque, non quasi similique officiis eaque laborum eius, delectus hic suscipit sapiente temporibus amet rerum!</small> */}