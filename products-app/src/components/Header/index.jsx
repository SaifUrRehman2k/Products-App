import './header.css'
import NavLinks from '../Links/index.jsx'
import { useState } from 'react'
import { Link } from 'react-router'


const Header = (props) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='mainHeader'>
      <header className='flex-row-wrap justify-between p-0-1 m-0 align-center'>
        <h1 className="logo">{props.logo}</h1>
        {/* <ul className="links flex-row-nowrap gap-2 align-center justify-center l-style-none">
          <NavLinks />
        </ul> */}
        {/* <div id="sideBar" className={'w-75npm run dev p-fixed ' + (showSidebar ? 'd-block' : 'd-none')} >
          <div className='glassSide w-100 flex-col-wrap'>
            <svg className='close align-self-end m-1' xmlns="http://www.w3.org/2000/svg" onClick={handleClick} height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>

            <ul className='flex-col-wrap align-start justify-center p-1-0 m-0-1 l-style-none w-100'>
              <NavLinks />
            </ul>
          </div>
        </div> */}


        <div className='myAcc flex-row-nowrap align-center justify-center'>
          <svg className='menu iconLink' onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2e2e2eff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>

          <Link to={'/'} style={{borderRight: "1px solid rgba(113, 113, 113, 0.807)",}} className="iconLink  flex-row-nowrap align-center justify-center m-0 p-0-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#262627ff"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            <p className='loginLink'>Home</p>
          </Link>
          <Link to={'myAccount'} style={{borderRight: "1px solid rgba(113, 113, 113, 0.807)",}} className='iconLink  flex-row-nowrap align-center justify-center m-0 p-0-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#262627ff"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
            <p className='loginLink'>My Account</p>
          </Link>
          <Link to={'cart'} className="iconLink  flex-row-nowrap align-center justify-center m-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#252525ff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <p className='loginLink'>Cart</p>
          </Link>
        </div>
      </header>

    </div>
  )
}

export default Header
