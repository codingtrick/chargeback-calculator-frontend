import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const RegisterComponents = () => {
  const usertypeData = JSON.parse(localStorage.getItem("usertype"));
  const state = JSON.parse(localStorage.getItem("login"));
  const navigate = useNavigate();
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    var x = "EmployeeDetail";
    console.log(x);
    if (usertypeData === "Customer") {
      x = "customer";
    }

    axios
      .post(baseUrl + "/" + x, Object.fromEntries(data.entries()))
      .then((r) => {
        axios
          .put(
            baseUrl +
              "/loginfunction/" +
              JSON.parse(localStorage.getItem("login")).UserId,
            { IsProfileSet: "true" }
          )
          .then((r) => {
            navigate("/view-profile", { state: r });
          });
        console.log("Done with Issue" + r);
      });
  };

  const [values, setValues] = useState([]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <div className="card">
          <h2 className="d-flex justify-content-center ">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row p-2">
              <div className="col-5">
                {state.UserType + " Mail ID"}
                <input
                  required
                  type={"text"}
                  className="form-control input-sm"
                  placeholder={state.UserType + "Mail ID"}
                  value={state.UserId + "@chargeback.com"}
                  name="EmpMailId"
                  onChange={() => onChange()}
                  readOnly
                />
              </div>
              <div className="col-5">
                {state.UserType + " ID"}
                <input
                  required
                  className="form-control input-sm"
                  placeholder={state.UserType + " ID"}
                  value={state.UserId}
                  name="EmpId"
                  onChange={(e) => onChange(e)}
                  readOnly
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col-5">
                {state.UserType + " Name"}
                <input
                  required
                  className="form-control input-sm"
                  placeholder={state.UserType + " Name"}
                  name="EmpName"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-5">
                Personal Mail Id
                <input
                  required
                  className="form-control input-sm"
                  placeholder="Personal Mail Id"
                  value={state.Username}
                  name="EmpPersonalMailId"
                  onChange={(e) => onChange(e)}
                  readOnly
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col-5">
                Mobile Number
                <input
                  required
                  type="number"
                  className="form-control input-sm"
                  placeholder="Mobile Number"
                  onChange={(e) => onChange(e)}
                  name="MobileNumber"
                />
              </div>
              <div className="col-5">
                <div className="form-group">
                  Permanent Address
                  <input
                    required
                    type="text"
                    className="form-control input-sm"
                    placeholder="Permanent Address"
                    onChange={(e) => onChange(e)}
                    name="PermanentAddress"
                  />
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-5">
                City
                <input
                  required
                  type="text"
                  className="form-control input-sm"
                  placeholder="City"
                  onChange={(e) => onChange(e)}
                  name="City"
                />
              </div>
              <div className="col-5">
                State
                <input
                  required
                  className="form-control input-sm"
                  placeholder="State"
                  type={"text"}
                  onChange={(e) => onChange(e)}
                  name="State"
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col-5">
                Country
                <input
                  required
                  className="form-control input-sm"
                  placeholder="Country"
                  type={"text"}
                  onChange={(e) => onChange(e)}
                  name="Country"
                />
              </div>
              <div className="col-5">
                Date Of Birth
                <input
                  required
                  type={"datetime-local"}
                  className="form-control input-sm"
                  placeholder="Date Of Birth"
                  onChange={(e) => onChange(e)}
                  name="DOB"
                />
              </div>
            </div>
            <div className="row p-2">
              <div className="col-5">
                Date Of Joining
                <input
                  required
                  type={"datetime-local"}
                  className="form-control input-sm"
                  placeholder="Date Of Joining"
                  onChange={(e) => onChange(e)}
                  name="DOJ"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponents;
