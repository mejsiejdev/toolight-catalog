"use client";
import Link from "next/link";
import "./styles/menuDesktop.scss";
import { useState } from "react";
import Categories from "@/app/components/layout/navbar/components/menu/desktop/components/Categories";

const MenuDesktop = ({ items }) => {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const style = {
    left: `${left}px`,
    width: `${width}px`,
    height: `${4}px`,
    opacity: `${opacity}`,
    transition: "0.3s all",
  };
  const mouseEnterItem = (e) => {
    const { width, x } = e.currentTarget.getBoundingClientRect();
    setWidth(width);
    setLeft(x);
    setOpacity(1);
  };
  const mouseLeaveItem = (e) => {
    const { width, x } = e.currentTarget.getBoundingClientRect();
    setWidth(width);
    setLeft(x);
    setOpacity(0);
  };

  return (
    <div className="navbar__menu">
      <div className="menu-container">
        <ul className="menu">
          {items.map((item, key) =>
            item.title !== "Katalog" ? (
              <li className="menu-item" key={key}>
                <Link
                  className="menu-item__link"
                  onMouseEnter={mouseEnterItem}
                  onMouseLeave={mouseLeaveItem}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ) : (
              <Catalog key={key}>
                <Link
                  className="menu-item__link"
                  onMouseEnter={mouseEnterItem}
                  onMouseLeave={mouseLeaveItem}
                  href={item.link}
                >
                  {item.title}
                </Link>
              </Catalog>
            )
          )}
          <span className="menu-hover" style={style}></span>
        </ul>
      </div>
    </div>
  );
};

const Catalog = ({ children }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="h-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <li className="menu-item">{children}</li>
      {hover && <Categories />}
    </div>
  );
};

export default MenuDesktop;
