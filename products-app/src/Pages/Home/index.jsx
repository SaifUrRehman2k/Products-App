import { useEffect, useState } from 'react'
import CategoryCard from '../../components/categoryCard/index.jsx'
import Card from '../../components/ProductCard/index.jsx'

import './home.css'

const Home = () => {
    const [products, setProducts] = useState([])
    const categories = ['Tech', 'Fashion', 'Jewelry']

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error)
            )
    }, [])

    return (
        <div>
            
            <h1 className='p-1'>Shop our top categories</h1>
            <div className='categories flex-row-nowrap align-center justify-center gap-1'>
                {
                    categories.map((category, index) => (
                        <CategoryCard title={category} key={index} />
                    ))
                }
            </div>
            <div className='flex-row-wrap align-center m-3-0 productsLibrary'>
                {
                    products.map((product, index) => (
                        <Card productsData={product} i={index} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
