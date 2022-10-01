import React from "react";
import AddEntrieForm from "../ui/AddEntrieForm";
import { toast } from "react-toastify";
import tableService from "../../services/table.service";

const AddEntryPage = () => {
  const handleSubmit = async (entry) => {
    try {
      await tableService.post(entry);
      toast("Данные успешно добавлены");
    } catch (error) {
      toast.error("Сущность с таким названием уже существует");
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Добавить данные</h3>
          <AddEntrieForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddEntryPage;
