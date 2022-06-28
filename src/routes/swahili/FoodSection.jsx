import React from "react";

import { getFood } from "../../services/fakeFoodService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function FoodSection() {
  const { data } = useApi(getFood);

  return (
    <section>
      <h2>Food (Chakula)</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        nextSectionName="Spices"
        previousSectionName="Colors"
        nextUrl="/basic/spices"
        previousUrl="/basic/colors"
      />
    </section>
  );
}
