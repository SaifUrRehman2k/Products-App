import { Link } from 'react-router'
import Button from '../button'
import './card.css'

const Card = (props) => {
    return (
        <div key={props.i} className='cardVertical flex-col-wrap align-start justify-between  p-0 m-1'>
            <img src={props.productsData.image} alt="" loading='lazy' />
            <div className='productDetails flex-col-wrap align-start justify-start '>
                <div className='flex-col-wrap align-start justify-between ' style={{width: '100%'}}>
                    <h2 className='m-1-0 elipsis'>{props.productsData.title}  </h2>
                    <h4 className='price w-100'>${props.productsData.price}</h4> 
                </div>
                <p className='m-0 description elipsis'>{props.productsData.description}</p>
            </div>
            <div className='btns flex-row-nowrap align-start justify-between'>
                <Link to={`product/${props.productsData.id}`} className='buyNow w-50 flex-row-nowrap align-center justify-center'>Buy now</Link>
                <Button name={<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#2e2e2eff"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>} btnClass='cart' />
            </div>
        </div>
    )
}

export default Card
