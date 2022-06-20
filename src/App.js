import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  BiddingGoodbye,
  Familia,
  GoodnightInSwahili,
  MaamkiziGreetings,
  MieziYaMwaka,
  Phrases,
  SehemuZaMwili,
  SikuZaWiki,
  Tarakimu,
} from "./sections";
import TableOfContents from "./components/TableOfContents";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <section className="container">
      <h1 className="heading">BASIC Swahili</h1>
      <TableOfContents />
      <Routes>
        <Route path="/maamkizi-greetings" element={<MaamkiziGreetings />} />
        <Route path="/bidding-goodbye" element={<BiddingGoodbye />} />
        <Route path="/goodnight" element={<GoodnightInSwahili />} />
        <Route path="/useful-phrases" element={<Phrases />} />
        <Route path="/tarakimu" element={<Tarakimu />} />
        <Route path="/siku-za-wiki" element={<SikuZaWiki />} />
        <Route path="/miezi-ya-mwaka" element={<MieziYaMwaka />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/sehemu-za-mwili" element={<SehemuZaMwili />} />
        <Route path="/" element={<MaamkiziGreetings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
