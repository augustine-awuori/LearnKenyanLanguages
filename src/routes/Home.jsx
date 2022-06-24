import React from "react";

import { getCallouts } from "../services/fakeCalloutService";
import Callout from "../components/Callout";
import Hero from "../components/Hero";
import useApi from "../hooks/useApi";

export default function Home() {
  const { data } = useApi(getCallouts);

  return (
    <main>
      <Hero />
      {data.map((c) => (
        <Callout
          content={c.content}
          heading={c.heading}
          targetPageUrl={c.targetPageUrl}
          image={c.image}
        />
      ))}
    </main>
  );
}
