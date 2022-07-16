import React from "react";

import { getPhrases } from "../../services/swahiliServices/fakePhrasesService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function Phrases() {
  const { data } = useApi(getPhrases);

  return (
    <>
      <h2>Other useful phrases that will come in handy</h2>
      {mapSwahiliEnglish(data)}
      <PageNavigators
        nextSectionName="Tarakimu"
        previousSectionName="Goodnight in swahili"
        nextUrl="/basic/tarakimu"
        previousUrl="/basic/goodnight"
      />
    </>
  );
}
