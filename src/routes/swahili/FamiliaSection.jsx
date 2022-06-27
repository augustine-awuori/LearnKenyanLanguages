import React from "react";

import { getFamilia } from "../../services/fakeFamiliaService";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function FamiliaSection() {
  const { data: familia } = useApi(getFamilia);

  return (
    <section>
      <h2>Familia (Family)</h2>
      {familia.map(({ english, swahili }) => (
        <SwahiliEnglish english={english} swahili={swahili} />
      ))}
      <PageNavigators
        nextSectionName="Sehemu ya mwili"
        nextUrl="/basic/sehemu-za-mwili"
        previousUrl="/basic/miezi-ya-mwaka"
        previousSectionName="Miezi ya Mwaka"
      />
    </section>
  );
}
