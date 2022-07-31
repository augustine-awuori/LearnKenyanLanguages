import { useState } from "react";

export default function UseChevron() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return { isExpanded, toggleExpansion };
}
