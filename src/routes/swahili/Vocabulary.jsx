import React from "react";

import { getVocabulary } from "../../services/fakeVocabularyService";
import useApi from "../../hooks/useApi";
import PageNavigators from "../../navigation/PageNavigators";

export default function Vocabulary() {
  const { data } = useApi(getVocabulary);

  return (
    <section>
      {data.map(({ vocabulary }) => (
        <p>{vocabulary}</p>
      ))}
      <PageNavigators
        previousSectionName="Time"
        nextSectionName="Telling Time"
        nextUrl="/basic/telling-time"
        previousUrl="/basic/time"
      />
    </section>
  );
}
