import React from "react";

import CalloutButton from "./CalloutButton";

export default function Callout({ image, heading, content, targetPageUrl }) {
  return (
    <section className="block callout grid grid--1x2" data-aos="zoom-in">
      <img className="grid__image callout__image" src={image} alt="" />
      <article>
        <h3 className="block__heading callout__heading">{heading}</h3>
        <p className="block__content callout__content">{content}</p>
        <CalloutButton to={targetPageUrl} />
      </article>
    </section>
  );
}
