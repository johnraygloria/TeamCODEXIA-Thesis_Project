
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
                <a>
                  <span/>
                  <small>Dashboard</small>
                </a>
              </li>
              <li>
                <a>
                  <span />
                  <small>Doctor & Staffs</small>
                </a>
              </li>
              <li>
              <Link to="/PatientsRecord">
                <span />
                <small>Patients Record</small>
              </Link>
            </li>
              <li>  
                <a>
                  <span />
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
        </div>

   </>

  );
}

export default Sidebar;
