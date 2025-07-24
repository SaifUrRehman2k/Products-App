import './header.css' 

const Header = (props) => {
  return (
    <div className='mainHeader'>
      <header className='flex-row-wrap justify-between p-0-3 m-0 align-center'>
        <h1 className="logo color-w ">{props.logo}</h1>
        <ul className="links flex-row-nowrap gap-2 align-center justify-center l-style-none">{props.nav.map((e, index) => (
          <li key={index}> 
            <a className='color-w deco-none' href='#'>{e}</a>
          </li>
        ))}</ul>
      </header>
      <div className='heroSect flex-col-wrap align-center justify-center gap-1'>
        <h1>Welcome to our Store</h1>
      </div>
    </div>
  )
}

export default Header
