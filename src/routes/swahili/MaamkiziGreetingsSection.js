import React from "react";

import { getGreetingsResponse } from "../../services/swahiliServices/fakeMaamkiziGreetingsResponse";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function MaamkiziGreetingsSection() {
  const { data } = useApi(getGreetingsResponse);

  return (
    <MapSwahiliEnglish
      data={data}
      englishPrefix="Jibu:"
      englishPickerName="response"
      swahiliPickerName="greeting"
      HeaderComponent={() => <h2>Maamkizi Greetings</h2>}
      FooterComponent={() => (
        <PageNavigators
          nextSectionName="Bidding goodbye"
          nextUrl="/basic/bidding-goodbye"
        />
      )}
    />
  );
}
