import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Principles } from "@/components/sections/Principles";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <WhyWorkWithMe />
        <Principles />
        <Work />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
