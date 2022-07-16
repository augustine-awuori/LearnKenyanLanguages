import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavigators({
  baseURL = "/learn-swahili",
  nextUrl = "",
  previousUrl = "",
  nextSectionName,
  previousSectionName,
}) {
  return (
    <section className="pages-navigators">
      <section className="page-navigator">
        <p>Previous</p>
        {previousSectionName && (
          <NavLink
            to={`${baseURL}${previousUrl}`}
            className="page-navigator__section-name"
          >
            <p>{previousSectionName}</p>
          </NavLink>
        )}
      </section>

      <section className="page-navigator next-page-navigator">
        <p>Next</p>
        {nextSectionName && (
          <NavLink
            to={`${baseURL}${nextUrl}`}
            className="page-navigator__section-name"
          >
            <p>{nextSectionName}</p>
          </NavLink>
        )}
      </section>
    </section>
  );
}
