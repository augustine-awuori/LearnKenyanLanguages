import React from "react";

import { getGoodByes } from "../../services/fakeBiddingGoodbyeService";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";
import { getContents } from "../../services/fakeContentsService";

export default function BiddingGoodbyeSection() {
  const { data: goodbyes } = useApi(getGoodByes);
  const { data: contents } = useApi(getContents);
  console.log(contents[0]);
  return (
    <section>
      <h2>Bidding Goodbye in Swahili</h2>
      {goodbyes.map(({ swahili, english }) => (
        <SwahiliEnglish swahili={swahili} english={english} />
      ))}
      <PageNavigators
        nextSectionName="Goodnight in Swahili"
        nextUrl="/goodnight"
        previousUrl="/maamkizi-greetings"
        onNextNavigation={() => console.log("next")}
        previousSectionName="Maamkizi Greetings"
      />
    </section>
  );
}
