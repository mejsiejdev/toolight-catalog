"use client";

import "./styles/searchBarResults.scss";
import Image from "next/image";
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
    maxHeight: active ? `388px` : "0",
    transition: "0.3s",
  };
  return (
    <>
      <div className="search-bar-results" style={style}>
        <ul ref={ref} className="search-items" style={heightStyle}>
          {results &&
            results.map((result, key) => {
              return (
                <li className="search-items__item" key={key}>
                  <Link href={`/product/${result.id}`}>
                    <Wrapper className="search-bar__wrapper">
                      <div className="search-items__image-bg">
                        <Image
                          className="search-items__image"
                          src={result.images[0]}
                          alt=""
                          width={500}
                          height={500}
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
