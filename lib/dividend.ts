// Dividendi arvutuslogika – Eesti maksud 2026
// Allikas: emta.ee (emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/taxation-dividends)
// Määr 22/78 kehtib alates 1. jaanuarist 2025. 14/86 soodusmäär kaotati 2025. aastal.

export const TULUMAKS_MAAR = 22;
export const TULUMAKS_NIMETAJA = 78;

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
