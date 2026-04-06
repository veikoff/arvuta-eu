import type { Metadata } from "next";
import LaenKalkulaator from "@/components/calculators/LaenKalkulaator";

export const metadata: Metadata = {
  title: "Laenukalkulaator 2026 – Arvuta kuumakse ja koguintress | Arvuta.eu",
  description:
    "Arvuta laenu kuumakse, koguintress ja tagasimaksegraafik. Toetab annuiteeti ja võrdset põhiosa. Sisesta laenusumma, intress ja periood.",
  alternates: {
    canonical: '/laen',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mis on annuiteetlaen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annuiteetlaenu puhul on iga kuu makse täpselt ühesuurune kogu laenuperioodil. Esimestel kuudel on maksest suurem osa intress ja väiksem osa põhiosa tagasimakse. Aja jooksul see suhe pöördub – põhiosa osakaal kasvab ja intressiosa väheneb. Enamik tarbimislaene, autoliisinge ja kodulaene toimib annuiteedi põhimõttel, sest see on laenuvõtjale etteplaneeritavam.",
      },
    },
    {
      "@type": "Question",
      name: "Mis vahe on annuiteedil ja võrdsel põhiosal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annuiteedi puhul on kuumakse kogu perioodi jooksul sama – lihtsam planeerida. Võrdse põhiosa puhul makstakse iga kuu täpselt sama palju põhiosa tagasi, kuid intressimakse väheneb aja jooksul, sest laenujääk väheneb. Seetõttu on võrdse põhiosa esimesed maksed suuremad, kuid viimased väiksemad. Kokku on võrdne põhiosa alati odavam – sa maksad vähem koguintressi, sest laenujääk väheneb kiiremini.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas arvutatakse laenu kuumakse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annuiteedi kuumakse arvutatakse valemiga: M = P × r × (1+r)^n ÷ ((1+r)^n − 1), kus P on laenusumma, r on kuuintress (aastaintress ÷ 12 ÷ 100) ja n on kuude arv. Näide: 10 000 € laen, 8% aastas, 36 kuud: r = 0,006667; M = 10 000 × 0,006667 × 1,2702 ÷ 0,2702 ≈ 313 €/kuus, koguintress ≈ 1 268 €.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on koguintress ja miks see oluline on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koguintress on kõigi intressimaksete summa laenu kogu perioodi jooksul – see näitab, kui palju sa tegelikult üle laenusumma maksad. Mida pikem laenuperiood ja kõrgem intress, seda suurem koguintress. Näiteks 50 000 € laen 4% intressiga 20 aastaks annab kuumakse ~303 €, aga koguintress ~22 700 €. Sama laen 10-aastase perioodiga annab kuumakse ~506 €, aga koguintress vaid ~10 700 € – lühem periood säästab 12 000 €.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on mõistlik laenuintress Eestis 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eesti pankade intressimäärad sõltuvad laenu liigist ja tagatisest. Kodulaenud on tavaliselt madalama intressiga (Euribor + 1–2,5%), kuna kinnisvara on tagatis. Tarbimislaenude intressid on kõrgemad – väikelaenudel 10–25% aastas, eriti ilma tagatiseta. Krediitkaardi intress ulatub sageli 20–30%-ni. Enne laenuvõtmist tasub võrrelda mitme panga pakkumisi ja arvestada kogu laenuperioodi kogukulu, mitte ainult kuumakset.",
      },
    },
    {
      "@type": "Question",
      name: "Kas laenu ennetähtaegne tagasimaksmine tasub end ära?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ennetähtaegne tagasimaksmine säästab intressi, sest laenujääk, millelt intressi arvestatakse, väheneb kiiremini. Eestis kehtib tarbijakrediidi direktiiv, mille kohaselt on erakliendil õigus laen ennetähtaegselt tagasi maksta. Mõned pangad võivad küsida ennetähtaegse tagasimaksmise tasu, mis tavaliselt on piiratud 1%-ga ülejäänud laenujäägist. Arvuta, kas intressisääst ületab tasu – sageli tasub end ära.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on KMK (krediidi kulukuse määr) ja kuidas see erineb intressimäärast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KMK ehk krediidi kulukuse määr näitab laenu tegelikku aastakulukust protsentides, arvestades kõiki tasusid – mitte ainult intressi, vaid ka lepingutasusid, halduskulusid ja kindlustusmakseid. KMK on alati sama suur kui intressimäär või suurem. Laenupakkumisi võrreldes kasuta alati KMK-d, mitte ainult nominaalset intressimäära – see annab täpsema pildi tegelikust kulust.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Kuidas arvutada laenu kuumakse",
  step: [
    { "@type": "HowToStep", text: "Sisesta laenusumma eurodes." },
    { "@type": "HowToStep", text: "Sisesta aastane intressimäär protsendides." },
    { "@type": "HowToStep", text: "Vali laenuperiood kuudes." },
    { "@type": "HowToStep", text: "Vali laenu tüüp: annuiteet (võrdne kuumakse) või võrdne põhiosa (vähenev kuumakse)." },
    { "@type": "HowToStep", text: "Kalkulaator näitab kuumakset, koguintressi ja interaktiivset tagasimaksegraafikut." },
  ],
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Laenukalkulaator 2026",
  url: "https://arvuta.eu/laen",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Arvuta laenu kuumakse ja koguintress annuiteedi või võrdse põhiosa meetodil.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function LaenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div id="ad-top" className="mb-3" />

        <h1 className="text-2xl font-bold text-[#1E40AF] mb-2">
          Laenukalkulaator 2026
        </h1>

        <div className="max-w-2xl mb-6 text-gray-700 leading-relaxed text-sm space-y-3">
          <p>
            Sisesta <strong>laenusumma</strong>, <strong>intressimäär</strong> ja{" "}
            <strong>periood</strong> – kalkulaator arvutab kohe kuumakse, koguintressi
            ja näitab interaktiivset tagasimaksegraafikut. Toetab nii{" "}
            <strong>annuiteeti</strong> (võrdne kuumakse kogu perioodi jooksul) kui{" "}
            <strong>võrdset põhiosa</strong> (vähenev kuumakse, odavam kokku).
          </p>
          <p>
            Kahe laenuliigi peamine erinevus on rahavooline: annuiteet tagab stabiilse
            kuumakse, mis lihtsustab eelarvestamist. Võrdse põhiosa puhul on esimesed
            maksed suuremad, kuid koguintress tuleb väiksem, sest laenujääk väheneb
            kiiremini. <strong>Näide:</strong> 20 000 € laen 6%-lise intressiga 60 kuuks –
            annuiteedi kuumakse on ~387 €, koguintress ~3 199 €. Võrdse põhiosa esimene
            makse on ~433 €, aga koguintress ainult ~3 050 €.
          </p>
          <p>
            Kalkulaator sobib <strong>tarbimislaenu</strong>, <strong>autoliisingu</strong>{" "}
            ja <strong>kodulaenu</strong> orienteeruvaks arvutuseks. Täpse pakkumise ja
            KMK (krediidi kulukuse määr) saamiseks pöördu otse panka. Alati tasub võrrelda
            mitme panga pakkumisi – intressierinevus 1–2% tähendab pika laenu puhul
            tuhandeid eurosid.
          </p>
        </div>

        <LaenKalkulaator />

        {/* Näidete tabel */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Laenu kuumaksenäited erinevatel tingimustel
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E40AF] text-white">
                  <th className="text-left p-3 font-medium">Laenusumma</th>
                  <th className="text-right p-3 font-medium">Intress</th>
                  <th className="text-right p-3 font-medium">Periood</th>
                  <th className="text-right p-3 font-medium">Kuumakse</th>
                  <th className="text-right p-3 font-medium">Koguintress</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">3 000 €</td>
                  <td className="p-3 text-right text-gray-600">12%</td>
                  <td className="p-3 text-right text-gray-600">24 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">141 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">386 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">5 000 €</td>
                  <td className="p-3 text-right text-gray-600">12%</td>
                  <td className="p-3 text-right text-gray-600">24 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">235 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">640 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">10 000 €</td>
                  <td className="p-3 text-right text-gray-600">8%</td>
                  <td className="p-3 text-right text-gray-600">36 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">313 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">1 268 €</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 font-medium text-gray-700">20 000 €</td>
                  <td className="p-3 text-right text-gray-600">6%</td>
                  <td className="p-3 text-right text-gray-600">60 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">387 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">3 199 €</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-700">50 000 €</td>
                  <td className="p-3 text-right text-gray-600">4%</td>
                  <td className="p-3 text-right text-gray-600">240 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">303 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">22 700 €</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-700">150 000 €</td>
                  <td className="p-3 text-right text-gray-600">3,5%</td>
                  <td className="p-3 text-right text-gray-600">360 kuud</td>
                  <td className="p-3 text-right font-mono font-medium text-gray-800">673 €</td>
                  <td className="p-3 text-right font-mono text-gray-600">92 280 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Kõik näited on annuiteetlaen. Tegelikud tingimused sõltuvad pangast ja laenuvõtja krediidivõimekusest.
          </p>
        </section>

        {/* Annuiteet vs võrdne põhiosa */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Annuiteet vs võrdne põhiosa – kumba valida?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-[#1E40AF] mb-2">Annuiteet</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>✓ Sama kuumakse kogu laenuperioodil</li>
                <li>✓ Lihtsam eelarvestada</li>
                <li>✓ Enamiku pankade vaikimisi valik</li>
                <li>✗ Koguintress on suurem</li>
                <li>✗ Esimestel aastatel makstad peamiselt intressi</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-bold text-green-700 mb-2">Võrdne põhiosa</h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li>✓ Väiksem koguintress</li>
                <li>✓ Laenujääk väheneb kiiremini</li>
                <li>✓ Parem inflatsioonikaitse</li>
                <li>✗ Esimesed maksed on suuremad</li>
                <li>✗ Nõuab kõrgemat algset maksevõimet</li>
              </ul>
            </div>
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
