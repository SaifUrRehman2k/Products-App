import { useEffect, useState } from 'react'
import CategoryCard from '../../components/categoryCard/index.jsx'
import Card from '../../components/ProductCard/index.jsx'
import HeroSection from '../../components/HeroSection/index.jsx'
import image1 from '../../assets/images/image1.webp'
import headphones from '../../assets/images/headphones.webp'
import clothes from '../../assets/images/clothes.webp'
import './home.css'
import { data, Outlet } from 'react-router'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [products, setProducts] = useState([])
    const categories = ['Tech', 'Fashion', 'Jewelry']

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                localStorage.setItem('productData', JSON.stringify(data));
            })
            .catch(error => console.error('Error:', error))

    }, [])

    const heroContent = { pageHeading: 'Welcome to our Store', pageLine: 'Where you can find every product at reasonable price' }



    return (
        <div>
            <HeroSection images={[image1, headphones, clothes]} pageHeading={heroContent.pageHeading} pageLine={heroContent.pageLine} />


            <h1 className='p-1'>Shop our top categories</h1>
            <div className='categories flex-row-nowrap align-center justify-center gap-1'>
                {
                    categories.map((category, index) => (
                        <CategoryCard title={category} key={index} />
                    ))
                }
            </div>
            <div className='flex-row-wrap align-center justify-center m-3-0 productsLibrary'>
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
