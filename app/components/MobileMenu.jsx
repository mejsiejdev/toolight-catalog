"use client";
import "./styles/mobileMenu.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu = ({ isOpen, items }) => {
	const [close, setIsClose] = useState();
	useEffect(() => {
		setIsClose(isOpen);
	}, [isOpen]);
	const style = {
		left: close ? "0" : "-1024px",
	};
	console.log(isOpen, close);
	return (
		<>
			<nav className="mobile-menu" style={style}>
				<div className="wrapper">
					<ul className="mobile-menu__items">
						{items.map((item) => {
							return (
								<li className="mobile-menu__item" key={crypto.randomUUID()}>
									<Link onClick={() => setIsClose(!isOpen)} className="mobile-menu__link" href={item.link}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default MobileMenu;
