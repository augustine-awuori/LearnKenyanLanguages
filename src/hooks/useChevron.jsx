import { useState } from "react";

import chevronDown from "../assets/icons/chevron-down.svg";
import chevronRight from "../assets/icons/chevron-right.svg";

export default function UseChevron() {
  const [isExpanded, setIsExpanded] = useState(false);

  const getChevron = () => (isExpanded ? chevronDown : chevronRight);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return { isExpanded, getChevron, toggleExpansion };
}
