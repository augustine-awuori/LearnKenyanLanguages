import React from "react";

import logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <main className="hero grid grid--1x2">
      <article>
        <h1 className="hero__heading">Language Training School</h1>
        <p className="hero__tagline">
          We teach various Kenyan languages including local and national. We
          teach languages such as Kikuyu, Swahili and Luhya
        </p>
      </article>
      <img className="hero__logo" src={logo} alt="logo" />
    </main>
  );
}
