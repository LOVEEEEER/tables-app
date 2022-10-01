import { useState, useEffect } from "react";
import { validator } from "../utils/validator";

// Реализовал кастомный хук useForm для того чтобы не делать одну и ту же логику по несколько раз

export const useForm = (initialState, config) => {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const validate = () => {
    if (Object.keys(data).length) {
      const errors = validator(data, config);
      setErrors(errors);
    }
  };
  useEffect(() => {
    if (config) {
      validate();
    }
  }, [data]);
  const handleChange = ({ target: { name, value } }) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleReset = () => {
    setData(initialState);
  };

  const isValid = Object.keys(errors).length === 0;

  return { data, handleChange, handleReset, errors, isValid };
};
