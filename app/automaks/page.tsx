import type { Metadata } from "next";
import AutomaksKalkulaator from "@/components/calculators/AutomaksKalkulaator";

export const metadata: Metadata = {
  title: "Automaksu kalkulaator 2026 – Registreerimis- ja aastamaks | Arvuta.eu",
  description:
    "Arvuta oma auto registreerimismaks ja aastamaks 2026. aastal. Sisesta CO₂ heitkogus, võimsus, valmistamisaasta ja kütuse liik – tulemus kohe.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Millal hakkas Eestis kehtima automaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti automaks jõustus 1. jaanuaril 2025. Registreerimistaks rakendub uutele sõidukitele registreerimisel ja aastamaks kõikidele Eestis registreeritud sõidukitele.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas arvutatakse automaksu registreerimismaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registreerimistaks koosneb CO₂ komponendist (g/km põhjal) ja võimsuse komponendist (kW põhjal). Vanemate sõidukite puhul rakendub vanusemärgis, mis vähendab maksu kuni 90%.",
      },
    },
    {
      "@type": "Question",
      name: "Kas elektriautod peavad automaksu maksma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elektrisõidukid on CO₂ komponendist vabastatud, kuid neile rakendub siiski võimsuse komponent, kui mootori võimsus ületab 74 kW.",
      },
    },
    {
      "@type": "Question",
      name: "Mis vahe on registreerimismaksul ja aastamaksul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registreerimistaks makstakse üks kord sõiduki esmakordsel registreerimisel Eestis. Aastamaks on iga-aastane maks, mida tasutakse sõiduki omamise eest.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas mõjutab diislikütus automaksu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diiselsõidukite CO₂ komponent on 10% kõrgem kui bensiinisõidukitel, kajastades diisli suuremat õhusaastet.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada Eesti automaksu 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta sõiduki CO₂ heitkogus (g/km) – leiad auto tehnilistest andmetest." },
    { "@type": "HowToStep", text: "Sisesta mootori võimsus kilovattides (kW)." },
    { "@type": "HowToStep", text: "Vali sõiduki esmakordse registreerimise aasta." },
    { "@type": "HowToStep", text: "Vali kütuse liik (bensiin, diisel, elekter või hübriid)." },
    { "@type": "HowToStep", text: "Kalkulaator näitab kohe registreerimismaksu ja aastamaksu." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Automaksu kalkulaator 2026",
  url: "https://arvuta.eu/automaks",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta Eesti automaksu registreerimismaks ja aastamaks 2026. aastal.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function AutomaksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div id="ad-top" className="mb-3" />

        <h1 className="text-2xl font-bold text-[#1E40AF] mb-2">
          Automaksu kalkulaator 2026
        </h1>

        <div className="prose prose-gray max-w-2xl mb-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Eesti automaks koosneb kahest osast: <strong>registreerimismaksust</strong> ja
            <strong> aastamaksust</strong>. Registreerimistaks tasutakse üks kord sõiduki
            Eestis registreerimisel. Aastamaks on iga-aastane maks kõikidele Eestis
            registreeritud mootorsõidukitele.
          </p>
          <p className="mt-3">
            Maksu suurus sõltub CO₂ heitkogusest (g/km), mootori võimsusest (kW),
            sõiduki vanusest ja kütuse liigist. Elektrisõidukid on CO₂ komponendist
            vabastatud. Diiselsõidukite CO₂ komponent on 10% kõrgem.
            Vanematel sõidukitel rakendub vanusemärgis, mis vähendab maksu kuni 90%.
          </p>
          <p className="mt-3">
            Täpse info leiad{" "}
            <a
              href="https://www.riigiteataja.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E40AF] underline"
            >
              riigiteataja.ee
            </a>{" "}
            ja{" "}
            <a
              href="https://www.emta.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E40AF] underline"
            >
              emta.ee
            </a>{" "}
            lehekülgedelt.
          </p>
        </div>

        <AutomaksKalkulaator />

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Korduma kippuvad küsimused
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer"
              >
                <summary className="font-medium text-gray-800 list-none flex justify-between items-center">
                  {faq.name}
                  <span className="text-[#1E40AF] text-lg">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
