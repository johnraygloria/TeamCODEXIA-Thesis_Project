
import './UserProfileStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Moment from 'react-moment';

import Navbar from '../Components/Global/Navbar_Main';

import picuser from '../Components/Assets/userpic.jpg'
function UserProfile() {
  let date = new Date();
  return (
<>
<Navbar/>
<div className='bgd-patients-record'>
  <div className="main-body">
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
            <tr > 
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
        </table>
            </div>
      </div>
    </div>
      {/* </div> */}
    </div>
  </div>
</div>
</>
 );
}

export default UserProfile;