import React from "react";

import SwahiliEnglish from "./SwahiliEnglish";

export default function MapSwahiliEnglish({
  data = [],
  englishPrefix = "",
  FooterComponent,
  HeaderComponent,
  Component = SwahiliEnglish,
  englishPickerName = "english",
  swahiliPickerName = "swahili",
}) {
  return (
    <article>
      {HeaderComponent && <HeaderComponent />}
      {data.map((item) => (
        <Component
          key={item[englishPickerName.trim()] + item[swahiliPickerName.trim()]}
          english={`${englishPrefix} ${item[englishPickerName.trim()]}`}
          swahili={item[swahiliPickerName.trim()]}
        />
      ))}
      {FooterComponent && <FooterComponent />}
    </article>
  );
}
