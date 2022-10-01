import React from "react";

const TableHeader = ({ columns, onSortBy, sortBy }) => {
  const handleCaret = (path) => {
    if (sortBy.path === path) {
      return sortBy.order === "asc" ? (
        <i className="bi bi-caret-down-fill"></i>
      ) : (
        <i className="bi bi-caret-up-fill"></i>
      );
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            onClick={
              columns[column].path ? () => onSortBy(columns[column].path) : null
            }
            role={columns[column].path ? "button" : ""}
            key={column}
            scope="col"
          >
            {columns[column].name}
            {handleCaret(columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
