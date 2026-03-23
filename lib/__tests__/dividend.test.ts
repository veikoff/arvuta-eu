import { describe, it, expect } from "vitest";
import { arvutaDividend } from "../dividend";

describe("arvutaDividend", () => {
  it("netodividend 1000 €", () => {
    // Tulumaks: 1000 × 22/78 = 282.05 €
    // Ettevõtte kogukulu: 1000 + 282.05 = 1282.05 €
    // Efektiivne maksumäär: 282.05 / 1282.05 × 100 = 22%
    const r = arvutaDividend(1000);
    expect(r.netodividend).toBe(1000);
    expect(r.tulumaks).toBe(282.05);
    expect(r.ettevotteKogukulu).toBe(1282.05);
    expect(r.efektiivseMaksumaar).toBe(22);
  });

  it("netodividend 500 €", () => {
    // Tulumaks: 500 × 22/78 = 141.03 €
    // Ettevõtte kogukulu: 500 + 141.03 = 641.03 €
    const r = arvutaDividend(500);
    expect(r.netodividend).toBe(500);
    expect(r.tulumaks).toBe(141.03);
    expect(r.ettevotteKogukulu).toBe(641.03);
  });

  it("netodividend 0 € → kõik nullid", () => {
    const r = arvutaDividend(0);
    expect(r.netodividend).toBe(0);
    expect(r.tulumaks).toBe(0);
    expect(r.ettevotteKogukulu).toBe(0);
  });

  it("efektiivne maksumäär on alati 22%", () => {
    for (const n of [100, 500, 1000, 5000, 10000]) {
      const r = arvutaDividend(n);
      expect(r.efektiivseMaksumaar).toBe(22);
    }
  });
});
