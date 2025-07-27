import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/button'
import Footer from './components/footer'
import Header from './components/Header'
import Card from './components/ProductCard'
import CategoryCard from './components/categoryCard'
// import products from './products'

function App() {
  const navLinks = ['Home', 'About', 'Contact', 'Cart']
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
    <>
      <Header nav={navLinks} logo='DealKart' />
      <div id="sideBar" className='w-50 p-fixed'>
        <div className='glassSide w-100'>
          <ul className='flex-col-wrap align-start justify-center p-1-0 m-0-1 l-style-none w-100'>
            {
              navLinks.map((e, i) => (
                <li key={i}  ><a href="#">{e}</a></li>
              ))
            }
          </ul>
        </div>
      </div>
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
      <Footer links={navLinks} logo='DealKart' />
    </>
  )
}

export default App