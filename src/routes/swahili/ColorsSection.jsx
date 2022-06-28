import React from "react";

import { getColors } from "../../services/fakeColorsService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function ColorsSection() {
  const { data } = useApi(getColors);

  return (
    <section>
      <h2>Colors (Rangi)</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        nextSectionName="Clothes"
        previousSectionName="Daily Activities and Chores"
        nextUrl="/basic/clothes"
        previousUrl="/basic/daily-activities-and-chores"
      />
    </section>
  );
}
