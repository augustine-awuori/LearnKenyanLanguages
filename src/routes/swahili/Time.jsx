import React from "react";

import { getTime } from "../../services/fakeTimeService";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";
import PageNavigators from "../../navigation/PageNavigators";

export default function Time() {
  const { data } = useApi(getTime);

  return (
    <section>
      {data.map(({ swahili, english }) => (
        <SwahiliEnglish swahili={swahili} english={english} />
      ))}
      <PageNavigators
        nextSectionName="Vocabulary"
        previousSectionName="Sehemu Za Mwili"
        nextUrl="/basic/vocabulary"
        previousUrl="/basic/sehemu-za-mwili"
      />
    </section>
  );
}
