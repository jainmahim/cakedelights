import React from "react";

import Hero from "./components/Hero";
import Cards from "./components/Card/Cards";

import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Team from "./components/Team";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Faq />
      <Testimonials />
      <Team />
      <Gallery />
    </div>
  );
}
