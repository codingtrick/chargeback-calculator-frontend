import axios from "axios";
import React from "react";
import { useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const LoginComponents = () => {
  const state = JSON.parse(localStorage.getItem("usertype"));
  console.log(state.userTypeSelection);
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const xdata = Object.fromEntries(data.entries());
    const x = {
      UserType: state.userTypeSelection,
      IsProfileSet: "false",
    };
    const finalData = Object.assign(xdata, x);
    axios.post(baseUrl + "/userHandle/register", finalData).then((r) => {
      console.log(r);
      console.log(r.UserDetails);
      alert(r.data.UserDetails.UserId);
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid">
      <div className="app-wrapper">
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="Username"
            placeholder="Mail Id"
            onChange={(e) => onChange(e)}
          />
          <input
            name="Password"
            placeholder="Password"
            onChange={(e) => onChange(e)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponents;
