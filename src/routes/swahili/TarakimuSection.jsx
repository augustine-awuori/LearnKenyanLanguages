import React from "react";

import { getAllNumbers } from "../../services/swahiliServices/fakeNumbersService";
import Table from "../../components/Table";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function TarakimuSection() {
  const { data } = useApi(getAllNumbers);

  return (
    <section className="tarakimu">
      <h2>Tarakimu (Numbers)</h2>
      {data.map(({ numbers, heading }) => (
        <Table
          key={heading}
          data={numbers}
          heading={heading}
          leftTableHeading="tarakimu"
          rightTableHeading="neno"
        />
      ))}
      <PageNavigators
        nextSectionName="Siku za Wiki"
        previousSectionName="Other useful phrases that come in handy"
        nextUrl="/basic/siku-za-wiki"
        previousUrl="/basic/useful-phrases"
      />
    </section>
  );
}
