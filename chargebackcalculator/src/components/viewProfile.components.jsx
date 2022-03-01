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

  const CustomerId = JSON.parse(localStorage.getItem("login")).UserId;
  useEffect(() => {
    loadData();
  }, []);
  const [issuevalues, issuesetValues] = useState([]);
  const loadData = async () => {
    const res = await axios.get(baseUrl + "/issue");
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
                      <h4>{values.EmpName}</h4>
                      <p className="text-secondary mb-1">
                        <b>Employee Id:</b> {state.UserId}
                      </p>
                      <p className="text-secondary mb-1">
                        <b>Acc Type:</b> {values.EmpMailId}
                      </p>
                      <p className="text-muted font-size-sm">
                        <b>Address:</b> {values.PermanentAddress}
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
                      {values.EmpID}
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
                  {/* <hr /> */}
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account No.</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.BankAccountNo}
                    </div>
                  </div> */}
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
                      <h6 className="mb-0">City</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{values.City}</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">State</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {values.State}
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
                          <p className="snap-nor">{values.DOJ}</p>
                        </div>
                        <div className="col-md-6">
                          <p className="snap-high">Mobile No</p>
                          <p className="snap-nor">{values.MobileNumber}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <p className="snap-high">Date of Birth</p>
                          <p className="snap-nor">{values.DOB}</p>
                        </div>
                        <div className="col-md-6">
                          <p className="snap-high">Country</p>
                          <p className="snap-nor">{values.Country}</p>
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
    </>
  );
};

export default ViewProfileComponents;
