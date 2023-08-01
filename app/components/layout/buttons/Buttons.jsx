"use client";
import "./styles/buttons.scss";

const TextWithIcon = {
  paddingLeft: "12px",
  paddingRight: "8px",
};

const PrimaryButton = ({ actionOnClick, children, icon }) => {
  return (
    <button
      onClick={actionOnClick}
      className="button button--primary w-full md:w-auto"
    >
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        {children && (
          <span
            className="button-title whitespace-nowrap"
            style={icon && TextWithIcon}
          >
            {children}
          </span>
        )}
      </span>
    </button>
  );
};
const SecondaryButton = ({ actionOnClick, children, icon }) => {
  return (
    <button onClick={actionOnClick} className="button button--secondary">
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        {children && (
          <span className="button-title" style={icon && TextWithIcon}>
            {children}
          </span>
        )}
      </span>
    </button>
  );
};
const TertiaryButton = ({ actionOnClick, children, icon }) => {
  return (
    <button onClick={actionOnClick} className="button button--tertiary">
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        {children && (
          <span className="button-title" style={icon && TextWithIcon}>
            {children}
          </span>
        )}
      </span>
    </button>
  );
};
const DangerButton = ({ actionOnClick, children, icon }) => {
  return (
    <button onClick={actionOnClick} className="button button--danger">
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        {children && (
          <span className="button-title" style={icon && TextWithIcon}>
            {children}
          </span>
        )}
      </span>
    </button>
  );
};
const SuccessButton = ({ actionOnClick, children, icon }) => {
  return (
    <button onClick={actionOnClick} className="button button--success">
      <span className="button-content">
        {icon && <span className="button-icon">{icon}</span>}
        {children && (
          <span className="button-title" style={icon && TextWithIcon}>
            {children}
          </span>
        )}
      </span>
    </button>
  );
};

export {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DangerButton,
  SuccessButton,
};
