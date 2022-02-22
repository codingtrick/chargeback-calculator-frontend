import React from "react";
import Sidebar from "../components/sidebar.components";
import TopBar from "../components/topbar.components";
import "./css/layout.css";
const Layout = (props) => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="main">
        <div className="containerxy">{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
