import React from "react";
import Hero from "../../components/Hero";
import Specialize from "../../components/Specialize";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import BuildTogther from "../../components/buildTogther";
import Faqs from "../../components/Faqs";
const Index: React.FC = () => {
  return (
    <>
      <div className="mt-5 pt-5">
      <section data-scroll-section data-scroll-call="heroSection">
  <Hero />
</section>
<section data-scroll-section data-scroll-call="specializeSection">
  <Specialize />
</section>

        <Portfolio />
        <Contact />
        <Faqs />
        <BuildTogther />
      </div>
    </>
  );
};

export default Index;
