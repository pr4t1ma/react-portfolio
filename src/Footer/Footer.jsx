import { FooterMenu } from "../FooterMenu/FooterMenu";

export const Footer = () => {
  const footermenu = [
    { label: "home", href: "/" },
    { label: "home", href: "/" },
    { label: "home", href: "/" },
    { label: "home", href: "/" },
  ];
  return (
    <div className="container mx-auto bg-oxblood p-10 text-center shadow-4xl shadow-red-800 text-white">
      <h1 className="text-xl ">Hello welcome to my site</h1>
      <FooterMenu items={footermenu} />
      <p>@copyright 2022</p>
    </div>
  );
};
