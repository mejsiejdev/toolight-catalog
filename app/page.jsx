import { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton, SuccessButton } from "./components/layout/buttons/Buttons.jsx";

const HomePage = async () => {
	return (
		<>
			<PrimaryButton>Dupa</PrimaryButton>
			<SecondaryButton>Dupa</SecondaryButton>
			<TertiaryButton>Dupa</TertiaryButton>
			<DangerButton>Dupa</DangerButton>
			<SuccessButton>Dupa</SuccessButton>
			<main className="flex min-h-screen flex-col items-center justify-between">
				index
				<a href="/catalog">Products</a>
			</main>
		</>
	);
};

export default HomePage;
