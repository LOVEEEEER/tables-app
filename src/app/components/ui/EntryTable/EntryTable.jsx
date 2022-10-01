import React from "react";
import Table from "../../common/Table";

const EntryTable = ({ onDelete, ...rest }) => {
  const columns = {
    date: {
      component: (item) => {
        const date = item.createdAt.slice(0, 10);
        return <p>{date}</p>;
      },
      name: "Дата",
    },
    title: {
      path: "name",
      name: "Название",
    },
    amount: {
      path: "amount",
      name: "Количество",
    },
    distance: {
      path: "distance",
      name: "Расстояние",
    },
    delete: {
      component: (item) => (
        <button onClick={() => onDelete(item._id)} className="btn btn-danger">
          delete
        </button>
      ),
    },
  };
  return <Table columns={columns} {...rest} />;
};

export default EntryTable;
