import React from "react";
import Sidebar from "../components/sidebar.components";
import TopBar from "../components/topbar.components";
// import "./css/layout.css";
import "../components/css/home.css";
const Layout = (props) => {
  const isLogin = localStorage.getItem("isLogin");

  switch (isLogin) {
    case "true":
      return (
        <>
          <div className="container-fluid">
            <div className="row m-0">
              <div className="col-md-3 col-sm-3 col-lg-3">
                <Sidebar />
              </div>
              <div className="col-md-9 col-sm-9 col-lg-9">
                <div className="row m-0">
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <TopBar />
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-md-12 col-sm-12 col-lg-12">
                    <main className="main">
                      <div className="containerxy">{props.children}</div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <TopBar />
          <Sidebar />
          <main className="main">
            <div className="containerxy">{props.children}</div>
          </main> */}
        </>
      );

    default:
      return (
        <>
          <main>
            <div>{props.children}</div>
          </main>
        </>
      );
  }
};

export default Layout;
