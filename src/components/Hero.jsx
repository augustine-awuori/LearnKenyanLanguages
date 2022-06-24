import React from "react";

import logo from "../assets/logo.jpg";

export default function Hero() {
  return (
    <section className="block hero grid grid--1x2">
      <img className="grid__image" src={logo} alt="logo" />
      <article>
        <h1 className="block__heading hero__heading">
          Language Training School
        </h1>
        <p className="hero__tagline">
          We teach various Kenyan languages including local and national. We
          teach languages such as Kikuyu, Swahili and Luhya
        </p>
      </article>
    </section>
  );
}
