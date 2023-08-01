"use client";
import "./styles/categories.scss";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import useWindowScroll from "@/hooks/useWindowScroll";
import fetcher from "@/app/lib/fetcher";
import useSWR from "swr";

const Categories = () => {
  const { data, isLoading } = useSWR("/api/categories", fetcher);
  const scroll = useWindowScroll();
  const handleArrow = (e) => {
    e.currentTarget.classList.toggle("navbar__dropdown-link--active");
  };
  const style = {
    height: "fit-content",
    top: scroll > 1 ? "70px" : "100px",
    transition: "0.3s",
  };

  return (
    <div className="navbar__dropdown" style={style}>
      {!isLoading ? (
        data &&
        data.categories.map((category, key) => {
          return (
            <Link
              className="navbar__dropdown-link"
              onMouseEnter={handleArrow}
              onMouseLeave={handleArrow}
              href={category}
              key={key}
            >
              {category}{" "}
              <FiArrowRight className="navbar__dropdown-link--arrow" />
            </Link>
          );
        })
      ) : (
        <>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[30%] animate-pulse" />
          </div>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[35%] animate-pulse" />
          </div>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[20%] animate-pulse" />
          </div>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[40%] animate-pulse" />
          </div>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[30%] animate-pulse" />
          </div>
          <div className="navbar__dropdown-link">
            <span className="h-5 bg-toolight-border-gray-light/50 rounded w-[50%] animate-pulse" />
          </div>
        </>
      )}
      <Link
        onMouseEnter={handleArrow}
        onMouseLeave={handleArrow}
        className="navbar__dropdown-link navbar__dropdown-link--all"
        href="/"
      >
        Zobacz wszystkie{" "}
        <FiArrowRight className="navbar__dropdown-link--arrow" />
      </Link>
    </div>
  );
};

export default Categories;
