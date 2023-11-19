/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import { useMemo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onChangePage }) => {
  const onButtonPress = (newPage: number) => {
    if (newPage !== currentPage) {
      onChangePage(newPage);
    }
  };

  const pagesToDisplay = useMemo(() => {
    const temp = [];

    if (totalPages <= 6) {
      for (let i = 0; i < totalPages; i++) {
        temp.push(i);
      }

      return temp;
    }

    if (currentPage <= 2) {
      temp.push(1, 2, 3, 0);

      for (let i = 2; i >= 0; i--) {
        temp.push(totalPages - i);
      }

      return temp;
    }

    if (currentPage < totalPages - 5) {
      temp.push(currentPage - 1, currentPage, currentPage + 1, 0);
      temp.push(totalPages - 2, totalPages - 1, totalPages);

      return temp;
    }

    for (let i = 5; i >= 0; i--) {
      temp.push(totalPages - i);
    }

    return temp;
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
      <div
        className={`pagination_link pagination_link--first ${currentPage === 1 ? 'pagination_link--inactive' : ''}`}
        onClick={() => onButtonPress(1)}
      >
        First
      </div>

      {pagesToDisplay.map((page) => {
        if (page === 0) {
          return (
            <div key={page} className="pagination_link pagination_link-separator">
              ...
            </div>
          );
        }

        return (
          <div
            key={page}
            className={`pagination_link ${currentPage === page ? 'pagination_link--current' : ''}`}
            onClick={() => onButtonPress(page)}
          >
            {page}
          </div>
        );
      })}

      <div
        className={`pagination_link pagination_link--last ${
          currentPage === totalPages ? 'pagination_link--inactive' : ''
        }`}
        onClick={() => onButtonPress(totalPages)}
      >
        Last
      </div>
    </div>
  );
};
