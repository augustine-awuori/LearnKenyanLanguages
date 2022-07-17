import React from "react";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";
import { getKikambaDaysOfTheWeek } from "../../services/kambaServices/kikambaDaysOfTheWeekService";
import KikambaPageNavigators from "./KikambaPageNavigators";

export default function KikambaDaysOfTheWeek() {
  const { data } = useApi(getKikambaDaysOfTheWeek);

  return (
    <MapSwahiliEnglish
      data={data}
      englishPickerName="kikamba"
      swahiliPickerName="swahili"
      HeaderComponent={() => (
        <h2>Siku za Wiki (Days of the Week)- Mithenya ya Kyumwa</h2>
      )}
      FooterComponent={() => (
        <KikambaPageNavigators
          previousSectionName="Numbers"
          previousUrl="/numbers"
          nextSectionName="Months of the Year"
          nextUrl="/months-of-the-year"
        />
      )}
    />
  );
}
