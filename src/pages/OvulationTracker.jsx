import React from 'react';
import '../pages/OvulationTrackerStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const OvulationTracker = () => {
  return (
    <>
    <div className="ov-container">
        <div className="title-container">
            <div className='ot-title'>
            <h2>Ovulation Tracker</h2>
            </div>
        </div>

        <div className='grid-container'>
            <div className='container0 glass1'>  
                <h3> Period in</h3>
                <h1> 3 days</h1>
                <p> Low chance of pregnancy</p>
            </div>

            <div className='container1 glass'> 
                <h2> How are you feeling? </h2>
            </div>
        </div>
        </div>

    </>
  )
}

export default OvulationTracker
