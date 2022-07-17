import React from "react";

import { getKikambaMonthsOfTheYear } from "../../services/kambaServices/kikambaMonthsOfTheYearService";
import KikambaPageNavigators from "./KikambaPageNavigators";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function KikambaMonthsOfTheYear() {
  const { data } = useApi(getKikambaMonthsOfTheYear);

  return (
    <MapSwahiliEnglish
      data={data}
      englishPickerName="kikamba"
      swahiliPickerName="swahili"
      HeaderComponent={() => <h2>Months of the Year (Miezi Ya Mwaka) </h2>}
      FooterComponent={() => (
        <KikambaPageNavigators
          previousSectionName="Days of the Week"
          previousUrl="/days-of-the-week"
          nextSectionName="Family"
          nextUrl="/family"
        />
      )}
    />
  );
}
