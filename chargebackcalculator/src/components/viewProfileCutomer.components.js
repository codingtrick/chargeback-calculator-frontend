import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const ViewProfileCustComponents = (props) => {
  // const { state } = useLocation();
  const state = JSON.parse(localStorage.getItem("login"));
  console.log(state.UserId);
  const [values, setValues] = useState({});
  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get(baseUrl + "/customer/" + state.UserId);
    console.log(res.data);
    setValues(res.data);
  };

  return (
    <>
      <div className="card">
        <h3 className="text-center">{values.CustomerName}'s Profile</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              Employee Id: <b>{values.CustomerId}</b>
            </div>
            <div className="col-md-6">
              Personal Mail Id: <b>{state.Username}</b>
            </div>
            <div className="col-md-6">
              date Of Birth: <b>{values.DOB}</b>
            </div>
            <div className="col-md-6">
              date Of account opening: <b>{values.DateAccountOpening}</b>
            </div>
            <div className="col-md-6">
              Permanent Address: <b>{values.CustomerAddress}</b>
            </div>
            <div className="col-md-6">
              City: <b>{values.BankCity}</b>
            </div>
            <div className="col-md-6">
              State: <b>{values.BankState}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfileCustComponents;
