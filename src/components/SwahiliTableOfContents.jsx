import {
  getBaseURL,
  getContents,
} from "../services/swahiliServices/fakeContentsService";
import useTableOfContents from "../hooks/useTableOfContents";

export default function SwahiliTableContents() {
  return useTableOfContents(getContents, getBaseURL());
}
