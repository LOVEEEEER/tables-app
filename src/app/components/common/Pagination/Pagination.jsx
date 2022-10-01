import React from "react";

const Pagination = ({ itemsCount, pageSize, currentPage, onChangePage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  if (pageCount === 1) return null;
  return (
    <nav
      className="d-flex justify-content-center"
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <button className="page-link" onClick={() => onChangePage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
