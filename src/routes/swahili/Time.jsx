import React from "react";

import { getTime } from "../../services/fakeTimeService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function Time() {
  const { data } = useApi(getTime);

  return (
    <section>
      <h2>Wakati (Time)</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        nextSectionName="Vocabulary"
        previousSectionName="Sehemu Za Mwili"
        nextUrl="/basic/vocabulary"
        previousUrl="/basic/sehemu-za-mwili"
      />
    </section>
  );
}
