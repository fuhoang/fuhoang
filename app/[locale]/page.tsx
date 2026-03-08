import { notFound } from "next/navigation";
import { defaultLocale, isLocale, locales } from "@/components/i18n/config";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Services } from "@/components/sections/Services";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";
import { Work } from "@/components/sections/Work";
import { buildFaqSchema } from "@/lib/seo";

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

  const faqSchema = buildFaqSchema(locale ?? defaultLocale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LanguageProvider initialLocale={locale}>
        <Header />
        <main>
          <Hero />
          <ProofStrip />
          <Services />
          <WhyWorkWithMe />
          <Principles />
          <Work />
          <Approach />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </>
  );
}
