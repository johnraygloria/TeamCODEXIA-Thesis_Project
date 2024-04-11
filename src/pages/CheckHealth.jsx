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
            <span>Intro</span>
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
            <span>About</span>
          </span>
          <span className="admin-information-about">
            <span>
              Lorem ipsum dolor sit amet. Et voluptatibus perferendis ex quia
              minus ut deserunt nobis et assumenda facilis qui fugiat dolorum ut
              commodi maiores. Aut iusto saepe et tempora architecto aut autem
              reiciendis. Id unde obcaecati ut sunt quos in debitis repellendus.
              Et repellendus natus aut natus rerum et ipsa aspernatur et
              voluptates dignissimos.
            </span>
          </span>
          <span className="admin-services">
            <span>Services:</span>
          </span>
          <span className="admin-clinic-services">
            <span>MATERNITY PACKAGE (RM)</span>
            <span>MATERNITY PACKAGE (OB)</span>
            <span>NSD PACKAGE (RM)</span>
            <span>NSD PACKAGE (OB)</span>
            <span>NEWBORN CARE PACKAGE(RM)</span>
            <span></span>
          </span>
          <span className="admin-clinic-services-2">
            <span>NEWBORN CARE PACKAGE (OB)</span>
            <span>FAMILY PLANNING CONSULT</span>
            <span>PRENATAL CONSULTATION</span>
            <span>POSTNATAL CONSULTATION</span>
            <span>NEWBORN SCREENING</span>
            <span></span>
          </span>
          <span className="admin-clinic-services-3">
            <span>NEWBORN HEARING SCREENING</span>
            <span>PAP-SMEAR</span>
            <span>NON-STRESS TEST</span>
            <span>EAR PIERCING</span>
            <span>INTERNAL EXAMINATION</span>
          </span>
        </div>
      </div>
    </div>
  </>
  )
}

export default Type;
