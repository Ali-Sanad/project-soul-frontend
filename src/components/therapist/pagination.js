import React from "react";
import { Link } from "react-router-dom";
const Pagination = ({
  therapistsPerPage,
  totalTherapists,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTherapists / therapistsPerPage); i++) {
    pageNumbers.push(i);
  }
  const active = function (currentPage, n) {
    if (currentPage === n) {
      return "page-item active";
    } else {
      return "page-item";
    }
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={active(currentPage, number)}>
            <Link
              onClick={() => paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
