import React from "react";

import { getGoodByes } from "../../services/swahiliServices/fakeBiddingGoodbyeService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function BiddingGoodbyeSection() {
  const { data: goodbyes } = useApi(getGoodByes);

  const HeaderComponent = () => <h2>Bidding Goodbye in Swahili</h2>;

  const FooterComponent = () => (
    <PageNavigators
      nextSectionName="Goodnight in Swahili"
      nextUrl="/basic/goodnight"
      previousUrl="/basic"
      onNextNavigation={() => console.log("next")}
      previousSectionName="Maamkizi Greetings"
    />
  );

  return (
    <MapSwahiliEnglish
      data={goodbyes}
      HeaderComponent={HeaderComponent}
      FooterComponent={FooterComponent}
    />
  );
}
