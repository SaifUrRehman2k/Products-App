import NavLinks from '../Links'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className='flex-col-wrap align-center justify-center gap-'>
        <h1 className="logo color-w">{props.logo}</h1>
        <ul className='flex-row-nowrap align-start justify-around p-0 gap-1 l-style-none'>
              <NavLinks classes="color-w"/>
        </ul>
        
    </footer>
  )
}

export default Footer
