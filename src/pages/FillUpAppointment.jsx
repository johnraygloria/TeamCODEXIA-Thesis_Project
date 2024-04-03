// Import the necessary modules and components
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './searchbar.css';
import DashboardAdmin from '../Components/Admin/DashboardAdmin';

const AppointmentFillUp = () => {
  // State to manage form inputs
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    email: "",
    age: "",
    appointmentType: "",
    date: "",
    time: "" // Added time field
  });

  const history = useHistory();
  const firestore = getFirestore(); // Initialize Firestore

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSearchQuery(searchQuery); // Add search query to Firestore
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Function to add search query to Firestore
  const addSearchQuery = async (searchQuery) => {
    try {
      const docRef = await addDoc(collection(firestore, 'searchQueries'), searchQuery);
      console.log("Document written with ID: ", docRef.id);
      history.push({ // Redirect to DashboardAdmin with search query
        pathname: '/DashboardAdmin',
        state: { searchQuery }
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  return (
    <div className="search-bar-main-container">
      <form onSubmit={handleSubmit} className="search-bar">
        {/* Input fields for search criteria */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={searchQuery.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={searchQuery.email}
          onChange={handleChange}
          autoComplete="email"
        />
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
        <input
          type="time" // Input field for time
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

        <button type="submit">Proceed</button>
      </form>
      {/* Display DashboardAdmin component with search results */}
      {/* <DashboardAdmin searchQuery={searchQuery} /> */}
    </div>
  );
};

export default AppointmentFillUp;
