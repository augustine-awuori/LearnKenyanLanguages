import React from "react";
import { Outlet } from "react-router-dom";

import TableOfContents from "./SwahiliTableOfContents";

export default function SwahiliSectionsHeader() {
  return (
    <section>
      <h1 className="heading">BASIC Swahili</h1>
      <TableOfContents />
      <Outlet />
    </section>
  );
}
