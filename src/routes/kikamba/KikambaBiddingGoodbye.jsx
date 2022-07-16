import React from "react";

import { getKambaBiddingGoodbye } from "../../services/kambaServices/fakeBiddingGoodbyeService";
import KambaPageNavigators from "./KikambaPageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function KikambaBiddingGoodbye() {
  const { data } = useApi(getKambaBiddingGoodbye);

  return (
    <section>
      <h2>Bidding Goodbye / Kwaheri / Kutiania uvoo</h2>
      {data.map(({ english, swahili }) => (
        <SwahiliEnglish swahili={english} english={swahili} />
      ))}
      <KambaPageNavigators
        previousSectionName="Maamkizi"
        previousUrl="/"
        nextSectionName="Goodnight in Swahili"
        nextUrl="/goodnight-in-swahili"
      />
    </section>
  );
}
