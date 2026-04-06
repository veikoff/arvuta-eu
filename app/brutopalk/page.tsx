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
        text: "Brutopalgast netopalgani jõudmiseks arvestatakse maha tulumaks (22%), töötukindlustusmakse (1,6%) ja II pensionisamba makse (2%). Kuna tulumaksuvaba miinimum (700 €) vähendab maksustatavat tulu, on tagurpidi arvutus matemaatiliselt keeruline. Lihtne ligikaudne valem: brutopalk ≈ (netopalk − 154) ÷ 0,752 (kehtib II sambaga, kui palk üle 726 €/kuus). Täpse tulemuse saad kalkulaatoriga, mis kasutab iteratiivset meetodit.",
      },
    },
    {
      "@type": "Question",
      name: "Miks on brutopalk suurem kui netopalk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brutopalk on palk enne maksude mahaarvamist. Sellest arvestatakse töötaja poolelt maha tulumaks (22% maksustatavalt tulult), töötukindlustusmakse (1,6%) ja valikuliselt II pensionisamba makse (2%). Alles pärast neid mahaarvamisi on käes netopalk ehk summa, mis pangakontole laekub. Mida kõrgem brutopalk, seda suurem on absoluutsummas maksude mahaarvamine, kuid tänu tulumaksuvabale miinimumile (700 €/kuus) on efektiivne maksumäär madalamatel palkadel väiksem.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on tööandja tegelik kogukulu töötajale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tööandja maksab lisaks brutopalgale sotsiaalmaksu (33% brutost) ja tööandja töötukindlustusmakset (0,8% brutost). Seega on tööandja tegelik kogukulu ligikaudu 1,338 korda suurem kui brutopalk. Näiteks: töötaja soovib 1 500 € netopalgaväärtust, mis vastab ligikaudu 1 790 € brutopalgale, ja tööandja kogukulu on seega ~2 395 €/kuus. See on oluline teada nii tööotsijale, kes läbirääkimisi peab, kui tööandjale, kes eelarvet planeerib.",
      },
    },
    {
      "@type": "Question",
      name: "Kas II pensionisamba lülitamine mõjutab brutopalgavajadust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jah, märkimisväärselt. II pensionisammas vähendab netopalgaväärtust 2% võrra brutost. Sama netopalga saamiseks on sambaga liitunud töötajal vaja kõrgemat brutopalgaväärtust. Näiteks 2 000 € neto saamiseks on sambaga vaja ~2 590 € bruto, ilma sambata ~2 455 € bruto – vahe ligi 135 €/kuus. Pikas plaanis kompenseerib sambasse kogunenud kapital selle erinevuse aga kordades.",
      },
    },
    {
      "@type": "Question",
      name: "Millal kasutada brutopalgast netopalga kalkulaatorit vs netopalgast brutopalgaväärtust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kui tead oma brutopalgaväärtust (nt tööpakkumises on kirjas 2 500 € bruto) ja soovid teada, kui palju pangakontole laekub, kasuta netopalga kalkulaatorit (arvuta.eu/netopalk). Kui aga tead, kui palju soovid kätte saada (nt 2 000 € neto), ja soovid teada, millist brutopalgaväärtust tööandjalt küsida, kasuta seda tagurpidi kalkulaatorit.",
      },
    },
    {
      "@type": "Question",
      name: "Kas tööandja näeb erinevust, kas töötaja on II sambaga liitunud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tööandja kogukulu ei sõltu töötaja II pensionisamba valikust. Sotsiaalmaks (33%) ja tööandja töötukindlustus (0,8%) arvutatakse alati brutopalgalt. II sambasse suunatav 2% on töötaja enda raha, mis arvestatakse brutopalgalt maha enne netopalgaväärtuse arvutamist. Tööandjale tähendab see ainult pisut keerukamat palgaarvestust, mitte lisakulu.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada brutopalk netopalgast 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta soovitud netopalk eurodes kuus – summa, mille soovid kätte saada." },
    { "@type": "HowToStep", text: "Märgi, kas oled liitunud II pensionisambaga (2% palgast)." },
    { "@type": "HowToStep", text: "Kalkulaator arvutab automaatselt täpse brutopalgaväärtuse, kasutades iteratiivset meetodit." },
    { "@type": "HowToStep", text: "Näed kõiki mahaarvamisi, tööandja kogukulu ja arvutuse kirjeldust." },
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

        <div className="max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Tead, kui palju soovid <strong>kätte saada</strong>, aga ei tea, millist{" "}
            <strong>brutopalgaväärtust</strong> tööandjalt küsida? Sisesta soovitud netopalk ja
            kalkulaator leiab iteratiivse meetodiga täpse brutopalgaväärtuse koos kõigi
            mahaarvamistega — tulumaks (22%), töötukindlustus (1,6%) ja II pensionisammas (2%).
          </p>
          <p>
            Tagurpidi arvutus on keerulisem kui tavaline netopalgaväärtuse leidmine, sest{" "}
            <strong>tulumaksuvaba miinimum</strong> (700 €/kuus) teeb valemi
            mittelineaarseks. Ligikaudne käsitsi arvutamise valem II sambaga töötajale:{" "}
            <em>brutopalk ≈ (soovitud netopalk − 154) ÷ 0,752</em>. See valem kehtib
            brutopalgaväärtuse korral üle ~726 €/kuus.
          </p>
          <p>
            Kalkulaator näitab ka <strong>tööandja kogukulu</strong> — summa, mis tööandja
            tegelikult sinu palkamiseks välja käib. See on brutopalk pluss sotsiaalmaks (33%)
            ja tööandja töötukindlustus (0,8%), kokku korrutatuna ~1,338-ga. See number on
            palgaläbirääkimistel oluline: kui tead tööandja tegelikku kulupiirangut, saad
            realistlikumaid ootusi seada. Allikas:{" "}
            <a href="https://www.emta.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              emta.ee
            </a>.
          </p>
        </div>

        <BrutopalkKalkulaator />

        {/* Näidete tabel */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Netopalgast brutopalgaväärtusele – viitetabel 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Soovitud netopalk</th>
                  <th className="text-right p-3 font-medium">Brutopalk (II sambaga)</th>
                  <th className="text-right p-3 font-medium">Tööandja kogukulu</th>
                  <th className="text-right p-3 font-medium">Efektiivne maksumäär</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">700 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">726 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">971 €</td>
                  <td className="p-3 text-right text-gray-600">3,6%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">800 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">860 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 151 €</td>
                  <td className="p-3 text-right text-gray-600">7,0%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">1 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">1 125 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 505 €</td>
                  <td className="p-3 text-right text-gray-600">11,1%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">1 200 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">1 391 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 861 €</td>
                  <td className="p-3 text-right text-gray-600">13,7%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">1 500 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">1 790 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">2 395 €</td>
                  <td className="p-3 text-right text-gray-600">16,2%</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">2 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">2 455 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">3 285 €</td>
                  <td className="p-3 text-right text-gray-600">18,5%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">3 000 €</td>
                  <td className="p-3 text-right font-mono text-gray-800">3 785 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">5 064 €</td>
                  <td className="p-3 text-right text-gray-600">20,7%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Arvutatud II pensionisambaga liitunud töötajale. Efektiivne maksumäär = (brutopalk − netopalk) ÷ brutopalk. Tööandja kogukulu ≈ brutopalk × 1,338.
          </p>
        </section>

        {/* Palgaläbirääkimiste nipp */}
        <section className="mt-10 bg-blue-50 rounded-xl p-6">
          <h2 className="text-lg font-bold text-[#1E40AF] mb-3">
            Palgaläbirääkimiste nipp: räägi tööandjaga kogukulus
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Kui lähed palgatõusu küsima, on mõistlik mõelda tööandja vaatenurgast.
            Tööandja ei mõtle &quot;brutopalk&quot;, vaid &quot;kogukulu&quot;. Kui tööandja
            eelarves on su peale 2 500 €/kuus, siis brutopalk on sellest ~1 869 € ja
            netopalk ~1 557 € (II sambaga). Selle tabeli abil saad kohe arvutada, mida
            erinevad kogukulud tähendavad sinu netopalgaväärtusele.
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
