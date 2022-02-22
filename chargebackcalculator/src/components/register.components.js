import React from "react";
import { useLocation } from "react-router-dom";

const RegisterComponents = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <h2 className="d-flex justify-content-center ">Registration Form</h2>
        <div className="row p-2">
          <div className="col-3">
            <input
              className="form-control input-sm"
              placeholder="First Name"
            ></input>
          </div>
          <div className="col-2">
            <input className="form-control input-sm" placeholder="City"></input>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-3">
            <input
              className="form-control input-sm"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="col-3">
            <input
              className="form-control input-sm"
              placeholder="State"
            ></input>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-3">
            <input className="form-control input-sm" placeholder="DOB"></input>
          </div>
          <div className="col-3">
            <div className="form-group">
              <input
                className="form-control input-sm"
                placeholder="Zip Code"
              ></input>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-3">
              <select className="form-control input-sm" placeholder="Gender">
                <option>--Gender--</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
            <div className="col-4">
              <input
                className="form-control input-sm"
                placeholder="User ID"
              ></input>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-3">
              <input
                className="form-control input-sm"
                placeholder="Mobile"
              ></input>
            </div>
            <div className="col-3">
              <input
                className="form-control input-sm"
                placeholder="Password"
              ></input>
            </div>
          </div>{" "}
        </div>

        <div>
          <input
            className="form-control input-sm "
            placeholder="Mail id"
          ></input>
        </div>
        <div>
          <input
            className="form-control input-sm p-2"
            placeholder="Address"
          ></input>
        </div>
        <div className="d-flex justify-content-center p-2">
          <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponents;
