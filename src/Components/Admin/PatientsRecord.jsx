import React, { useState } from 'react';

import './PatientsRecordStyle.css';


import NavbarAdmin from '../Global/NavbarAdmin';
import Sidebar from '../Global/Sidebar';

function PatientsRecord() {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const patientsRecords = JSON.parse(localStorage.getItem('patientsRecords') || '[]');

  // Function to handle click on a patient record
  const handleRecordClick = (record) => {
    setSelectedRecord(record);
  };

  // Function to close the pop-up
  const handleCloseModal = () => {
    setSelectedRecord(null);
  };

  return (
    <>
    <NavbarAdmin/>
    <Sidebar/>
    <div className='main-container-patientrecord'>
      <div className='record-patients-style'>
        <h2>Patient's Appointment Record</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Type of Appointment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patientsRecords.map((record, index) => (
              <tr key={index} onClick={() => handleRecordClick(record)}>
                <td>{index + 1}</td>
                <td>{record.name || 'N/A'}</td>
                <td>{record.email || 'N/A'}</td>
                <td>{record.age || 'N/A'}</td>
                <td>{record.appointmentType || 'N/A'}</td>
                <td>{record.date || 'N/A'}</td>
                <td>{record.time || 'N/A'}</td>
                <td>View Details</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal to display detailed patient record */}
        {selectedRecord && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Patient Details</h2>
              <p>Name: {selectedRecord.name}</p>
              <p>Email: {selectedRecord.email}</p>
              <p>Age: {selectedRecord.age}</p>
              <p>Type of Appointment: {selectedRecord.appointmentType}</p>
              <p>Date: {selectedRecord.date}</p>
              <p>Time: {selectedRecord.time}</p>
            </div>
          </div>
        )}
      </div>
  </div>
    </>
  );
}

export default PatientsRecord;
