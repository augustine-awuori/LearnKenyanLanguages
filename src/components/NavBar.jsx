import React, { useEffect, useState } from "react";

import cancel from "../assets/icons/cancel.svg";
import logo from "../assets/logo.jpg";
import menu from "../assets/icons/menu.svg";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState();
  const [collapsibleClassName, setCollapsibleClassName] =
    useState("list nav__list ");

  useEffect(() => {
    function getNavItemsName() {
      let name = "collapsible__content";
      return isExpanded ? "collapsible--expanded " + name : name;
    }

    setCollapsibleClassName(collapsibleClassName + getNavItemsName());
  }, [isExpanded]);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <nav className="nav collapsible">
      <img src={logo} className="nav__logo" alt="logo" />
      {!isExpanded ? (
        <img
          src={cancel}
          className="icon nav__close-icon"
          alt="logo"
          onClick={handleClick}
        />
      ) : (
        <img
          src={menu}
          className="icon nav__close-icon"
          alt="logo"
          onClick={handleClick}
        />
      )}
      <ul className={collapsibleClassName}>
        <li className="nav__item">Partner With Us</li>
        <li className="nav__item">Contact Us</li>
        <li className="nav__item">Sign In</li>
        <li className="nav__item">Sign Up</li>
      </ul>
    </nav>
  );
}
