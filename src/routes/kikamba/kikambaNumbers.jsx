import React from "react";

import { getKikambaAllNumbers } from "../../services/kambaServices/kikambaNumbersService";
import useApi from "../../hooks/useApi";
import Table from "../../components/Table";
import KikambaPageNavigators from "./KikambaPageNavigators";

export default function KikambaNumbers() {
  const { data } = useApi(getKikambaAllNumbers);

  return (
    <section>
      <h2>Tarakimu / Numbers </h2>
      {data.map(({ heading, numbers }) => (
        <Table
          leftTableHeading="tarakimu"
          rightTableHeading="neno"
          heading={heading}
          data={numbers}
        />
      ))}
      <KikambaPageNavigators
        previousSectionName="Other useful phrases"
        nextSectionName="Days of the Week"
        previousUrl="/other-useful-phrases"
        nextUrl="/days-of-the-week"
      />
    </section>
  );
}
