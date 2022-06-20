import React from "react";

import {
  getMazoezi,
  getSikuZaWiki,
} from "../../services/fakeSikuZaWikiService";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function SikuZaWikiSection() {
  const { data: sikuZaWiki } = useApi(getSikuZaWiki);
  const { data: mazoezi } = useApi(getMazoezi);

  return (
    <>
      <h2>Siku za Wiki (Days of the Week)</h2>
      {sikuZaWiki.map(({ english, swahili }) => (
        <SwahiliEnglish key={swahili} swahili={swahili} english={english} />
      ))}
      <h3 className="zoezi">Zoezi</h3>
      {mazoezi.map(({ kichwa, maswali }) => (
        <>
          <p className="zoezi__kichwa">{kichwa}</p>
          {maswali.map(({ swali }) => (
            <p>{swali}</p>
          ))}
        </>
      ))}
      <PageNavigators
        nextSectionName="Miezi ya Mwaka"
        previousSectionName="Tarakimu"
        nextUrl="/miezi-ya-mwaka"
        previousUrl="/tarakimu"
      />
    </>
  );
}
