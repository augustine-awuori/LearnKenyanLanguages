import React from "react";

import useChevron from "../hooks/useChevron";

export default function SwahiliEnglish({ english, swahili }) {
  const { chevron, isExpanded, toggleExpansion } = useChevron();

  return (
    <article className="swahili-english">
      <section
        className="swahili-english__swahili-container"
        onClick={toggleExpansion}
      >
        <p className="swahili-english__swahili">{swahili}</p>
        <img src={chevron} alt="chevron icon" className="icon" />
      </section>
      {isExpanded && (
        <p className="translation swahili-english__english">{english}</p>
      )}
    </article>
  );
}
