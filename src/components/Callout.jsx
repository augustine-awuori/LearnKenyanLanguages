import React from "react";

import CalloutButton from "./CalloutButton";
import logo from "../assets/logo.jpg";

export default function Callout({ heading, content }) {
  return (
    <section className="block callout grid grid--1x2">
      <img className="grid__image" src={logo} alt="" />
      <article>
        <h2 className="block__heading callout__heading">Callout</h2>
        <p className="block__content callout__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          tempore. Iusto earum doloribus quod exercitationem veniam voluptates
          voluptatibus similique nobis sapiente quia alias quaerat, eveniet
          officia animi sunt numquam nostrum?
        </p>
        <CalloutButton />
      </article>
    </section>
  );
}
