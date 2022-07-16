import React from "react";
import { Outlet } from "react-router-dom";

import KambaTableOfContents from "./KambaTableOfContents";

export default function KambaSectionsHeader() {
  return (
    <section>
      <h1 className="heading">BASIC SWAHILI / ENGLISH TO KIKAMBA LESSON 1</h1>
      <KambaTableOfContents />
      <Outlet />
    </section>
  );
}
