import React from "react";
import { NavLink } from "react-router-dom";

export default function CalloutButton({ label = "More Info", to = "" }) {
  return (
    <NavLink className="btn callout__btn" to={to}>
      {label}
    </NavLink>
  );
}
