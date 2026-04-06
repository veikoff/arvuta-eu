"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { arvutaDividend } from "@/lib/dividend";

function formatEUR(n: number): string {
  return n.toLocaleString("et-EE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

export default function DividendKalkulaator() {
  const [netodividend, setNetodividend] = useState(1000);

  const r = useMemo(() => arvutaDividend(netodividend), [netodividend]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sisendid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E40AF]">Dividendi andmed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="netodividend">Soovitud netodividend</Label>
              <div className="flex items-center gap-1">
                <Input
                  id="netodividend"
                  type="number"
                  value={netodividend}
                  min={0}
                  max={50000}
                  step={100}
                  onChange={(e) => setNetodividend(Number(e.target.value))}
                  className="w-28 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">€</span>
              </div>
            </div>
            <Slider
              id="netodividend-slider"
              min={0}
              max={50000}
              step={100}
              value={[netodividend]}
              onValueChange={(v) => setNetodividend(Array.isArray(v) ? v[0] : v)}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-0.5">
              <span>0 €</span>
              <span>50 000 €</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <p className="text-xs text-gray-500">
              Netodividend on summa, mille omanik tegelikult kätte saab. Tulumaksu maksab ettevõte.
            </p>
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
            {/* Netodividend */}
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs text-gray-600">Netodividend (omanik saab kätte)</p>
              <p className="text-2xl font-bold text-[#1E40AF] font-mono">{formatEUR(r.netodividend)}</p>
            </div>

            {/* Maksude jaotus */}
            <div className="bg-white rounded-lg border border-gray-100 p-3 space-y-0">
              <p className="text-xs font-medium text-gray-500 mb-1">Ettevõtte kulud</p>
              <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                <span className="text-sm text-gray-600">Netodividend</span>
                <span className="text-sm font-medium font-mono">{formatEUR(r.netodividend)}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                <div>
                  <span className="text-sm text-red-500">Tulumaks (24/76)</span>
                  <span className="text-xs text-gray-400 ml-1">({r.efektiivseMaksumaar}% kogusummast)</span>
                </div>
                <span className="text-sm font-medium font-mono text-red-500">+{formatEUR(r.tulumaks)}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 font-semibold text-gray-800">
                <span className="text-sm">Ettevõtte kogukulu</span>
                <span className="text-sm font-mono">{formatEUR(r.ettevotteKogukulu)}</span>
              </div>
            </div>

            {/* Arvutuse kirjeldus */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-700 mb-1">Arvutuse kirjeldus</p>
              <ul className="space-y-0.5">
                {[
                  `Netodividend: ${formatEUR(r.netodividend)}`,
                  `Tulumaks (24/76): ${formatEUR(r.netodividend)} × 24/76 = ${formatEUR(r.tulumaks)}`,
                  `Ettevõtte kogukulu: ${formatEUR(r.netodividend)} + ${formatEUR(r.tulumaks)} = ${formatEUR(r.ettevotteKogukulu)}`,
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
