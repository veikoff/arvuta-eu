"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { arvutaLaen, type LaenuTyyp } from "@/lib/laen";

function formatEUR(n: number): string {
  return n.toLocaleString("et-EE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

function formatEURShort(n: number): string {
  return n.toLocaleString("et-EE", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " €";
}

export default function LaenKalkulaator() {
  const [summa, setSumma] = useState(10000);
  const [intress, setIntress] = useState(5);
  const [periood, setPeriood] = useState(36);
  const [tyyp, setTyyp] = useState<LaenuTyyp>("annuiteet");

  const r = useMemo(() => arvutaLaen(summa, intress, periood, tyyp), [summa, intress, periood, tyyp]);

  const graafikAndmed = useMemo(
    () =>
      r.graafik.map((row) => ({
        kuu: row.kuu,
        Põhiosa: row.pohiosa,
        Intress: row.intress,
      })),
    [r.graafik]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Sisendid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#1E40AF]">Laenu andmed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">

          {/* Laenusumma */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label>Laenusumma</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={summa}
                  min={500}
                  max={200000}
                  step={500}
                  onChange={(e) => setSumma(Number(e.target.value))}
                  className="w-28 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">€</span>
              </div>
            </div>
            <Slider min={500} max={200000} step={500} value={[summa]} onValueChange={(v) => setSumma(Array.isArray(v) ? v[0] : v)} />
            <div className="flex justify-between text-xs text-gray-400">
              <span>500 €</span><span>200 000 €</span>
            </div>
          </div>

          {/* Intressimäär */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label>Aastaintress</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={intress}
                  min={0}
                  max={30}
                  step={0.1}
                  onChange={(e) => setIntress(Number(e.target.value))}
                  className="w-20 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>
            <Slider min={0} max={30} step={0.1} value={[intress]} onValueChange={(v) => setIntress(Array.isArray(v) ? v[0] : v)} />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0%</span><span>30%</span>
            </div>
          </div>

          {/* Periood */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <Label>Periood</Label>
              <div className="flex items-center gap-1">
                <Input
                  type="number"
                  value={periood}
                  min={1}
                  max={360}
                  step={1}
                  onChange={(e) => setPeriood(Number(e.target.value))}
                  className="w-20 h-7 text-sm text-right"
                />
                <span className="text-sm text-gray-500">kuud</span>
              </div>
            </div>
            <Slider min={1} max={360} step={1} value={[periood]} onValueChange={(v) => setPeriood(Array.isArray(v) ? v[0] : v)} />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1 kuu</span><span>360 kuud (30 a)</span>
            </div>
          </div>

          {/* Laenu tüüp */}
          <div className="flex gap-2">
            {(["annuiteet", "võrdne"] as LaenuTyyp[]).map((t) => (
              <button
                key={t}
                onClick={() => setTyyp(t)}
                className={`flex-1 py-1.5 text-sm rounded-lg border transition-colors ${
                  tyyp === t
                    ? "bg-[#1E40AF] text-white border-[#1E40AF]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1E40AF]"
                }`}
              >
                {t === "annuiteet" ? "Annuiteet" : "Võrdne põhiosa"}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            {tyyp === "annuiteet"
              ? "Annuiteet: iga kuu sama suur makse. Populaarseim laenuliik."
              : "Võrdne põhiosa: põhiosa on iga kuu sama, intressimakse väheneb aja jooksul."}
          </p>
        </CardContent>
      </Card>

      {/* Tulemused */}
      <div className="space-y-4">
        <Card className="border-[#1E40AF] border-2">
          <CardHeader>
            <CardTitle className="text-[#1E40AF]">Tulemused</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">
                  {tyyp === "annuiteet" ? "Kuumakse" : "1. kuumakse"}
                </p>
                <p className="text-lg font-bold text-[#1E40AF] font-mono">{formatEUR(r.kuumakse)}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">Koguintress</p>
                <p className="text-lg font-bold text-red-500 font-mono">{formatEUR(r.koguintress)}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-500">Kogumakse</p>
                <p className="text-lg font-bold text-gray-700 font-mono">{formatEUR(r.kogumakse)}</p>
              </div>
            </div>

            {/* Graafik */}
            {graafikAndmed.length > 0 && (
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Tagasimaksegraafik</p>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={graafikAndmed} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="kuu"
                      tick={{ fontSize: 10 }}
                      tickFormatter={(v) => `${v}k`}
                    />
                    <YAxis
                      tick={{ fontSize: 10 }}
                      tickFormatter={(v) => formatEURShort(v)}
                      width={64}
                    />
                    <Tooltip
                      formatter={(value: unknown, name: unknown) => [typeof value === "number" ? formatEUR(value) : String(value ?? ""), String(name ?? "")]}
                      labelFormatter={(label) => `Kuu ${label}`}
                    />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Area type="monotone" dataKey="Põhiosa" stackId="1" stroke="#1E40AF" fill="#DBEAFE" />
                    <Area type="monotone" dataKey="Intress" stackId="1" stroke="#EF4444" fill="#FEE2E2" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        <div id="ad-sidebar" className="bg-gray-100 rounded-lg h-24" />
      </div>
    </div>
  );
}
