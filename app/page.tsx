import Link from "next/link";

const categories = [
  {
    title: "Maksud & palk",
    items: [
      { href: "/netopalk", label: "Bruto → Neto kalkulaator", desc: "Arvuta netopalk brutopalgast 2026. aastal" },
      { href: "/brutopalk", label: "Neto → Bruto kalkulaator", desc: "Sisesta soovitud netopalk, saa brutopalk" },
      { href: "/dividend", label: "Dividendi kalkulaator", desc: "Arvuta dividendimaks ja ettevõtte kogukulu 2026" },
      { href: "/laen", label: "Laenukalkulaator", desc: "Arvuta kuumakse, koguintress ja tagasimaksegraafik" },
      // TODO: lisatakse kui kalkulaator valmis
      // { href: "/fie", label: "FIE maksude kalkulaator", desc: "FIE tulumaks ja sotsiaalmaks 2026" },
      // { href: "/ou-palk-dividend", label: "OÜ palk vs dividend", desc: "Võrdle netotulu erinevate jaotusviisidega" },
    ],
  },
  {
    title: "Sõidukid",
    items: [
      { href: "/automaks", label: "Automaksu kalkulaator", desc: "Registreerimis- ja aastamaks 2026" },
    ],
  },
  // TODO: lisatakse kui kalkulaatorid valmis
  // {
  //   title: "Laenud & kinnisvara",
  //   items: [
  //     { href: "/laen", label: "Laenukalkulaator", desc: "Arvuta kuumakse ja koguintress" },
  //     { href: "/kodulaen", label: "Kodulaenu kalkulaator", desc: "Hüpoteeklaenu kuumakse ja kogukulu" },
  //     { href: "/uuritootlus", label: "Üüritootluse kalkulaator", desc: "Bruto- ja netarentaablus üürikorterile" },
  //   ],
  // },
  // {
  //   title: "Säästud & investeeringud",
  //   items: [
  //     { href: "/saastud", label: "Säästude kalkulaator", desc: "Liitntressi kasv ja lõppsaldo" },
  //   ],
  // },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div id="ad-top" className="mb-6" />

      <h1 className="text-3xl font-bold text-[#1E40AF] mb-2">
        Eesti finantskalkulaatorid 2026
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Tasuta kalkulaatorid eestlastele: arvuta netopalk, automaks, laenumaksed,
        FIE maksud ja palju muud. Kõik arvutused toimuvad reaalajas sinu brauseris.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-lg font-semibold text-gray-700 mb-3 border-b pb-1">
              {cat.title}
            </h2>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block bg-white rounded-lg border border-gray-200 p-4 hover:border-[#1E40AF] hover:shadow-sm transition-all"
                  >
                    <span className="font-medium text-[#1E40AF]">{item.label}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
