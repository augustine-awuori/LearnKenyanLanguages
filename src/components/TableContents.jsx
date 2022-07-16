import React from "react";
import { NavLink } from "react-router-dom";

export default function TableContent({ baseURL = "/", contents = [] }) {
  return (
    <nav>
      {contents.map(({ url, heading }) => (
        <NavLink
          to={`${baseURL}${url}`}
          key={heading}
          style={({ isActive }) => ({
            color: isActive ? "#1b0760" : "#5c5577",
            fontWeight: isActive ? "bolder" : "normal",
          })}
        >
          <p className="content" onClick={() => {}}>
            {heading}
          </p>
        </NavLink>
      ))}
    </nav>
  );
}
