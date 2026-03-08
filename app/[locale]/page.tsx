import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { defaultLocale, isLocale, locales } from "@/components/i18n/config";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Work } from "@/components/sections/Work";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <LanguageProvider initialLocale={locale ?? defaultLocale}>
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
    </LanguageProvider>
  );
}
