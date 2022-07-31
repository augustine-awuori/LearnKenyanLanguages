import React from "react";

import useChevron from "../hooks/useChevron";
import icon from "../assets/icons/chevron-right.svg";

export default function SwahiliEnglish({ english, swahili }) {
  const { isExpanded, toggleExpansion } = useChevron();

  const getClassName = () => {
    let name = "swahili-english ";
    return isExpanded ? (name += "collapsible--expanded") : name;
  };

  return (
    <article className={getClassName()}>
      <section
        className="swahili-english__swahili-container"
        onClick={toggleExpansion}
      >
        <p className="swahili-english__swahili">{swahili}</p>
        <img
          src={icon}
          alt="chevron icon"
          className="icon collapsible__chevron"
        />
      </section>
      <article className="collapsible__content">
        <p className="translation swahili-english__english">{english}</p>
      </article>
    </article>
  );
}
