import { describe, it, expect } from "vitest";
import {
  co2Registreerimine,
  voimsusRegistreerimine,
  vanuseMargis,
  arvutaAutomaks,
} from "../automaks";

// Kontrollarvutused tehtud käsitsi vastavalt riigiteataja.ee seadusele

describe("co2Registreerimine", () => {
  it("alla 117 g/km → 0 €", () => {
    expect(co2Registreerimine(100, "bensiin")).toBe(0);
    expect(co2Registreerimine(117, "bensiin")).toBe(0);
  });

  it("117–150 g/km → (co2 - 117) × 5", () => {
    // 130 g/km: (130-117) × 5 = 13 × 5 = 65 €
    expect(co2Registreerimine(130, "bensiin")).toBe(65);
    // 150 g/km: (150-117) × 5 = 33 × 5 = 165 €
    expect(co2Registreerimine(150, "bensiin")).toBe(165);
  });

  it("150–200 g/km → 165 + (co2 - 150) × 15", () => {
    // 180 g/km: 165 + (180-150) × 15 = 165 + 450 = 615 €
    expect(co2Registreerimine(180, "bensiin")).toBe(615);
  });

  it("diisel +10% võrreldes bensiiniga", () => {
    // 130 g/km bensiin = 65 €, diisel = 65 × 1.1 = 71.5 → 72 €
    expect(co2Registreerimine(130, "diisel")).toBe(72);
  });

  it("elekter → alati 0 €", () => {
    expect(co2Registreerimine(0, "elekter")).toBe(0);
    expect(co2Registreerimine(200, "elekter")).toBe(0);
  });
});

describe("voimsusRegistreerimine", () => {
  it("kuni 74 kW → 0 €", () => {
    expect(voimsusRegistreerimine(50)).toBe(0);
    expect(voimsusRegistreerimine(74)).toBe(0);
  });

  it("74–100 kW → (kw - 74) × 5", () => {
    // 90 kW: (90-74) × 5 = 80 €
    expect(voimsusRegistreerimine(90)).toBe(80);
  });

  it("100–150 kW → 130 + (kw - 100) × 10", () => {
    // 110 kW: 26×5 + (110-100)×10 = 130 + 100 = 230 €
    expect(voimsusRegistreerimine(110)).toBe(230);
  });

  it("150–200 kW → 130 + 500 + (kw - 150) × 20", () => {
    // 170 kW: 130 + 500 + 20×20 = 130 + 500 + 400 = 1030 €
    expect(voimsusRegistreerimine(170)).toBe(1030);
  });
});

describe("vanuseMargis", () => {
  it("alla 5 aasta vana → 100%", () => {
    expect(vanuseMargis(2024)).toBe(1.0);
    expect(vanuseMargis(2026)).toBe(1.0);
  });

  it("5–9 aasta vana → 75%", () => {
    expect(vanuseMargis(2020)).toBe(0.75); // 6 a vana
    expect(vanuseMargis(2017)).toBe(0.75); // 9 a vana
  });

  it("10–14 aasta vana → 50%", () => {
    expect(vanuseMargis(2016)).toBe(0.5); // 10 a vana
  });

  it("15–19 aasta vana → 25%", () => {
    expect(vanuseMargis(2010)).toBe(0.25); // 16 a vana
  });

  it("20+ aasta vana → 10%", () => {
    expect(vanuseMargis(2005)).toBe(0.1); // 21 a vana
    expect(vanuseMargis(1990)).toBe(0.1);
  });
});

describe("arvutaAutomaks – tervikarvutused", () => {
  it("tüüpiline bensiinauto: 130 g/km, 110 kW, 2020, bensiin", () => {
    // co2Reg = 65, kwReg = 230, margis = 0.75
    // registreerimismaks = (65+230) × 0.75 = 295 × 0.75 = 221.25 → 221
    // aastamaks co2: 117×0.05 + 13×1 = 5.85 + 13 = 18.85
    // aastamaks kw: (110-74) × 0.3 = 36 × 0.3 = 10.8
    // aastamaks = 18.85 + 10.8 = 29.65
    const r = arvutaAutomaks(130, 110, 2020, "bensiin");
    expect(r.registreerimismaks).toBe(221);
    expect(r.aastamaks).toBe(29.65);
  });

  it("elektrikauto: 0 g/km, 150 kW, 2023", () => {
    // co2Reg = 0 (elekter vabastus)
    // kwReg = 26×5 + 50×10 = 130 + 500 = 630
    // margis = 1.0 (3 a vana)
    // registreerimismaks = 630
    // aastamaks = 0 (co2=0 + elekter) + (150-74)×0.3 = 76×0.3 = 22.8
    const r = arvutaAutomaks(0, 150, 2023, "elekter");
    expect(r.registreerimismaks).toBe(630);
    expect(r.aastamaks).toBe(22.8);
  });

  it("väga vana väike auto: 100 g/km, 60 kW, 2000", () => {
    // co2Reg = 0, kwReg = 0
    // margis = 0.1 (26 a vana)
    // registreerimismaks = 0
    // aastamaks = 100×0.05 = 5 + 0 = 5
    const r = arvutaAutomaks(100, 60, 2000, "bensiin");
    expect(r.registreerimismaks).toBe(0);
    expect(r.aastamaks).toBe(5);
  });

  it("uus diislauto: 160 g/km, 120 kW, 2025", () => {
    // co2Reg bensiin: 165 + (160-150)×15 = 165+150 = 315, ×1.1 = 346.5 → 347
    // kwReg: 130 + (120-100)×10 = 130+200 = 330
    // margis = 1.0 (1 a vana)
    // registreerimismaks = 347 + 330 = 677
    const r = arvutaAutomaks(160, 120, 2025, "diisel");
    expect(r.registreerimismaks).toBe(677);
  });
});
