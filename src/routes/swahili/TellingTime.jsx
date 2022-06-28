import React from "react";

import { getMaswali, getTellingTime } from "../../services/fakeTellingTime";
import Table from "../../components/Table";
import useApi from "../../hooks/useApi";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";

export default function TellingTime() {
  const { data } = useApi(getTellingTime);
  const { data: maswali } = useApi(getMaswali);

  return (
    <section>
      <h2>Telling Time</h2>
      <p>
        The Swahili time starts at 7 am to mean the first hour of the day. 7 pm
        is the first hour of the night.
      </p>
      <Table
        data={data}
        leftTableHeading="english"
        rightTableHeading="swahili"
      />
      <h3>Swali</h3>
      {maswali.map(({ english, swahili }) => (
        <SwahiliEnglish english={english} swahili={swahili} />
      ))}
      <PageNavigators
        nextSectionName="Various Personalities"
        previousSectionName="Vocabulary"
        nextUrl="/basic/various-personalities"
        previousUrl="/basic/vocabulary"
      />
    </section>
  );
}
