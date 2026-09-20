```markdown
# Arvuta.eu – Eesti Finantskalkulaatorite Portaal

## Projekti ülevaade
Arvuta.eu on tasuta eestikeelne finantskalkulaatorite veebileht.
Domeen: arvuta.eu | Hosting: Vercel (tasuta)
Eesmärk: passiivne tulu Google AdSense + affiliate linkide kaudu.

## Tehniline stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui komponendid
- Recharts (graafikud)
- next-sitemap (SEO)
- Vercel (deploy)

## Disain
- Modernne, puhas, professionaalne
- Peamine värv: sinine #1E40AF, taust: hall #F8FAFC
- Mobile-first
- Reaalajas arvutus (tulemused uuenevad kohe)
- Interaktiivsed sliderid kus võimalik

## Lehekülje struktuur
- / → Avaleht: kõik kalkulaatorid kategooriate kaupa + otsing
- /[kalkulaator] → Iga kalkulaator eraldi URL-il
- Header: logo + navigatsioon
- Footer: © Arvuta.eu 2026

## Kalkulaatorid

### ✅ 1. /automaks – Automaksu kalkulaator 2026
Sisendid: CO2 (g/km), võimsus (kW), aasta, kütus (bensiin/diisel/elekter/hübriid)
Väljund: registreerimistaks (€), aastamaks (€), selgitus
Allikas: Eesti automaksu seadus 2026 (riigiteataja.ee)

### ✅ 2. /netopalk – Netopalga kalkulaator 2026
Sisendid: brutopalk (€/kuus), II sammas (jah/ei)
Väljund: netopalk, tulumaks 22%, sotsiaalmaks 33%,
töötukindlustus 1.6%, II sammas 2%, arvutuse kirjeldus

### ✅ 2b. /brutopalk – Brutopalgast netopalk (tagurpidi)
Sisendid: netopalk (€/kuus), II sammas (jah/ei)
Väljund: brutopalk, tulumaks, sotsiaalmaks, töötukindlustus, tööandja kogukulu
Loogika: binaarne otsing – leiab brutopalgaväärtuse millele vastab sisestatud netopalk

### ✅ 3. /laen – Laenukalkulaator
Sisendid: summa (€), intress (%), periood (kuud), tüüp (annuiteet/võrdne)
Väljund: kuumakse, koguintress, tagasimakse graafik (Recharts)

### ❌ 4. /kodulaen – Kodulaenu kalkulaator
Sisendid: kinnisvara hind (€), omafinantseering (%), intress (%), periood
Väljund: laenusumma, kuumakse, kogukulu

### ✅ 5. /hoiused – Hoiusekalkulaator
Sisendid: summa (€), periood (kuud)
Väljund: tootlus pankade lõikes, parim intress, lõppsumma
Andmed: live-scraper (hoiused-scraper @ Mac Mini, Docker + cron) → Vercel Blob
Pangad: Swedbank, LHV, SEB, Luminor, Coop Pank, Holm Bank, Inbank, Bigbank
Uueneb: iga päev kell 03:00 EEST automaatselt

### ❌ 6. /fie – FIE maksude kalkulaator 2026
Sisendid: aastane käive (€), kulud (€), II sammas (jah/ei)
Väljund: tulumaks, sotsiaalmaks, netotulu, efektiivne maksumäär

### ✅ 7. /dividend – OÜ dividendi kalkulaator
Sisendid: dividendi brutosumma (€)
Väljund: netodividend pärast tulumaksu

### ❌ 8. /ou-palk-dividend – OÜ palk vs dividend
Sisendid: OÜ kasum enne makse (€), jaotus slider (% palk vs dividend)
Väljund: kõrvuti netotulu võrdlus mõlema variandiga

### ✅ 9. /saastud – Säästude kalkulaator
Lahendatud /hoiused kaudu — live intressimäärad + tootluse arvutus

### ❌ 10. /uuritootlus – Üüritootluse kalkulaator
Sisendid: hind (€), üüritulu (€/kuus), kulud (€/kuus)
Väljund: brutorentaablus (%), netarentaablus (%), tasuvusaeg

## hoiused-scraper (Mac Mini)
Asukoht: /Users/veikovetto/hoiused-scraper
Stack: Node.js + TypeScript + Docker + crond
Repo: https://github.com/veikoff/hoiused-scraper (privaatne)
Käivitamine: docker compose up -d
Env: .env (ARVUTA_API_URL, ARVUTA_API_KEY) — ei lähe giti

## SEO – iga kalkulaatori leht
- Unikaalne <title> ja <meta description> eesti keeles
- H1 sisaldab märksõna
- 150-200 sõna selgitav tekst kalkulaatori ees
- FAQPage JSON-LD (min 4 küsimust)
- HowTo JSON-LD
- WebApplication JSON-LD

## LLM-sõbralikkus
- /public/llms.txt – kirjeldab kogu saidi sisu markdown formaadis
- /public/robots.txt – lubab GPTBot, PerplexityBot, ClaudeBot, Google-Extended
- next-sitemap automaatne sitemap.xml genereerimine
- Iga lehe tekst on faktipõhine, viitab ametlikele allikatele (emta.ee)

## Reklaam ja monetiseerimine
- Reserveeri <div id="ad-top"> ja <div id="ad-sidebar"> igal lehel
- Ärge paigalda AdSense koodi veel – ainult kohad valmis
- Affiliate lingid: LHV, Swedbank, Inbank (lisatakse hiljem)

## Arvude formateerimine
- Eesti formaat: 1 234,56 €
- Tuhat eraldaja: tühik
- Komakohad: koma

## Arenduse põhimõtted
- Kõik arvutused client-side (ei vaja serverit)
- Lehe laadimisaeg alla 3 sekundi
- Vercel deployment valmis (vercel.json)
- Iga komponent eraldi failis /components/calculators/
- Maksimaalse korduskasutusega komponendid

## Käivitamine
npm run dev    → localhost:3000
npm run build  → production build
vercel deploy  → deploy Vercelile

## Tulevased tööd

### Genereeri /hoiused KKK vastused live-andmetest
KKK vastused on praegu kõvakodeeritud `app/hoiused/page.tsx`-is. Varem sisaldasid
need konkreetseid intressimäärasid, mis vananesid märkamatult — aprilli numbrid
seisid lehel septembrini ja läksid `FAQPage` JSON-LD kaudu ka Google'i rich
results'i. 20.09.2026 kirjutati tekstid numbriteta ümber, mis lahendab vananemise,
aga kaotab SEO-väärtuse: konkreetsete summadega vastused ("kui palju teenib
10 000 €") toovad long-tail otsinguliiklust.

Õige lahendus: genereeri vastused `faqSchema`-sse serveris blobi andmetest, nii et
numbrid on alati õiged ega saagi vananeda. Samad andmed lähevad nii nähtavasse
KKK-sse kui JSON-LD-sse.

Arvesta:
- kui andmed on vananenud (vt `STALE_AFTER_HOURS`), ära pane numbreid JSON-LD-sse
  — parem numbriteta vastus kui vale number Google'is
- leht on ISR (`revalidate = 3600`), seega numbrid uuenevad koos lehega
- hoia vastused täislausetena, Google nõuab FAQPage-is sisulist teksti

### Koli scrape Mac Minist Vercel Croni
Praegu jookseb scraper Mac Minis (Docker + crond) ja POSTib tulemuse
`/api/rates`-i, mis kirjutab Vercel Blobi. Kogu ahel sõltub sellest, et üks
koduarvuti on töökorras. 26.07.2026 suri konteiner ja andmed seisid 8 nädalat.

Masin on nõrgim lüli kahel põhjusel:
- **FileVault on sees ja automaatne sisselogimine puudub** — pärast
  voolukatkestust jääb Mac ketta avamise ekraanile ega käivita midagi, kuni
  keegi füüsiliselt parooli sisestab. Ükski taaskäivituspoliitika ega
  watchdog seda ei lahenda.
- Docker Desktopi uuendused ja macOS-i restardid tapavad konteinereid.

Migratsioon on oodatust lihtsam, sest **ükski pangascraper ei vaja brauserit** —
kõik kaheksa failis `src/banks/*.ts` kasutavad tavalist `fetch`-i. Playwright on
ainult `discover.ts`-is, mis on käsitsi kasutatav arendustööriist ega pea
Vercelisse minema. Seega ei ole vaja 5 GB bundle'it ega Chromiumi.

Sammud:
1. kopeeri `src/banks/*.ts` + `types.ts` arvuta-eu repos `lib/scrapers/` alla
2. loo `app/api/cron/scrape-rates/route.ts`, mis kutsub scraperid ja kirjutab
   otse `put()`-iga Blobi + `revalidatePath('/hoiused')` — vahepealset
   HTTP-päringut ega `ARVUTA_API_KEY`-d enam vaja
3. kaitse route `CRON_SECRET`-iga (`authorization: Bearer <secret>`)
4. lisa `vercel.json`-i: `"crons": [{"path": "/api/cron/scrape-rates",
   "schedule": "0 0 * * *"}]`
5. testi `vercel crons run /api/cron/scrape-rates`
6. alles siis lülita Mac Mini konteiner ja watchdog välja

Enne kolimist kontrolli kahte asja:
- **Kas pangad lubavad Verceli IP-sid?** Praegu tulevad päringud Eesti
  koduühenduselt. Osa panku võib pilveteenuste IP-blokke filtreerida — see on
  ainus päris risk ja seda saab testida alles preview deploy pealt.
- Cron-limiit selle konto plaanil (Hobby lubab harvemat sagedust kui Pro).
  Üks kord ööpäevas peaks mahtuma, aga kontrolli enne.

Cron käib UTC ajas, seega `0 0 * * *` on suveajal 03:00 ja talveajal 02:00
Eesti aega. Hoiuseintresside puhul pole see oluline.

Kui see valmis, kaovad: Docker, `watchdog.sh`, launchd agent, FileVault'i
sõltuvus ja `hoiused-scraper` repo kui eraldi deploy-üksus.
```
