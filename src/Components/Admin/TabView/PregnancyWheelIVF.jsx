import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "../TabView/PregnancyWheelLMPStyle.css";
import moment from 'moment';

function PregnancyWheelIVF() {
    const [IVFdays, setIVFdays] = useState("");
    const [LMP, setLMP] = useState(new Date());
    const [cycle, setCycle] = useState(28);
    const [showLmpCalendar, setShowLmpCalendar] = useState(false);
    const [conceptionDate, setConceptionDate] = useState(null);
    const [secondTrimester, setSecondTrimester] = useState(null);
    const [thirdTrimester, setThirdTrimester] = useState(null);
    const [dueDate, setDueDate] = useState(null);
    const [EGA, setEGA] = useState("");

    const reset = () => {
        setIVFdays("");
        setLMP(new Date());
        setCycle(28);
        setShowLmpCalendar(false);
        setConceptionDate(null);
        setSecondTrimester(null);
        setThirdTrimester(null);
        setDueDate(null);
        setEGA("");
    };

    useEffect(() => {
        const conception = new Date(LMP.getTime());
        conception.setDate(conception.getDate() + (cycle - 14) + parseInt(IVFdays)); // Adjusted for IVF
        setConceptionDate(conception);
    
        const second = new Date(conception.getTime());
        second.setDate(second.getDate() + 14 * 7);
        setSecondTrimester(second);
    
        const third = new Date(conception.getTime());
        third.setDate(third.getDate() + 28 * 7);
        setThirdTrimester(third);
    
        const due = new Date(conception.getTime());
        due.setDate(due.getDate() + 40 * 7);
        setDueDate(due);
    }, [LMP, cycle, IVFdays]); // Added IVFdays to the dependency array

    useEffect(() => {
        const today = new Date();
        const diffTime = Math.abs(today - LMP);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setEGA(Math.floor(diffDays/7) + " weeks and " + diffDays%7 + " days");
    }, [LMP]);

    return (
        <>

        <div className="wrapper1">
        <form onSubmit={e => e.preventDefault()}>
                <h2>In-Vitro Fertilization</h2>
                <p>A process of fertilisation where an egg is combined with sperm in vitro.  </p>

                <div className='LMP1'>
                    <h2 onClick={() => {setShowLmpCalendar(!showLmpCalendar);}}>LMP: 
                    {showLmpCalendar && <Calendar onChange={setLMP} value={LMP} className="calendar mt-0" />}
                    {!showLmpCalendar && <p>{moment(LMP).format('MMMM Do YYYY')}</p>} {/* Display chosen date */}</h2>

                </div>

                <div className='IVF1'>
                    <h2>IVF Embryo Age (1-9 days):</h2>
                    <input type="number" min="1" max="9" value={IVFdays} onChange={e => setIVFdays(e.target.value)}></input>
                </div>

                <div className='Conception1'>
                    <h2>Conception Date: {conceptionDate && conceptionDate.toDateString()}</h2>
                </div>

                <div className='SecondTrimester1'>
                    <h2>2nd Trimester Starts: {secondTrimester && secondTrimester.toDateString()}</h2>
                </div>

                <div className='ThirdTrimester1'>
                    <h2>3rd Trimester Starts: {thirdTrimester && thirdTrimester.toDateString()}</h2>
                </div>

                <div className='DueDate1'>
                    <h2>Estimated Due Date: {dueDate && dueDate.toDateString()}</h2>
                </div>

                <div className='CycleLength-slider1'>
                    <h2>Cycle Length: {cycle} days</h2>
                    <input type="range" min="20" max="45" value={cycle} onChange={e => setCycle(e.target.value)} />
                </div>

                <div className='EGA1'>
                    <h2>Estimated Gestational Age: {EGA}</h2>
                </div>

                <button onClick={reset}>Reset</button>

            </form>
        </div>

    </>
    )
}

export default PregnancyWheelIVF;
