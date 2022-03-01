import React from "react";
import ViewProfileComponents from "../components/viewProfile.components";
import ViewProfileCustComponents from "../components/viewProfileCutomer.components";

const ViewProfile = () => {
  const usertype = JSON.parse(localStorage.getItem("usertype"));
  switch (usertype.userTypeSelection) {
    case "Customer":
      return <ViewProfileCustComponents />;
    case "Employee" || "Admin":
      return <ViewProfileComponents />;
  }
  return (
    <div>
      <div></div>
    </div>
  );
};

export default ViewProfile;
