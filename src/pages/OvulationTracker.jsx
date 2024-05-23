import React from 'react';
import '../pages/OvulationTrackerStyle.css';


const OvulationTracker = () => {
  return (
    <>

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
        </div>
    </div>

    <div className='box-style-two'>
      <p>How are you feeling?</p>
    </div>
    <div className='box-style-third'>
      <p>How are you feeling?</p>
    </div>
    
    </div>


    </>
  )
}

export default OvulationTracker
