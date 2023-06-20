import "./styles/buttons.scss";

const PrimaryButton = ({ actionOnClick, children }) => {
	return (
		<button onClick={actionOnClick} className="primary-button">
			{children}
		</button>
	);
};
const SecondaryButton = ({ actionOnClick, children }) => {
	return (
		<button onClick={actionOnClick} className="secondary-button">
			{children}
		</button>
	);
};
const TertiaryButton = ({ actionOnClick, children }) => {
	return (
		<button onClick={actionOnClick} className="tertiary-button">
			{children}
		</button>
	);
};
const DangerButton = ({ actionOnClick, children }) => {
	return (
		<button onClick={actionOnClick} className="danger-button">
			{children}
		</button>
	);
};
const SuccessButton = ({ actionOnClick, children }) => {
	return (
		<button onClick={actionOnClick} className="success-button">
			{children}
		</button>
	);
};

export { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton, SuccessButton };
