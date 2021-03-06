import React from "react";

import { getCallouts } from "../services/swahiliServices/fakeCalloutService";
import Callout from "../components/Callout";
import Hero from "../components/Hero";
import useApi from "../hooks/useApi";

export default function Home() {
  const { data } = useApi(getCallouts);

  return (
    <main>
      <Hero />
      {data.map(({ content, heading, targetPageUrl, image }) => (
        <Callout
          key={heading}
          content={content}
          heading={heading}
          targetPageUrl={targetPageUrl}
          image={image}
        />
      ))}
    </main>
  );
}
