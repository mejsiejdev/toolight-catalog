import './styles/label.scss';

const Label = ({ labelRef, label, styles }) => {
  return (
    <div className="label__container" style={styles}>
      <img ref={labelRef} src={label} alt="" className="label__image" />
    </div>
  );
};

export default Label;
