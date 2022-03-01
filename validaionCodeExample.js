//form validation
const [errors, setErrors] = useState({});
const validateForm = (event, value) => {
  const errorsObj = {};
  if (event) {
    if (event.target?.name === "empName" && event.target.value.length === 0) {
      errorsObj.empName = "Full name is required";
    }
    if (event.target?.name === "empEmail" && event.target.value.length === 0) {
      errorsObj.empEmail = "Company Email is required";
    }
    if (
      event.target?.name === "empEmail" &&
      event.target.value.length !== 0 &&
      !validator.isEmail(event.target.value)
    ) {
      errorsObj.empEmail = "Invalid email";
    }
    if (
      event.target?.name === "empPersonalEmail" &&
      event.target.value.length !== 0 &&
      !validator.isEmail(event.target.value)
    ) {
      errorsObj.empPersonalEmail = "Invalid email";
    }
    if (
      event.target?.name === "empAboutMe" &&
      event.target.value.length > 500
    ) {
      errorsObj.empName = "About me exceeded the limit";
    }
  }
  if (value) {
    if (value[0] === "empDepartment" && !value[1]) {
      errorsObj.empDepartment = "Department is required";
    }
    if (value[0] === "empDesignation" && !value[1]) {
      errorsObj.empDesignation = "Designation is required";
    }
    if (value[0] === "empDoj" && !value[1]) {
      errorsObj.empDoj = "Date of joining is required";
    }
    if (value[0] === "empDoj" && value[1]?.toString() === "Invalid Date") {
      errorsObj.empDoj = "Date of joining is invalid";
    }
    if (value[0] === "empReportingManager" && !value[1]) {
      errorsObj.empReportingManager = "Reporting manager is required";
    }
    if (value[0] === "empDob" && !value[1]) {
      errorsObj.empDob = "Date of birth is required";
    }
    if (value[0] === "empDob" && value[1]?.toString() === "Invalid Date") {
      errorsObj.empDob = "Date of birth is invalid";
    }
  }
  setErrors(errorsObj);
};

const validateData = (data) => {
  const errorsObj = {};
  if (data.empName.length === 0) {
    errorsObj.empName = "Full name is required";
  }
  if (data.empEmail.length === 0) {
    errorsObj.empEmail = "Email is required";
  }
  if (data.empEmail.length !== 0 && !validator.isEmail(data.empEmail)) {
    errorsObj.empEmail = "Invalid email";
  }
  if (!data.empDepartment || data.empDepartment.length === 0) {
    errorsObj.empDepartment = "Department is required";
  }
  if (!data.empDesignation || data.empDesignation.length === 0) {
    errorsObj.empDesignation = "designation is required";
  }
  if (!data.empDoj) {
    errorsObj.empDoj = "Date of joining is required";
  }
  if (data.empDoj?.toString() === "Invalid Date") {
    errorsObj.empDoj = "Date of joining is invalid";
  }
  if (!data.empReportingManager || data.empReportingManager.length === 0) {
    errorsObj.empReportingManager = "Reporting manager is required";
  }
  if (!data.empDob) {
    errorsObj.empDob = "Date of birth is required";
  }
  if (data.empDob?.toString() === "Invalid Date") {
    errorsObj.empDob = "Date of birth is invalid";
  }
  if (
    data.empPersonalEmail?.length !== 0 &&
    !validator.isEmail(data.empPersonalEmail)
  ) {
    errorsObj.empPersonalEmail = "Invalid email";
  }
  if (data.empAboutMe.length > 500) {
    errorsObj.empAboutMe = "About me exceeded the limit";
  }
  return errorsObj;
};
