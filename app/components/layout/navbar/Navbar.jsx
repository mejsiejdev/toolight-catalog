"use client";
import "./styles/navbar.scss";
import NavbarToggle from "@/app/components/layout/navbar/NavbarToggle";
import { useState } from "react";
import NavbarLinks from "@/app/components/layout/navbar/NavbarLinks";
import Logo from "@/app/components/layout/navbar/Logo";
import LogInButton from "@/app/components/layout/navbar/LogInButton";
import SearchBar from "@/app/components/layout/navbar/SearchBar";
import SearchButton from "@/app/components/layout/navbar/SearchButton";
import MobileMenu from "@/app/components/MobileMenu";
import Wrapper from "@/app/components/layout/Wrapper";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [searchBar, setSearchBar] = useState(false);
	const handleToggle = () => {
		if (isActive) return setIsActive(false);
		return setIsActive(true);
	};

	const test = [
		{
			title: "Strona główna",
			link: "/",
		},
		{
			title: "Katalog",
			link: "/catalog",
		},
		{
			title: "Punkty sprzedaży",
			link: "/",
		},
		{
			title: "Sklep internetowy",
			link: "https://toolight.pl/",
		},
		{
			title: "Kontakt",
			link: "/",
		},
	];

	let navStyle;
	window.onscroll = () => {
		navStyle = {
			height: window.pageYOffset > 0 ? "80px" : "100px",
			transition: "0.3s",
		};
		console.log(navStyle);
		return navStyle;
	};
	console.log(navStyle);
	const handleSearch = () => {
		setSearchBar(true);
	};

	return (
		<>
			<header className="header">
				<div className="navbar-container">
					<Wrapper>
						<nav className="nav" style={navStyle}>
							<NavbarToggle toggle={handleToggle} isActive={isActive} isVisible={true} />
							<Logo />
							<NavbarLinks items={test} isVisible={true} />
							<SearchButton onSearch={handleSearch} />
							<LogInButton />
						</nav>
					</Wrapper>
					<SearchBar open={searchBar} />
				</div>
			</header>

			<MobileMenu isOpen={isActive} items={test} />
		</>
	);
};

export default Navbar;
