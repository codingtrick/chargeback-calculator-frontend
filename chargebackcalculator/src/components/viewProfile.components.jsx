import axios from "axios";
import React, { useEffect, useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const ViewProfileComponents = (props) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get(baseUrl + "/customer");
    console.log(res);
    console.log(res.data);
    setValues(res.data);
  };

  return (
    <>
      {values.map((value, index) => (
        <div key={index}>
          <div className="card">
            <li>Name: {value.CustomerName}</li>
            <li>Customer Id: {value.CustomerId}</li>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewProfileComponents;
