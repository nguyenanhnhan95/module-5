import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (data) => {
    const { selected } = data;
    onPageChange(selected);
  };

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={currentPage}
    />
  );
};

export default Pagination;