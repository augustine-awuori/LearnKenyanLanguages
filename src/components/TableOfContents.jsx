import React, { useEffect, useState } from "react";

import { getContents } from "../services/fakeContentsService";
import TableContents from "./TableContents";
import UseChevron from "../hooks/useChevron";

export default function TableOfContents() {
  const [contents, setContents] = useState([]);
  const { isExpanded, getChevron, toggleExpansion } = UseChevron();

  useEffect(() => {
    setContents(getContents());
  }, []);

  return (
    <section className="tableOfContent collapsible" onClick={toggleExpansion}>
      <article>
        <section className="tableOfContent__header">
          <p className="tableOfContent__heading">On this page</p>
          <img className="icon" src={getChevron()} alt="chevron icon" />
        </section>
        {isExpanded && <TableContents contents={contents} />}
      </article>
    </section>
  );
}
