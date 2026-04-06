import type { Metadata } from "next";
import DividendKalkulaator from "@/components/calculators/DividendKalkulaator";

export const metadata: Metadata = {
  title: "Dividendi kalkulaator 2026 – Arvuta dividendimaks 22% | Arvuta.eu",
  description:
    "Arvuta dividendide väljamaksmisega kaasnev tulumaks 2026. aastal. Tulumaksumäär on 22/78. Sisesta soovitud netodividend ja kalkulaator näitab ettevõtte kogukulu.",
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
      name: "Mis on dividendimaksu määr Eestis 2026. aastal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2026. aastal kehtib Eestis dividendidele tulumaksumäär 22/78 – sama mis 2025. aastal. See tähendab, et kui omanik soovib saada 1 000 € netodividendi, arvutatakse tulumaks valemiga 1 000 × 22 ÷ 78 = 282,05 € ja ettevõtte kogukulu on 1 282,05 €. Tulumaksu maksab ettevõte, mitte eraisikust omanik. Allikas: emta.ee.",
      },
    },
    {
      "@type": "Question",
      name: "Kas eraisik peab dividendilt eraldi tulumaksu maksma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti residendist ettevõttest saadud dividendilt eraisik eraldi tulumaksu ei maksa – ettevõte on tulumaksu juba tasunud. Omanik saab kogu netodividendi kätte ilma täiendava isikliku maksukohustuseta. Välisriigi ettevõttest saadud dividendid võivad olla erinevalt maksustatud ning need deklareeritakse tuludeklaratsioonis eraldi real.",
      },
    },
    {
      "@type": "Question",
      name: "Kas 14% dividendimaksu soodusmäär kehtib 2026. aastal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ei, 14/86 soodusmäär kaotati alates 1. jaanuarist 2025 ja see ei kehti 2026. aastal. Enne 2025. aastat said regulaarselt dividende maksvad ettevõtted kasutada madalamat 14/86 määra, kuid see võimalus on nüüd lõpetatud. Kõikidele dividendiväljamaksetele 2025. ja 2026. aastal kehtib ühtne määr 22/78.",
      },
    },
    {
      "@type": "Question",
      name: "Millal saab dividende välja maksta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dividende saab osaühingus välja maksta kasumist, kui omakapital pärast väljamakset ei lange allapoole osakapitali suurust. Dividendiotsuse teeb osanike koosolek. Dividende võib maksta nii kord aastas kui sagedamini – seadus ei piira sagedust. Enamasti makstakse dividende peale majandusaasta lõppu ja aruannete kinnitamist.",
      },
    },
    {
      "@type": "Question",
      name: "Kas palk või dividend – kumb on maksusoodsam 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sõltub konkreetsest olukorrast. Palgalt tasub ettevõte sotsiaalmaksu 33% + töötukindlustus 0,8%, kokku ~33,8% lisaks brutopalgale. Dividendilt maksab ettevõte tulumaksu 22% (22/78 valem). Suuremate summade puhul on dividend tavaliselt maksusoodsam. Samas on sotsiaalmaks pensioni- ja ravikindlustuse alus – ilma palgata need hüvitised ei kogu. Paljud ettevõtjad kombineerivad: minimaalne palk sotsiaalkindlustuseks + dividend ülejäänud sissetulekuks.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas deklareerida dividende Maksu- ja Tolliametile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ettevõte deklareerib ja maksab tulumaksu TSD vormi (tulu- ja sotsiaalmaksu deklaratsioon) kaudu. Tulumaks tuleb tasuda dividendi väljamaksele järgneva kuu 10. kuupäevaks. Näiteks aprillis makstud dividendilt tuleb tulumaks tasuda 10. maiks. Eraisikust omanik märgib Eesti ettevõttest saadud dividendid tuludeklaratsioonis informatiivselt – täiendavat maksukohustust ei teki.",
      },
    },
    {
      "@type": "Question",
      name: "Miks Eesti dividendisüsteem on eripärane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eestis kehtib nn ülekantud maksubaasiga ettevõtte tulumaksu süsteem – kasumit ei maksustata enne, kui see ettevõttest välja jaotada. See annab ettevõtetele paindlikkuse kasumit reinvesteerida maksuvabalt. Enamikus teistes riikides maksustatakse ärikasum esmalt ettevõtte tasemel ja seejärel uuesti dividendina väljamaksel eraisiku tasemel, mis tekitab topeltmaksustamise. Eesti süsteem väldib seda.",
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
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt tulumaksu valemiga: netodividend × 22 ÷ 78." },
    { "@type": "HowToStep", text: "Näed ettevõtte kogukulu – netodividend pluss tulumaks." },
    { "@type": "HowToStep", text: "Kontrolli, kas ettevõttel on piisavalt jaotamata kasumit dividendi väljamaksmiseks." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dividendi kalkulaator 2026",
  url: "https://arvuta.eu/dividend",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta dividendimaks (22/78) ja ettevõtte kogukulu 2026. aastal.",
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

        <div className="max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Sisesta <strong>soovitud netodividend</strong> – summa, mille omanik tegelikult
            kätte saab – ja kalkulaator arvutab ettevõtte tasutava <strong>tulumaksu</strong>{" "}
            ning <strong>kogukulu</strong>. Arvutuses kasutatakse 2026. aasta kehtivat
            tulumaksumäära: <strong>22/78</strong> netodividendist (ehk 22% ettevõtte
            kogukulust). Allikas:{" "}
            <a href="https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/taxation-dividends" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
          <p>
            <strong>Oluline muutus 2025. aastast:</strong> Varasem 14/86 soodusmäär
            regulaarselt makstud dividendidele kaotati 1. jaanuaril 2025 ja ei kehti enam.
            2026. aastal jätkub standardmäär 22/78, mis jõustus 2025. aastal.
          </p>
          <p>
            <strong>Eesti dividendisüsteemi eripära:</strong> Eestis ei maksustata kasumit
            enne, kui see ettevõttest välja jaotada. Tulumaksu maksab ettevõte, mitte
            eraisikust omanik – omanik saab dividendi kätte ilma täiendava isikliku
            maksukohustuseta. Täpsema maksunõustamise saamiseks pöördu raamatupidaja poole.
          </p>
        </div>

        <DividendKalkulaator />

        {/* Näidete tabel */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Dividendimaksu näited 2026 (määr 22/78)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Netodividend (omanikule)</th>
                  <th className="text-right p-3 font-medium">Tulumaks (×22/78)</th>
                  <th className="text-right p-3 font-medium">Ettevõtte kogukulu</th>
                  <th className="text-right p-3 font-medium">Efekt. maksumäär</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">500 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">141,03 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">641,03 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">1 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">282,05 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">1 282,05 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">5 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 410,26 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">6 410,26 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">10 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">2 820,51 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">12 820,51 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">25 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">7 051,28 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">32 051,28 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">50 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">14 102,56 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">64 102,56 €</td>
                  <td className="p-3 text-right text-gray-600">22,0%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Kehtiv määr 2026. aastal: 22/78. Allikas: emta.ee. Täpse maksunõustamise saamiseks pöördu raamatupidaja poole.
          </p>
        </section>

        {/* Määrade ajalugu */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Eesti dividendimaksu muutused ajas
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-medium text-gray-600">Periood</th>
                  <th className="text-right p-3 font-medium text-gray-600">Standardmäär</th>
                  <th className="text-left p-3 font-medium text-gray-600">Märkus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">kuni 31.12.2024</td>
                  <td className="p-3 text-right font-mono text-gray-700">20/80</td>
                  <td className="p-3 text-gray-600">Soodusmäär 14/86 regulaarselt makstud dividendidele</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-3 font-medium text-[#1E40AF]">1.01.2025 – …</td>
                  <td className="p-3 text-right font-mono font-bold text-[#1E40AF]">22/78</td>
                  <td className="p-3 text-gray-600 font-medium">14/86 soodusmäär kaotati. Kehtib 2026. aastal.</td>
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
