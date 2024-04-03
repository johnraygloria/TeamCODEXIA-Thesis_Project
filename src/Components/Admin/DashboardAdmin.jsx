
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFirestore, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'; // Import deleteDoc
import Nav from '../Navbar/Navbar_Main'
import Sidebar from '../Navbar/Sidebar'
import '../Admin/Dashboard.css';

function DashboardAdmin() {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || {};
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [approvedAppointments, setApprovedAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const firestore = getFirestore();
      try {
        const querySnapshot = await getDocs(collection(firestore, 'searchQueries'));
        const fetchedAppointments = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPendingAppointments(fetchedAppointments);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      }
    };

    fetchAppointments();  
  }, []);

  useEffect(() => {
    // Load approved appointments from local storage
    const approvedAppointmentsFromStorage = JSON.parse(localStorage.getItem('approvedAppointments') || '[]');
    setApprovedAppointments(approvedAppointmentsFromStorage);
  }, []);

  const handleApprove = async (id) => {
    // Find the appointment with the given id
    const appointmentToApprove = pendingAppointments.find(appointment => appointment.id === id);
    if (appointmentToApprove) {
      try {
        // Update appointment status in the database
        const firestore = getFirestore();
        await updateDoc(doc(firestore, 'searchQueries', id), { approved: true });
        
        // Remove the approved appointment from the pending appointments list
        setPendingAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));

        // Update local storage for pending appointments
        const updatedPendingAppointments = pendingAppointments.filter(appointment => appointment.id !== id);
        localStorage.setItem('pendingAppointments', JSON.stringify(updatedPendingAppointments));

        // Delete the approved appointment from the real-time database
        await deleteDoc(doc(firestore, 'searchQueries', id)); // Delete from Firestore

        // Update local state for approved appointments
        setApprovedAppointments(prevAppointments => [...prevAppointments, appointmentToApprove]);

        // Store approved appointments in local storage
        const approvedAppointmentsFromStorage = JSON.parse(localStorage.getItem('approvedAppointments') || '[]');
        localStorage.setItem('approvedAppointments', JSON.stringify([...approvedAppointmentsFromStorage, appointmentToApprove]));
      } catch (error) {
        console.error("Error approving appointment: ", error);
      }
    }
  };

  return (
    <>
      <div className='bgd-page'>
        <Sidebar/>
        <Nav />
        {/* <h1>Dashboard</h1>
        <input type="checkbox" id="menu-toggle1" />
        <div className="sidebar-container1">
          <div className="side-menu">
            <ul>
              <li>
                <a>
                  <span className="las la-user-alt" />
                  <small>Dashboard</small>
                </a>
              </li>
              <li>
                <a>
                  <span className="las la-user-alt" />
                  <small>Doctor & Staffs</small>
                </a>
              </li>
              <li>
                <a>
                  <span className="las la-envelope" />
                  <small>Patients</small>
                </a>
              </li>
              <li>
                <a>
                  <span className="las la-clipboard-list" />
                  <small>Appointment</small>
                </a>
              </li>
              <li>
                <a>
                  <span className="las la-shopping-cart" />
                  <small>Pregnancy Wheel</small>
                </a>
              </li>
            </ul>
          </div>
          <div className="side-conten-container">
            <div className="profile">
              <div className="profile-img bg-img">CLINIC PROFILE/LOGO</div>
              <h4>CLINIC NAME</h4>
              <small>Log out</small>
            </div>
          </div>
        </div> */}

        <div className="page-content">
          <div className="analytics">
            <h1 className='dash-name'>Dashboard</h1>
            <div className="card">
              <div className="card-head">
                <h2>2</h2>
                <span className="las la-user-friends" />
              </div>
              <div className="card-progress">
                <small>Doctors</small>
                <div className="card-indicator">
                  <div className="indicator one" style={{ width: "2%" }} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-head">
                <h2>10</h2>
                <span className="las la-eye" />
              </div>
              <div className="card-progress">
                <small>Medical Staffs</small>
                <div className="card-indicator">
                  <div className="indicator two" style={{ width: "10%" }} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-head">
                <h2>50</h2>
                <span className="las la-shopping-cart" />
              </div>
              <div className="card-progress">
                <small>Patients</small>
                <div className="card-indicator">
                  <div className="indicator three" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-head">
                <h2>5</h2>
                <span className="las la-envelope" />
              </div>
              <div className="card-progress">
                <small>Appointment</small>
                <div className="card-indicator">
                  <div className="indicator four" style={{ width: "5%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content">
          <main>
            <div className="records table-responsive">
              {/* Approved Appointments section */}
              <h2>Approved Appointments</h2>
              <table  className='appointment-content' width="100%">
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
                  {approvedAppointments.map((appointment, index) => (
                    <tr key={appointment.id}>
                      <td>{index + 1}</td>
                      <td>{appointment.name || 'N/A'}</td>
                      <td >{appointment.email || 'N/A'}</td>
                      <td >{appointment.age || 'N/A'}</td>
                      <td>{appointment.appointmentType || 'N/A'}</td>
                      <td>{appointment.date || 'N/A'}</td>
                      <td>{appointment.time || 'N/A'}</td>
                      <td>
                        {/* Add buttons for approving and rejecting */}
                        {/* <button className='done-btn' >Delete</button> */}
                        <button className='done-btn' >Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pending Appointments section */}
              <h2>Pending Appointments</h2>
              <table width="100%">
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
                  {pendingAppointments.map((appointment, index) => (
                    <tr key={appointment.id}>
                      <td>{index + 1}</td>
                      <td>{appointment.name || 'N/A'}</td>
                      <td>{appointment.email || 'N/A'}</td>
                      <td>{appointment.age || 'N/A'}</td>
                      <td>{appointment.appointmentType || 'N/A'}</td>
                      <td>{appointment.date || 'N/A'}</td>
                      <td>{appointment.time || 'N/A'}</td>
                      <td>
                        {/* Add buttons for approving and rejecting */}
                        <button className='approve-btn' onClick={() => handleApprove(appointment.id)}>Approve</button>
                        <button className='not-approve-btn'>Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
