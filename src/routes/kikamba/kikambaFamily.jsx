import React from "react";

import { getKikambaFamily } from "../../services/kambaServices/kikambaFamilyService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";
import KikambaPageNavigators from "./KikambaPageNavigators";

export default function KikambaFamily() {
  const { data } = useApi(getKikambaFamily);

  return (
    <MapSwahiliEnglish
      data={data}
      englishPickerName="kikamba"
      HeaderComponent={() => <h2>Familia (Family) </h2>}
      FooterComponent={() => (
        <KikambaPageNavigators
          previousSectionName="Months of the Year"
          previousUrl="/months-of-the-year"
          nextSectionName="Parts of the Body"
          nextUrl="/parts-of-the-body"
        />
      )}
    />
  );
}
