import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      <div className="container mx-auto md:grid md:grid-cols-4 gap-3">
        <FontAwesomeIcon
          icon={faBurger}
          className="text-white"
          onClick={toggleMenu}
        />
        <Logo />
        {isMenuOpen && <Menu items={menuItems} />}
      </div>
    </header>
  );
};
