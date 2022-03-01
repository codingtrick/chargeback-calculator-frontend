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
      <ul className="topB fixed-top">
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
      </ul>
    </>
  );
};

export default TopBar;
