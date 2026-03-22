"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import { arvutaNetopalk, TOOTUKINDLUSTUS_TOOANDJA } from "@/lib/netopalk";

function formatEUR(n: number): string {
  return n.toLocaleString("et-EE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

function Protsent({ label, summa, bruto, color }: { label: string; summa: number; bruto: number; color: string }) {
  const pct = bruto > 0 ? Math.round((summa / bruto) * 100) : 0;
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="text-right">
        <span className={`text-sm font-medium font-mono ${color}`}>−{formatEUR(summa)}</span>
        <span className="text-xs text-gray-400 ml-1">({pct}%)</span>
      </div>
    </div>
  );
}

export default function NetopalkKalkulaator() {
  const [bruto, setBruto] = useState(1800);
  const [iiSammas, setIiSammas] = useState(true);

  const r = useMemo(() => arvutaNetopalk(bruto, iiSammas), [bruto, iiSammas]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sisendid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E40AF]">Palga andmed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="bruto">Brutopalk</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={bruto}
                  min={0}
                  max={10000}
                  step={10}
                  onChange={(e) => setBruto(Number(e.target.value))}
                  className="w-24 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">€/kuus</span>
              </div>
            </div>
            <Slider
              id="bruto"
              min={0}
              max={10000}
              step={10}
              value={[bruto]}
              onValueChange={(v) => setBruto(Array.isArray(v) ? v[0] : v)}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0 €</span>
              <span>10 000 €</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>II pensionisammas</Label>
              <p className="text-xs text-gray-400 mt-0.5">2% palgast</p>
            </div>
            <button
              onClick={() => setIiSammas(!iiSammas)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                iiSammas ? "bg-[#1E40AF]" : "bg-gray-200"
              }`}
              role="switch"
              aria-checked={iiSammas}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                  iiSammas ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Tööandja kulu info */}
          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <p className="font-medium text-gray-700 mb-1">Tööandja kulud peale bruto</p>
            <div className="flex justify-between">
              <span>Sotsiaalmaks (33%)</span>
              <span className="font-mono">+{formatEUR(r.sotsiaalmaks)}</span>
            </div>
            <div className="flex justify-between">
              <span>Töötukindlustus (0,8%)</span>
              <span className="font-mono">+{formatEUR(Math.round(bruto * TOOTUKINDLUSTUS_TOOANDJA * 100) / 100)}</span>
            </div>
            <div className="flex justify-between font-medium text-gray-800 border-t border-gray-200 mt-1 pt-1">
              <span>Tööandja kogukulu</span>
              <span className="font-mono">{formatEUR(r.tooandjaKulu)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tulemused */}
      <div className="space-y-4">
        <Card className="border-[#1E40AF] border-2">
          <CardHeader>
            <CardTitle className="text-[#1E40AF]">Tulemused</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* Netopalk */}
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-gray-600">Netopalk</p>
              <p className="text-2xl font-bold text-[#1E40AF] font-mono">{formatEUR(r.netopalk)}</p>
              <p className="text-xs text-gray-500">
                {bruto > 0 ? Math.round((r.netopalk / bruto) * 100) : 0}% brutopalgast
              </p>
            </div>

            {/* Mahaarvamised */}
            <div className="bg-white rounded-lg border border-gray-100 p-3">
              <p className="text-xs font-medium text-gray-500 mb-1">Töötaja mahaarvamised</p>
              <div className="flex justify-between text-sm font-medium pb-1.5 mb-1 border-b border-gray-100">
                <span className="text-gray-700">Brutopalk</span>
                <span className="font-mono">{formatEUR(bruto)}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                <span className="text-sm text-green-700 font-medium">Tulumaksuvaba miinimum</span>
                <span className="text-sm font-medium font-mono text-green-700">+{formatEUR(r.maksuvabaTulu)}</span>
              </div>
              <Protsent label="Tulumaks (22%)" summa={r.tulumaks} bruto={bruto} color="text-red-500" />
              <Protsent label="Töötukindlustus (1,6%)" summa={r.tootukindlustus} bruto={bruto} color="text-orange-500" />
              {iiSammas && (
                <Protsent label="II pensionisammas (2%)" summa={r.iiSammas} bruto={bruto} color="text-purple-500" />
              )}
            </div>

            {/* Arvutuse kirjeldus */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-700 mb-1">Arvutuse kirjeldus</p>
              <ul className="space-y-0.5">
                {[
                  `Brutopalk: ${formatEUR(bruto)}`,
                  `Tulumaksuvaba miinimum: ${formatEUR(r.maksuvabaTulu)}`,
                  `Maksustatav tulu: ${formatEUR(Math.max(0, bruto - r.maksuvabaTulu - r.tootukindlustus - r.iiSammas))}`,
                  `Tulumaks 22%: −${formatEUR(r.tulumaks)}`,
                  `Töötukindlustus 1,6%: −${formatEUR(r.tootukindlustus)}`,
                  ...(iiSammas ? [`II pensionisammas 2%: −${formatEUR(r.iiSammas)}`] : []),
                  `Netopalk: ${formatEUR(r.netopalk)}`,
                ].map((s, i) => (
                  <li key={i} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div id="ad-sidebar" className="bg-gray-100 rounded-lg h-24" />
      </div>
    </div>
  );
}
