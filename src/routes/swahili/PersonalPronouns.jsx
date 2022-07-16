import React from "react";

import {
  getAllPronouns,
  getPronounsMfano,
} from "../../services/swahiliServices/fakePersonalPronounService";
import mapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import Table from "../../components/Table";
import useApi from "../../hooks/useApi";
import PageNavigators from "../../navigation/PageNavigators";

export default function PersonalPronouns() {
  const { data: mfano } = useApi(getPronounsMfano);
  const { data: pronouns } = useApi(getAllPronouns);

  return (
    <section>
      <h2>Personal Pronouns (Viwakilishi Nasfi)</h2>

      {pronouns.map(({ data, heading }) => (
        <Table
          key={heading}
          data={data}
          heading={heading}
          leftTableHeading="nafsi"
          rightTableHeading="kiwakilishi"
        />
      ))}

      <h3>Example (Mfano)</h3>
      {mapSwahiliEnglish(mfano)}

      <PageNavigators
        previousSectionName="Spices"
        previousUrl="/basic/spices"
      />
    </section>
  );
}
