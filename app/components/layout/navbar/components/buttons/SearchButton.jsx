import { FiSearch } from "react-icons/fi";
import "./styles/searchButton.scss";

const SearchButton = ({ getRef }) => {
  return (
    <div className="navbar__search-btn">
      <button title="Szukaj produktów" ref={getRef} className="search-button">
        <FiSearch className="search-icon" size={28} />
      </button>
    </div>
  );
};

export default SearchButton;
