import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const ViewProfileComponents = (props) => {
  // const { state } = useLocation();
  const state = JSON.parse(localStorage.getItem("login"));
  console.log(state.UserId);
  const [values, setValues] = useState([]);
  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get(baseUrl + "/EmployeeDetail/" + state.UserId);
    console.log(res.data);
    setValues(res.data);
  };

  return (
    <>
      <div className="card">
        <h3 className="text-center">{values.EmpName}'s Profile</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              Employee Id: <b>{values.EmpMailId}</b>
            </div>
            <div className="col-md-6">
              Personal Mail Id: <b>{values.EmpPersonalMailId}</b>
            </div>
            <div className="col-md-6">
              date Of Birth: <b>{values.DOB}</b>
            </div>
            <div className="col-md-6">
              date Of Joining: <b>{values.DOJ}</b>
            </div>
            <div className="col-md-6">
              Permanent Address: <b>{values.PermanentAddress}</b>
            </div>
            <div className="col-md-6">
              City: <b>{values.City}</b>
            </div>
            <div className="col-md-6">
              State: <b>{values.State}</b>
            </div>
            <div className="col-md-6">
              Country: <b>{values.Country}</b>
            </div>
            <div className="col-md-6">
              Designation: <b>{values.Designation}</b>
            </div>
            <div className="col-md-6">
              Salary: <b>{values.Salary}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfileComponents;
