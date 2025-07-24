import Button from '../button'
import './card.css'


const Card = (props) => {
    return (
        <div key={props.i} className='cardVertical flex-col-wrap align-start justify-between  p-1 m-1'>
            <img src={props.productsData.image} alt="" />
            <div className='productDetails flex-col-wrap align-start justify-start '>
                <h1 className='m-0'>{props.productsData.title}</h1>
                <small className='price'>{props.productsData.price}</small>
                <p className='m-0 description'>{props.productsData.description}</p>
            </div>
                <Button name='Buy now' btnClass='buyNow' />

        </div>
    )
}

export default Card
