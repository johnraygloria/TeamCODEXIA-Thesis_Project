import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './searchbar.css';
import DashboardAdmin from '../Components/Admin/DashboardAdmin';
import Navbar from '../Components/Global/Navbar_Main';
import familyappointment from '../Components/Assets/family.png';

const AppointmentFillUp = () => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    email: "",
    age: "",
    appointmentType: "",
    date: "",
    time: ""
  });

  const [appointmentSet, setAppointmentSet] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const firestore = getFirestore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const isEmpty = Object.values(searchQuery).some(value => value === "");
    if (isEmpty) {
      {submitted && Object.values(searchQuery).some(value => value === "") && (
        <p className="error-message">Please fill out all fields.</p>
      )}
      return;
    }
    try {
      await addSearchQuery(searchQuery); 
      setAppointmentSet(true); 
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const addSearchQuery = async (searchQuery) => {
    try {
      const docRef = await addDoc(collection(firestore, 'searchQueries'), searchQuery);
      console.log("Document written with ID: ", docRef.id);
      history.push({ 
        state: { searchQuery }
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  return (
    <>
      <Navbar />
      <div className="backgrond-form-style">
        <img className="background-fillupform" src={familyappointment} alt="" />
      </div>
      <div className="backgorund-filuup">
        <div className="search-bar-main-container">
          {submitted && Object.values(searchQuery).some(value => value === "") && (
            <p className="error-message">Please fill out all fields.</p>
          )}
          <form onSubmit={handleSubmit} className="search-bar">
            <div className="name-email-appointment">
              <input className="name-appointment-client"
                type="text"
                placeholder="Name"
                name="name"
                value={searchQuery.name}
                onChange={handleChange}
                autoComplete="name"
              />
              <input className="email-appointment-client"
                type="text"
                placeholder="Email"
                name="email"
                value={searchQuery.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>
            <div className="age-ToA-appointment">
              <input
                type="number"
                placeholder="Age"
                name="age"
                value={searchQuery.age}
                onChange={handleChange}
                autoComplete="age"
              />
              <input
                type="text"
                placeholder="Type of Appointment"
                name="appointmentType"
                value={searchQuery.appointmentType}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="time-date-appointment">
              <input
                type="time"
                placeholder="Time"
                name="time"
                value={searchQuery.time}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={searchQuery.date}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="btn-proceed-client">
              <button type="submit">Proceed</button>
            </div>
          </form>
        </div>
        <div className="design-fil-up">
          <div className="design-fil-up-text">
            <h1>Make An Appointment</h1>
          </div>
          <div className="fill-up-secondpara">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis magni quo inventore in ad, temporibus ullam aperiam corporis eaque doloribus delectus! Officiis deleniti sapiente nostrum inventore explicabo blanditiis modi facere?</p>
          </div>
        </div>
      </div>

      {appointmentSet && (
        <div className="popup">
          <div className="popup-inner">
            <p>Appointment set successfully!</p>
            <button onClick={() => setAppointmentSet(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentFillUp;
