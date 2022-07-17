import React from "react";

import { getFood } from "../../services/swahiliServices/fakeFoodService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function FoodSection() {
  const { data } = useApi(getFood);

  const HeaderComponent = () => <h2>Food (Chakula)</h2>;

  const FooterComponent = () => (
    <PageNavigators
      nextSectionName="Spices"
      previousSectionName="Colors"
      nextUrl="/basic/spices"
      previousUrl="/basic/colors"
    />
  );

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={HeaderComponent}
      FooterComponent={FooterComponent}
    />
  );
}
