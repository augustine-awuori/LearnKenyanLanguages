import React from "react";

import { getGoodnightsInSwahili } from "../../services/swahiliServices/fakeGoodnightInSwahiliService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function GoodnightInSwahiliSection() {
  const { data: goodnights } = useApi(getGoodnightsInSwahili);

  return (
    <MapSwahiliEnglish
      data={goodnights}
      HeaderComponent={() => <h2>Goodnight in Swahili</h2>}
      FooterComponent={() => (
        <PageNavigators
          nextSectionName="Other useful phrases that come in handy"
          previousSectionName="Bidding goodbye in Swahili"
          nextUrl="/basic/useful-phrases"
          previousUrl="/basic/bidding-goodbye"
        />
      )}
    />
  );
}
