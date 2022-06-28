import React from "react";

import SwahiliEnglish from "./SwahiliEnglish";

export default function mapSwahiliEnglish(
  data = [],
  Component = SwahiliEnglish
) {
  return (
    <article>
      {data.map(({ swahili, english }) => (
        <Component english={english.trim()} swahili={swahili.trim()} />
      ))}
    </article>
  );
}
