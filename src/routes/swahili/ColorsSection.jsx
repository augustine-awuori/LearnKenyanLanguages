import React from "react";

import { getColors } from "../../services/swahiliServices/fakeColorsService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function ColorsSection() {
  const { data } = useApi(getColors);

  const HeaderComponent = () => <h2>Colors (Rangi)</h2>;

  const FooterComponent = () => (
    <PageNavigators
      nextSectionName="Food"
      previousSectionName="Daily Activities and Chores"
      nextUrl="/basic/food"
      previousUrl="/basic/daily-activities-and-chores"
    />
  );

  return (
    <MapSwahiliEnglish
      data={data}
      FooterComponent={FooterComponent}
      HeaderComponent={HeaderComponent}
    />
  );
}
