'use client';
import './styles/dropdown.scss';
import { FiChevronDown } from 'react-icons/fi';
import { useLayoutEffect } from 'react';

const Dropdown = ({ children, onAction, open }) => {
  return (
    <div
      className={`dropdown__header ${open ? 'dropdown__header--active' : ''}`}
      onClick={onAction}
    >
      <h4 className="dropdown__header-title">{children}</h4>
      <FiChevronDown className="dropdown__header-icon" size={24} />
    </div>
  );
};

export default Dropdown;
