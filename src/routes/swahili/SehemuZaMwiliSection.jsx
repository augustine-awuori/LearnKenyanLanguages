import React from "react";

import { getSehemuZaMwili } from "../../services/swahiliServices/fakeSehemuZaMwiliService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function SehemuZaMwiliSection() {
  const { data } = useApi(getSehemuZaMwili);

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={() => <h2>Sehemu Za Mwili</h2>}
      FooterComponent={() => (
        <PageNavigators
          previousSectionName="Familia"
          previousUrl="/basic/familia"
          nextSectionName="Time"
          nextUrl="/basic/time"
        />
      )}
    />
  );
}
