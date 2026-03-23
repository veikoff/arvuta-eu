// Laenukalkulaatori arvutuslogika
// Toetab annuiteeti (võrdne kuumakse) ja võrdset põhiosa

export type LaenuTyyp = "annuiteet" | "võrdne";

export interface KuumakseRida {
  kuu: number;
  kuumakse: number;
  pohiosa: number;
  intress: number;
  jaakSaldo: number;
}

export interface LaenResult {
  kuumakse: number; // annuiteedi puhul fikseeritud, võrdse puhul esimene kuu
  koguintress: number;
  kogumakse: number;
  graafik: KuumakseRida[];
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function arvutaLaen(
  summa: number,
  aastaintress: number,
  perioodKuud: number,
  tyyp: LaenuTyyp
): LaenResult {
  if (summa <= 0 || perioodKuud <= 0) {
    return { kuumakse: 0, koguintress: 0, kogumakse: 0, graafik: [] };
  }

  const r = aastaintress / 100 / 12;
  const graafik: KuumakseRida[] = [];

  if (tyyp === "annuiteet") {
    const kuumakse =
      r === 0
        ? round2(summa / perioodKuud)
        : round2((summa * r * Math.pow(1 + r, perioodKuud)) / (Math.pow(1 + r, perioodKuud) - 1));

    let jaakSaldo = summa;
    for (let kuu = 1; kuu <= perioodKuud; kuu++) {
      const intress = round2(jaakSaldo * r);
      const onViimane = kuu === perioodKuud;
      const pohiosa = onViimane ? jaakSaldo : round2(Math.min(kuumakse - intress, jaakSaldo));
      const tegelikKuumakse = round2(pohiosa + intress);
      jaakSaldo = onViimane ? 0 : round2(jaakSaldo - pohiosa);
      graafik.push({ kuu, kuumakse: tegelikKuumakse, pohiosa, intress, jaakSaldo });
    }

    const kogumakse = round2(graafik.reduce((s, r) => s + r.kuumakse, 0));
    return { kuumakse, koguintress: round2(kogumakse - summa), kogumakse, graafik };
  } else {
    // Võrdne põhiosa
    const pohiosakuus = summa / perioodKuud;
    let jaakSaldo = summa;
    for (let kuu = 1; kuu <= perioodKuud; kuu++) {
      const intress = round2(jaakSaldo * r);
      const onViimane = kuu === perioodKuud;
      const pohiosa = onViimane ? jaakSaldo : round2(Math.min(pohiosakuus, jaakSaldo));
      const kuumakse = round2(pohiosa + intress);
      jaakSaldo = onViimane ? 0 : round2(jaakSaldo - pohiosa);
      graafik.push({ kuu, kuumakse, pohiosa, intress, jaakSaldo });
    }

    const kogumakse = round2(graafik.reduce((s, r) => s + r.kuumakse, 0));
    return {
      kuumakse: graafik[0]?.kuumakse ?? 0,
      koguintress: round2(kogumakse - summa),
      kogumakse,
      graafik,
    };
  }
}
