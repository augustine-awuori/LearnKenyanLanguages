import React from "react";

import { getAllNumbers } from "../../services/fakeNumbersService";
import Table from "../../components/Table";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function TarakimuSection() {
  const { data } = useApi(getAllNumbers);

  return (
    <section className="tarakimu">
      <h2>Tarakimu</h2>
      {data.map(({ numbers, heading }) => (
        <Table key={heading} data={numbers} heading={heading} />
      ))}
      <PageNavigators
        nextSectionName="Siku za Wiki"
        previousSectionName="Other useful phrases that come in handy"
        nextUrl="/siku-za-wiki"
        previousUrl="/useful-phrases"
      />
    </section>
  );
}
