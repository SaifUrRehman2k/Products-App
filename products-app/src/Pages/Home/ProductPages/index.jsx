import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './product.css'
import Counter from '../../../components/Counter'
import Button from '../../../components/button'
import Star from '../../../assets/icons/star.svg'

const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('productData')) || []
        const foundProduct = products.find(e => e.id == params.id)
        setProduct(foundProduct)
    }, [params.id])

    useEffect(() => { product ? console.log(product) : console.log('error') })

    const [price, setPrice] = useState(product.price)

    const handleDataFromCounter = (CounterData) => {
        setPrice(product.price * CounterData)
        console.log(price);
        
    }
    // const Product = product.find(e => e.id == params.id)
    // console.log(Product);


    return (
        <>
            <div className='productWindow w-100 p-2'>
                {product ?
                    (
                        <>
                            <div className='mainProductData w-100 flex-row-nowrap align-center justify-start gap-3'>
                                <div className='imgContainer flex-col-wrap align-center justify-center'>
                                    <img src={product.image} alt="ProductImage" />
                                </div>
                                <div className='productInfo flex-col-wrap align-start justify-around'>
                                    <div className='productMainDetails'>
                                        <h1>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <b className='prdPrice'><small>$</small>{Math.floor(price)}</b> <br />
                                        <small className='flex-row-nowrap align-center justify-start m-1-0'>
                                            <img src={Star} width={'18px'} alt="" />
                                            {`${product?.rating?.rate} (${product?.rating?.count})`}
                                        </small>

                                    </div>
                                    <Counter dataToPriceTag={handleDataFromCounter}/>
                                    <Button name='Buy now' btnClass='solid' />
                                </div>
                            </div>
                        </>
                    ) : (<p>Loading product...</p>)
                }

                {/* {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading product...</p>
      )} */}
            </div>
        </>
    )
}

export default Product
