import React from 'react'

import info from '../Components/Assets/Info-admin-client.png';
import Mark from '../Components/Assets/Place_Marker.png';
import Phone from '../Components/Assets/Phone.png';
import Clock from '../Components/Assets/Clock.png';
import Letter from '../Components/Assets/Letter.png';
import Clinic from '../Components/Assets/stmargaretlogo.png';
import Cover from '../Components/Assets/cover.png';
import Add from '../Components/Assets/Add.png';

import './CheckHealthStyle.css'

import Navbar from '../Components/Global/Navbar_Main';

const Type = (props) => {
  return (
    <>
    <Navbar/>
    <div className="admin-page-container">
      <div className="admin-clinic-container">
        <div className='adminpage-infro-margaret'>
        <div className="admin-profile-container">
          <div className="admin-view-page">
     
            <span className="admin-docs">
              <span>No. of Doctors:</span>
            </span>
            <span className="admin-staffs">
              <span>No. of Staff:</span>
            </span>
            <span className="admin-title">
              <span>Pregnancy Care &amp; Family Planning Center</span>
            </span>
            <span className="admin-count-staffs">
              <span>10</span>
            </span>
            <span className="admin-count-docs">2</span>
          </div>
   
          <span className="btn-appointment">
            <span>Add Appointment</span>
          </span>
          <img
            src={Add}
            alt="Add1451"
            className="admin-add-btn"
          />
          <img
            src={Cover}
            alt="cover1451"
            className="admin-cover"
          />
          <img
            src={Clinic}
            alt="cliniclogo1451"
            className="admin-logo"
          />
          <span className="admin-clinic-name">
            <span>St. Margaret Lying In Clinic</span>
            <br></br>
            <span></span>
          </span>
        </div>


        <div className="admin-st-margaret-intro">
          <div className='information-st-margaret'>
          <span className="intro-style">
            <span>Intro:</span>
            <span></span>
          </span>
          <div className="admin-info-style">
            <span className="admin-page">
              Page· Pregnancy Care Center
            </span>
            <span className="admin-location">
              GF 74A 20TH ST. EAST BAJAC BAJAC, Olongapo, Philippines
            </span>
            <span className="admin-contact">
              0968 240 5533
            </span>
            <span className="admin-email">
              stmargaretlyingin@gmail.com
            </span>
            <span className="admin-clock">
              Always open
            </span>

          </div>
          <div className='images-styles'>
          <img
            src={info}
            alt="Info1452"
            className="information-style"
          />
          <img
            src={Mark}
            alt="PlaceMarker1452"
            className="place-marker-style"
          />
          <img
            src={Phone}
            alt="Phone1452"
            className="phone-style"
          />
          <img
            src={Letter}
            alt="Letter1452"
            className="letter-style"
          />
          <img
            src={Clock}
            alt="Clock1452"
            className="clock-style"
          />
        </div>
        </div>
        </div>
        </div>

        <div className="admin-about-conntainer">

          <span className="admin-about-footer">
            <span>About:</span>
          </span>
          <div className="admin-information-about">
            <p>
              Lorem ipsum dolor sit amet. Et voluptatibus perferendis ex quia
              minus ut deserunt nobis et assumenda facilis qui fugiat dolorum ut
              commodi maiores. Aut iusto saepe et tempora architecto aut autem
              reiciendis. Id unde obcaecati ut sunt quos in debitis repellendus.
              Et repellendus natus aut natus rerum et ipsa aspernatur et
              voluptates dignissimos.
            </p>
          </div>

  
          <span className="admin-services">
            <span>Services:</span>
          </span>

          <div className="admin-clinic-services">
            <p>MATERNITY PACKAGE</p>
            <p>MATERNITY PACKAGE</p>
            <p>NSD PACKAGE</p>
            <p>NSD PACKAGE</p>
            <p>NEWBORN CARE PACKAGE</p>
          </div>
          <div className="admin-clinic-services-2">
            <p>NEWBORN CARE PACKAGE</p>
            <p>FAMILY PLANNING CONSULT</p>
            <p>PRENATAL CONSULTATION</p>
            <p>POSTNATAL CONSULTATION</p>
            <p>NEWBORN SCREENING</p>
          </div>
          <div className="admin-clinic-services-3">
            <p>NEWBORN HEARING SCREENING</p>
            <p>PAP-SMEAR</p>
            <p>NON-STRESS TEST</p>
            <p>EAR PIERCING</p>
            <p>INTERNAL EXAMINATION</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Type;
