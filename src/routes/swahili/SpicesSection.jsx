import React from "react";

import { getSpices } from "../../services/swahiliServices/fakeSpicesSection";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function SpicesSection() {
  const { data } = useApi(getSpices);

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={() => <h2>Spices (Viungo)</h2>}
      FooterComponent={() => (
        <PageNavigators
          previousSectionName="Food"
          nextSectionName="Personal Pronouns"
          nextUrl="/basic/personal-pronouns"
          previousUrl="/basic/food"
        />
      )}
    />
  );
}
