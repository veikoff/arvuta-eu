"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { arvutaAutomaks, type Kytus } from "@/lib/automaks";

interface TaksResult {
  registreerimismaks: number;
  aastamaks: number;
  selgitus: string[];
}

function arvuta(co2: number, kw: number, aasta: number, kytus: Kytus): TaksResult {
  const r = arvutaAutomaks(co2, kw, aasta, kytus);
  const vanus = 2026 - aasta;
  const selgitus: string[] = [
    `Sõiduk: ${aasta}. a, CO₂ ${co2} g/km, ${kw} kW, kütus: ${kytus}`,
    `CO₂ komponent (registreerimine): ${formatEUR(r.co2Komponent)}`,
    `Võimsuse komponent (registreerimine): ${formatEUR(r.kwKomponent)}`,
    `Vanusemärgis (${vanus} a vana): ${Math.round(r.vanuseMargis * 100)}%`,
    kytus === "elekter" ? "Elektrisõidukid on CO₂ komponendist vabastatud." : "",
  ].filter(Boolean);
  return { registreerimismaks: r.registreerimismaks, aastamaks: r.aastamaks, selgitus };
}

function formatEUR(n: number): string {
  return (
    n.toLocaleString("et-EE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"
  );
}

// -----------------------------------------------------------------------
export default function AutomaksKalkulaator() {
  const [co2, setCo2] = useState(130);
  const [kw, setKw] = useState(110);
  const [aasta, setAasta] = useState(2020);
  const [kytus, setKytus] = useState<Kytus>("bensiin");
  const [result, setResult] = useState<TaksResult | null>(null);

  useEffect(() => {
    setResult(arvuta(co2, kw, aasta, kytus));
  }, [co2, kw, aasta, kytus]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sisendid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E40AF]">Sõiduki andmed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* CO2 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="co2">CO₂ heitkogus</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={co2}
                  min={0}
                  max={400}
                  onChange={(e) => setCo2(Number(e.target.value))}
                  className="w-20 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">g/km</span>
              </div>
            </div>
            <Slider
              id="co2"
              min={0}
              max={400}
              step={1}
              value={[co2]}
              onValueChange={(v) => setCo2(Array.isArray(v) ? v[0] : v)}
              className="w-full"
            />
          </div>

          {/* Võimsus */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="kw">Mootori võimsus</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={kw}
                  min={0}
                  max={500}
                  onChange={(e) => setKw(Number(e.target.value))}
                  className="w-20 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">kW</span>
              </div>
            </div>
            <Slider
              id="kw"
              min={0}
              max={500}
              step={1}
              value={[kw]}
              onValueChange={(v) => setKw(Array.isArray(v) ? v[0] : v)}
            />
          </div>

          {/* Aasta */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label htmlFor="aasta">Esmakordne registreerimine</Label>
              <Input
                type="number"
                value={aasta}
                min={1990}
                max={2026}
                onChange={(e) => setAasta(Number(e.target.value))}
                className="w-20 h-7 text-sm text-right"
              />
            </div>
            <Slider
              id="aasta"
              min={1990}
              max={2026}
              step={1}
              value={[aasta]}
              onValueChange={(v) => setAasta(Array.isArray(v) ? v[0] : v)}
            />
          </div>

          {/* Kütus */}
          <div className="flex items-center justify-between">
            <Label>Kütuse liik</Label>
            <Select value={kytus} onValueChange={(v) => setKytus(v as Kytus)}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bensiin">Bensiin</SelectItem>
                <SelectItem value="diisel">Diisel</SelectItem>
                <SelectItem value="elekter">Elekter</SelectItem>
                <SelectItem value="hybriid">Hübriid</SelectItem>
              </SelectContent>
            </Select>
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
            {result && (
              <>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">Registreerimismaks</p>
                  <p className="text-2xl font-bold text-[#1E40AF] font-mono">
                    {formatEUR(result.registreerimismaks)}
                  </p>
                  <p className="text-xs text-gray-500">Ühekordne sõiduki registreerimisel</p>
                </div>

                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">Aastamaks</p>
                  <p className="text-2xl font-bold text-green-700 font-mono">
                    {formatEUR(result.aastamaks)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Igal aastal ({formatEUR(result.aastamaks / 12)} / kuus)
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-700 mb-1">Arvutuse selgitus</p>
                  <ul className="space-y-0.5">
                    {result.selgitus.map((s, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-blue-400">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Ad placeholder */}
        <div id="ad-sidebar" className="bg-gray-100 rounded-lg h-24" />
      </div>
    </div>
  );
}
