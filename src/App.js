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
import NotFound from "./components/NotFound";
import SwahiliSectionsHeader from "./components/SwahiliSectionsHeader";

export default function App() {
  return (
    <section className="container">
      <Routes>
        <Route path="/learn-swahili" element={<SwahiliSectionsHeader />}>
          <Route index element={<MaamkiziGreetings />} />
          <Route path="bidding-goodbye" element={<BiddingGoodbye />} />
          <Route path="goodnight" element={<GoodnightInSwahili />} />
          <Route path="useful-phrases" element={<Phrases />} />
          <Route path="tarakimu" element={<Tarakimu />} />
          <Route path="siku-za-wiki" element={<SikuZaWiki />} />
          <Route path="miezi-ya-mwaka" element={<MieziYaMwaka />} />
          <Route path="familia" element={<Familia />} />
          <Route path="sehemu-za-mwili" element={<SehemuZaMwili />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
