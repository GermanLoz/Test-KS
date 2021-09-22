import React from 'react';

const Pagination = (Props) => {
  const { maximoDeTablas, tablas, paginate } = Props
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tablas / maximoDeTablas ); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={(e) => {
                 e.preventDefault()
                 paginate(number)}} href='!#' className='page-button'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;