import React from "react";
import { useForm } from "../../../hooks/useForm";
import TextField from "../../common/TextField";
import { validatorConfig } from "./validatorConfig.js";

const AddEntrieForm = ({ onSubmit }) => {
  const { data, handleChange, errors, isValid } = useForm(
    { title: "", amount: "", distance: "" },
    validatorConfig
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: data.title,
      amount: data.amount,
      distance: data.distance,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="title"
        label="Введите название"
        onChange={handleChange}
        type="text"
        value={data.title}
        error={errors.title}
      />
      <TextField
        name="amount"
        label="Введите количество"
        onChange={handleChange}
        type="text"
        value={data.amount}
        error={errors.amount}
      />
      <TextField
        name="distance"
        label="Введите расстояние"
        onChange={handleChange}
        type="text"
        value={data.distance}
        error={errors.distance}
      />
      <button className="btn btn-primary" disabled={!isValid} type="submit">
        Создать
      </button>
    </form>
  );
};

export default AddEntrieForm;
