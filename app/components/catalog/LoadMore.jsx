import './styles/loadmore.scss';

const LoadMore = ({ handleData }) => {
  return (
    <button onClick={handleData} className="load-more-btn">
      Załaduj więcej
    </button>
  );
};

export default LoadMore;
