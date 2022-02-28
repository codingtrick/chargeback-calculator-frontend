import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const Employee = () => {
  useEffect(() => {
    loadData();
  }, []);
  const [values, setValues] = useState([]);
  const loadData = async () => {
    const res = await axios.get(baseUrl + "/issue");
    console.log(res.data);
    setValues(res.data);
  };
  return (
    <>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Issue Id</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {values.map((value, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.IssueId}</td>
                <td>{value.CustomerId}</td>
                <td>{value.Status}</td>
                <td>{value.Descriptions}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};
const Admin = () => {};
const Customer = () => {};

const ViewIssueComponents = () => {
  const data = JSON.parse(localStorage.getItem("usertype")).userTypeSelection;
  console.log(data);
  switch (data) {
    case "Employee":
      return <Employee />;
    case "Admin":
      return <Admin />;
    case "Customer":
      return <Customer />;
  }
};

export default ViewIssueComponents;
