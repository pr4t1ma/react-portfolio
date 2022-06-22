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
    <header className="  bg-oxblood p-3">
      <div className="container mx-auto grid grid-cols-4 gap-3 ">
        <Logo />
        <Menu items={menuItems} />
      </div>
    </header>
  );
};
