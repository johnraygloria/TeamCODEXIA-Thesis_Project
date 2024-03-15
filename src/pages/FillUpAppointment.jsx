import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { crud } from '../Config/firebase'; // Import firestore instance from firebase.js
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'; // Import firestore functions
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    name: "",
    email: "",
    age: "",
    appointmentType: "",
    date: ""
  });

  const [selectedDate, setSelectedDate] = useState("");
  const history = useHistory();
  const location = useLocation();

  const firestore = getFirestore(); // Initialize Firestore

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addSearchQuery(searchQuery); // Add search query to Firestore
      history.push({
        pathname: '/Calendar',
        state: { searchQuery, selectedDate } // Pass both search query and selected date
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (location.state && location.state.selectedDate) {
      setSelectedDate(location.state.selectedDate);
      setSearchQuery(prevState => ({
        ...prevState,
        date: location.state.selectedDate
      }));
    }
  }, [location.state]);

  const addSearchQuery = async (searchQuery) => {
    try {
      const docRef = await addDoc(collection(firestore, 'searchQueries'), searchQuery);
      console.log("Document written with ID: ", docRef.id);
      return docRef;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;
    }
  };

  return (
    <div className="search-bar-main-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={searchQuery.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={searchQuery.email}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={searchQuery.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Type of Appointment"
          name="appointmentType"
          value={searchQuery.appointmentType}
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={searchQuery.date}
          onChange={handleChange}
        />
        <button type="submit">Proceed</button>
        <button type="button" onClick={handleBack}>Go back</button>
      </form>
    </div>
  );
};

export default SearchBar;
