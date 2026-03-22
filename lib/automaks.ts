// Automaksu arvutuslogika – Eesti automaksu seadus 2026
// Allikas: riigiteataja.ee

export type Kytus = "bensiin" | "diisel" | "elekter" | "hybriid";

export interface AutomaksResult {
  registreerimismaks: number;
  aastamaks: number;
  co2Komponent: number;
  kwKomponent: number;
  vanuseMargis: number;
}

export function co2Registreerimine(co2: number, kytus: Kytus): number {
  if (kytus === "elekter") return 0;
  let summa = 0;
  if (co2 <= 117) {
    summa = 0;
  } else if (co2 <= 150) {
    summa = (co2 - 117) * 5;
  } else if (co2 <= 200) {
    summa = 33 * 5 + (co2 - 150) * 15;
  } else if (co2 <= 250) {
    summa = 33 * 5 + 50 * 15 + (co2 - 200) * 30;
  } else {
    summa = 33 * 5 + 50 * 15 + 50 * 30 + (co2 - 250) * 50;
  }
  if (kytus === "diisel") summa *= 1.1;
  return Math.round(summa);
}

export function voimsusRegistreerimine(kw: number): number {
  if (kw <= 74) return 0;
  if (kw <= 100) return (kw - 74) * 5;
  if (kw <= 150) return 26 * 5 + (kw - 100) * 10;
  if (kw <= 200) return 26 * 5 + 50 * 10 + (kw - 150) * 20;
  return 26 * 5 + 50 * 10 + 50 * 20 + (kw - 200) * 40;
}

export function co2Aastamaks(co2: number, kytus: Kytus): number {
  if (kytus === "elekter") return 0;
  let summa = 0;
  if (co2 <= 117) {
    summa = co2 * 0.05;
  } else if (co2 <= 150) {
    summa = 117 * 0.05 + (co2 - 117) * 1;
  } else if (co2 <= 200) {
    summa = 117 * 0.05 + 33 * 1 + (co2 - 150) * 3;
  } else if (co2 <= 250) {
    summa = 117 * 0.05 + 33 * 1 + 50 * 3 + (co2 - 200) * 7;
  } else {
    summa = 117 * 0.05 + 33 * 1 + 50 * 3 + 50 * 7 + (co2 - 250) * 15;
  }
  if (kytus === "diisel") summa *= 1.1;
  return Math.round(summa * 100) / 100;
}

export function vanuseMargis(aasta: number): number {
  const vanus = 2026 - aasta;
  if (vanus < 5) return 1.0;
  if (vanus < 10) return 0.75;
  if (vanus < 15) return 0.5;
  if (vanus < 20) return 0.25;
  return 0.1;
}

export function arvutaAutomaks(
  co2: number,
  kw: number,
  aasta: number,
  kytus: Kytus
): AutomaksResult {
  const margis = vanuseMargis(aasta);
  const co2Kom = co2Registreerimine(co2, kytus);
  const kwKom = voimsusRegistreerimine(kw);
  const registreerimismaks = Math.round((co2Kom + kwKom) * margis);
  const aastamaks = Math.round((co2Aastamaks(co2, kytus) + (kw > 74 ? (kw - 74) * 0.3 : 0)) * 100) / 100;
  return { registreerimismaks, aastamaks, co2Komponent: co2Kom, kwKomponent: kwKom, vanuseMargis: margis };
}
