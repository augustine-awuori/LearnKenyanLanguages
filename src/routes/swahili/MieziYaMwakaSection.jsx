import React from "react";

import {
  getNotes,
  getMieziYaMwaka,
  getMazoezi,
} from "../../services/swahiliServices/fakeMieziYaMwakaService";
import EnglishSwahiliInline from "../../components/EnglishSwahiliInline";
import MapSwahiliEnglish from "../../components/mapSwahiliEnglish";
import PageNavigators from "../../navigation/PageNavigators";
import useApi from "../../hooks/useApi";

export default function MieziYaMwakaSection() {
  const { data: miezi } = useApi(getMieziYaMwaka);
  const { data: notes } = useApi(getNotes);
  const { data: mazoezi } = useApi(getMazoezi);

  return (
    <section className="miezi-ya-mwaka">
      <h2>Miezi Ya Mwaka (Months of the Year)</h2>
      <MapSwahiliEnglish data={miezi} />
      <h3>Note</h3>
      <MapSwahiliEnglish data={notes} Component={EnglishSwahiliInline} />
      <h3 className="zoezi">Zoezi</h3>
      {mazoezi.map(({ mfano, swali }) => (
        <>
          <p className="zoezi__kichwa">{mfano}</p>
          <p>{swali}</p>
        </>
      ))}
      <PageNavigators
        nextUrl="/basic/familia"
        previousUrl="/basic/siku-za-wiki"
        nextSectionName="Familia"
        previousSectionName="Siku za wiki"
      />
    </section>
  );
}
