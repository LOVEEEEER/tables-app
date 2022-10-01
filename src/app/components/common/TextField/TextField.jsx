import React from "react";

const TextField = ({ name, label, value, onChange, type, error, ...rest }) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
          {...rest}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
