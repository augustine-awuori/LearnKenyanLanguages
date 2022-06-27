import React from "react";

import Card from "./Card";

export default function SelectLevel() {
  return (
    <section className="levels">
      <Card
        imageSrc={require("../assets/luhya.jpg")}
        title="Basic Level"
        targetPageUrl="/learn-swahili/basic"
      />
    </section>
  );
}
