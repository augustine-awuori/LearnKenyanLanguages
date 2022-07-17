import React from "react";

import { getBaseURL } from "../../services/kambaServices/fakeKambaTableContents";
import PageNavigators from "../../navigation/PageNavigators";

export default function KikambaPageNavigators({
  nextUrl,
  nextSectionName,
  previousSectionName,
  previousUrl,
}) {
  return (
    <PageNavigators
      nextSectionName={nextSectionName}
      previousSectionName={previousSectionName}
      baseURL={getBaseURL()}
      nextUrl={nextUrl}
      previousUrl={previousUrl}
    />
  );
}
