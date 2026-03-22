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

### 1. /automaks – Automaksu kalkulaator 2026
Sisendid: CO2 (g/km), võimsus (kW), aasta, kütus (bensiin/diisel/elekter/hübriid)
Väljund: registreerimistaks (€), aastamaks (€), selgitus
Allikas: Eesti automaksu seadus 2026 (riigiteataja.ee)

### 2. /netopalk – Netopalga kalkulaator 2026
Sisendid: brutopalk (€/kuus), II sammas (jah/ei)
Väljund: netopalk, tulumaks 22%, sotsiaalmaks 33%,
töötukindlustus 1.6%, II sammas 2%, arvutuse kirjeldus

### 2b. /brutopalk – Brutopalgast netopalk (tagurpidi)
Sisendid: netopalk (€/kuus), II sammas (jah/ei)
Väljund: brutopalk, tulumaks, sotsiaalmaks, töötukindlustus, tööandja kogukulu
Loogika: binaarne otsing – leiab brutopalgaväärtuse millele vastab sisestatud netopalk

### 3. /laen – Laenukalkulaator
Sisendid: summa (€), intress (%), periood (kuud), tüüp (annuiteet/võrdne)
Väljund: kuumakse, koguintress, tagasimakse graafik (Recharts)

### 4. /kodulaen – Kodulaenu kalkulaator
Sisendid: kinnisvara hind (€), omafinantseering (%), intress (%), periood
Väljund: laenusumma, kuumakse, kogukulu

### 6. /fie – FIE maksude kalkulaator 2026
Sisendid: aastane käive (€), kulud (€), II sammas (jah/ei)
Väljund: tulumaks, sotsiaalmaks, netotulu, efektiivne maksumäär

### 7. /ou-palk-dividend – OÜ palk vs dividend
Sisendid: OÜ kasum enne makse (€), jaotus slider (% palk vs dividend)
Väljund: kõrvuti netotulu võrdlus mõlema variandiga

### 8. /saastud – Säästude kalkulaator
Sisendid: algsumma (€), igakuine lisasääst (€), intress (%), periood (aastad)
Väljund: lõppsumma, koguintress, kasvu graafik (Recharts)

### 9. /uuritootlus – Üüritootluse kalkulaator
Sisendid: hind (€), üüritulu (€/kuus), kulud (€/kuus)
Väljund: brutorentaablus (%), netarentaablus (%), tasuvusaeg

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
```

