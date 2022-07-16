import React from "react";

import { getGreetingsResponse } from "../../services/swahiliServices/fakeMaamkiziGreetingsResponse";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function MaamkiziGreetingsSection() {
  const { data } = useApi(getGreetingsResponse);

  return (
    <section className="maamkizi">
      <h2>Maamkizi Greetings</h2>
      {data.map(({ greeting, response }) => (
        <SwahiliEnglish
          key={greeting}
          english={"Jibu: " + response}
          swahili={greeting}
        />
      ))}
      <PageNavigators
        nextSectionName="Bidding goodbye"
        nextUrl="/basic/bidding-goodbye"
      />
    </section>
  );
}
