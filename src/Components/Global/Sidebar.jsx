
import "../Global/SidebarStyle.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>  
        <input type="checkbox" id="menu-toggle1" />
        <div className="sidebar-container1">
          <div className="side-menu">
            <ul>
              <li>
              <Link className="decoration-text-sidebar" to="/Dashboard">
                  <span/>
                  <small>Dashboard</small>
                </Link>
              </li>
              <li>
                <a>
                  <span />
                  <small>Doctor & Staffs</small>
                </a>
              </li>
              <li>
              <Link  className="decoration-text-sidebar" to="/PatientsRecord">
                <span />
                <small>Patients Record</small>
              </Link>
            </li>
              <li>  
              <Link  className="decoration-text-sidebar" to="/PregnancyWheel">
                  <span />
                  <small>Pregnancy Wheel</small>
                </Link>
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
        </div>

   </>

  );
}

export default Sidebar;
