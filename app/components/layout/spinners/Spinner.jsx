import "./styles/spinner.scss";

const Spinner = ({ fullPage, pageHeight, size }) => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: fullPage && "100%",
    height: pageHeight,
    background: "#ffffff",
    border: "1px solid #c6c6c6",
    margin: "-1px",
  };
  return (
    <div className="spinner-container" style={styles}>
      <div className="spin-loader py-8" aria-hidden="true"></div>
    </div>
  );
};

export default Spinner;
