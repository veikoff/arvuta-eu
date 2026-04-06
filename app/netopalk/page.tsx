import type { Metadata } from "next";
import NetopalkKalkulaator from "@/components/calculators/NetopalkKalkulaator";

export const metadata: Metadata = {
  title: "Netopalga kalkulaator 2026 – Arvuta netopalk brutopalgast | Arvuta.eu",
  description:
    "Arvuta oma netopalk brutopalgast 2026. aastal. Tulumaks 22%, sotsiaalmaks 33%, töötukindlustus 1,6%, II sammas. Näeb ka tööandja kogukulu ja aastast kokkuvõtet.",
  alternates: {
    canonical: '/netopalk',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mis on tulumaksumäär Eestis 2026. aastal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eestis on tulumaksumäär 2026. aastal 22%. Tulumaks arvutatakse maksustatavalt tulult, millest on maha arvatud tulumaksuvaba miinimum (700 €/kuus), töötukindlustusmakse ja II pensionisamba makse.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on tulumaksuvaba miinimum 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tulumaksuvaba miinimum on 700 €/kuus (8 400 €/aastas). Alates 2025. aastast kehtib see kõigile palgasaajatele sõltumata sissetuleku suurusest – varasem sissetulekupõhine faasimismehhanism on kaotatud.",
      },
    },
    {
      "@type": "Question",
      name: "Kes maksab sotsiaalmaksu – tööandja või töötaja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sotsiaalmaksu (33%) maksab tööandja töötaja brutopalga pealt. See ei arvestata töötaja palgast maha — see on tööandja lisakulu brutopalgale.",
      },
    },
    {
      "@type": "Question",
      name: "Kas II pensionisammas on kohustuslik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "II pensionisammas on vabatahtlik. Sellega liitunud töötajate palgast arvestatakse maha 2% ning riik lisab omalt poolt sotsiaalmaksust 4%. Sammast saab nüüd ka sulgeda.",
      },
    },
    {
      "@type": "Question",
      name: "Kui palju maksab töötaja töötukindlustusmakset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Töötaja maksab töötukindlustusmakset 1,6% brutopalgast. Tööandja maksab lisaks 0,8% brutopalgast.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada netopalk brutopalgast 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta oma brutopalk eurodes kuus." },
    { "@type": "HowToStep", text: "Märgi, kas oled liitunud II pensionisambaga." },
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt tulumaksu, töötukindlustuse ja pensionimakse." },
    { "@type": "HowToStep", text: "Näed netopalgale lisaks tööandja kogukulu ja aastase kokkuvõtte." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Netopalga kalkulaator 2026",
  url: "https://arvuta.eu/netopalk",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta netopalk brutopalgast 2026. aastal Eesti maksude alusel.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function NetopalkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div id="ad-top" className="mb-3" />

        <h1 className="text-2xl font-bold text-[#1E40AF] mb-2">
          Netopalga kalkulaator 2026
        </h1>

        <div className="max-w-2xl mb-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Sisesta oma <strong>brutopalk</strong> ja kalkulaator arvutab kohe <strong>netopalga</strong> —
            summa, mis tegelikult pangakontole laekub. Arvutuses kasutatakse 2026. aasta
            Eesti maksumäärasid: tulumaks 22%, töötukindlustusmakse 1,6% ja valikuline
            II pensionisammas 2%.
          </p>
          <p className="mt-2">
            Tulumaksuvaba miinimum (700 €/kuus ehk 8 400 €/aastas) kehtib kõigile palgasaajatele
            ja vähendab automaatselt maksustatavat tulu. Näed ka tööandja tegelikku kogukulu, mis sisaldab sotsiaalmaksu (33%) ja
            tööandja töötukindlustusmakset (0,8%). Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <NetopalkKalkulaator />

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
