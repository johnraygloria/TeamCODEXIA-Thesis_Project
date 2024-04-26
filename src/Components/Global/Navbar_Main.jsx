import '../../pages/HomeStyle.css'
import React from 'react'

import { Link } from 'react-router-dom'

import iconyou from '../Assets/icon_you.png';
import humber from '../Assets/hamburger.png'

function Nav (){
  return(
    <nav className='navbar_master'>
  <input type="checkbox" id="check" />
  <label for="check" className="checkbtn">
    <i><img src={humber} alt="" /></i>
  </label>

 <Link  className="page_name" to="/Home"> <label>PlanIt<span>FamiIt</span></label></Link>
  <ul>
    <li>
      <a className="active">
      Plan & Care
      </a>
    </li>
  <Link to="/Type" className="st-mar-style-font"> 
    <li>
      <a>St. Margaret Lying In Clinic</a>
    </li>
  </Link> 
    <li>
      <a>About Us</a>
    </li>
    <li>
      <a ><img src={iconyou} alt="" /></a>
    </li>
  </ul>
</nav>

  )
}

export default Nav;