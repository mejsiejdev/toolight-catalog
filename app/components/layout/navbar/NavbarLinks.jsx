'use client';
import Link from 'next/link';
import './styles/navbarLinks.scss';
import { useState } from 'react';

const NavbarLinks = ({ items, isVisible }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const style = {
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    opacity: `${opacity}`,
    transition: '0.3s all',
  };
  const mouseEnterItem = (e) => {
    const { width, height, x } = e.currentTarget.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
    setLeft(x);
    setOpacity(1);
  };
  const mouseLeaveItem = (e) => {
    const { width, height, x } = e.currentTarget.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
    setLeft(x);
    setOpacity(0);
  };

  return (
    <>
      {isVisible && (
        <div className="navbar__menu">
          <div className="menu-container">
            <ul className="menu">
              {items.map((item) => {
                return (
                  <li className="menu-item" key={crypto.randomUUID()}>
                    <Link
                      className="menu-item__link"
                      onMouseEnter={mouseEnterItem}
                      onMouseLeave={mouseLeaveItem}
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <span className="menu-hover" style={style}></span>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarLinks;
