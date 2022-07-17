import { getKikambaGoodnight } from "../../services/kambaServices/kambaGoodnightInSwahiliService";
import KikambaPageNavigators from "./KikambaPageNavigators";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function KikambaGoodnightInSwahili() {
  const { data } = useApi(getKikambaGoodnight);

  const HeaderComponent = () => <h2>Goodnight in Swahili</h2>;

  const FooterComponent = () => (
    <KikambaPageNavigators
      previousSectionName="Bidding Goodbye"
      previousUrl="/bidding-goodbye"
      nextSectionName="Other Useful Phrases"
      nextUrl="/other-useful-phrases"
    />
  );

  return (
    <MapSwahiliEnglish
      data={data}
      HeaderComponent={HeaderComponent}
      FooterComponent={FooterComponent}
    />
  );
}
