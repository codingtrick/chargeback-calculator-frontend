const UserInput = (props) => {
  const { type, name, id, onChange, placeholder, value, status } = props;
  return (
    <>
      {
        // type === "select" ? (
        // <select name={name} id={id}>
        //   {options.map((option, index) => (
        //     <option key={index} value={option}>
        //       {option}
        //     </option>
        //   ))}
        // </select>
        // ) :
        <input
          className="form-control m-1"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          onChange={onChange}
          value={value}
          readOnly={props.status}
        />
      }
    </>
  );
};

export default UserInput;
