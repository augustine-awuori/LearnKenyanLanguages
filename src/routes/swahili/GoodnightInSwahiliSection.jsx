import React from "react";

import { getGoodnightsInSwahili } from "../../services/fakeGoodnightInSwahiliService";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function GoodnightInSwahiliSection() {
  const { data: goodnights } = useApi(getGoodnightsInSwahili);

  return (
    <>
      <h2>Goodnight in Swahili</h2>
      {goodnights.map(({ english, swahili }) => (
        <SwahiliEnglish key={swahili} english={english} swahili={swahili} />
      ))}
      <PageNavigators
        nextSectionName="Other useful phrases that come in handy"
        previousSectionName="Bidding goodbye in Swahili"
        nextUrl="/useful-phrases"
        previousUrl="/bidding-goodbye"
      />
    </>
  );
}
