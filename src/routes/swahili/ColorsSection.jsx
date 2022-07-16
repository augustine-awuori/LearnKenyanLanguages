import React from "react";

import { getColors } from "../../services/swahiliServices/fakeColorsService";
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
        nextSectionName="Food"
        previousSectionName="Daily Activities and Chores"
        nextUrl="/basic/food"
        previousUrl="/basic/daily-activities-and-chores"
      />
    </section>
  );
}
