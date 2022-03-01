import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./css/sidebar.css";
import "./css/home.css";
const Employee = () => {
  return (
    <>
      <div className="nav-sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CTS BANK</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/view-profile">
              <i className="fa fa-home"></i>
              <span className="links_name">Your Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-issue">
              <i className="bx bx-list-ul fa fa-user-plus"></i>
              <span className="links_name">View Issue</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-status">
              <i className="bx bx-list-ul fa fa-user"></i>
              <span className="links_name">Track Status</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <ul className="side">
        <li>
          <Link to="/view-profile">Home</Link>
        </li>
        <li>
          <Link to="/view-issue">View Issue</Link>
        </li>
        <li>
          <Link to="/check-status">Status</Link>
        </li>
      </ul> */}
    </>
  );
};
const Admin = () => {
  return (
    <>
      <div className="nav-sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CTS BANK</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/view-profile">
              <i className="fa fa-home"></i>
              <span className="links_name">Your Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-issue">
              <i className="bx bx-list-ul fa fa-user-plus"></i>
              <span className="links_name">View Issue</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-employee">
              <i className="bx bx-list-ul fa fa-user"></i>
              <span className="links_name">View Employee</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-status">
              <i className="bx bx-list-ul fa fa-user"></i>
              <span className="links_name">Track Status</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <ul className="side">
        <li>
          <Link to="/view-profile">Home</Link>
        </li>
        <li>
          <Link to="/view-issue">View Issue</Link>
        </li>
        <li>
          <Link to="/check-status">Status</Link>
        </li>
      </ul> */}
    </>
  );
};
const Customer = () => {
  return (
    <>
      <div className="nav-sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CTS BANK</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/view-profile">
              <i className="fa fa-home"></i>
              <span className="links_name">Your Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/issue">
              <i className="bx bx-box fa fa-users"></i>
              <span className="links_name">Create Issue</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/view-issue">
              <i className="bx bx-list-ul fa fa-user-plus"></i>
              <span className="links_name">View Issue</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-status">
              <i className="bx bx-list-ul fa fa-user"></i>
              <span className="links_name">Track Status</span>
            </NavLink>
          </li>
          {/* <li>
                        <NavLink>
                            <i className='bx bx-box fa fa-users'></i>
                            <span className="links_name">All Customers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-list-ul fa fa-user-plus'></i>
                            <span className="links_name">Manage Customers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-pie-chart-alt-2 fa fa-clipboard'></i>
                            <span className="links_name">Complaints</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-coin-stack fa fa-database'></i>
                            <span className="links_name">Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <i className='bx bx-cog fa fa-cog'></i>
                            <span className="links_name">Setting</span>
                        </NavLink>
                    </li>*/}
          {/* <li className="log_out">
            <NavLink to="/login">
              <i className="bx bx-log-out fa fa-lock"></i>
              <span className="links_name">Log out</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
      {/* <ul className="side">
        <li>
          <Link to="/view-profile">Your Profile</Link>
        </li>
        <li>
          <Link to="/issue">Create Issue</Link>
        </li>
        <li>
          <Link to="/view-issue">View Issue</Link>
        </li>
        <li>
          <Link to="/check-status">Status</Link>
        </li>
      </ul> */}
    </>
  );
};

const Sidebar = () => {
  const data = JSON.parse(localStorage.getItem("usertype")).userTypeSelection;
  console.log(data);
  switch (data) {
    case "Employee":
      return <Employee />;
    case "Admin":
      return <Admin />;
    case "Customer":
      return <Customer />;
  }
};

export default Sidebar;
