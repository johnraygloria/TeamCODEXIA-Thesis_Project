import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import Nav from '../Components/Navbar/navbarthesec';
import '../pages/CheckHealthStyle.css';
import dominique from '../Components/Assets/brgy1.png';
import brgytwoagain from '../Components/Assets/brgy2.png';

function Type() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCenters, setFilteredCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const history = useHistory(); // Access the history object

  const healthcareCenters = [
    {
      image: dominique,
      title: "Brgy. Matarin Healthcare Center",
      location: "Brgy. Matarin, Olongapo City, Zambales, Philippines",
      offers: "Counseling, Family Planning Methods, etc.."
    },
    {
      image: brgytwoagain,
      title: "Brgy. Gordon Heights",
      location: "Brgy. Matarin, Olongapo City, Zambales, Philippines",
      offers: "Counseling, Family Planning Methods, etc.."
    },
    {
      image: dominique,
      title: "Brgy East Tapinac IBA Healthcare Center",
      location: "Zambales, Philippines",
      offers: "Counseling, Family Planning Methods, etc.."
    },
    {
      image: brgytwoagain,
      title: "Brgy Old Cabalan",
      location: "Brgy. Matarin, Olongapo City, Zambales, Philippines",
      offers: "Counseling, Family Planning Methods, etc.."
    },
    {
      image: brgytwoagain,
      title: "Brgy New Cabalan",
      location: "Brgy. Matarin, Olongapo City, Zambales, Philippines",
      offers: "Counseling, Family Planning Methods, etc.."
    }
  ];

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterCenters(query);
  };

  const filterCenters = (query) => {
    const filtered = healthcareCenters.filter(center =>
      center.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCenters(filtered);
    setSelectedCenter(null); // Reset selected center when filtering
  };

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
  };

  const handleSetAppointment = () => {
    if (selectedCenter) {
      // Redirect to the appointment page with the selected center's details as state
      history.push({
        pathname: '/Appointment',
        state: { center: selectedCenter }
      });
    }
  };

  return (
    <>
      <Nav />
      <div className='container_type'>
        <div className="second_search">
          <h1>Search again:</h1>
          <div className="third_search">
            <input
              className="typemoko_second"
              type="text"
              placeholder="Type your healthcare center here."
              name="search2"
              onChange={handleSearchInputChange}
              value={searchQuery}
            />
          </div>
          <p className="fourth_para">Let us take a look at what we have found:</p>

          {filteredCenters.length > 0 ? (
            filteredCenters.map((center, index) => (
              <div
                className={index % 2 === 0 ? "tow_container" : "third_container"}
                key={index}
                onClick={() => handleCenterClick(center)}
              >
                <HealthcareCenter {...center} />
              </div>
            ))
          ) : (
            <div className="no_results">No results found</div>
          )}

          {selectedCenter && (
            <div className="selected_center">
              <h2>Selected Center</h2>
              <button className='btn_appointment' onClick={handleSetAppointment}>Set an Appointment</button>
              <HealthcareCenter {...selectedCenter} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function HealthcareCenter({ image, title, location, offers }) {
  return (
    <div className="image_wrapper">
      <div className="column">
        <img className="brgy_mo" src={image} alt={title} />
      </div>
      <div className="column">
        <div className="location">
          <span className="title">{title}</span>
          <div className="details">
            <div className="div_4">Location: {location}</div>
            <div className="div_5">Offers: {offers}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Type;