import './styles/input.scss';
import { FiSearch } from 'react-icons/fi';

const Input = ({ placeholder, icon, onSearch }) => {
  return (
    <>
      <div className="input-container">
        <form>
          {icon && (
            <button type="submit" className="searchbar-button">
              <FiSearch className="icon" size={20} />
            </button>
          )}
          <input
            onChange={onSearch}
            className="input"
            type="text"
            placeholder={placeholder}
          />
        </form>
      </div>
    </>
  );
};
export default Input;
