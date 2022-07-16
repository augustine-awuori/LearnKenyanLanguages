import React from "react";

import { getSehemuZaMwili } from "../../services/swahiliServices/fakeSehemuZaMwiliService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function SehemuZaMwiliSection() {
  const { data } = useApi(getSehemuZaMwili);

  return (
    <section>
      <h2>Sehemu Za Mwili</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        previousSectionName="Familia"
        previousUrl="/basic/familia"
        nextSectionName="Time"
        nextUrl="/basic/time"
      />
    </section>
  );
}
