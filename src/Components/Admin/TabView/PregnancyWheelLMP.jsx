import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "../TabView/PregnancyWheelLMPStyle.css";
import moment from 'moment';


// Children 1: Last Menstruation Period 
// Hierachy: three children (components), 1 parent, & 1  grandparent 

function PregnancyWheelLMP() {
    const [USweeks, setUSweeks] = useState("");
    const [USdays, setUSdays] = useState("");
    const [EGAweeks, setEGAweeks] = useState("");
    const [EGAdays, setEGAdays] = useState("");
    const [LMP, setLMP] = useState(new Date());
    const [USDate, setUSDate] = useState(new Date());
    const [cycle, setCycle] = useState(28);
    const [showLmpCalendar, setShowLmpCalendar] = useState(false);
    const [showUsCalendar, setShowUsCalendar] = useState(false);
    const [conceptionDate, setConceptionDate] = useState(null);
    const [secondTrimester, setSecondTrimester] = useState(null);
    const [thirdTrimester, setThirdTrimester] = useState(null);
    const [dueDate, setDueDate] = useState(null);
    const [EGA, setEGA] = useState("");

    const reset = () => {
        setUSweeks("");
        setUSdays("");
        setEGAweeks("");
        setEGAdays("");
        setLMP(new Date());
        setUSDate(new Date());
        setCycle(28);
        setShowLmpCalendar(false);
        setShowUsCalendar(false);
        setConceptionDate(null);
        setSecondTrimester(null);
        setThirdTrimester(null);
        setDueDate(null);
        setEGA("");
    };

    useEffect(() => {
        const conception = new Date(LMP.getTime());
        conception.setDate(conception.getDate() + (cycle - 14)); // Corrected for ovulation
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
    }, [LMP, cycle]);

    useEffect(() => {  // US is used when 5 days off from LMP dating.. 
        if (USweeks !== "" && USdays !== "") {
            const ultrasoundDate = new Date(USDate.getTime());
            ultrasoundDate.setDate(ultrasoundDate.getDate() + parseInt(USweeks) * 7 + parseInt(USdays));
            const diffDays = Math.abs((ultrasoundDate.getTime() - LMP.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays > 5) {
                setLMP(ultrasoundDate);
            }
        }
    }, [USweeks, USdays, USDate, LMP]);

    useEffect(() => {
        const today = new Date();
        const diffTime = Math.abs(today - LMP);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setEGA(Math.floor(diffDays/7) + " weeks and " + diffDays%7 + " days");
    }, [LMP]);

    useEffect(() => {
        if (EGAweeks !== "" && EGAdays !== "") {
            const today = new Date();
            const EGAdate = new Date(today.getTime());
            EGAdate.setDate(EGAdate.getDate() + parseInt(EGAweeks) * 7 + parseInt(EGAdays));
            setLMP(EGAdate);
        }
    }, [EGAweeks, EGAdays]);

    return (
        <>

        <div className="wrapper1">
        <form onSubmit={e => e.preventDefault()}>
                <h2>Pregnancy Wheel</h2>
                <p>This functions as wheel that represents the progression of pregnancy. </p>

                <div className="input-US"> 
                    <h2 onClick={() => {setShowUsCalendar(!showUsCalendar); setShowLmpCalendar(false);}}>Ultrasound Date</h2>
                    {showUsCalendar && <Calendar onChange={(date) => {setUSDate(date); setShowUsCalendar(false);}} value={USDate} className="calendar mt-0" />}
                    
                    <div className="input-USweeks"> 
                        <h3>Week/s:</h3>
                        <input className="inp-usweeks" type="number" value={USweeks} onChange={e => setUSweeks(e.target.value)}></input>
                    </div>

                    <div className="input-USdays">
                        <h3>Day/s: </h3>
                        <input className="inp-usdays" type="number" value={USdays} onChange={e => setUSdays(e.target.value)}></input>
                    </div>
                </div>
                
                <div className='LMP1'>
                    <h2 onClick={() => {setShowLmpCalendar(!showLmpCalendar); setShowUsCalendar(false);}}>LMP: 
                    {showLmpCalendar && <Calendar onChange={(date) => {setLMP(date); setShowLmpCalendar(false);}} value={LMP} className="calendar mt-0" />}
                    {!showLmpCalendar && <span>{moment(LMP).format('MMMM Do YYYY')}</span>} {/* Display chosen date */}</h2>
                </div>

                <div className='Conception1'>
                    <h2>Conception Date: <span>{conceptionDate && conceptionDate.toDateString()}</span></h2>
                </div>

                <div className='SecondTrimester1'>
                    <h2>2nd Trimester Starts: <span>{secondTrimester && secondTrimester.toDateString()}</span></h2>
                </div>

                <div className='ThirdTrimester1'>
                    <h2>3rd Trimester Starts: <span>{thirdTrimester && thirdTrimester.toDateString()}</span></h2>
                </div>

                <div className='DueDate1'>
                    <h2>Estimated Due Date: <span>{dueDate && dueDate.toDateString()}</span></h2>
                </div>


                <div className='CycleLength-slider1'>
                    <h2>Cycle Length: {cycle} days</h2>
                    <input type="range" min="20" max="45" value={cycle} onChange={e => setCycle(e.target.value)} />
                </div>

                <div className='EGA1'>
                    <h2>Estimated Gestational Age: {EGA}</h2>
                    <div className="input-EGAweeks"> 
                        <h3>Week/s:</h3>
                        <input type="number" value={EGAweeks} onChange={e => setEGAweeks(e.target.value)}></input>
                    </div>

                    <div className="input-EGAdays">
                        <h3>Day/s: </h3>
                        <input type="number" value={EGAdays} onChange={e => setEGAdays(e.target.value)}></input>
                    </div>
                </div>

                <button className="resetBtn" onClick={reset}>Reset</button>

            </form>
        </div>

    </>
    )
}

export default PregnancyWheelLMP;
