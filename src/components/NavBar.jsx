import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.jpg";
import menu from "../assets/icons/menu.svg";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const switchExpansion = () => setIsExpanded(!isExpanded);

  const getClassName = () => {
    let name = "nav collapsible ";
    return isExpanded ? (name += "collapsible--expanded") : name;
  };

  return (
    <nav className={getClassName()}>
      <img src={logo} className="nav__logo" alt="logo" />
      <img
        src={menu}
        className="icon nav__icon"
        alt="icon"
        onClick={switchExpansion}
      />
      <ul className="list nav__list collapsible__content">
        <NavLink to="/" onClick={switchExpansion}>
          <li className="nav__item">Languages</li>
        </NavLink>
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
