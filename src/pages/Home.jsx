import './HomeStyle.css';
import newhome from '../Components/Assets/back-new1.png'
import Nav from '../Components/Global/Navbar_Main'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>

<div className='background_home'>
  <Nav/>

  <div className='picture_fix'>
    <img className="home_picture" src={newhome} alt="" />
  </div>

<div className="home_intro">
    <p className="first_para">Let us plan your future, for a better tomorrow.</p>
    <p className="second_para">PlanitFamIt is designed to reach every Filipinos that seeks better future for their family, through family planning.</p>
    
    <div className="flex_more">
    <p className="assistant_intro" href="">Start chatting with Planlt Assistant</p>
    <p className="assistant_intro" href="">Healthcare Articles</p>
    </div>

    <div className="fix_moko">
      <Link to="/Type" className='button_type'>Check your healthcare </Link>
    </div>    
  </div>
</div>
</>
 );
}

export default Home;