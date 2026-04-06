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
        text: "Eestis maksab dividendilt tulumaksu ettevõte, mitte omanik. Standardmäär on 22/78 netodividendist ehk 22% ettevõtte kogukulust. Näide: omanik soovib saada 5 000 € – ettevõte tasub tulumaksu 5 000 × 22/78 = 1 410,26 € ja ettevõtte kogukulu on 6 410,26 €. See on Eesti maksusüsteemi üks suurimaid eripärasid – kasumit ei maksustata enne, kui see välja jaotada.",
      },
    },
    {
      "@type": "Question",
      name: "Kas eraisik peab dividendilt eraldi tulumaksu maksma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti ettevõttest saadud dividendilt eraisik eraldi tulumaksu ei maksa – ettevõte on tulumaksu juba tasunud. See muudab Eesti dividendisüsteemi eriti atraktiivseks: omanik saab kogu netodividendi kätte ilma täiendava isikliku maksukohustuseta. Välisriigi ettevõttest saadud dividendid võivad olla erinevalt maksustatud ning deklareeritakse tuludeklaratsioonis.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on regulaarselt makstavate dividendide soodusmäär?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eestis kehtib dividendidele soodusmäär 14/86, kui ettevõte on maksnud dividende regulaarselt vähemalt kolm aastat järjest ning jooksval aastal makstav summa ei ületa eelmiste aastate keskmist dividendi. Sel juhul on efektiivne maksumäär ~14% (võrreldes tavamääraga ~22%). See soodustus motiveerib regulaarselt dividende maksma – kasvava ettevõtte puhul tasub seda planeerida.",
      },
    },
    {
      "@type": "Question",
      name: "Millal saab dividende välja maksta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dividende saab osaühingus välja maksta kasumist, kui omakapital pärast väljamakset ei lange allapoole osakapitali suurust. Dividendiotsuse teeb osanike koosolek. OÜ puhul ei ole kohustuslikku reservkapitali nõuet (erinevalt AS-ist), mistõttu on väljamaksete tegemine paindlikum. Dividende võib maksta nii kord aastas kui sagedamini – seadus ei piira sagedust.",
      },
    },
    {
      "@type": "Question",
      name: "Kas palk või dividend – kumb on maksusoodsam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See sõltub summast ja olukorrast. Palgalt tasub ettevõte sotsiaalmaksu 33% + töötukindlustus 0,8%, kokku ~34% lisaks brutopalgale. Dividendilt maksab ettevõte ainult 22% tulumaksu (või 14% regulaarsel maksmisel). Suuremate summade puhul on dividend omanikule soodsam. Samas on sotsiaalmaks pensioni- ja ravikindlustuse alus – ilma palgata need hüvitised ei kogu. Optimaalne on kombineerida: minimaalne palk (pensioni jaoks) + dividend.",
      },
    },
    {
      "@type": "Question",
      name: "Kas dividende saab maksta igal ajal aasta jooksul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jah, dividende saab maksta igal ajal, kui ettevõttel on jaotamiseks vaba omakapitali. Enamasti makstakse dividende kord aastas peale majandusaasta lõppu ja aruannete kinnitamist. Vahemaksetena on võimalik maksta ettemakseid ka majandusaasta keskel, kuid siis peab juhatus kinnitama, et dividendi väljamaksmine ei ohusta ettevõtte maksevõimet.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas deklareerida dividende Maksu- ja Tolliametile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ettevõte deklareerib ja maksab tulumaksu TSD vormi (tulu- ja sotsiaalmaksu, kohustusliku kogumispensioni makse ja töötuskindlustusmakse deklaratsioon) kaudu. Tulumaks tuleb tasuda väljamaksele järgneva kuu 10. kuupäevaks. Eraisikust saaja märgib Eesti ettevõttest saadud dividendid tuludeklaratsioonis informatiivselt – maksukohustust täiendavalt ei teki.",
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
    { "@type": "HowToStep", text: "Kontrolli, kas ettevõttel on piisavalt jaotamata kasumit." },
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

        <div className="max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Sisesta <strong>soovitud netodividend</strong> – summa, mille omanik tegelikult
            kätte saab – ja kalkulaator arvutab ettevõtte tasutava <strong>tulumaksu</strong>{" "}
            ning <strong>kogukulu</strong>. Arvutuses kasutatakse 2026. aasta standardmäära:
            tulumaks 22/78 netodividendist (ehk 22% ettevõtte kogukulust).
          </p>
          <p>
            <strong>Eesti dividendisüsteemi eripära:</strong> Eestis ei maksustata kasumit
            enne, kui see ettevõttest välja jaotada. Tulumaksu maksab ettevõte, mitte omanik.
            See tähendab, et omanik saab dividendi kätte ilma täiendava isikliku
            maksukohustuseta – erinevalt paljudest teistest riikidest, kus dividende
            maksustatakse topelt (kord ettevõtte ja kord eraisiku tasemel).
          </p>
          <p>
            Regulaarselt dividende maksvad ettevõtted võivad kasutada{" "}
            <strong>soodusmäära 14/86</strong> (vähemalt 3 aasta järjestikusel maksmisel,
            teatud piirangutega), mis alandab efektiivse maksumäära ~14%-ni. Täpse
            maksunõustamise saamiseks pöördu raamatupidaja poole. Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <DividendKalkulaator />

        {/* Näidete tabel */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Dividendimaksu näited erinevatel summadel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Netodividend (omanikule)</th>
                  <th className="text-right p-3 font-medium">Tulumaks (22/78)</th>
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
            * Standardmäär 22/78. Regulaarsel maksmisel (≥3 aastat) võib kehtida soodusmäär 14/86.
          </p>
        </section>

        {/* Standardmäär vs soodusmäär */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Standardmäär (22%) vs soodusmäär (14%)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">Standardmäär 22/78</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex gap-2"><span className="text-gray-400">→</span> Kehtib kõigile dividendiväljamaksetele</li>
                <li className="flex gap-2"><span className="text-gray-400">→</span> Tulumaks = netodividend × 22 ÷ 78</li>
                <li className="flex gap-2"><span className="text-gray-400">→</span> Efektiivne maksumäär: ~22% kogukulust</li>
                <li className="flex gap-2"><span className="text-gray-400">→</span> Esimeste aastate maksmisel</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-3">Soodusmäär 14/86</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex gap-2"><span className="text-green-500">✓</span> Vähemalt 3 aastat regulaarset maksmist</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Maks ei ületa eelmiste aastate keskmist</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Efektiivne maksumäär: ~14% kogukulust</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Säästab kuni 8% maksudelt</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 bg-yellow-50 rounded-lg p-3 border border-yellow-100">
            <strong>Tähelepanu:</strong> Soodusmäära tingimused on keerukad. Konsulteeri
            raamatupidajaga, kas sinu ettevõte vastab kriteeriumitele.
          </p>
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
