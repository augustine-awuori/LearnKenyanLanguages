import React from "react";

import { getKikambaPhrases } from "../../services/kambaServices/kikambaPhrasesService";
import KikambaPageNavigators from "../../routes/kikamba/KikambaPageNavigators";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function KikambaPhrases() {
  const { data } = useApi(getKikambaPhrases);

  return (
    <MapSwahiliEnglish
      data={data}
      englishPickerName="kikamba"
      swahiliPickerName="swahili"
      HeaderComponent={() => (
        <h2>Other useful phrases that will come in handy</h2>
      )}
      FooterComponent={() => (
        <KikambaPageNavigators
          previousSectionName="Goodnight in Swahili"
          nextSectionName="Numbers"
          previousUrl="/goodnight-in-swahili"
          nextUrl="/numbers"
        />
      )}
    />
  );
}
