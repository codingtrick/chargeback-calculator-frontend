import React from "react";

const UserInput = (props) => {
  console.log(props.texttype);
  return (
    <>
      <input
        type={props.texttype}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </>
  );
};

// const LoginComponents = () => {
//   console.log("hello compoents");
//   return (
//     <div>
//       <h1>Hello from Login Components</h1>
//       <UserInput
//         texttype={"text"}
//         id={"username"}
//         name={"username"}
//         placeholder={"enter username..."}
//       />

//       <UserInput
//         texttype={"password"}
//         id={"password"}
//         name={"password"}
//         placeholder={"enter password..."}
//       />
//     </div>
//   );
// };
const ExpINput = (props) => {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} />
    </>
  );
};

const LoginComponents = (props) => {
  return (
    <div>
      <ExpINput type={"text"} placeholder={"hk"} />
      <ExpINput type={"text"} placeholder={"hk"} />
      <ExpINput type={"text"} placeholder={"hk"} />
      {/* testing */}
    </div>
  );
};

export default LoginComponents;
