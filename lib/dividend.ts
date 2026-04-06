// Dividendi arvutuslogika – Eesti maksud 2026
// Allikas: emta.ee
// NB: 2026. aastast kehtib tulumaksumäär 24/76 (tõusis 22/78-lt).
// 14/86 soodusmäär kaotati alates 1. jaanuarist 2025.

export const TULUMAKS_MAAR = 24;
export const TULUMAKS_NIMETAJA = 76;

export interface DividendResult {
  netodividend: number;
  tulumaks: number;
  ettevotteKogukulu: number;
  efektiivseMaksumaar: number;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function arvutaDividend(netodividend: number): DividendResult {
  if (netodividend <= 0) {
    return { netodividend: 0, tulumaks: 0, ettevotteKogukulu: 0, efektiivseMaksumaar: 0 };
  }

  const tulumaks = round2(netodividend * (TULUMAKS_MAAR / TULUMAKS_NIMETAJA));
  const ettevotteKogukulu = round2(netodividend + tulumaks);
  const efektiivseMaksumaar = round2((tulumaks / ettevotteKogukulu) * 100);

  return {
    netodividend: round2(netodividend),
    tulumaks,
    ettevotteKogukulu,
    efektiivseMaksumaar,
  };
}
