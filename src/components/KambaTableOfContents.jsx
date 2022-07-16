import {
  getBaseURL,
  getContents,
} from "../services/kambaServices/fakeKambaTableContents";
import useTableOfContents from "../hooks/useTableOfContents";

export default function KambaTableOfContents() {
  return useTableOfContents(getContents, getBaseURL());
}
