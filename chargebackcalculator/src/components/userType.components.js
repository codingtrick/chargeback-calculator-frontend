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
    // <div className="container">
    //   <div className="app-wrapper">
    //     <div className="card">
    //       <h2 className="title">Welcome to Charge Back Calculator</h2>

    //     </div>
    //   </div>
    // </div>
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
                  {/* <form className="form-horizontal login-form">
                    <div className="form-group relative">
                      <input
                        className="form-control input-lg"
                        placeholder="Username"
                        required=""
                        type="text"
                      ></input>
                    </div>
                    <div className="form-group relative">
                      <input
                        className="form-control input-lg"
                        placeholder="Password"
                        required=""
                        type="password"
                      ></input>
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-success btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                    <div className="checkbox checkbox-success">
                      <input id="stay-sign" type="checkbox"></input> &nbsp;
                      <label for="stay-sign">Stay signed in</label>
                    </div>
                    <hr />
                    <div className="text-center">
                      <label>
                        <a href="#">Forgot your password?</a>
                      </label>
                    </div>
                  </form> */}
                  <form className="form-horizontal login-form">
                    <div className="col-md-8">
                      <select
                        name="userTypeSelection"
                        className="dropdownC"
                        onChange={(e) => onChange(e)}
                        required
                      >
                        <option value="null" className="">
                          --Select Anyone--
                        </option>
                        <option value="Customer" className="">
                          Customer
                        </option>
                        <option value="Employee" className="">
                          Employee
                        </option>
                        <option value="Admin" className="">
                          Admin
                        </option>
                      </select>
                    </div>
                    <span style={{ color: "red" }}>{error}</span>
                    <button
                      name="regbtn"
                      id="regbtn"
                      className="reg m-3 btn btn-info mb-1"
                      onClick={(e) => HandleSignInButton(e)}
                    >
                      Login
                    </button>
                    <button
                      name="sigbtn"
                      id="sigbtn"
                      className="sig m-3 btn btn-info mb-1"
                      onClick={(e) => HandleSignUpButton(e)}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeComponents;
