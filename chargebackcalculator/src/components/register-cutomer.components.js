import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const RegisterCustComponents = () => {
  const usertypeData = JSON.parse(localStorage.getItem("usertype"));
  const state = JSON.parse(localStorage.getItem("login"));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    var x = "customer";

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
  console.log(values);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <div className="card p-4">
          <h2 className="d-flex justify-content-center ">
            Registration Customer Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row p-2 justify-content-center">
              <div className="col-5">
                {state.UserType + " ID"}
                <input
                  required
                  className="form-control input-sm"
                  placeholder={state.UserType + " ID"}
                  value={state.UserId}
                  name="CustomerId"
                  onChange={(e) => onChange(e)}
                  readOnly
                />
              </div>
              <div className="col-5">
                {state.UserType + " Name"}
                <input
                  required
                  className="form-control input-sm"
                  placeholder={state.UserType + " Name"}
                  name="CustomerName"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-5">
                Mail Id
                <input
                  required
                  className="form-control input-sm"
                  placeholder="Personal Mail Id"
                  value={state.Username}
                  onChange={(e) => onChange(e)}
                  readOnly
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
              <div className="col-5">
                <div className="form-group">
                  Permanent Address
                  <input
                    required
                    type="text"
                    className="form-control input-sm"
                    placeholder="Permanent Address"
                    onChange={(e) => onChange(e)}
                    name="CustomerAddress"
                  />
                </div>
              </div>
              <div className="col-5">
                Account Type
                <input
                  required
                  type="text"
                  className="form-control input-sm"
                  placeholder="eg. Saving"
                  onChange={(e) => onChange(e)}
                  name="BankAccountType"
                />
              </div>
              <div className="col-5">
                Bank Branch
                <input
                  required
                  className="form-control input-sm"
                  placeholder="eg. Vakola"
                  type={"text"}
                  onChange={(e) => onChange(e)}
                  name="BankAccountBranch"
                />
              </div>
              <div className="col-5">
                City
                <input
                  required
                  className="form-control input-sm"
                  placeholder="City"
                  type={"text"}
                  onChange={(e) => onChange(e)}
                  name="BankCity"
                />
              </div>

              <div className="col-5">
                Bank State
                <input
                  required
                  type={"text"}
                  className="form-control input-sm"
                  placeholder="State"
                  onChange={(e) => onChange(e)}
                  name="BankState"
                />
              </div>
              <div className="col-5"></div>
            </div>
            <div className="d-flex justify-content-center p-2">
              <button className="btn btn-primary">Save Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustComponents;
