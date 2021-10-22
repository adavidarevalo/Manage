import React, {useState} from "react"
import { Link } from "gatsby"
import logo from '../images/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../styles/layout.scss'

const Header = () => {
  const [menuContainer, setMenuContainer] = useState(true)
return(
  <>
  <header>
    <div>
      <Link>
        <img src={logo} alt='Logo'/>
      </Link>
      <div 
      className='MenuIcon'
      onClick={()=> setMenuContainer(!menuContainer)}>
        {menuContainer 
          ?<AiOutlineMenu/>
          :<AiOutlineClose/>}
      </div>
      <nav>
        <Link>Product</Link>
        <Link>Pricing</Link>
        <Link>About Us</Link>
        <Link>Careers</Link>
        <Link>Community</Link>
      </nav>
      <Link className='ButtonElement'>Get Started</Link>
    </div>
  </header>
  <div className={menuContainer ? 'MenuPhone':'MenuPhone Open'}>
    <div>
    <Link>Product</Link>
    <Link>Pricing</Link>
    <Link>About Us</Link>
    <Link>Careers</Link>
    <Link>Community</Link>
    </div>
  </div>
  </>
)}


export default Header
