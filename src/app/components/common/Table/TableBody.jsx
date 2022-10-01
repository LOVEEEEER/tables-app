import React from "react";

const TableBody = ({ items, columns }) => {
  const renderContent = (item, column) => {
    const columnItem = columns[column];
    if (columnItem.component) {
      const component = columnItem.component;
      if (typeof component === "function") {
        return component(item);
      }
    }
    return item[columnItem.path];
  };
  return (
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
