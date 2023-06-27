"use client";
import "./styles/navbar.scss";
import { useRef, useState } from "react";
import MenuMobileToggle from "@/app/components/layout/navbar/components/menu/mobile/MenuMobileToggle";
import MenuDesktop from "@/app/components/layout/navbar/components/menu/desktop/MenuDesktop";
import Logo from "@/app/components/layout/navbar/components/logo/Logo";
import LogInButton from "@/app/components/layout/navbar/components/buttons/LogInButton";
import SearchBar from "@/app/components/layout/navbar/components/search/SearchBar";
import SearchButton from "@/app/components/layout/navbar/components/buttons/SearchButton";
import MenuMobile from "@/app/components/layout/navbar/components/menu/mobile/MenuMobile";
import Wrapper from "@/app/components/layout/Wrapper";
import useWindowSize from "@/hooks/useWindowResize";
import useWindowScroll from "@/hooks/useWindowScroll";
import useClickOutside from "@/hooks/useClickOutside";
import Categories from "@/app/components/layout/navbar/components/menu/desktop/components/Categories";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const ref = useRef(null);
  const secRef = useRef(null);
  
  const clickedItem = (e) => {
    if (e.target.classList.contains("mobile-menu__link")) {
      setToggle(false);
      setOpen(false);
    }
  };
  
  const handleToggle = () => {
    if (toggle) {
      setToggle(false);
      setOpen(false);
    } else {
      setToggle(true);
      setOpen(true);
    }
  };
  
  useClickOutside(ref, secRef, setSearchBar, true);
  const toggleSearch = (e) => {
    if (!searchBar && e.currentTarget.classList.contains("search-button")) {
      console.log("przycisk");
      setSearchBar(true);
    } else {
      console.log("otwarte i przycisk");
      setSearchBar(false);
    }
  };
  
  const size = useWindowSize();
  const scroll = useWindowScroll();
  
  const test = [
    {
      title: "Strona główna",
      link: "/"
    },
    {
      title: "Katalog",
      link: "/"
    },
    {
      title: "Punkty sprzedaży",
      link: "/"
    },
    {
      title: "Sklep internetowy",
      link: "https://toolight.pl/"
    },
    {
      title: "Kontakt",
      link: "/"
    }
  ];
  
  const navbarSize = {
    height: scroll > 1 ? "70px" : "100px",
    transition: "0.3s"
  };
  
  const navbarShadow = {
    boxShadow:
      scroll > 1 && !searchBar
        ? "0 2.3px 5.3px rgba(0, 0, 0, 0.04), 0 7.8px 17.9px rgba(0, 0, 0, 0.06),0 35px 80px rgba(0, 0, 0, 0.1)"
        : "0 0 0 rgba(0,0,0,0)",
    transition: "0.3s"
  };
  
  return (
    <>
      <header className="header">
        <div className="navbar-container" style={navbarShadow}>
          <Wrapper>
            <nav className="nav" style={navbarSize}>
              {size.width <= 1024 && (
                <MenuMobileToggle onToggle={handleToggle} isToggled={toggle} />
              )}
              <Logo />
              {size.width >= 1024 && <MenuDesktop items={test} />}
              <SearchButton getRef={secRef} toggleSearch={toggleSearch} />
              <LogInButton />
            </nav>
          </Wrapper>
          <SearchBar getRef={ref} isOpen={searchBar} />
        </div>
        {/*<Categories />*/}
      </header>
      <MenuMobile clickedItem={clickedItem} items={test} isOpen={open} />
    </>
  );
};

export default Navbar;
