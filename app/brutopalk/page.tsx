import type { Metadata } from "next";
import BrutopalkKalkulaator from "@/components/calculators/BrutopalkKalkulaator";

export const metadata: Metadata = {
  title: "Netopalgast brutopalk 2026 – Tagurpidi palgakalkulaator | Arvuta.eu",
  description:
    "Sisesta soovitud netopalk ja arvuta vajalik brutopalk 2026. aastal. Näed tulumaksu, töötukindlustuse ja II pensionisamba mõju ning tööandja tegelikku kogukulu.",
  alternates: {
    canonical: '/brutopalk',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kuidas arvutada brutopalk netopalgast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brutopalgast netopalgani jõudmiseks arvestatakse maha tulumaks (22%), töötukindlustusmakse (1,6%) ja II pensionisamba makse (2%). Kuna tulumaksuvaba miinimum sõltub brutopalgast, on tagurpidi arvutus keeruline – kalkulaator kasutab täpse vastuse leidmiseks iteratiivset meetodit.",
      },
    },
    {
      "@type": "Question",
      name: "Miks on brutopalk suurem kui netopalk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brutopalk on palk enne maksude mahaarvamist. Sellest arvestatakse maha tulumaks, töötukindlustusmakse ja valikuliselt II pensionisamba makse. Ülejäänud summa on netopalk ehk kätte saadav palk.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on tööandja tegelik kogukulu töötajale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tööandja maksab lisaks brutopalgale veel sotsiaalmaksu (33% brutost) ja tööandja töötukindlustusmakset (0,8% brutost). Seega on tööandja tegelik kogukulu ligikaudu 1,338 korda suurem kui brutopalk.",
      },
    },
    {
      "@type": "Question",
      name: "Kas II pensionisamba lülitamine mõjutab brutopalgavajadust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jah. II pensionisammas vähendab netopalgat 2% võrra brutost, seega sama netopalga saamiseks on vaja kõrgemat brutopalgaväärtust, kui sammas on sees.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada brutopalk netopalgast 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta soovitud netopalk eurodes kuus." },
    { "@type": "HowToStep", text: "Märgi, kas oled liitunud II pensionisambaga." },
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt vajaliku brutopalgaväärtuse." },
    { "@type": "HowToStep", text: "Näed kõiki mahaarvamisi ja tööandja kogukulu." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Netopalgast brutopalk kalkulaator 2026",
  url: "https://arvuta.eu/brutopalk",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta brutopalk netopalgast 2026. aasta Eesti maksumäärade alusel.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function BrutopalkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div id="ad-top" className="mb-3" />

        <h1 className="text-2xl font-bold text-[#1E40AF] mb-2">
          Netopalgast brutopalk 2026
        </h1>

        <div className="max-w-2xl mb-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Tead, kui palju soovid kätte saada, aga ei tea, millist <strong>brutopalgaväärtust</strong> tööandjalt
            küsida? Sisesta soovitud <strong>netopalk</strong> ja kalkulaator arvutab täpse
            brutopalgaväärtuse koos kõigi mahaarvamistega — tulumaks (22%), töötukindlustus (1,6%)
            ja II pensionisammas (2%).
          </p>
          <p className="mt-2">
            Näed ka tööandja tegelikku kogukulu, mis sisaldab sotsiaalmaksu (33%) ja tööandja
            töötukindlustusmakset (0,8%). Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <BrutopalkKalkulaator />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Korduma kippuvad küsimused</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
                <summary className="font-medium text-gray-800 list-none flex justify-between items-center">
                  {faq.name}
                  <span className="text-[#1E40AF] text-lg">+</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
