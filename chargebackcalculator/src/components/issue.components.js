import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import UserInput from "./UserInput.components";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const IssueComponents = () => {
  const initialValue = {
    descriptions: "",
    IssueDateTime: "",
    ammount: "",
    TransitionType: "",
    TransitionMode: "",
  };
  const [values, setValues] = useState(initialValue);

  const state = JSON.parse(localStorage.getItem("login"));
  console.log(state);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    axios
      .post(baseUrl + "/issue", Object.fromEntries(data.entries()))
      .then((r) => {
        alert("issue submitted");
        setValues(initialValue);
      });
  };

  const loginData = JSON.parse(localStorage.getItem("login"));
  const [namevalues, namesetValues] = useState({});
  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = async () => {
    const res = await axios.get(baseUrl + "/customer/" + loginData.UserId);
    console.log(res.data);
    namesetValues(res.data);
  };

  const inputs = [
    {
      type: "number",
      placeholder: "Enter Customer Id",
      name: "customerId",
      label: "Customer Id",
      value: state.UserId,
      status: true,
    },
    {
      type: "text",
      placeholder: "Describe your point",
      name: "descriptions",
      label: "Description",
    },
    {
      type: "datetime-local",
      placeholder: "Issue Date Time",
      name: "IssueDateTime",
      label: "Enter Issue Date and Time",
    },
    // {
    //   type: "select",
    //   placeholder: "dropdown",
    //   name: "dropdown",
    //   label: "dropdown",
    //   options: ["dropdown 1", "dropdown 2"],
    // },
    {
      type: "number",
      placeholder: "Enter Ammount",
      name: "ammount",
      label: "Enter Ammount",
    },
    {
      type: "text",
      placeholder: "Enter Transtion Type",
      name: "TransitionType",
      label: "Enter Transtion Type",
    },
    {
      type: "text",
      placeholder: "Enter Transtion Mode",
      name: "TransitionMode",
      label: "Enter Transtion Mode",
    },
  ];

  return (
    <div className="app-wraper">
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
      <div className="container" style={{ display: "flex" }}>
        <form onSubmit={handleSubmit} className="formSubmitted">
          <div className="card" style={{ padding: "10px" }}>
            <h1 className="text-center">Issue Component</h1>
            <div className="row">
              {inputs.map((input, index) => (
                <div className="col-md-4 col-sm-12" key={index}>
                  {input.label}
                  <UserInput
                    {...input}
                    value={input.value ? input.value : values[input.name]}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              ))}
            </div>
            <button
              className=" btn btn-primary"
              style={{ width: "30%", margin: "0 auto" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueComponents;
