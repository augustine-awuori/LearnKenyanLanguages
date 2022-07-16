import React from "react";

import { getSpices } from "../../services/swahiliServices/fakeSpicesSection";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function SpicesSection() {
  const { data } = useApi(getSpices);

  return (
    <section>
      <h2>Spices (Viungo)</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        previousSectionName="Food"
        nextSectionName="Personal Pronouns"
        nextUrl="/basic/personal-pronouns"
        previousUrl="/basic/food"
      />
    </section>
  );
}
