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
} from "./routes/swahili";
import {
  ContactUs,
  Home,
  LoginForm,
  Logout,
  PartnerWithUs,
  RegisterForm,
} from "./routes";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import SwahiliSectionsHeader from "./components/SwahiliSectionsHeader";

export default function App() {
  return (
    <main>
      <NavBar />
      <section className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/log-out" element={<Logout />} />

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

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}
