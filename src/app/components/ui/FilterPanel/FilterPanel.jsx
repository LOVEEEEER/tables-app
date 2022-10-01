import React from "react";
import SelectField from "../../common/SelectField";
import TextField from "../../common/TextField";

const FilterPanel = ({ data, onChange, onFilter, isValid, onReset }) => {
  // компоненты SelectField подстроил так чтобы они обрабатывали массив (options) с ключами value, label
  return (
    <form onSubmit={onFilter}>
      <TextField
        name="searchQuery"
        value={data.searchQuery}
        onChange={onChange}
        placeholder="Поиск..."
      />
      <div className="d-flex align-items-center mb-3">
        <SelectField
          options={[
            { value: "name", label: "Название" },
            { value: "amount", label: "Количество" },
            { value: "distance", label: "Расстояние" },
          ]}
          disabledOption="Выберите колонку"
          name="column"
          value={data.column}
          onChange={onChange}
        />
        <SelectField
          options={[
            { value: "equals", label: "Равно 100" },
            { value: "contains", label: "Содержит число 2" },
            { value: "more", label: "Больше 200" },
            { value: "less", label: "Меньше 500" },
          ]}
          value={data.filterType}
          disabledOption="Выберите условие"
          onChange={onChange}
          name="filterType"
        />
        <button className="btn btn-primary mx-2 me-2" disabled={!isValid}>
          Фильтровать
        </button>
        <button type="button" className="btn btn-secondary" onClick={onReset}>
          Сброс
        </button>
      </div>
    </form>
  );
};

export default FilterPanel;
