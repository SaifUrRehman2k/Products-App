import './footer.css'

const Footer = (props) => {
  return (
    <footer className='flex-col-wrap align-center justify-center gap-'>
        <h1 className="logo color-w">{props.logo}</h1>
        <ul className='flex-row-nowrap align-start justify-around p-0 gap-1 l-style-none'>
            {props.links.map((e,i)=> (
            <li key={i}>
                <a href="#" className='l-style-none color-w'>{e}</a>
            </li>
        ))}</ul>
    </footer>
  )
}

export default Footer
