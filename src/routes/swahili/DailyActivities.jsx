import React from "react";

import {
  getActivities,
  getChores,
} from "../../services/swahiliServices/fakeDailyActivitiesAndChoresService";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";
import PageNavigators from "../../navigation/PageNavigators";

export default function DailyActivities() {
  const { data: chores } = useApi(getChores);
  const { data: activities } = useApi(getActivities);

  return (
    <section>
      <MapSwahiliEnglish
        data={activities}
        HeaderComponent={() => (
          <>
            <h2>Daily Activities and Daily Chores</h2>
            <h3>Daily Activities</h3>
          </>
        )}
      />
      <h3>Daily Chores</h3>
      <MapSwahiliEnglish
        data={chores}
        FooterComponent={() => (
          <PageNavigators
            nextSectionName="Colors"
            previousSectionName="Various Personalities"
            nextUrl="/basic/colors"
            previousUrl="/basic/various-personalities"
          />
        )}
      />
    </section>
  );
}
