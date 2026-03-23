import { describe, it, expect } from "vitest";
import { arvutaLaen } from "../laen";

describe("arvutaLaen – annuiteet", () => {
  it("10 000 €, 5%, 12 kuud", () => {
    const r = arvutaLaen(10000, 5, 12, "annuiteet");
    // Kuumakse: 10000 * (0.05/12) * (1+0.05/12)^12 / ((1+0.05/12)^12 - 1) ≈ 856.07
    expect(r.kuumakse).toBe(856.07);
    expect(r.koguintress).toBeGreaterThan(0);
    expect(r.graafik).toHaveLength(12);
    expect(r.graafik[r.graafik.length - 1].jaakSaldo).toBe(0);
  });

  it("0% intress – kuumakse = summa / periood", () => {
    const r = arvutaLaen(1200, 0, 12, "annuiteet");
    expect(r.kuumakse).toBe(100);
    expect(r.koguintress).toBe(0);
  });

  it("saldo jõuab nulli", () => {
    const r = arvutaLaen(5000, 6, 24, "annuiteet");
    expect(r.graafik[r.graafik.length - 1].jaakSaldo).toBe(0);
  });
});

describe("arvutaLaen – võrdne põhiosa", () => {
  it("10 000 €, 5%, 12 kuud – esimene kuumakse suurem kui viimane", () => {
    const r = arvutaLaen(10000, 5, 12, "võrdne");
    expect(r.graafik[0].kuumakse).toBeGreaterThan(r.graafik[11].kuumakse);
    expect(r.graafik).toHaveLength(12);
  });

  it("saldo jõuab nulli", () => {
    const r = arvutaLaen(6000, 4, 24, "võrdne");
    expect(r.graafik[r.graafik.length - 1].jaakSaldo).toBe(0);
  });
});

describe("arvutaLaen – äärejuhud", () => {
  it("summa 0 → kõik nullid", () => {
    const r = arvutaLaen(0, 5, 12, "annuiteet");
    expect(r.kuumakse).toBe(0);
    expect(r.kogumakse).toBe(0);
  });
});
