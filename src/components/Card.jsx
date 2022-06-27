import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ imageSrc, targetPageUrl = "", title }) {
  return (
    <NavLink to={targetPageUrl}>
      <article className="card">
        <img className="card__image" src={imageSrc} alt="" />
        <p className="card__heading">{title}</p>
      </article>
    </NavLink>
  );
}
