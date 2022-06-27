import React from "react";

import {
  getNotes,
  getMieziYaMwaka,
  getMazoezi,
} from "../../services/fakeMieziYaMwakaService";
import EnglishSwahiliInline from "../../components/EnglishSwahiliInline";
import PageNavigators from "../../navigation/PageNavigators";
import SwahiliEnglish from "../../components/SwahiliEnglish";
import useApi from "../../hooks/useApi";

export default function MieziYaMwakaSection() {
  const { data: miezi } = useApi(getMieziYaMwaka);
  const { data: notes } = useApi(getNotes);
  const { data: mazoezi } = useApi(getMazoezi);

  return (
    <section className="miezi-ya-mwaka">
      <h2>Miezi Ya Mwaka</h2>
      {miezi.map(({ english, swahili }) => (
        <SwahiliEnglish english={english} swahili={swahili} />
      ))}
      <h3>Note</h3>
      {notes.map(({ english, swahili }) => (
        <EnglishSwahiliInline english={english} swahili={swahili} />
      ))}
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
