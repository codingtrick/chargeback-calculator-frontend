import React from "react";
import RegisterCustComponents from "../components/register-cutomer.components";
import RegisterComponents from "../components/register.components";

const Register = () => {
  const usertype = JSON.parse(localStorage.getItem("usertype"));
  switch (usertype.userTypeSelection) {
    case "Customer":
      return <RegisterCustComponents />;
    case "Employee" || "Admin":
      return <RegisterComponents />;
  }
};

export default Register;
