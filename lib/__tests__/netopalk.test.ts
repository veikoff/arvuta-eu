import { describe, it, expect } from "vitest";
import { tulumaksuvabaTulu, arvutaNetopalk, leiaBruto } from "../netopalk";

// Kontrollarvutused vastavalt emta.ee maksumääradele 2026
// Tulumaksuvaba miinimum: 700 €/kuus (8400 €/aastas) – kehtib kõigile, ei sõltu sissetulekust

describe("tulumaksuvabaTulu", () => {
  it("alati 700 € – ei sõltu sissetulekust", () => {
    expect(tulumaksuvabaTulu()).toBe(700);
  });
});

describe("arvutaNetopalk – väike palk", () => {
  it("bruto 1000 €, II sammas sees", () => {
    // Töötukindlustus: 1000 × 1.6% = 16 €
    // II sammas: 1000 × 2% = 20 €
    // Maksuvaba: 700 €
    // Maksustatav: 1000 - 700 - 16 - 20 = 264 €
    // Tulumaks: 264 × 22% = 58.08 €
    // Netopalk: 1000 - 16 - 20 - 58.08 = 905.92 €
    const r = arvutaNetopalk(1000, true);
    expect(r.maksuvabaTulu).toBe(700);
    expect(r.tootukindlustus).toBe(16);
    expect(r.iiSammas).toBe(20);
    expect(r.tulumaks).toBe(58.08);
    expect(r.netopalk).toBe(905.92);
  });

  it("bruto 1000 €, II sammas väljas", () => {
    // Maksustatav: 1000 - 700 - 16 = 284 €
    // Tulumaks: 284 × 22% = 62.48 €
    // Netopalk: 1000 - 16 - 62.48 = 921.52 €
    const r = arvutaNetopalk(1000, false);
    expect(r.maksuvabaTulu).toBe(700);
    expect(r.iiSammas).toBe(0);
    expect(r.tulumaks).toBe(62.48);
    expect(r.netopalk).toBe(921.52);
  });
});

describe("arvutaNetopalk – keskmine palk", () => {
  it("bruto 1800 €, II sammas sees", () => {
    // Töötukindlustus: 1800 × 1.6% = 28.8 €
    // II sammas: 1800 × 2% = 36 €
    // Maksuvaba: 700 €
    // Maksustatav: 1800 - 700 - 28.8 - 36 = 1035.2 €
    // Tulumaks: 1035.2 × 22% = 227.744 → ümardatult 227.74 €
    // Netopalk: 1800 - 28.8 - 36 - 227.744 = 1507.456 → ümardatult 1507.46 €
    const r = arvutaNetopalk(1800, true);
    expect(r.maksuvabaTulu).toBe(700);
    expect(r.tulumaks).toBe(227.74);
    expect(r.netopalk).toBe(1507.46);
  });
});

describe("arvutaNetopalk – kõrge palk", () => {
  it("bruto 3000 €, II sammas sees", () => {
    // Töötukindlustus: 3000 × 1.6% = 48 €
    // II sammas: 3000 × 2% = 60 €
    // Maksuvaba: 700 € (kehtib ka kõrge palga puhul!)
    // Maksustatav: 3000 - 700 - 48 - 60 = 2192 €
    // Tulumaks: 2192 × 22% = 482.24 €
    // Netopalk: 3000 - 48 - 60 - 482.24 = 2409.76 €
    const r = arvutaNetopalk(3000, true);
    expect(r.maksuvabaTulu).toBe(700);
    expect(r.tulumaks).toBe(482.24);
    expect(r.netopalk).toBe(2409.76);
  });
});

describe("arvutaNetopalk – tööandja kulud", () => {
  it("sotsiaalmaks ja tööandja töötukindlustus on õiged", () => {
    // Bruto 2000 €
    // Sotsiaalmaks: 2000 × 33% = 660 €
    // Tööandja TK: 2000 × 0.8% = 16 €
    // Tööandja kogukulu: 2000 + 660 + 16 = 2676 €
    const r = arvutaNetopalk(2000, false);
    expect(r.sotsiaalmaks).toBe(660);
    expect(r.tooandjaKulu).toBe(2676);
  });
});

describe("arvutaNetopalk – äärejuhud", () => {
  it("bruto 0 € → kõik nullid", () => {
    const r = arvutaNetopalk(0, true);
    expect(r.netopalk).toBe(0);
    expect(r.tulumaks).toBe(0);
    expect(r.tootukindlustus).toBe(0);
  });

  it("tulumaks ei saa olla negatiivne (bruto alla maksuvaba miinimumi)", () => {
    const r = arvutaNetopalk(300, false);
    expect(r.tulumaks).toBeGreaterThanOrEqual(0);
    expect(r.maksuvabaTulu).toBe(700);
  });
});

describe("leiaBruto – pöördarvutus", () => {
  // Õige invariant: neto → bruto → neto = algne neto (mitte bruto = algne bruto)
  // Kahe komakohaga ümardamine tekitab piiripealseid juhtumeid kus sama ümardatud
  // neto vastab 2 bruto väärtusele (nt 1199.99 ja 1200.00 annavad mõlemad 1056.30).
  // leiaBruto tagastab alati minimaalse bruto mis annab soovitud neto.
  it("neto → bruto → neto = soovitud neto (täpne invariant)", () => {
    for (const b of [800, 1200, 1800, 2500, 4000]) {
      const neto = arvutaNetopalk(b, true).netopalk;
      const brutoTagasi = leiaBruto(neto, true);
      expect(arvutaNetopalk(brutoTagasi, true).netopalk).toBe(neto);
    }
  });

  it("sama kontroll II sammas väljas", () => {
    for (const b of [900, 1500, 2200, 3500]) {
      const neto = arvutaNetopalk(b, false).netopalk;
      const brutoTagasi = leiaBruto(neto, false);
      expect(arvutaNetopalk(brutoTagasi, false).netopalk).toBe(neto);
    }
  });

  it("tagastatud bruto erineb originaalist maksimaalselt 1 sendi võrra", () => {
    for (const b of [800, 1200, 1800, 2500, 4000]) {
      const neto = arvutaNetopalk(b, true).netopalk;
      const brutoTagasi = leiaBruto(neto, true);
      expect(Math.abs(brutoTagasi - b)).toBeLessThanOrEqual(0.01);
    }
  });

  it("neto 0 € → bruto 0 €", () => {
    expect(leiaBruto(0, false)).toBe(0);
  });
});
