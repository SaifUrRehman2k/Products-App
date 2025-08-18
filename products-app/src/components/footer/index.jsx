import NavLinks from '../Links'
import './footer.css'
import Acer from '../../assets/images/acer.png'
import Addidas from '../../assets/images/addidas.png'
import Puma from '../../assets/images/puma.png'
import WD from '../../assets/images/wd.png'


const Footer = (props) => {
  return (
    <>
      <div className='footerLogos flex-row-wrap align-center justify-around'>
        <div className="logos flex-col-wrap align-center justify-center"><img src={Acer} alt="acerLogo" /></div>
        <div className="logos flex-col-wrap align-center justify-center"><img src={Addidas} alt="acerLogo" /></div>
        <div className="logos flex-col-wrap align-center justify-center"><img src={Puma} alt="acerLogo" /></div>
        <div className="logos flex-col-wrap align-center justify-center"><img src={WD} alt="acerLogo" /></div>
      </div>
      <footer className='flex-row-nowrap align-center justify-center gap-1'>
        <div className='navPills mainPill flex-col-wrap align-start justify-center gap-2'>
          <div className='flex-col-wrap gap-1'>
            <h1 className="logo color-w">{props.logo}</h1>
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus molestias minima quas labore atque, quia dolorum nam sit laudantium! Nulla velit rem reiciendis </small>
          </div>
          <ul className='flex-row-nowrap align-start justify-around p-0 gap-1 l-style-none'>
            <li className='mediaIcons'></li>
            <li className='mediaIcons'></li>
            <li className='mediaIcons'></li>
          </ul>
        </div>

        <div className='navPills flex-col-wrap align-start justify-center gap-2'>
          <h3>Getting Started</h3>
          <ul className='flex-col-wrap align-start justify-around p-0 gap-1 l-style-none'>
            <li className='color-w'>FAQ</li>
            <li className='color-w'>Contact</li>
            <li className='color-w'>Privacy Policy</li>
            <li className='color-w'>Return Policy</li>
            <li className='color-w'>Terms and conditions</li>

          </ul>

        </div>

        <div className='navPills flex-col-wrap align-start justify-center gap-2'>
          <h3>Company</h3>
          <ul className='flex-col-wrap align-start justify-around p-0 gap-1 l-style-none'>
            <li className='color-w'>FAQ</li>
            <li className='color-w'>Contact</li>
            <li className='color-w'>Privacy Policy</li>
            <li className='color-w'>Return Policy</li>
            <li className='color-w'>Terms and conditions</li>

          </ul>

        </div>
        <div className='navPills flex-col-wrap align-start justify-center gap-2'>
          <h3>Partner</h3>
          <ul className='flex-col-wrap align-start justify-around p-0 gap-1 l-style-none'>
            <li className='color-w'>FAQ</li>
            <li className='color-w'>Contact</li>
            <li className='color-w'>Privacy Policy</li>
            <li className='color-w'>Return Policy</li>
            <li className='color-w'>Terms and conditions</li>

          </ul>

        </div>
      </footer>
    </>
  )
}

export default Footer
