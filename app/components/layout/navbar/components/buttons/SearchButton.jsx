'use client';
import { FiSearch } from 'react-icons/fi';
import './styles/searchButton.scss';

const SearchButton = ({ toggleSearch, getRef }) => {
  return (
    <div className="navbar__search-btn">
      <button ref={getRef} onClick={toggleSearch} className="search-button">
        <FiSearch className="search-icon" size={28} />
      </button>
    </div>
  );
};

export default SearchButton;
