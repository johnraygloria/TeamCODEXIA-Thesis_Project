import './HomeStyle.css'
// import iconyou from './assets/icon_you.png'
// import homepic from '../assets/homepager.png'

import Nav from '../Components/Navbar/Navbar_MainStyle.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
  <Nav/>
{/* <header className="header">
    <h1 className="page_name">Plant<span>Familt</span></h1>

    <nav className="navbar">
      <h1>Plan & Care</h1>
      <h1>Find your Center</h1>
      <h1>About Us</h1>

      <div className="fix_more">
      <h1 className="you_fix">You</h1>
      <img className="you_icon" src={iconyou} alt="" />
      </div>
      <div className="classniline"></div>
    </nav>
  </header> */}
  {/* <div>
    <img class="home_picture" src={homepic} alt="" />
  </div> */}

<div className="home_intro">
    <p className="first_para">Let us plan your future, for a better tomorrow.</p>
    <p className="second_para">PlanitFamIt is designed to reach every Filipinos that seeks better future for their family, through family planning.</p>
    
    <div className="flex_more">
    <p className="assistant_intro" href="">Start chatting with Planlt Assistant</p>
    <p className="assistant_intro" href="">Lorem lpsum dolor sit amet</p>
    </div>

    <div className="fix_moko">
      <Link to="/Type" className='button_type'>Check your healthcare center here</Link>
    </div>    
  </div>
</>
 );
}

export default Home;