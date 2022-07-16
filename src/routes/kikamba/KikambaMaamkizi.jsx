import React from "react";

import { getBaseURL } from "../../services/kambaServices/fakeKambaTableContents";
import { getMaamkizi } from "../../services/kambaServices/fakeMaamkiziSection";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function Maamkizi() {
  const { data } = useApi(getMaamkizi);

  return (
    <section>
      <h2> Maamkizi / Ngethi</h2>
      {data.map(({ greeting, response }) => (
        <SwahiliEnglish
          key={greeting}
          english={"Jibu: " + response}
          swahili={greeting}
        />
      ))}
      <PageNavigators
        baseURL={getBaseURL()}
        nextSectionName="Bidding goodbye"
        nextUrl="/bidding-goodbye"
      />
    </section>
  );
}
