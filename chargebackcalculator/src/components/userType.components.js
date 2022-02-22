import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/lavi.css";
const UserTypeComponents = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  // };

  const HandleSignUpButton = () => {
    navigate("/register", { state: values });
  };
  const HandleSignInButton = () => {
    navigate("/login", { state: values });
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="app-wrapper">
          <h2 className="title">Welcome to Charge Back Calculator</h2>

          <div>
            <select
              name="userTypeSelection"
              className="dropdownC"
              onChange={(e) => onChange(e)}
            >
              <option value="null" className="dropdownC">
                --Select Anyone--
              </option>
              <option value="Customer" className="dropdownC">
                Customer
              </option>
              <option value="Employee" className="dropdownC">
                Employee
              </option>
              <option value="Admin" className="dropdownC">
                Admin
              </option>
            </select>
          </div>
          <button
            name="regbtn"
            id="regbtn"
            className="reg"
            onClick={() => HandleSignUpButton()}
          >
            Register
          </button>
          <button
            name="sigbtn"
            id="sigbtn"
            className="sig"
            onClick={() => HandleSignInButton()}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default UserTypeComponents;
