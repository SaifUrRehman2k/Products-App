import './App.css'
import Button from './components/button'
import Footer from './components/footer'
import Header from './components/Header'
import Card from './components/ProductCard'
import products from './products'

function App() {
  const navLinks = ['Home', 'About', 'Contact','Cart']
  const productsLibrary = products.map((product, index) => (
    <Card productsData={product} i={index} key={index}/>
  ))

  return (
    <>
      <Header nav={navLinks} logo='DealKart'/>
      <div className='flex-row-wrap align-center m-3-0'>
        {productsLibrary}
      </div>
      <Footer links={navLinks} logo='DealKart'/>
    </>
  )
}

export default App