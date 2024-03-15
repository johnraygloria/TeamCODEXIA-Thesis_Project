import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        
        <div className='navbar-logo'>
          <h3>PlanItFamIt</h3>
        </div>

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            
            {/*These links are url links that routes to each pages*/}
            <Link to='/Login' className='LoginForm'>
                <li>Login</li>
            </Link>
            <Link to='/About' className='About'>
                <li>About</li>
            </Link>
            <hr />
        </ul>

        {/* When button is clicked = setMobile(!Mobile) ==  is mobile oppsite to setMobile */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

    
</>
  )
}
export default Navbar;