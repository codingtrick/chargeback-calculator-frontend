import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const Customer = () => {
  const [values, setValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const x = values;
    // console.log(Object.fromEntries(data.entries()));
    const url = baseUrl + "/issue/" + x.search;
    axios.get(url).then((r) => {
      setValues(r.data);
      console.log(r.data);
    });
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const loginData = JSON.parse(localStorage.getItem("login"));
  const [namevalues, namesetValues] = useState([]);
  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get(baseUrl + "/customer/" + loginData.UserId);
    console.log(res.data);
    namesetValues(res.data);
  };

  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    ></img>
                    <div className="mt-3">
                      <h4>{namevalues.CustomerName}</h4>
                      <p className="text-secondary mb-1">
                        <b>Cust Id:</b> {namevalues.CustomerId}
                      </p>
                      <p className="text-secondary mb-1">
                        <b>Acc Type:</b> {namevalues.BankAccountType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutters-sm">
            <div className="col-md-12">
              <div className="row gutters-sm">
                <div className="col-sm-12 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <center>
                        <h4 className="d-flex align-items-center">
                          <b>Track Issue</b>
                        </h4>
                      </center>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-9">
                              <div className="track-search">
                                <div className="form-track">
                                  <i className="fa fa-search"></i>
                                  <input
                                    required
                                    type="number"
                                    name="search"
                                    className="form-control form-input"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Enter Status Id"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-3"
                              style={{ margin: "0px auto " }}
                            >
                              <button
                                className="btn btn-primary"
                                onClick={handleSubmit}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <h6>
                                <b>Issue Id:</b> {values.IssueId}
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <h6>
                                <b>Description:</b> {values.Descriptions}
                              </h6>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <h6>
                                <b>Status:</b> {values.Status}
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <h6>
                                <b>Customer ID:</b> {values.CustomerId}
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h6>
                              <b>Ammount:</b> {values.Ammount}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input required
          type="number"
          name="search"
          onChange={(e) => onChange(e)}
          placeholder="Enter Status Id"
        />
        <button>Search</button>
      </form>
      <div className="card p-2 m-3">
        <div className="row">
          <div className="col-md-6">
            Issue Id: <b>{values.IssueId}</b>
          </div>
          <div className="col-md-6">
            Customer Id: <b>{values.CustomerId}</b>
          </div>
          <div className="col-md-6">
            Status: <b>{values.Status}</b>
          </div>
          <div className="col-md-6">
            Descriptions: <b>{values.Descriptions}</b>
          </div>
        </div>
      </div> */}
    </>
  );
};

const Employee = () => {
  const [values, setValues] = useState([]);
  const [statusValues, setStatusValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const x = Object.fromEntries(data.entries());
    console.log(Object.fromEntries(data.entries()));
    const url = baseUrl + "/issue/" + x.search;
    axios.get(url).then((r) => {
      setValues(r.data);
      console.log(r.data);
    });
  };

  const handleStatusSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const x = Object.fromEntries(data.entries());
    const url = baseUrl + "/issue/" + values.IssueId;
    axios.put(url, x).then((r) => console.log(r));
    console.log(x);
  };

  const onChangeStatus = (e) => {
    setStatusValues({ ...statusValues, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="number"
          name="search"
          onChange={(e) => onChange(e)}
          placeholder="Enter Status Id"
        />
        <button>Search</button>
      </form>
      <div className="card p-2 m-3">
        <div className="row">
          <div className="col-md-6">
            Issue Id: <b>{values.IssueId}</b>
          </div>
          <div className="col-md-6">
            Customer Id: <b>{values.CustomerId}</b>
          </div>
          <div className="col-md-6">
            Status: <b>{values.Status}</b>
          </div>
          <div className="col-md-6">
            Descriptions: <b>{values.Descriptions}</b>
          </div>
          <div className="col-md-6">
            Amount:<b>{values.Ammount}</b>
          </div>
          <div className="col-md-6">
            Transition Type:<b>{values.TransitionType}</b>
          </div>
          <div className="col-md-12">
            <form onSubmit={handleStatusSubmit}>
              <input
                required
                type="text"
                name="Status"
                onChange={(e) => onChangeStatus(e)}
                placeholder="Enter Status Id"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckStatusComponents = () => {
  const usertype = JSON.parse(localStorage.getItem("usertype"));
  switch (usertype.userTypeSelection) {
    case "Customer":
      return <Customer />;
    case "Employee":
      return <Employee />;
    case "Admin":
      return <Employee />;
  }
};

export default CheckStatusComponents;
