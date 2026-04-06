import type { Metadata } from "next";
import DividendKalkulaator from "@/components/calculators/DividendKalkulaator";

export const metadata: Metadata = {
  title: "Dividendi kalkulaator 2026 – Arvuta dividendimaks | Arvuta.eu",
  description:
    "Arvuta dividendide väljamaksmisega kaasnev tulumaks 2026. aastal. Sisesta soovitud netodividend ja kalkulaator näitab ettevõtte kogukulu ning tasutava tulumaksu.",
  alternates: {
    canonical: '/dividend',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kuidas arvutatakse dividendimaks Eestis 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eestis maksab dividendilt tulumaksu ettevõte, mitte omanik. Tulumaks on 22/78 netodividendist – ehk kui omanik soovib saada 1000 €, maksab ettevõte tulumaksu 282,05 € ja ettevõtte kogukulu on 1282,05 €.",
      },
    },
    {
      "@type": "Question",
      name: "Kas eraisik peab dividendilt eraldi tulumaksu maksma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti ettevõttest saadud dividendilt eraisik eraldi tulumaksu ei maksa – ettevõte on tulumaksu juba tasunud. Välisriigi ettevõttest saadud dividendid võivad olla erinevalt maksustatud.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on dividendimaksu määr 2026. aastal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dividendimaksu efektiivne määr on 22% ettevõtte kogukulust (netodividend + tulumaks). See vastab 22/78 arvutusele netodividendist.",
      },
    },
    {
      "@type": "Question",
      name: "Millal saab dividende välja maksta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dividende saab välja maksta kasumist – ettevõtte omakapital peab pärast väljamakset ületama nõutud minimaalse omakapitali piiri. Dividendiotsuse teeb üldkoosolek.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada dividendimaks 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta soovitud netodividend – summa, mille omanik kätte saab." },
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt tulumaksu (22/78 netodividendist)." },
    { "@type": "HowToStep", text: "Näed ettevõtte kogukulu – netodividend pluss tulumaks." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dividendi kalkulaator 2026",
  url: "https://arvuta.eu/dividend",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta dividendimaks ja ettevõtte kogukulu 2026. aastal.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function DividendPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div id="ad-top" className="mb-3" />

        <h1 className="text-2xl font-bold text-[#1E40AF] mb-2">
          Dividendi kalkulaator 2026
        </h1>

        <div className="max-w-2xl mb-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Sisesta <strong>soovitud netodividend</strong> – summa, mille omanik tegelikult kätte saab –
            ja kalkulaator arvutab ettevõtte tasutava <strong>tulumaksu</strong> ning <strong>kogukulu</strong>.
            Arvutuses kasutatakse 2026. aasta Eesti maksumäära: tulumaks 22/78 netodividendist.
          </p>
          <p className="mt-2">
            Eesti eripära: dividendilt ei maksa tulumaksu eraisik, vaid ettevõte.
            Omanik saab dividendi kätte ilma täiendava maksukohustuseta. Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <DividendKalkulaator />

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
