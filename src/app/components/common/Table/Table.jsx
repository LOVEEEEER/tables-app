import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ children, items, ...rest }) => {
  return (
    <>
      {items.length === 0 ? (
        <h1>Список пуст</h1>
      ) : (
        <table className="table">
          <TableHeader {...rest} />
          <TableBody items={items} {...rest} />
        </table>
      )}
    </>
  );
};

export default Table;
