import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getFirestore, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Nav from '../Global/NavbarAdmin';
import Sidebar from '../Global/Sidebar';
import '../Admin/Dashboard.css';

function DashboardAdmin() {
  const location = useLocation();
  const history = useHistory();

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
    const approvedAppointmentsFromStorage = JSON.parse(localStorage.getItem('approvedAppointments') || '[]');
    setApprovedAppointments(approvedAppointmentsFromStorage);
  }, []);

  const handleApprove = async (id) => {
    const appointmentToApprove = pendingAppointments.find(appointment => appointment.id === id);
    if (appointmentToApprove) {
      try {
        const firestore = getFirestore();
        await updateDoc(doc(firestore, 'searchQueries', id), { approved: true });
        setPendingAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));

        // Store in localStorage
        const updatedPendingAppointments = pendingAppointments.filter(appointment => appointment.id !== id);
        localStorage.setItem('pendingAppointments', JSON.stringify(updatedPendingAppointments));

        await deleteDoc(doc(firestore, 'searchQueries', id));
        setApprovedAppointments(prevAppointments => [...prevAppointments, appointmentToApprove]);
        const approvedAppointmentsFromStorage = JSON.parse(localStorage.getItem('approvedAppointments') || '[]');
        localStorage.setItem('approvedAppointments', JSON.stringify([...approvedAppointmentsFromStorage, appointmentToApprove]));
      } catch (error) {
        console.error("Error approving appointment: ", error);
      }
    }
  };

  const handleReject = async (id) => {
    try {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, 'searchQueries', id));
      const updatedPendingAppointments = pendingAppointments.filter(appointment => appointment.id !== id);
      setPendingAppointments(updatedPendingAppointments);
      localStorage.setItem('pendingAppointments', JSON.stringify(updatedPendingAppointments));
    } catch (error) {
      console.error("Error rejecting appointment: ", error);
    }
  };

  const handleDone = (appointment) => {
    try {
      // Update approved appointments locally
      const updatedApprovedAppointments = approvedAppointments.filter(app => app.id !== appointment.id);
      setApprovedAppointments(updatedApprovedAppointments);
      localStorage.setItem('approvedAppointments', JSON.stringify(updatedApprovedAppointments));
  
      // Store the appointment data in localStorage under 'patientsRecords'
      const patientsRecords = JSON.parse(localStorage.getItem('patientsRecords') || '[]');
      localStorage.setItem('patientsRecords', JSON.stringify([...patientsRecords, appointment]));
  
      // Navigate to PatientsRecord with appointment details
      // history.push('/PatientsRecord');
    } catch (error) {
      console.error("Error handling done action: ", error);
    }
  };
  

  return (
    <div className='bgd-page'>
      <Sidebar />
      <Nav />
      
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
            <table className='appointment-content' width="100%">
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
                    <td>{appointment.email || 'N/A'}</td>
                    <td>{appointment.age || 'N/A'}</td>
                    <td>{appointment.appointmentType || 'N/A'}</td>
                    <td>{appointment.date || 'N/A'}</td>
                    <td>{appointment.time || 'N/A'}</td>
                    <td>
                      <button className='done-btn' onClick={() => handleDone(appointment)}>Done</button>
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
                      <button className='approve-btn' onClick={() => handleApprove(appointment.id)}>Approve</button>
                      <button className='not-approve-btn' onClick={() => handleReject(appointment.id)}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardAdmin;
