import React from "react";

import { getTime } from "../../services/swahiliServices/fakeTimeService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function Time() {
  const { data } = useApi(getTime);

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={() => <h2>Wakati (Time of the Day)</h2>}
      FooterComponent={() => (
        <PageNavigators
          nextSectionName="Vocabulary"
          previousSectionName="Sehemu Za Mwili"
          nextUrl="/basic/vocabulary"
          previousUrl="/basic/sehemu-za-mwili"
        />
      )}
    />
  );
}
