import { Link } from "react-router"

const NavLinks = (props) => {
    return (
        <>
                <li>
                    <Link to={'/'} className={props.classes}>Home</Link>
                </li>
                <li>
                    <Link to={'about'} className={props.classes}>About</Link>
                </li>
                <li>
                    <Link to={'contact'} className={props.classes}>Contact</Link>
                </li>
                <li>
                    <Link to={'blog'} className={props.classes}>Blog</Link>
                </li>
        </>
    )
}

export default NavLinks
