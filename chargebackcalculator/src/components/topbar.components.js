import React from "react";
import "./css/topbar.css";
const TopBar = () => {
  return (
    <>
      <ul className="topB fixed-top">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li style={{ float: "right" }}>
          <a href="#about">About</a>
        </li>
      </ul>
    </>
  );
};

export default TopBar;
