import "./styles/label.scss";
import Image from "next/image";

const Label = ({ labelRef, label, styles }) => {
  return (
    <div className="label__container" style={styles}>
      <Image ref={labelRef} src={label} alt="" className="label__image" />
    </div>
  );
};

export default Label;
