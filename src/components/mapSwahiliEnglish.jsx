import React from "react";

import SwahiliEnglish from "./SwahiliEnglish";

export default function mapSwahiliEnglish(data = []) {
  return (
    <article>
      {data.map(({ swahili, english }) => (
        <SwahiliEnglish english={english.trim()} swahili={swahili.trim()} />
      ))}
    </article>
  );
}
