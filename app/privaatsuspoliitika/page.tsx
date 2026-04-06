import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privaatsuspoliitika | Arvuta.eu",
  description: "Arvuta.eu privaatsuspoliitika – kuidas me kasutame küpsiseid ja töötleme andmeid.",
  alternates: {
    canonical: '/privaatsuspoliitika',
  },
};

export default function PrivaatsuspoliitikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#1E40AF] mb-6">Privaatsuspoliitika</h1>
      <p className="text-sm text-gray-500 mb-8">Viimati uuendatud: märts 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">1. Üldinfo</h2>
          <p>
            Arvuta.eu (edaspidi &bdquo;sait&ldquo;) on tasuta eestikeelne finantskalkulaatorite veebileht.
            Saiti haldab eraisik. Käesolev privaatsuspoliitika selgitab, milliseid andmeid
            kogutakse, kuidas neid kasutatakse ja millised on teie õigused.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">2. Kogutavad andmed</h2>
          <p>Sait ise ei kogu ega salvesta kasutajate isikuandmeid. Kõik kalkulaatorite arvutused
          toimuvad ainult teie brauseris – andmeid serverisse ei saadeta.</p>
          <p className="mt-2">Kolmandad osapooled võivad koguda järgmisi andmeid:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Külastusstatistika (Google Analytics): lehe vaatamised, seadme tüüp, riik, brauser</li>
            <li>Reklaamiandmed (Google AdSense): reklaamide kuvamine ja klikid</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">3. Küpsised</h2>
          <p>Sait kasutab küpsiseid järgmistel eesmärkidel:</p>
          <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium text-gray-600">Teenus</th>
                  <th className="text-left p-3 font-medium text-gray-600">Eesmärk</th>
                  <th className="text-left p-3 font-medium text-gray-600">Alus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3">Google Analytics</td>
                  <td className="p-3">Külastusstatistika mõõtmine</td>
                  <td className="p-3">Nõusolek</td>
                </tr>
                <tr>
                  <td className="p-3">Google AdSense</td>
                  <td className="p-3">Personaliseeritud reklaamide kuvamine</td>
                  <td className="p-3">Nõusolek</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Küpsistest saate keelduda või nõusoleku tagasi võtta igal ajal küpsiste nõusoleku
            bänneri kaudu või oma brauseri seadetest.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">4. Google Analytics</h2>
          <p>
            Kasutame Google Analytics teenust (Google LLC, USA) veebilehe külastatavuse mõõtmiseks.
            Google Analytics kogub anonüümseid andmeid nagu lehe vaatamiste arv, külastuse kestus
            ja kasutatav seade. Andmeid ei seostata isikuga.
          </p>
          <p className="mt-2">
            Google privaatsuspoliitika:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">5. Google AdSense</h2>
          <p>
            Sait kasutab Google AdSense reklaamisüsteemi (Google LLC, USA). AdSense võib kasutada
            küpsiseid personaliseeritud reklaamide kuvamiseks. Kui keeldute personaliseeritud
            reklaamidest, kuvatakse mittepersonaliseeritud reklaame.
          </p>
          <p className="mt-2">
            Reklaamieelistusi saate hallata:{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] underline">
              adssettings.google.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">6. Teie õigused (GDPR)</h2>
          <p>EL-i isikuandmete kaitse üldmääruse (GDPR) alusel on teil õigus:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Võtta nõusolek tagasi igal ajal</li>
            <li>Küsida teavet oma andmete töötlemise kohta</li>
            <li>Esitada kaebus Andmekaitse Inspektsioonile (aki.ee)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">7. Kontakt</h2>
          <p>
            Privaatsuspoliitikaga seotud küsimustega pöörduge:{" "}
            <a href="mailto:info@arvuta.eu" className="text-[#1E40AF] underline">
              info@arvuta.eu
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
