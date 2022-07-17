import React from "react";

import { getPhrases } from "../../services/swahiliServices/fakePhrasesService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function Phrases() {
  const { data } = useApi(getPhrases);

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={() => (
        <h2>Other useful phrases that will come in handy</h2>
      )}
      FooterComponent={() => (
        <PageNavigators
          nextSectionName="Tarakimu"
          previousSectionName="Goodnight in swahili"
          nextUrl="/basic/tarakimu"
          previousUrl="/basic/goodnight"
        />
      )}
    />
  );
}
