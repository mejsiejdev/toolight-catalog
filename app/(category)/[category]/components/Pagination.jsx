'use client';
import './styles/pagination.scss';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const Pagination = ({ pages, changePage, currentPage }) => {
  const [pagination, setPagination] = useState([]);
  const handlePagination = () => {
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === pages) return [pages - 2, pages - 1, pages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };
  useEffect(() => {
    setPagination(handlePagination());
  }, [currentPage]);
  return (
    <>
      <div className="pagination">
        {currentPage !== 1 && (
          <button
            className="pagination__button pagination__button--prev"
            onClick={changePage}
            data-page="1"
          >
            Pierwsza
          </button>
        )}

        {pagination.map((btn) => {
          return (
            <button
              className={`pagination__button ${
                btn === currentPage && 'pagination__button--current'
              }`}
              key={crypto.randomUUID()}
              onClick={changePage}
              data-page={btn}
            >
              {btn}
            </button>
          );
        })}
        {currentPage !== pages && (
          <button
            className="pagination__button pagination__button--next"
            onClick={changePage}
            data-page={pages}
          >
            Ostatnia
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
