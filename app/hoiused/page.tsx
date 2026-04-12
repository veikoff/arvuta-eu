import type { Metadata } from 'next'
import HoiusedCalculator from './HoiusedCalculator'
import type { RatesPayload } from './types'

export const metadata: Metadata = {
  title: 'Hoiusekalkulaator 2026 – Võrdle pankade hoiuseintresse | Arvuta.eu',
  description:
    'Võrdle LHV, SEB, Swedbank, Holm Bank, Inbank, Bigbank, Coop Pank ja Luminor hoiuseintresse. Intressimäärad uuendatakse automaatselt iga päev otse pankade kodulehtedelt.',
  alternates: { canonical: '/hoiused' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mis on tähtajaline hoius?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tähtajaline hoius on pangakontole paigutatud summa fikseeritud perioodiks (nt 3, 6, 12 või 24 kuuks) kokkulepitud intressimääraga. Intressi makstakse tavaliselt perioodi lõpus koos põhisummaga. Erinevalt nõudmiseni hoiusest ei saa tähtajalist hoiust ennetähtaegselt vabalt kätte ilma intressist ilma jäämata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Millises pangas on Eestis parim hoiuseintress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intressimäärad muutuvad pidevalt. Arvuta.eu uuendab kõigi Eesti pankade hoiuseintresse automaatselt iga päev. 2026. aasta aprilli seisuga pakuvad kõrgemaid intresse väiksemad pangad nagu Holm Bank (kuni 2,80%), Inbank ja Bigbank (kuni 2,60%). Suured pangad (Swedbank, SEB, LHV) pakuvad 2,00–2,05% 12-kuulisele hoiusele.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kas hoiused on Eestis kaitstud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jah. Kõik Eestis tegevusluba omavad pangad osalevad Tagatisfondis, mis kaitseb hoiuseid kuni 100 000 euro ulatuses ühe panga kohta ühe inimese kohta. See tähendab, et kui pank läheb pankrotti, saad kuni 100 000 eurot tagasi 7 tööpäeva jooksul. Tagatisfond kehtib Swedbank, SEB, LHV, Luminor, Coop Pank, Holm Bank, Inbank ja Bigbank hoiustele.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kas hoiuse intressilt peab tulumaksu maksma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alates 2025. aastast on eraisikutel hoiuseintressilt saadav tulu Eestis maksuvaba kuni 1 000 euro ulatuses aastas (nn säästuintresside maksuvabastus). Üle selle summa maksustatakse tulumaksuga 22%. Pank peab tulumaksu kinni automaatselt ning sa ei pea seda ise deklareerima.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kui palju teenib 10 000 eurot hoiusel aastaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10 000 euro paigutamisel 12-kuulisele hoiusele teenid 2026. aasta intressimääradega: Holm Bank 2,70% juures 270 €, Bigbank 2,60% juures 260 €, Inbank 2,50% juures 250 €, Coop Pank ja SEB 2,00–2,10% juures 200–210 €, Swedbank 2,05% juures 205 €. Kasuta kalkulaatorit täpse summa arvutamiseks oma valitud perioodi jaoks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kas hoiuse avamiseks peab olema kodupank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ei. Enamik panku lubab tähtajalist hoiust avada ilma, et peaksid oma igapäevapangandust sinna üle viima. Näiteks Inbank, Bigbank, Holm Bank ja Coop Pank võimaldavad hoiuse avada täiesti digitaalselt, isegi kui su arveldusarve on mujal pangas. Hoiuse avamiseks on tavaliselt vaja ainult ID-kaarti ja internetipanka.',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Kuidas leida parim hoiuseintress Eestis',
  step: [
    { '@type': 'HowToStep', text: 'Sisesta hoiuse summa eurodes – vähemalt panga miinimumsumma (enamikus pankades 100–500 €).' },
    { '@type': 'HowToStep', text: 'Vali periood: 1, 3, 6, 9, 12 või 24 kuud. Pikemad perioodid annavad sageli parema intressi.' },
    { '@type': 'HowToStep', text: 'Kalkulaator näitab kõigi pankade intressimäärad, teenitava intressi ja lõppsumma suuruse järjekorras.' },
    { '@type': 'HowToStep', text: 'Vajuta "Ava hoius" parima pakkumise kõrval, et minna otse panga lehele hoiust avama.' },
  ],
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Hoiusekalkulaator 2026',
  url: 'https://arvuta.eu/hoiused',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  description: 'Võrdle kõigi Eesti pankade hoiuseintresse reaalajas. Intressimäärad uuendatakse automaatselt iga päev.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
}

async function getRates(): Promise<RatesPayload | null> {
  const url = process.env.HOIUSED_RATES_URL
  if (!url) return null
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return res.json() as Promise<RatesPayload>
  } catch {
    return null
  }
}

export default async function HoiusedPage() {
  const data = await getRates()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />

      <div className="mx-auto max-w-5xl px-4 py-8 space-y-10">
        <nav className="text-sm text-gray-500" aria-label="Leivapuru">
          <a href="/" className="hover:text-[#1E40AF]">Avaleht</a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Hoiusekalkulaator</span>
        </nav>

        <section>
          <h1 className="text-3xl font-bold text-[#1E40AF]">Hoiusekalkulaator 2026</h1>
          <div className="mt-3 text-gray-600 max-w-2xl space-y-2 text-sm leading-relaxed">
            <p>
              Sisesta summa ja periood ning näe koheselt, kui palju teenid erinevates Eesti pankades.
              Intressimäärad laetakse automaatselt pankade kodulehtedelt iga päev — andmed on alati ajakohased.
            </p>
            <p>
              Võrdleme <strong>8 panka</strong>: Swedbank, SEB, LHV, Luminor, Coop Pank, Holm Bank, Inbank ja Bigbank.
              Kõik pangad on Finantsinspektsiooni tegevusloaga ning hoiused kaetud{' '}
              <a href="https://www.tf.ee" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
                Tagatisfondi
              </a>{' '}
              garantiiga kuni 100 000 € ulatuses.
            </p>
          </div>
        </section>

        <div id="ad-top" className="w-full min-h-[90px] bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
          Reklaam
        </div>

        {data ? (
          <HoiusedCalculator banks={data.banks} updatedAt={data.updatedAt} />
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center text-gray-500">
            <p className="text-lg font-medium">Andmeid laaditakse...</p>
            <p className="text-sm mt-2">Intressimäärad pole veel saadaval. Proovi mõne aja pärast uuesti.</p>
          </div>
        )}

        <div className="w-full min-h-[90px] bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
          Reklaam
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Korduma kippuvad küsimused</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer">
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

        <p className="text-xs text-gray-400 border-t border-gray-200 pt-4">
          Arvuta.eu laadib hoiuseintressid automaatselt pankade kodulehtedelt. Intressimäärad võivad
          muutuda — kontrolli alati kehtivad tingimused otse pangast. Tegemist ei ole finantsnõustamisega.
        </p>
      </div>
    </>
  )
}
