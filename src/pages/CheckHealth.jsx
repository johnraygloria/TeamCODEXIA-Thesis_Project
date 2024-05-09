import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import info from '../Components/Assets/Info-admin-client.png';
import Mark from '../Components/Assets/Place_Marker.png';
import Phone from '../Components/Assets/Phone.png';
import Clock from '../Components/Assets/Clock.png';
import Letter from '../Components/Assets/Letter.png';
import Clinic from '../Components/Assets/stmargaretlogo.png';
import Cover from '../Components/Assets/cover.png';
import Add from '../Components/Assets/Add.png';
import Aboutpic from '../Components/Assets/about_pic.jpg'

import './CheckHealthStyle.css';
import Navbar from '../Components/Global/Navbar_Main';

import 'bootstrap/dist/css/bootstrap.min.css'

const Type = (props) => {
  const history = useHistory();

  const handleAppointmentClick = () => {
    history.push('/FillUpAppointment'); 
  };

  return (
<>
<Navbar/>
  <div className="homeFullScreen">
    <div className="header-text">
      <h1>St. Margaret Lying In Clinic </h1>
      <div className="vertical-line" />
      <button onClick={handleAppointmentClick} className='btn-app-user-clic'>Set Appointment</button>
    </div>
  </div>
  
  <section className="feature">
    <div className="container">
      <div className="row">
        <div className="col-md-20 col-sm-20">
          {/* <img className='about-pic-style' src={Aboutpic} alt="" /> */}
        {/* <h1 className='about-app'>About</h1> */}
          <div className="feature-box-about">
            <p>
            Lorem ipsum dolor sit amet. Et voluptatibus perferendis ex quia minus ut deserunt nobis
             et assumenda facilis qui fugiat dolorum ut commodi maiores. Aut iusto saepe et tempora
              architecto aut autem reiciendis. Id unde obcaecati ut sunt quos in debitis repellendus.
            Et repellendus natus aut natus rerum et ipsa aspernatur et voluptates dignissimos.

            </p>
          </div>
        </div>
        <h1 className="nopadding mx-auto services-ceenter">Services:</h1>
        <div className="col-md-auto col-sm-10 nopadding mx-auto">
            
        <div className="feature-box">
            <p>
            MATERNITY PACKAGE (RM)<br/>
            MATERNITY PACKAGE (OB)<br/>
            NSD PACKAGE (RM)<br/>
            NSD PACKAGE (OB)<br/>
            NEWBORN CARE PACKAGE(RM)<br/>
            </p>
          </div>
          {/* <img src={Cover} /> */}
        </div>
        <div className="col-md-auto col-sm-10 nopadding mx-auto">
        <div className="feature-box">
            <p>
            NEWBORN CARE PACKAGE (OB)<br/>
            FAMILY PLANNING CONSULT<br/>
            PRENATAL CONSULTATION<br/>
            POSTNATAL CONSULTATION<br/>
            NEWBORN SCREENING<br/>

            </p>
          </div>
          {/* <img src={Cover} /> */}
        </div>
        <br/>
        <div className="col-md-auto col-sm-10 nopadding mx-auto">
        <div className="feature-box">
            <p>
            NEWBORN HEARING SCREENING<br/>
            PAP-SMEAR<br/>
            NON-STRESS TEST<br/>
            EAR PIERCING<br/>
            INTERNAL EXAMINATION<br/>
            </p>
          </div>
        </div>

        {/* End col-md-6 */}
        <div className="col-md-6 col-sm-6 mx-auto">
          <div className="info-page-margaret ">
            <h1>Information:</h1>
            <p>
            Page · Pregnancy Care Center <br/>
            GF 74A 20TH ST. EAST BAJAC BAJAC, Olongapo, Philippines<br/>
            0968 240 5533<br/>
            stmargaretlyingin@gmail.com<br/>
            Always open<br/>
            </p>
          </div>
        </div>
        {/* End col-md-6 */}
      </div>
    </div>
  </section>

  {/* <section className="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="heading">Portfolio</h1>
        </div>

        <div className="col-md-4 col-sm-4">
          <img src="images/p-1.png" />
        </div>

        <div className="col-md-4 col-sm-4">
          <img src="images/p-2.png" />
        </div>

        <div className="col-md-4 col-sm-4 last-img">
          <img src="images/p-3.png" />
        </div>

        <div className="clearfix" />

        <div className="col-md-4 col-sm-4">
          <img src="images/p-4.png" />
        </div>

        <div className="col-md-4 col-sm-4">
          <img src="images/p-5.png" />
        </div>

        <div className="col-md-4 col-sm-4 last-img">
          <img src="images/p-6.png" />
        </div>

      </div>

    </div>

  </section>

  <section className="call-top-action text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>many variations of passages</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
            <br />
            in some form, by injected humour, or randomised words which don't
            look even slightly believable
          </p>
          <span>LOREM IPSUM</span>
        </div>

      </div>

    </div>
  </section>

  <footer>
    <ul className="in-line">
      <li>
        <a href="#">
          <span>
            <i className="fa fa-facebook" />
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>
            <i className="fa fa-twitter" />
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span>
            <i className="fa fa-youtube" />
          </span>
        </a>
      </li>
    </ul>
    <span className="copyright">
      © Untitled . All rights reserved. Design By{" "}
      <a href="http://templatestock.co">Templatestock.co</a>
    </span>
  </footer> */}
</>

  );
};

export default Type;