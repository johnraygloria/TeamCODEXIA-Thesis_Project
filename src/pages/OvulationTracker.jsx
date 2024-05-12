import React from 'react';
import '../pages/OvulationTrackerStyle.css';
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Global/Footer';
>>>>>>> 053d5d3c9970b38e0277a8f4709d4ee8e9e89344


const OvulationTracker = () => {
  const logPeriod = () => {
    console.log('Period logged');
  };

  return (
    <>

<<<<<<< HEAD
    <div className='container-ot'>
      <h2>Ovulation Tracker</h2>
    <div className='box-style-ot'>
      <div>
        <p>Period in</p>
        <h1>3 days</h1>
        <p className='little-small'>low chance of pregnancy</p>
      </div>
        <div>
          <button>Edit your period dates</button>
=======
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
>>>>>>> 053d5d3c9970b38e0277a8f4709d4ee8e9e89344
        </div>
        
    </div>
    <div className='box-style-two'>
      <p>How are you feeling?</p>
    </div>
    <div className='box-style-third'>
      <p>How are you feeling?</p>
    </div>
    
    </div>
    {/* <div className='box-style-two'>
      <p>How are you feeling?</p>
    </div>
    <div className='box-style-two'>
      <p>How are you feeling?</p>
    </div> */}

        </div>
        <Footer/>
    </>
  )
}

export default OvulationTracker
