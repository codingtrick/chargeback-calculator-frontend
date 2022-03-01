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

  const CustomerId = JSON.parse(localStorage.getItem("login")).UserId;
  useEffect(() => {
    loadData();
  }, []);
  const [issuevalues, issuesetValues] = useState([]);
  const loadData = async () => {
    const res = await axios.get(baseUrl + "/issue?customerid=" + CustomerId);
    console.log(res.data);
    issuesetValues(res.data);
  };

  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
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
                      <h4>{values.CustomerName}</h4>
                      <p className="text-secondary mb-1">
                        <b>Cust Id:</b> {state.UserId}
                      </p>
                      <p className="text-secondary mb-1">
                        <b>Acc Type:</b> {values.BankAccountType}
                      </p>
                      <p className="text-muted font-size-sm">
                        <b>Address:</b> {values.CustomerAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Customer ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.CustomerId}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {state.Username}
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (+91) {values.}
                    </div>
                  </div> */}
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account No.</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.BankAccountNo}
                    </div>
                  </div>
                  <hr></hr>
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">IFSC</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">BKID0007275</div>
                  </div>
                  <hr></hr> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Branch Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.BankAccountBranch}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Branch City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.BankCity}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutters-sm">
            <div className="col-md-12">
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Profile Snapshots
                      </h6>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="snap-high">Acc Open Date</p>
                          <p className="snap-nor">
                            {values.DateAccountOpening}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="snap-high">Account Type</p>
                          <p className="snap-nor">{values.BankAccountType}</p>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-md-6">
                          <p className="snap-high">Marital Status</p>
                          <p className="snap-nor">Unmarried</p>
                        </div>
                        <div className="col-md-6">
                          <p className="snap-high">Nominee</p>
                          <p className="snap-nor">Rohan Singh</p>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="col-md-6">
                          <p className="snap-high">Date of Birth</p>
                          <p className="snap-nor">{values.DOB}</p>
                        </div>
                        <div className="col-md-6">
                          <p className="snap-high">Credit Score</p>
                          <p className="snap-nor">749</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        Recent Activity
                      </h6>
                      <table className="table">
                        <tr>
                          <th>S.No</th>
                          <th>Issue Id</th>
                          <th>Ammount</th>
                          <th>Status</th>
                        </tr>
                        {issuevalues.map((value, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.IssueId}</td>
                            <td>{value.Ammount}</td>
                            <td>{value.Status}</td>
                          </tr>
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card">
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
      </div> */}
    </>
  );
};

export default ViewProfileCustComponents;
