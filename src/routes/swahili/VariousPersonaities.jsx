import React from "react";

import { getPersonalities } from "../../services/swahiliServices/fakePersonalitiesService";
import PageNavigators from "../../navigation/PageNavigators";
import Table from "../../components/Table";
import useApi from "../../hooks/useApi";

export default function VariousPersonaities() {
  const { data } = useApi(getPersonalities);

  return (
    <section>
      <h1>Various Personaities (Watu Mbali Mbali)</h1>
      <Table
        data={data}
        leftTableHeading="swahili"
        rightTableHeading="english"
      />
      <PageNavigators
        previousSectionName="Telling Time"
        previousUrl="/basic/telling-time"
        nextSectionName="Daily Activities and Chores"
        nextUrl="/basic/daily-activities-and-chores"
      />
    </section>
  );
}
