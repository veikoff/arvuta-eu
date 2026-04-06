import type { Metadata } from "next";
import AutomaksKalkulaator from "@/components/calculators/AutomaksKalkulaator";

export const metadata: Metadata = {
  title: "Automaksu kalkulaator 2026 – Registreerimis- ja aastamaks | Arvuta.eu",
  description:
    "Arvuta oma auto registreerimismaks ja aastamaks 2026. aastal. Sisesta CO₂ heitkogus, võimsus, valmistamisaasta ja kütuse liik – tulemus kohe.",
  alternates: {
    canonical: '/automaks',
  },
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
        text: "Eesti automaks jõustus 1. jaanuaril 2025. Registreerimistaks rakendub uutele sõidukitele registreerimisel ja aastamaks kõikidele Eestis registreeritud sõidukitele. 2026. aastal kehtivad samad määrad, mis kehtestati 2025. aastal. Maks ei ole tagasiulatuv – sõidukeid, mis olid enne 2025. aastat registreeritud, registreerimistaks ei puuduta.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas arvutatakse automaksu registreerimismaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registreerimistaks koosneb kahest komponendist: CO₂ komponent (g/km põhjal) ja võimsuse komponent (kW põhjal). CO₂ komponent on null kuni 117 g/km, seejärel progressiivselt kasvav – 5 €/g kuni 150 g/km, 15 €/g kuni 200 g/km jne. Võimsuse komponent algab 74 kW ületamisest (5 €/kW kuni 100 kW, 10 €/kW kuni 150 kW jne). Lõplik registreerimistaks korrutatakse vanusemärgisega – vanematel sõidukitel on märkimisväärne allahindlus.",
      },
    },
    {
      "@type": "Question",
      name: "Kas elektriautod peavad automaksu maksma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elektrisõidukid on täielikult CO₂ komponendist vabastatud, kuna neil puudub heitkogus. Kuid kui elektriauto mootori võimsus ületab 74 kW, rakendub siiski võimsuse komponent nii registreerimistaksul kui aastamaksul. Näiteks Tesla Model 3 Standard Range (239 kW) maksaks võimsuse komponendina registreerimisel: (100-74)×5 + (150-100)×10 + (200-150)×20 + (239-200)×40 = 130 + 500 + 1000 + 1560 = 3 190 €.",
      },
    },
    {
      "@type": "Question",
      name: "Mis vahe on registreerimismaksul ja aastamaksul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registreerimistaks makstakse üks kord – sõiduki esmakordsel registreerimisel Eestis. See on ühekordne kulu, mis laekub riigile sõiduki registreerimisel liiklusregistris. Aastamaks on iga-aastane maks, mida tasub sõiduki omanik kord aastas. Aastamaks on üldiselt palju väiksem kui registreerimistaks ning seda makstakse seni, kuni sõiduk on Eestis registreeritud.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas mõjutab sõiduki vanus automaksu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vanusemärgis vähendab registreerimistaksu märkimisväärselt. Alla 5-aastased sõidukid maksavad täismäära (100%). 5–9-aastased sõidukid maksavad 75% täismäärast. 10–14-aastased sõidukid maksavad 50%. 15–19-aastased sõidukid maksavad 25%. 20 ja enamaaastased sõidukid maksavad vaid 10% täismäärast. Vanusemärgis rakendub ainult registreerimistaksule – aastamaksul see ei kehti.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas mõjutab diislikütus automaksu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diiselsõidukite CO₂ komponent on 10% kõrgem kui sama CO₂-ga bensiinisõidukil. See lisatasu kajastab diisli suuremat õhusaastet – diislimootorid eritavad rohkem tahkeid osakesi ja lämmastikoksiide. Näiteks kui bensiiniauto CO₂ komponent oleks 200 €, siis sama CO₂-ga diiselautol oleks see 220 €. Hübriidsõidukitele diisli lisatasu ei rakendu.",
      },
    },
    {
      "@type": "Question",
      name: "Kust leida auto CO₂ heitkogust ja võimsust?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CO₂ heitkogus (g/km) ja mootori võimsus (kW) on kirjas sõiduki registreerimistunnistusel (tehniline pass). Samuti leiad need andmed ARK (Autoregistrikeskus) e-teenustest aadressil eteenused.mnt.ee, sisestades sõiduki registreerimisnumbri. Uuematel sõidukitel on CO₂ väärtus sageli kirjas ka müügidokumentides ja tootja tehnilistes andmetes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada Eesti automaksu 2026",
  step: [
    { "@type": "HowToStep", text: "Sisesta sõiduki CO₂ heitkogus (g/km) – leiad auto registreerimistunnistuselt või ARK e-teenustest." },
    { "@type": "HowToStep", text: "Sisesta mootori võimsus kilovattides (kW) – samuti registreerimistunnistuselt." },
    { "@type": "HowToStep", text: "Vali sõiduki esmakordse registreerimise aasta – mõjutab vanusemärgist." },
    { "@type": "HowToStep", text: "Vali kütuse liik (bensiin, diisel, elekter või hübriid)." },
    { "@type": "HowToStep", text: "Kalkulaator näitab kohe registreerimismaksu ja aastamaksu koos arvutuse selgitusega." },
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

        <div className="prose prose-gray max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Eesti automaks koosneb kahest osast: <strong>registreerimismaksust</strong> ja{" "}
            <strong>aastamaksust</strong>. Registreerimistaks tasutakse üks kord sõiduki
            Eestis registreerimisel. Aastamaks on iga-aastane maks kõikidele Eestis
            registreeritud mootorsõidukitele.
          </p>
          <p>
            Maksu suurus sõltub CO₂ heitkogusest (g/km), mootori võimsusest (kW),
            sõiduki vanusest ja kütuse liigist. <strong>Elektrisõidukid</strong> on CO₂
            komponendist täielikult vabastatud. <strong>Diiselsõidukite</strong> CO₂
            komponent on 10% kõrgem kui sama heitkogusega bensiinisõidukil.
          </p>
          <p>
            <strong>Vanusemärgis</strong> vähendab registreerimistaksu oluliselt: üle
            20-aastased sõidukid maksavad vaid 10% täismäärast. 5–9-aastastel sõidukitel
            on 25% allahindlus (maksavad 75%), 10–14-aastastel 50% allahindlus ja
            15–19-aastastel 75% allahindlus. Vanusemärgis kehtib ainult
            registreerimistaksul – aastamaks on sama kõigile sõltumata vanusest.
          </p>
          <p>
            CO₂ heitkoguse ja mootori võimsuse leiad sõiduki{" "}
            <strong>registreerimistunnistuselt</strong> (tehniline pass) või{" "}
            <a
              href="https://eteenused.mnt.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E40AF] underline"
            >
              ARK e-teenustest
            </a>{" "}
            registreerimisnumbri järgi. Täpse seadusliku aluse leiad{" "}
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

        {/* Näited */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Praktilised näited: automaks erinevatel sõidukitel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Sõiduk</th>
                  <th className="text-left p-3 font-medium">CO₂ / kW</th>
                  <th className="text-right p-3 font-medium">Reg.maks</th>
                  <th className="text-right p-3 font-medium">Aastamaks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">Toyota Yaris 2022, bensiin</td>
                  <td className="p-3 text-gray-500">92 g/km, 72 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">0 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">4,60 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700">Toyota Corolla 2020, bensiin</td>
                  <td className="p-3 text-gray-500">95 g/km, 103 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">120 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">13,45 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">VW Golf 2022, diisel</td>
                  <td className="p-3 text-gray-500">130 g/km, 85 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">127 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">24,04 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700">BMW 320d 2023, diisel</td>
                  <td className="p-3 text-gray-500">159 g/km, 140 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">1 309 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">62,18 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700">Tesla Model 3 2022, elekter</td>
                  <td className="p-3 text-gray-500">0 g/km, 239 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">2 393 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">49,50 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700">Toyota Corolla 2005, bensiin</td>
                  <td className="p-3 text-gray-500">165 g/km, 95 kW</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">22 €</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">50,50 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Näited on arvutatud 2026. aasta automaksu seaduse alusel. Tegelik maks sõltub sõiduki täpsetest andmetest.
          </p>
        </section>

        {/* Määrade tabelid */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Automaksu määrad 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CO2 registreerimine */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">CO₂ komponent (registreerimine)</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2 font-medium text-gray-600">CO₂ (g/km)</th>
                    <th className="text-right p-2 font-medium text-gray-600">Määr</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="p-2">0 – 117</td><td className="p-2 text-right">0 €</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2">118 – 150</td><td className="p-2 text-right">5 €/g</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-2">151 – 200</td><td className="p-2 text-right">15 €/g</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2">201 – 250</td><td className="p-2 text-right">30 €/g</td></tr>
                  <tr><td className="p-2">251+</td><td className="p-2 text-right">50 €/g</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-1">Diiselsõidukitel ×1,1 lisatasu</p>
            </div>

            {/* Vanusemärgis */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Vanusemärgis (registreerimine)</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-2 font-medium text-gray-600">Sõiduki vanus</th>
                    <th className="text-right p-2 font-medium text-gray-600">Allahindlus</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="p-2">0 – 4 aastat</td><td className="p-2 text-right">0% (täismäär)</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2">5 – 9 aastat</td><td className="p-2 text-right">25% allahindlus</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-2">10 – 14 aastat</td><td className="p-2 text-right">50% allahindlus</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50"><td className="p-2">15 – 19 aastat</td><td className="p-2 text-right">75% allahindlus</td></tr>
                  <tr><td className="p-2">20+ aastat</td><td className="p-2 text-right">90% allahindlus</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-1">Kehtib ainult registreerimismaksule</p>
            </div>
          </div>
        </section>

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
