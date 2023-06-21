'use client';

import './styles/searchBarResults.scss';
import Link from 'next/link';
import { useEffect } from 'react';

const SearchBarResults = ({ results, isActive }) => {
  const style = {
    top: isActive ? '88px' : '0',
    transition: '0.3s',
  };

  return (
    <>
      <div className="search-bar-results" style={style}>
        <ul className="search-items">
          {results.map((result) => {
            return (
              <li className="search-items__item" key={crypto.randomUUID()}>
                <Link href={'result.link'}>
                  <div className="search-bar__wrapper wrapper">
                    <img
                      className="search-items__image"
                      src={result.images[0]}
                      alt=""
                      lazy
                    />
                    <p className="search-items__title">{result.title}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchBarResults;
