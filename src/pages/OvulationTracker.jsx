import React from 'react';
import '../pages/OvulationTrackerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Global/Footer';


const OvulationTracker = () => {
  const logPeriod = () => {
    console.log('Period logged');
  };

  return (
    <>
    <div className="ov-container">
        <div className="title-container">
            <div className='ot-title'>
            <h2>Ovulation Tracker</h2>
            </div>
        </div>

        <div className='grid-container'>
            <div className='container0 glass0'> 
                <h3> Period in</h3>
                <h1> 3 days</h1>
                <p> Low chance of pregnancy</p>
                <button className='logperiod-btn' onClick={logPeriod}>Edit your period dates</button>
            </div>

            <div className='container1 glass1'> 
                <h2> How are you feeling? </h2>
            </div>

            <div className='container2 glass2'> 
                <h2> How are you feeling? </h2>
            </div>

            <div className='container3 glass3'> 
                <h2> How are you feeling? </h2>
            </div>

            <div className='container4 glass4'> 
                <h4> Your next ovulation day </h4>
                <h2> May 14  </h2>
            </div>
        </div>

        </div>
        <Footer/>
    </>
  )
}

export default OvulationTracker
