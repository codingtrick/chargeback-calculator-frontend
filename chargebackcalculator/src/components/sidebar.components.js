import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";
const Employee = () => {
  return (
    <>
      <ul className="side">
        <li>
          <Link to="/view-profile">Home</Link>
        </li>
        <li>
          <Link to="/view-issue">View Issue</Link>
        </li>
        <li>
          <Link to="/check-status">Status</Link>
        </li>
      </ul>
    </>
  );
};
const Customer = () => {
  return (
    <>
      <ul className="side">
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
      </ul>
    </>
  );
};

const Sidebar = () => {
  const data = JSON.parse(localStorage.getItem("usertype")).userTypeSelection;
  console.log(data);
  switch (data) {
    case "Employee" || "Admin":
      return <Employee />;
    case "Customer":
      return <Customer />;
  }
};

export default Sidebar;
