import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export const YoutubeMenu = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function openMenu() {
    setIsMenuOpen(true);
  }
  function menuClose() {
    setIsMenuOpen(false);
  }
  return (
    <div className="container mx-auto my-7">
      <div className="font-icon" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <ul className="sm:flex gap-4 ">
        <div className="font-ico" onClick={menuClose}>
          <FontAwesomeIcon className="text-2xl" icon={faMultiply} />
        </div>
        <div>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faMultiply} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        {isMenuOpen &&
          items.map((item) => (
            <li key={item.label} className="hover:border-b-2 p-1">
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
