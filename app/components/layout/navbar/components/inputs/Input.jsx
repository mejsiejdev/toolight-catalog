import './styles/input.scss';

const Input = ({ placeholder, onSearch }) => {
  return (
    <>
      <div className="input-container">
        <form>
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
