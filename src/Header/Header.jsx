import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hamburgerIcon = (
    <faBurger
      className="Hamburger"
      size="50px"
      color="white"
      onClick={() => setMenuOpen(!true)}
    />
  );

  const closeIcon = (
    <faBurger
      className="Hamburger"
      size="50px"
      color="white"
      onClick={() => setMenuOpen(!true)}
    />
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/" },
    { label: "Experence", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <header className="  bg-oxblood p-3">
      <div className="container w-fit mx-auto md:grid md:grid-cols-4 gap-3 lg:grid lg:grid-cols-2 ">
        <FontAwesomeIcon
          icon={faBurger}
          className="hamburgerIcon text-white visible md:hidden"
          onClick={toggleMenu}
        />
        <Logo />
        <div className="mobile-menu md:hidden">
          {isMenuOpen ? closeIcon : hamburgerIcon}
          {isMenuOpen && <Menu items={menuItems} />}
        </div>
        <div className="desktop-menu hidden md:block lg:block">
          <Menu items={menuItems} />
        </div>
      </div>
    </header>
  );
};
