import React from "react";

import { getGoodByes } from "../../services/fakeBiddingGoodbyeService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function BiddingGoodbyeSection() {
  const { data: goodbyes } = useApi(getGoodByes);

  return (
    <section>
      <h2>Bidding Goodbye in Swahili</h2>
      {mapSwahiliEnglish(goodbyes)}
      <PageNavigators
        nextSectionName="Goodnight in Swahili"
        nextUrl="/basic/goodnight"
        previousUrl="/basic"
        onNextNavigation={() => console.log("next")}
        previousSectionName="Maamkizi Greetings"
      />
    </section>
  );
}
