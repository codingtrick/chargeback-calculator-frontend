import React from "react";
import { useState } from "react";
import axios from "axios";
import UserInput from "./UserInput.components";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data.entries()));
  axios
    .post(baseUrl + "/issue", Object.fromEntries(data.entries()))
    .then((r) => {
      console.log("Done with Issue" + r);
    });
};

const IssueComponents = () => {
  const [values, setValues] = useState({});

  const state = JSON.parse(localStorage.getItem("login"));
  console.log(state);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
      <div className="container" style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <div className="card" style={{ padding: "10px" }}>
            <h1 className="text-center">Issue Component</h1>
            <div className="row">
              {inputs.map((input, index) => (
                <div className="col-md-4 col-sm-12" key={index}>
                  {input.label}
                  <UserInput
                    {...input}
                    value={values[input.name] || input.value}
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
