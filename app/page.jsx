import { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton, SuccessButton } from "./components/layout/buttons/Buttons.jsx";
import { AiFillApi } from "react-icons/ai";

const HomePage = async () => {
	return (
		<>
			<PrimaryButton icon={<AiFillApi size={20} />}>Lorem ipsum dor somet!</PrimaryButton>
			<SecondaryButton icon={<AiFillApi size={20} />}>Dupa</SecondaryButton>
			<TertiaryButton icon={<AiFillApi size={20} />}>Dupa</TertiaryButton>
			<DangerButton icon={<AiFillApi size={20} />}>Dupa</DangerButton>
			<SuccessButton icon={<AiFillApi size={20} />}>Dupa</SuccessButton>
			<main className="flex min-h-screen flex-col items-center justify-between">
				index
				<a href="/catalog">Products</a>
			</main>
		</>
	);
};

export default HomePage;
