import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserInput from "./UserInput.components";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const SignUpComponents = (props) => {
  const navigate = useNavigate();
  const state = JSON.parse(localStorage.getItem("usertype"));
  console.log(state.userTypeSelection);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios
      .post(baseUrl + "/userhandle/login", Object.fromEntries(data.entries()))
      .then((r) => {
        console.log(r);
        const userData = r.data.UserDetails;
        console.log(userData);
        localStorage.setItem("login", JSON.stringify(userData));
        localStorage.setItem("isLogin", true);
        if (userData.IsProfileSet.split(" ").join("") === "true") {
          navigate("/view-profile");
        } else {
          navigate("/register");
        }
      });
  };

  const [values, setValues] = useState({});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      type: "text",
      placeholder: "Enter UserName /  UserId",
      name: "username",
      label: "UserName /  UserId",
    },
    {
      type: "password",
      placeholder: "Enter Password",
      name: "password",
      label: "Password",
    },
  ];

  return (
    <>
      <div className="app-wraper">
        <div className="container" style={{ display: "flex" }}>
          <form onSubmit={handleSubmit}>
            <div className="card" style={{ padding: "10px" }}>
              <h1 className="text-center">Log IN</h1>
              <div className="row">
                {inputs.map((input, index) => (
                  <div className="col-md-4 col-sm-12" key={index}>
                    <UserInput
                      {...input}
                      value={values[input.name]}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                ))}
              </div>
              <button
                className=" btn btn-primary"
                style={{ width: "30%", margin: "0 auto" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpComponents;
