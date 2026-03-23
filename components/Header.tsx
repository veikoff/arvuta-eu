"use client";
import Link from "next/link";
import { useState } from "react";

const calculators = [
  { href: "/automaks", label: "Automaks" },
  { href: "/netopalk", label: "Bruto → Neto" },
  { href: "/brutopalk", label: "Neto → Bruto" },
  { href: "/dividend", label: "Dividend" },
  { href: "/laen", label: "Laen" },
  // TODO: lisatakse kui kalkulaator valmis
  // { href: "/laen", label: "Laen" },
  // { href: "/kodulaen", label: "Kodulaen" },
  // { href: "/fie", label: "FIE maksud" },
  // { href: "/ou-palk-dividend", label: "OÜ palk vs dividend" },
  // { href: "/saastud", label: "Säästud" },
  // { href: "/uuritootlus", label: "Üüritootlus" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1E40AF] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Arvuta.eu
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {calculators.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="hover:text-blue-200 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menüü"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#1E3A8A] px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          {calculators.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="hover:text-blue-200"
              onClick={() => setOpen(false)}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
