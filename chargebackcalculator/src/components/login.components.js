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
    <div className="login-area">
      <div className="container">
        <div className="app-wrapper">
          <div className="row m-0">
            <div className="col-md-12 col-lg-12">
              <div className="d-flex justify-content-center p-3">
                <h1 className="page-title">Sign Up</h1>
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
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group relative">
                        <input
                          name="Username"
                          placeholder="Mail Id"
                          onChange={(e) => onChange(e)}
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group relative">
                        <input
                          name="Password"
                          type={"Password"}
                          placeholder="Password"
                          onChange={(e) => onChange(e)}
                          minLength="6"
                          maxLength="16"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <button className="btn btn-success btn-lg btn-block">
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

    // <div className="container-fluid">
    //   <div className="app-wrapper">
    //     <h1 className="text-center">Sign Up</h1>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     name="Username"
    //     placeholder="Mail Id"
    //     onChange={(e) => onChange(e)}
    //     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    //     required
    //   />
    //   <input
    //     name="Password"
    //     type={"Password"}
    //     placeholder="Password"
    //     onChange={(e) => onChange(e)}
    //     minlength="6"
    //     maxlength="16"
    //     required
    //   />
    //   <button>Submit</button>
    // </form>
    //   </div>
    // </div>
  );
};

export default LoginComponents;
