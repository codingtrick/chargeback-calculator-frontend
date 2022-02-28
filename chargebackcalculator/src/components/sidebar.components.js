import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";
const Sidebar = () => {
  return (
    <>
      <ul className="side">
        <li>
          <Link to="/view-profile">Home</Link>
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

export default Sidebar;
