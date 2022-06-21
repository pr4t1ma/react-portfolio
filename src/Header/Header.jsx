import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/" },
    { label: "Experence", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <header className=" bg-oxblood grid grid-cols-2 p-3">
      <Logo />
      <Menu items={menuItems} />
    </header>
  );
};
