import React, { useState, useEffect } from "react";
import EntryTable from "../ui/EntryTable";
import Pagination from "../common/Pagination/Pagination";
import { paginate } from "../../utils/paginate";
import { useForm } from "../../hooks/useForm";
import FilterPanel from "../ui/FilterPanel";
import { validatorConfig } from "../ui/FilterPanel/validatorConfig";
import { toast } from "react-toastify";
import tableService from "../../services/table.service";

const EntryListPage = () => {
  const [entries, setEntries] = useState();
  const {
    data,
    handleChange,
    handleReset: handleItemsReset,
    isValid,
  } = useForm(
    {
      searchQuery: "",
      column: "",
      filterType: "",
    },
    validatorConfig
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [filter, setFilter] = useState({});

  console.log(entries);

  const pageSize = 4;

  useEffect(() => {
    getEntries();
  }, []);

  async function getEntries() {
    try {
      const { data } = await tableService.fetchAll();
      setEntries(data);
    } catch (error) {
      toast.error("Произошла ошибка при получении данных. Попробуйте позже");
    }
  }

  const handleDelete = async (id) => {
    try {
      await tableService.delete(id);
      setEntries((prevState) => prevState.filter((item) => item._id !== id));
    } catch (error) {
      toast.error("Произошла ошибка при удалении. Повторите еще раз.");
    }
  };

  const handleChangePage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSortBy = (path) => {
    setSortBy((prevState) => {
      if (sortBy.path === path) {
        return {
          path: path,
          order: prevState.order === "asc" ? "desc" : "asc",
        };
      } else {
        return { path: path, order: "asc" };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({
      column: data.column,
      filter: data.filterType,
    });
  };

  const getFilterEntries = (column) => {
    const filterType = filter.filter;
    if (filterType === "equals") {
      return entries.filter((item) => {
        console.log(item);
        return item[column].toString() === "100";
      });
    } else if (filterType === "contains") {
      return entries.filter((item) => item[column].toString().includes("2"));
    } else if (filterType === "more") {
      return entries.filter((item) => item[column] > 200);
    } else if (filterType === "less") {
      return entries.filter((item) => item[column] < 500);
    }
  };

  if (entries) {
    // Сортируем
    const sortedEntries = [...entries].sort((a, b) => {
      const path = sortBy.path;
      const order = sortBy.order;

      if (Number(a[path]) && Number(b[path])) {
        if (order === "asc") {
          return a[path] - b[path];
        } else {
          return b[path] - a[path];
        }
      } else {
        if (order === "asc") {
          if (a[path] > b[path]) {
            return 1;
          }
          if (a[path] < b[path]) {
            return -1;
          }
          return 0;
        } else {
          if (a[path] > b[path]) {
            return -1;
          }
          if (a[path] < b[path]) {
            return 1;
          }
          return 0;
        }
      }
    });

    const handleReset = () => {
      handleItemsReset();
      setFilter({});
    };

    const filteredEntries =
      Object.keys(filter).length > 0
        ? getFilterEntries(data.column)
        : sortedEntries;

    const searchedQueryEntries = data.searchQuery
      ? filteredEntries.filter((entry) =>
          entry.name.toLowerCase().includes(data.searchQuery.toLowerCase())
        )
      : filteredEntries;

    const entriesCrop = paginate(searchedQueryEntries, currentPage, pageSize);

    return (
      <div className="container">
        <FilterPanel
          data={data}
          onFilter={handleSubmit}
          onChange={handleChange}
          isValid={isValid}
          onReset={handleReset}
        />
        <EntryTable
          sortBy={sortBy}
          onSortBy={handleSortBy}
          onDelete={handleDelete}
          items={entriesCrop}
        />
        <Pagination
          itemsCount={filteredEntries.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      </div>
    );
  }
  return "loading...";
};

export default EntryListPage;
