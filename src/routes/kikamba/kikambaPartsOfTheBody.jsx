import React from "react";

import { getKikambaPartsOfTheBody } from "../../services/kambaServices/kikambaPartsOfTheBody";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";
import KikambaPageNavigators from "./KikambaPageNavigators";

export default function KikambaPartsOfTheBody() {
  const { data } = useApi(getKikambaPartsOfTheBody);

  return (
    <section>
      <h2>Sehemu za Mwili ( Parts Of The Body)</h2>
      <MapSwahiliEnglish data={data} englishPickerName="kikamba" />
      <KikambaPageNavigators
        previousSectionName="Family"
        previousUrl="/family"
      />
    </section>
  );
}
