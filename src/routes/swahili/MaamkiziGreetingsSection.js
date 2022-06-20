import React from "react";

import { getGreetingsResponse } from "../../services/fakeMaamkiziGreetingsResponse";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";
import { getContents } from "../../services/fakeContentsService";

export default function MaamkiziGreetingsSection() {
  const { data } = useApi(getGreetingsResponse);
  const { data: contents } = useApi(getContents);

  const find = () => {
    console.log(contents);
  };
  find();

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
        nextUrl="/bidding-goodbye"
      />
    </section>
  );
}
