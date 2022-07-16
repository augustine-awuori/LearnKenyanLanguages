import React from "react";

import {
  getMazoezi,
  getSikuZaWiki,
} from "../../services/swahiliServices/fakeSikuZaWikiService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function SikuZaWikiSection() {
  const { data: sikuZaWiki } = useApi(getSikuZaWiki);
  const { data: mazoezi } = useApi(getMazoezi);

  return (
    <>
      <h2>Siku za Wiki (Days of the Week)</h2>
      {mapSwahiliEnglish(sikuZaWiki)}
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
        nextUrl="/basic/miezi-ya-mwaka"
        previousUrl="/basic/tarakimu"
      />
    </>
  );
}
