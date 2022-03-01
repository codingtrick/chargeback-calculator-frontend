import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const Customer = () => {
  const [values, setValues] = useState([]);

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
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
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
      </div>
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
          <div className="col-md-12">
            <form onSubmit={handleStatusSubmit}>
              <input
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
    case "Employee" || "Admin":
      return <Employee />;
  }
};

export default CheckStatusComponents;
