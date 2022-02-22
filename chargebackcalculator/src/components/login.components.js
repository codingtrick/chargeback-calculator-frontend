import React from "react";
import { useLocation } from "react-router-dom";

const LoginComponents = () => {
  const { state } = useLocation();
  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <div className="d-flex justify-content-center p-3">
          <h1>Sign In</h1>
        </div>
        <div className="button">
          <input
            className="form-control input-sm "
            id="username"
            name="username"
            placeholder="User Name"
          ></input>
        </div>
        <div className="button">
          <input
            className="form-control input-sm "
            id="password"
            name="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="button p-3">
          <label>Sign In as a</label>{" "}
        </div>
        <div className="button">
          <div className="row">
            <div className="col-3 ">
              <button name="adminbtn" id="adminbtn" className="btn-primary">
                Admin
              </button>
            </div>
            <div className="col-3">
              <button className="btn-primary" name="empbtn" id="empbtn">
                Employee
              </button>
            </div>
            <div className="col-4">
              <button className="btn-primary" name="custbtn" id="custbtn">
                Customer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
