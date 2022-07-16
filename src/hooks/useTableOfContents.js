import React from "react";

import TableContents from "../components/TableContents";
import useApi from "./useApi";
import useChevron from "./useChevron";

export default function useTableOfContents(contentsApiFunc, baseURL) {
  const { data: contents } = useApi(contentsApiFunc);
  const { chevron, isExpanded, toggleExpansion } = useChevron();

  return (
    <section className="table-of-content collapsible" onClick={toggleExpansion}>
      <article>
        <header className="table-of-content__header">
          <p className="table-of-content__heading">On this page</p>
          <img className="icon" src={chevron} alt="chevron icon" />
        </header>
        {isExpanded && <TableContents baseURL={baseURL} contents={contents} />}
      </article>
    </section>
  );
}
