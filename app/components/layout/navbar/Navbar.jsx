'use client';
import './styles/navbar.scss';
import NavbarToggle from '@/app/components/layout/navbar/NavbarToggle';
import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    if (isActive) return setIsActive(false);
    return setIsActive(true);
  };
  return (
    <header>
      <nav className="nav">
        <div className="wrapper">
          <div className="navbar__toggle-submenu">
            <NavbarToggle
              toggle={handleToggle}
              isActive={isActive}
              isVisible={true}
            />
          </div>
          <div className="navbar__menu"></div>
          <div className="navbar__search"></div>
          <div className="navbar__user"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
