import React from "react";

import { getMaamkizi } from "../../services/kambaServices/fakeMaamkiziSection";
import KikambaPageNavigators from "./KikambaPageNavigators";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function Maamkizi() {
  const { data } = useApi(getMaamkizi);

  const HeaderComponent = () => <h2> Maamkizi / Ngethi</h2>;

  const FooterComponent = () => (
    <KikambaPageNavigators
      nextSectionName="Bidding goodbye"
      nextUrl="/bidding-goodbye"
    />
  );

  return (
    <MapSwahiliEnglish
      data={data}
      englishPickerName="greeting"
      englishPrefix="Jibu:"
      FooterComponent={FooterComponent}
      HeaderComponent={HeaderComponent}
      swahiliPickerName="response"
    />
  );
}
