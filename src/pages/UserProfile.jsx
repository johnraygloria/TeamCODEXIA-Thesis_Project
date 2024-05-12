import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Moment from 'react-moment';
import Navbar from '../Components/Global/Navbar_Main';
import picuser from '../Components/Assets/userpic.jpg';
import { auth } from '../Config/firebase';


import './UserProfileStyle.css';


function UserProfile() {
  let date = new Date();
  const location = useLocation();
  const [user, setUser] = useState(null); 
  const [appointmentData, setAppointmentData] = useState(null);
  const [userId, setUserId] = useState(null); 
  const [isApproved, setIsApproved] = useState(false); 
  // const [isRejected, setIsRejected] = useState(false); 


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setUserId(user.uid);
        const storedData = localStorage.getItem(`appointmentData_${user.uid}`);
        setAppointmentData(storedData ? JSON.parse(storedData) : null);
      } else {
        setUser(null);
        setUserId(null);
        setAppointmentData(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  useEffect(() => {
    if (location.state && location.state.appointmentData) {
      setAppointmentData(location.state.appointmentData);
      if (user) {
        localStorage.setItem(`appointmentData_${user.uid}`, JSON.stringify(location.state.appointmentData));
      }
    }
    if (location.state && location.state.action === 'approve') {
      setIsApproved(true); 
    }
    // if (appointmentData && appointmentData.rejected) {
    //   setIsRejected(true); 
    // }
  }, [location.state, user]);


return (
  <>
    <Navbar />
    <div className='bgd-patients-record'>
      <div className="main-body">
        {user && (
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card-two-style">
              <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={picuser}
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4>John Ray Gloria</h4>
                      <p className="text-muted font-size-sm">
                        Acayan 42 14 St East Tapinac OC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-display-style">
              <div className="card-three">
                <div className="card-body">
                  <div className='card-grid-style' >
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">John Ray Gloria</div>
                  </div>
                  <hr />
                  <div className="card-grid-style">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Age:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">21</div>
                  </div>
                  <hr/>
                  <div className="card-grid-style">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">johnraygloria80@gmail.com</div>
                  </div>
                  <hr />
                  <div className="card-grid-style">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                  </div>
                  <hr />
                  <div className="card-grid-style">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Acayan 42 14 St East Tapinac OC
                    </div>
                  </div>
                  <hr />
                  <div className="card-grid-style">
                    <div className="col-sm-12">
                      <a className="btn-info ">
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-holder-appointment'>
              <div className='app-patien-user'>
                <div className="card-holder-container">
                  <div className='time-appointment'>
                    <h6>Appointment</h6>
                    <Moment format="dddd, MMMM  YYYY, h:mm A">{date}</Moment>
                  </div>
                  <table className='table-thed-th' width="100%">
                    <thead className='info-name-style'>
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
                      {appointmentData && user.uid === userId && ( 
                        <tr>
                          <td></td>
                          <td>{appointmentData.name}</td>
                          <td>{appointmentData.email}</td>
                          <td>{appointmentData.age}</td>
                          <td>{appointmentData.appointmentType}</td>
                          <td>{appointmentData.date}</td>
                          <td>{appointmentData.time}</td>
                          <td>
                          {isApproved ? 'Approved' : 'Pending'}
                          {/* {!isApproved && isRejected ? 'Rejected' : ''} */}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
);

}

export default UserProfile;