"use client";
import "./styles/menuMobile.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";

const MenuMobile = ({ items, isOpen, clickedItem }) => {
  const ref = useRef();
  const style = {
    left: isOpen ? "0" : "-1024px",
  };

  const handleArrow = (e) => {
    e.currentTarget.classList.toggle("mobile-menu__link--active");
    console.log(e.target);
  };

  return (
    <nav className="mobile-menu" style={style}>
      <Wrapper>
        <ul className="mobile-menu__items">
          {items.map((item) => {
            return (
              <li
                className="mobile-menu__item"
                ref={ref}
                onMouseEnter={handleArrow}
                onMouseLeave={handleArrow}
                key={crypto.randomUUID()}
              >
                <Link
                  onClick={clickedItem}
                  className="mobile-menu__link"
                  href={item.link}
                >
                  {item.title} <FiArrowRight className="mobile-menu__icon" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </nav>
  );
};

export default MenuMobile;
