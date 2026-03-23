import type { Metadata } from "next";
import LaenKalkulaator from "@/components/calculators/LaenKalkulaator";

export const metadata: Metadata = {
  title: "Laenukalkulaator 2026 – Arvuta kuumakse ja koguintress | Arvuta.eu",
  description:
    "Arvuta laenu kuumakse, koguintress ja tagasimaksegraafik. Toetab annuiteeti ja võrdset põhiosa. Sisesta laenusumma, intress ja periood.",
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
        text: "Annuiteetlaenu puhul on iga kuu makse ühesuurune. Esimestel kuudel on intressiosa suurem ja põhiosa väiksem, aja jooksul see suhe pöördub. Enamik tarbimis- ja kodulaene on annuiteedid.",
      },
    },
    {
      "@type": "Question",
      name: "Mis vahe on annuiteedil ja võrdsel põhiosal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annuiteedi puhul on kuumakse kogu perioodi jooksul sama. Võrdse põhiosa puhul makstakse iga kuu sama palju põhiosa tagasi, kuid intressimakse väheneb aja jooksul – esimesed maksed on suuremad, viimased väiksemad. Võrdne põhiosa on kokku odavam.",
      },
    },
    {
      "@type": "Question",
      name: "Kuidas arvutatakse laenu kuumakse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annuiteedi kuumakse arvutatakse valemiga: P × r × (1+r)^n / ((1+r)^n − 1), kus P on laenusumma, r on kuuintress (aastaintress / 12) ja n on kuude arv.",
      },
    },
    {
      "@type": "Question",
      name: "Mis on koguintress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Koguintress on kõigi intressimaksete summa laenu kogu perioodi jooksul – ehk kui palju sa tegelikult üle laenusumma maksad. Mida pikem periood ja kõrgem intress, seda suurem koguintress.",
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
    { "@type": "HowToStep", text: "Vali laenu tüüp: annuiteet või võrdne põhiosa." },
    { "@type": "HowToStep", text: "Kalkulaator näitab kuumakset, koguintressi ja tagasimaksegraafikut." },
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

        <div className="max-w-2xl mb-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Sisesta <strong>laenusumma</strong>, <strong>intressimäär</strong> ja <strong>periood</strong> –
            kalkulaator arvutab kohe kuumakse, koguintressi ja näitab tagasimaksegraafikut.
            Toetab nii annuiteeti (võrdne kuumakse) kui võrdset põhiosa.
          </p>
          <p className="mt-2">
            Kalkulaator sobib tarbimislaenu, autoliisingu ja kodulaenu orienteeruvaks arvutuseks.
            Täpse laenupakkumise saamiseks pöördu panka.
          </p>
        </div>

        <LaenKalkulaator />

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
