import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

  const switchExpansion = () => setIsExpanded(!isExpanded);

  return (
    <nav className="nav collapsible">
      <img src={logo} className="nav__logo" alt="logo" />
      {!isExpanded ? (
        <img
          src={cancel}
          className="icon nav__close-icon"
          alt="icon"
          onClick={switchExpansion}
        />
      ) : (
        <img
          src={menu}
          className="icon nav__close-icon"
          alt="icon"
          onClick={switchExpansion}
        />
      )}
      <ul className={collapsibleClassName}>
        <NavLink to="/partner-with-us" onClick={switchExpansion}>
          <li className="nav__item">Partner With Us</li>
        </NavLink>
        <NavLink to="/contact-us" onClick={switchExpansion}>
          <li className="nav__item">Contact Us</li>
        </NavLink>
        <NavLink to="/login" onClick={switchExpansion}>
          <li className="nav__item">Sign In</li>
        </NavLink>
        <NavLink to="/register" onClick={switchExpansion}>
          <li className="nav__item">Sign Up</li>
        </NavLink>
        <NavLink to="/log-out" onClick={switchExpansion}>
          <li className="nav__item">Sign Out</li>
        </NavLink>
      </ul>
    </nav>
  );
}
