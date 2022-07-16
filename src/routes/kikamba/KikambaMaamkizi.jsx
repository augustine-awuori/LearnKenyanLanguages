import React from "react";

import { getMaamkizi } from "../../services/kambaServices/fakeMaamkiziSection";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";
import KikambaPageNavigators from "./KikambaPageNavigators";

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
      <KikambaPageNavigators
        nextSectionName="Bidding goodbye"
        nextUrl="/bidding-goodbye"
      />
    </section>
  );
}
