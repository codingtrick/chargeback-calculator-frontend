import axios from "axios";
import React, { useEffect, useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const ViewEmployeesComponents = () => {
  const CustomerId = JSON.parse(localStorage.getItem("login")).UserId;
  useEffect(() => {
    loadData();
  }, []);
  const [values, setValues] = useState([]);
  const loadData = async () => {
    const res = await axios.get(baseUrl + "/employeeDetail");
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
              <th scope="col">Name</th>
              <th scope="col">Employee Id</th>
              <th scope="col">Mail Id</th>
              <th scope="col">Mobile Number</th>
            </tr>
          </thead>
          {values.map((value, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.EmpName}</td>
                <td>{value.EmpID}</td>
                <td>{value.EmpMailId}</td>
                <td>{value.MobileNumber}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default ViewEmployeesComponents;
