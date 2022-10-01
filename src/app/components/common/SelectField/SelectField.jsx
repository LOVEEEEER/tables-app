import React from "react";

const SelectField = ({ value, onChange, options, name, disabledOption }) => {
  return (
    <select
      className="form-select me-2"
      value={value}
      name={name}
      onChange={onChange}
    >
      <option disabled value="">
        {disabledOption || "Open this select menu"}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
