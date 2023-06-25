import './styles/noLabel.scss';
import { FiAlertTriangle } from 'react-icons/fi';

const NoLabel = ({ labelRef, styles }) => {
  return (
    <div className="nolabel__container" style={styles}>
      <div ref={labelRef} className="nolabel">
        <FiAlertTriangle size={32} />
        <p className="nolabel__placeholder nolabel__placeholder--heading">
          Brak etykiety energetycznej
        </p>
        <p className="nolabel__placeholder">Lampa nie ma źródła światła</p>
      </div>
    </div>
  );
};

export default NoLabel;
