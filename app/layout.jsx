import "./globals.scss";
import Navbar from "@/app/components/layout/navbar/Navbar";
import Footer from "@/app/components/layout/footer/Footer";

const RootLayout = ({ children }) => {
	return (
		<html lang="pl">
			<body>
				<Navbar />

				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
