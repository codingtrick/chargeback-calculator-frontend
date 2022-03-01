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
          window.location.reload();
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
      <div className="login-area">
        <div className="container">
          <div className="app-wrapper">
            <div className="row m-0">
              <div className="col-md-12 col-lg-12">
                <div className="d-flex justify-content-center p-3">
                  <h1 className="page-title">Sign In</h1>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-12 col-lg-12 justify-content-center">
                <div className="login-container-wrapper clearfix">
                  <div className="tab-content">
                    <form
                      onSubmit={handleSubmit}
                      className="form-horizontal login-form"
                    >
                      {inputs.map((input, index) => (
                        <div className="col-md-12 col-sm-12" key={index}>
                          <div className="form-group relative">
                            <UserInput
                              className="form-control input-lg"
                              {...input}
                              value={values[input.name]}
                              onChange={(e) => onChange(e)}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="form-group d-flex justify-content-center">
                        <button
                          className="btn btn-success btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponents;
