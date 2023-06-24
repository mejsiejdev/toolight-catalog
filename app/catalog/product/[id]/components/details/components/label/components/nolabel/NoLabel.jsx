import './styles/noLabel.scss';

const NoLabel = ({ labelRef, styles }) => {
  return (
    <div className="nolabel__container" style={styles}>
      <div ref={labelRef} className="nolabel">
        <p className="nolabel__placeholder nolabel__placeholder--heading">
          Brak etykiety energetycznej
        </p>
        <p className="nolabel__placeholder">Lampa nie ma źródła światła</p>
      </div>
    </div>
  );
};

export default NoLabel;
