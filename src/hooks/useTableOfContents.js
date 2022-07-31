import React from "react";

import TableContents from "../components/TableContents";
import useApi from "./useApi";
import useChevron from "./useChevron";
import chevron from "../assets/icons/chevron-right.svg";

export default function useTableOfContents(contentsApiFunc, baseURL) {
  const { data: contents } = useApi(contentsApiFunc);
  const { isExpanded, toggleExpansion } = useChevron();

  const getClassName = () => {
    let name = "table-of-content collapsible ";
    return isExpanded ? (name += "collapsible--expanded") : name;
  };

  return (
    <section className={getClassName()} onClick={toggleExpansion}>
      <article>
        <header className="table-of-content__header">
          <p className="table-of-content__heading">On this page</p>
          <img
            className="icon collapsible__chevron"
            src={chevron}
            alt="chevron icon"
          />
        </header>
        <TableContents
          baseURL={baseURL}
          className="collapsible__content"
          contents={contents}
        />
      </article>
    </section>
  );
}
