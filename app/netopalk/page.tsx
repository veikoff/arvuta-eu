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
        text: "Eestis on tulumaksumäär 2026. aastal 22%. Tulumaks arvutatakse maksustatavalt tulult, millest on maha arvatud tulumaksuvaba miinimum (700 €/kuus), töötukindlustusmakse ja II pensionisamba makse. Näiteks 1 500 € brutopalgalt on maksustatav tulu ligikaudu 776 € ja tulumaks 170,72 €.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on tulumaksuvaba miinimum 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tulumaksuvaba miinimum on 700 €/kuus (8 400 €/aastas). Alates 2025. aastast kehtib see kõigile palgasaajatele sõltumata sissetuleku suurusest – varasem sissetulekupõhine faasimismehhanism, kus kõrgema palga juures vähenes maksuvaba miinimum, on kaotatud. See tähendab, et ka 10 000 € brutopalka saav töötaja saab täies mahus 700 € maksuvaba miinimumi.",
      },
    },
    {
      "@type": "Question",
      name: "Kes maksab sotsiaalmaksu – tööandja või töötaja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sotsiaalmaksu (33%) maksab tööandja töötaja brutopalga pealt. See ei arvestata töötaja palgast maha — see on tööandja lisakulu brutopalgale. Näiteks 2 000 € brutopalga puhul maksab tööandja 660 € sotsiaalmaksu, mis tähendab, et töötaja tegelik maksumus tööandjale on 2 693,60 € (arvestades ka 0,8% töötukindlustust). Sotsiaalmaks läheb pensioni ja ravikindlustuse rahastamiseks.",
      },
    },
    {
      "@type": "Question",
      name: "Kas II pensionisammas on kohustuslik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "II pensionisammas on vabatahtlik. Sellega liitunud töötajate palgast arvestatakse maha 2% ning riik lisab omalt poolt sotsiaalmaksust 4%, mis tähendab, et tegelik pension kasvab 6% brutopalgast. Sammast saab sulgeda, kuid suletud sambaga kaotad ka riigi 4% lisapanuse. Sambaga liitumine vähendab küll netopalgat 2%, kuid pikaajalises perspektiivis on säästude kasv märkimisväärne.",
      },
    },
    {
      "@type": "Question",
      name: "Kui palju maksab töötaja töötukindlustusmakset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Töötaja maksab töötukindlustusmakset 1,6% brutopalgast. Tööandja maksab lisaks 0,8% brutopalgast. Töötukindlustusmakse arvestatakse maha enne tulumaksu arvutamist, mis vähendab pisut maksustatavat tulu. Näiteks 1 800 € brutopalga puhul maksab töötaja töötukindlustust 28,80 €/kuus.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas arvutada netopalk käsitsi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Netopalga arvutamiseks: 1) Lahuta brutopalgast töötukindlustus (1,6%) ja II sammas (2%, kui liitunud). 2) Lahuta tulemusest tulumaksuvaba miinimum (700 €). 3) Korruta tulemus tulumaksumääraga (22%) — see on tulumaks. 4) Netopalk = brutopalk − töötukindlustus − II sammas − tulumaks. Näide: 2 000 € bruto, II sambaga: 2 000 − 32 − 40 − (2 000 − 700 − 32 − 40)×0,22 = 2 000 − 32 − 40 − 270,16 = 1 657,84 €.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on miinimumpalk Eestis 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti miinimumpalk 2026. aastal on 886 €/kuus (bruto). Sellelt palgalt on netopalk ligikaudu 832 €/kuus (arvestades tulumaksuvaba miinimumi 700 € ja 22% tulumaksu). Tööandja kogukulu miinimumpalga puhul on ligikaudu 1 186 €/kuus (arvestades sotsiaalmaksu 33% ja töötukindlustust 0,8%).",
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
    { "@type": "HowToStep", text: "Märgi, kas oled liitunud II pensionisambaga (2% palgast)." },
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt tulumaksu (22%), töötukindlustuse (1,6%) ja pensionimakse." },
    { "@type": "HowToStep", text: "Näed netopalgale lisaks tööandja kogukulu, mis sisaldab sotsiaalmaksu (33%) ja tööandja töötukindlustust (0,8%)." },
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

        <div className="max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Sisesta oma <strong>brutopalk</strong> ja kalkulaator arvutab kohe{" "}
            <strong>netopalga</strong> — summa, mis tegelikult pangakontole laekub.
            Arvutuses kasutatakse 2026. aasta Eesti maksumäärasid: tulumaks 22%,
            töötukindlustusmakse 1,6% ja valikuline II pensionisammas 2%.
          </p>
          <p>
            <strong>Tulumaksuvaba miinimum</strong> on 700 €/kuus (8 400 €/aastas) ja
            kehtib alates 2025. aastast kõigile palgasaajatele sõltumata sissetuleku
            suurusest. Varasem süsteem, kus kõrgema sissetuleku korral vähenes maksuvaba
            miinimum, on kaotatud – see lihtsustab arvutamist märkimisväärselt.
          </p>
          <p>
            Kalkulaator näitab ka <strong>tööandja kogukulu</strong>, mis sisaldab
            sotsiaalmaksu (33% brutopalgast) ja tööandja töötukindlustust (0,8%).
            Sotsiaalmaksu maksab tööandja peale brutopalga ja see ei laeku töötaja
            palgast maha. Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <NetopalkKalkulaator />

        {/* Netopalga tabel erinevatel palkadel */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Netopalk erinevatel brutopalkadel 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Brutopalk</th>
                  <th className="text-right p-3 font-medium">Tulumaks</th>
                  <th className="text-right p-3 font-medium">Netopalk (II sambaga)</th>
                  <th className="text-right p-3 font-medium">Tööandja kogukulu</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">886 € (miinimum)</td>
                  <td className="p-3 text-right font-mono text-gray-600">40,97 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">826,59 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 185,89 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">1 200 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">99,44 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">1 076,56 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 605,60 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">1 500 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">170,72 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">1 305,28 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">2 007,00 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">2 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">270,16 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">1 657,84 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">2 676,00 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">2 500 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">380,16 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">2 069,84 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">3 345,00 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">3 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">482,24 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">2 409,76 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">4 014,00 €</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">5 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">922,24 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">3 937,76 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">6 690,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Arvutatud II pensionisambaga liitunud töötajale. Tulumaksuvaba miinimum 700 €/kuus, tulumaks 22%, töötukindlustus 1,6%, II sammas 2%.
          </p>
        </section>

        {/* Maksude selgitus */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Eesti palgamaksud 2026 – ülevaade
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-medium text-gray-600">Maks</th>
                  <th className="text-right p-3 font-medium text-gray-600">Määr</th>
                  <th className="text-left p-3 font-medium text-gray-600">Maksja</th>
                  <th className="text-left p-3 font-medium text-gray-600">Eesmärk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">Tulumaks</td>
                  <td className="p-3 text-right font-mono">22%</td>
                  <td className="p-3 text-gray-600">Töötaja</td>
                  <td className="p-3 text-gray-600">Riigi eelarve</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">Sotsiaalmaks</td>
                  <td className="p-3 text-right font-mono">33%</td>
                  <td className="p-3 text-gray-600">Tööandja</td>
                  <td className="p-3 text-gray-600">Pension + ravikindlustus</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">Töötukindlustus (töötaja)</td>
                  <td className="p-3 text-right font-mono">1,6%</td>
                  <td className="p-3 text-gray-600">Töötaja</td>
                  <td className="p-3 text-gray-600">Töötushüvitis</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">Töötukindlustus (tööandja)</td>
                  <td className="p-3 text-right font-mono">0,8%</td>
                  <td className="p-3 text-gray-600">Tööandja</td>
                  <td className="p-3 text-gray-600">Töötushüvitis</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">II pensionisammas</td>
                  <td className="p-3 text-right font-mono">2%</td>
                  <td className="p-3 text-gray-600">Töötaja (vabatahtlik)</td>
                  <td className="p-3 text-gray-600">Kogumispension (+ riik 4%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
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
