import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/lavi.css";
const UserTypeComponents = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  // };

  const HandleSignUpButton = (e) => {
    e.preventDefault();
    if (!Object.keys(values).length) {
      setError("select something to register");
      return;
    }
    localStorage.setItem("usertype", JSON.stringify(values));
    navigate("/login");
  };
  const HandleSignInButton = (e) => {
    e.preventDefault();
    if (!Object.keys(values).length) {
      setError("select something to login");
      return;
    }
    localStorage.setItem("usertype", JSON.stringify(values));
    navigate("/signin");
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="hkBg">
      <div className="container-fluid ">
        <div className="app-wrapper">
          <h2 className="title">Welcome to Charge Back Calculator</h2>
          <form>
            <div>
              <select
                name="userTypeSelection"
                className="dropdownC"
                onChange={(e) => onChange(e)}
                required
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
              <span style={{ color: "red" }}>{error}</span>
            </div>
            <button
              name="regbtn"
              id="regbtn"
              className="reg"
              onClick={(e) => HandleSignInButton(e)}
            >
              Login
            </button>
            <button
              name="sigbtn"
              id="sigbtn"
              className="sig"
              onClick={(e) => HandleSignUpButton(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserTypeComponents;
