import React from "react";

export default function EnglishSwahiliInline({ english, swahili }) {
  return (
    <section className="english-swahili-inline">
      <p className="swahili">{swahili} </p> <p> -- {english}</p>
    </section>
  );
}
