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
  ColorsSection,
  DailyActivities,
  FoodSection,
  PersonalPronouns,
  Spices as SpicesSection,
  TellingTime,
  TimeOfTheDay,
  VariousPersonalities,
  Vocabularies,
} from "./routes/swahili";
import {
  ContactUs,
  Home,
  LoginForm,
  Logout,
  PartnerWithUs,
  RegisterForm,
} from "./routes";
import {
  KikambaBiddingGoodbye,
  KikambaMaamkizi,
  KikambaGoodnightInSwahili,
  KikambaPhrases,
  KikambaNumbers,
} from "./routes/kikamba";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import SelectLevel from "./components/SelectLevel";
import SwahiliSectionsHeader from "./components/SwahiliSectionsHeader";
import KambaSectionsHeader from "./components/KambaSectionsHeader";

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

          <Route path="/learn-swahili" element={<SelectLevel />} />

          <Route
            path="/learn-swahili/basic"
            element={<SwahiliSectionsHeader />}
          >
            <Route index element={<MaamkiziGreetings />} />
            <Route path="bidding-goodbye" element={<BiddingGoodbye />} />
            <Route path="goodnight" element={<GoodnightInSwahili />} />
            <Route path="useful-phrases" element={<Phrases />} />
            <Route path="tarakimu" element={<Tarakimu />} />
            <Route path="siku-za-wiki" element={<SikuZaWiki />} />
            <Route path="miezi-ya-mwaka" element={<MieziYaMwaka />} />
            <Route path="familia" element={<Familia />} />
            <Route path="sehemu-za-mwili" element={<SehemuZaMwili />} />
            <Route path="time" element={<TimeOfTheDay />} />
            <Route path="vocabulary" element={<Vocabularies />} />
            <Route path="telling-time" element={<TellingTime />} />
            <Route
              path="various-personalities"
              element={<VariousPersonalities />}
            />
            <Route
              path="daily-activities-and-chores"
              element={<DailyActivities />}
            />
            <Route path="colors" element={<ColorsSection />} />
            <Route path="food" element={<FoodSection />} />
            <Route path="spices" element={<SpicesSection />} />
            <Route path="personal-pronouns" element={<PersonalPronouns />} />
          </Route>

          <Route path="/learn-kikamba" element={<KambaSectionsHeader />}>
            <Route index element={<KikambaMaamkizi />} />
            <Route path="bidding-goodbye" element={<KikambaBiddingGoodbye />} />
            <Route
              path="goodnight-in-swahili"
              element={<KikambaGoodnightInSwahili />}
            />
            <Route path="other-useful-phrases" element={<KikambaPhrases />} />
            <Route path="numbers" element={<KikambaNumbers />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </main>
  );
}
