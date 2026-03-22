// Netopalga arvutuslogika – Eesti maksud 2026
// Allikas: emta.ee

export const TULUMAKS_MAAR = 0.22;
export const SOTSIAALMAKS_MAAR = 0.33;
export const TOOTUKINDLUSTUS_TOOTAJA = 0.016;
export const TOOTUKINDLUSTUS_TOOANDJA = 0.008;
export const II_SAMMAS_MAAR = 0.02;
export const MAKSUVABA_KUUS = 700; // 8400 €/aastas, kehtib kõigile alates 2025

export interface NetopalkResult {
  netopalk: number;
  tulumaks: number;
  tootukindlustus: number;
  iiSammas: number;
  sotsiaalmaks: number;
  tooandjaKulu: number;
  maksuvabaTulu: number;
}

export function tulumaksuvabaTulu(): number {
  return MAKSUVABA_KUUS;
}

// Binaarne otsing: leiab brutopalgaväärtuse millele vastab soovitud netopalk
export function leiaBruto(soovitudNeto: number, iiSammas: boolean): number {
  if (soovitudNeto <= 0) return 0;
  let low = soovitudNeto;
  let high = soovitudNeto * 3;
  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    if (arvutaNetopalk(mid, iiSammas).netopalk < soovitudNeto) {
      low = mid;
    } else {
      high = mid;
    }
  }
  // Proovi järjestikku sente alustades floor-ist – tagasta esimene mis annab soovitud neto
  const base = Math.floor((low + high) / 2 * 100) / 100;
  for (let i = 0; i <= 3; i++) {
    const kandidaat = Math.round((base + i * 0.01) * 100) / 100;
    if (arvutaNetopalk(kandidaat, iiSammas).netopalk >= soovitudNeto) {
      return kandidaat;
    }
  }
  return base;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function arvutaNetopalk(bruto: number, iiSammas: boolean): NetopalkResult {
  // Vaheväärtused täisprecisiooniga – ümardame ainult lõpptulemused
  const tootukindlustusTäpne = bruto * TOOTUKINDLUSTUS_TOOTAJA;
  const iiSammasTäpne = iiSammas ? bruto * II_SAMMAS_MAAR : 0;
  const maksuvabaTulu = MAKSUVABA_KUUS;
  const maksustatavTulu = Math.max(0, bruto - maksuvabaTulu - tootukindlustusTäpne - iiSammasTäpne);
  const tulumaksTäpne = maksustatavTulu * TULUMAKS_MAAR;
  const netopalkTäpne = bruto - tootukindlustusTäpne - iiSammasTäpne - tulumaksTäpne;

  return {
    netopalk: round2(netopalkTäpne),
    tulumaks: round2(tulumaksTäpne),
    tootukindlustus: round2(tootukindlustusTäpne),
    iiSammas: round2(iiSammasTäpne),
    sotsiaalmaks: round2(bruto * SOTSIAALMAKS_MAAR),
    tooandjaKulu: round2(bruto * (1 + SOTSIAALMAKS_MAAR + TOOTUKINDLUSTUS_TOOANDJA)),
    maksuvabaTulu,
  };
}
