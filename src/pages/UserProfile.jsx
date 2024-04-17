
import './UserProfileStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../Components/Global/Navbar_Main';

import picuser from '../Components/Assets/userpic.jpg'
function UserProfile() {
  return (
<>
<Navbar/>
  <div className="main-body">
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
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

      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">John Ray Gloria</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Age</h6>
              </div>
              <div className="col-sm-9 text-secondary">21</div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">johnraygloria80@gmail.com</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">(239) 816-9029</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              Acayan 42 14 St East Tapinac OC
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <a className="btn-info ">
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>

          <div className='card-holder-appointment'>
            <div className="card-holder-container">
              <div className='time-appointment'>
                <h6>Appointment        </h6>
                <h6> Time</h6>
              </div>
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
        </table>
            </div>
          </div>
      </div>
    </div>
  </div>

</>
 );
}

export default UserProfile;