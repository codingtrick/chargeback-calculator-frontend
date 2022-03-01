import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/topbar.css";
const TopBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("usertype");
    localStorage.removeItem("login");
    localStorage.removeItem("isLogin");
    navigate("/home");
    window.location.reload();
  };
  const data = JSON.parse(localStorage.getItem("usertype")).userTypeSelection;
  return (
    <>
      <section className="home-section" style={{ height: "10px" }}>
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu fa fa-menu sidebarBtn"></i>
            <span className="dashboard">{data} Panel</span>
          </div>
          <div className="profile-details">
            <img
              src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
              alt=""
            ></img>
            <span className="admin_name">
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </span>
            <i className="bx bx-chevron-down fa fa-chevron-down"></i>
          </div>
        </nav>
      </section>
      {/* <ul className="topB fixed-top">
        <li>
          <a className="active" href="#home">
            Cargeback Dashboard for {data}
          </a>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/view-profile">Profile</Link>
        </li>
        <li style={{ float: "right" }}>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul> */}
    </>
  );
};

export default TopBar;
