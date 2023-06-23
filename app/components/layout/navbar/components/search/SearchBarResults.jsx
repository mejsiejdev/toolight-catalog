"use client";

import "./styles/searchBarResults.scss";
import Link from "next/link";
import Wrapper from "@/app/components/layout/Wrapper";
import { useEffect, useRef, useState } from "react";

const SearchBarResults = ({ results, isActive, searchBarClosed }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  useEffect(() => {
    setActive(searchBarClosed);
  }, [searchBarClosed]);

  const style = {
    top: active ? "64px" : "-150px",
    transition: "0.3s",
    boxShadow: active
      ? "0 2.3px 5.3px rgba(0, 0, 0, 0.04), 0 7.8px 17.9px rgba(0, 0, 0, 0.06),0 35px 80px rgba(0, 0, 0, 0.1)"
      : "0 0 0 rgba(0,0,0,0)",
  };

  const heightStyle = {
    maxHeight: active ? `400px` : "0",
    transition: "0.3s",
  };
  return (
    <>
      <div className="search-bar-results" style={style}>
        <ul ref={ref} className="search-items" style={heightStyle}>
          {results.map((result) => {
            return (
              <li className="search-items__item" key={crypto.randomUUID()}>
                <Link href={`/catalog/product/${result.id}`}>
                  <Wrapper className="search-bar__wrapper">
                    <div className="search-items__image-bg">
                      <img
                        className="search-items__image"
                        src={result.images[0]}
                        alt=""
                      />
                    </div>
                    <p className="search-items__title">{result.title}</p>
                  </Wrapper>
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
