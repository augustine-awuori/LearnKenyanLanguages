import React from "react";

import { getFamilia } from "../../services/swahiliServices/fakeFamiliaService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function FamiliaSection() {
  const { data: familia } = useApi(getFamilia);

  const HeaderComponent = () => <h2>Familia (Family)</h2>;

  const FooterComponent = () => (
    <PageNavigators
      nextSectionName="Sehemu ya mwili"
      nextUrl="/basic/sehemu-za-mwili"
      previousUrl="/basic/miezi-ya-mwaka"
      previousSectionName="Miezi ya Mwaka"
    />
  );

  return (
    <MapSwahiliEnglish
      data={familia}
      HeaderComponent={HeaderComponent}
      FooterComponent={FooterComponent}
    />
  );
}
