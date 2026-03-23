import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Arvuta.eu</h3>
          <p className="text-sm">
            Olulisemad eestikeelsed finantskalkulaatorid. Kõik arvutused toimuvad
            sinu brauseris – andmeid ei salvestata.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Kalkulaatorid</h3>
          <ul className="text-sm space-y-1">
            <li><Link href="/automaks" className="hover:text-white">Automaksu kalkulaator</Link></li>
            <li><Link href="/netopalk" className="hover:text-white">Netopalga kalkulaator</Link></li>
            <li><Link href="/brutopalk" className="hover:text-white">Brutopalga kalkulaator</Link></li>
            <li><Link href="/dividend" className="hover:text-white">Dividendi kalkulaator</Link></li>
            <li><Link href="/laen" className="hover:text-white">Laenukalkulaator</Link></li>
            {/* TODO: lisatakse kui kalkulaatorid valmis */}
            {/* <li><Link href="/laen" className="hover:text-white">Laenukalkulaator</Link></li> */}
            {/* <li><Link href="/kodulaen" className="hover:text-white">Kodulaenu kalkulaator</Link></li> */}
            {/* <li><Link href="/fie" className="hover:text-white">FIE maksude kalkulaator</Link></li> */}
            {/* <li><Link href="/saastud" className="hover:text-white">Säästude kalkulaator</Link></li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Info</h3>
          <p className="text-sm">
            Kalkulaatorite tulemused on informatiivsed, võivad erineda ametlikust arvutusest ja lõplikust maksukohustusest. 
            Täpse maksunõu saamiseks konsulteeri professionaalse maksunõustajaga.
          </p>
          <p className="text-sm mt-2">
            Allikad:{" "}
            <a
              href="https://www.emta.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              emta.ee
            </a>
            ,{" "}
            <a
              href="https://www.riigiteataja.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              riigiteataja.ee
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4">
        <p className="text-center text-sm py-4 text-gray-500">
          © Arvuta.eu 2026
        </p>
      </div>

      {/* Ad placeholder */}
      <div id="ad-bottom" />
    </footer>
  );
}
