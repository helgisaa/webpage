# SÁÁ vefurinn

Þetta repo skiptist í tvo skýra hluta:

- `web/` er vefurinn sjálfur, sem keyrir í Next.js
- `docs/` eru skjöl og vinnugögn, sem útskýra efni, ákvarðanir og vinnulag

Ef þú ert að leita að því sem birtist á vefnum, byrjaðu hér:

```text
web/data/site-content.js  Texti, valmyndir, síður og sameiginlegt content
web/app/                  Síðurnar og routing
web/components/           Endurnýtanlegir hlutar vefsins
web/public/assets/        Myndir, logo og icon sem vefurinn notar
```

Ef þú ert að leita að skjölum, byrjaðu hér:

```text
docs/                 Skýr verkefnaskjöl og vinnulag
docs/reference/       Brandreglur, greining, audit og bakgrunnsgögn
```

## Fljót leiðsögn

### Ég vil breyta contenti á vefnum

Byrjaðu í `web/data/site-content.js`. Þar á að vera nær allt sýnilegt efni sem notendur lesa á vefnum.

### Ég vil skilja hvernig vefurinn er settur saman

Skoðaðu `docs/technical/README.md`. Tæknilega hliðin er þar, ekki dreifð um allt repo-ið.

### Ég vil sjá hvaða skjöl skipta máli

Skoðaðu `docs/README.md`. Þar er skýr yfirsýn yfir hvaða skjöl eru fyrir efni, hvaða skjöl eru fyrir vinnulag og hvaða skjöl eru tæknileg.

## Hvað vefurinn notar

Vefurinn byggir á fáum skýrum hlutum:

- Next.js App Router fyrir síður og routing
- React components fyrir uppbyggingu hluta
- `web/data/site-content.js` sem miðlæga content-skrá
- `web/app/globals.css` fyrir meginútlit
- `web/public/assets/` fyrir myndir og tákn

Markmiðið er að content sé skýrt og að tæknin sé fremur í bakgrunni nema þegar hennar er þörf.

## Keyrsla

Verkefnið er stillt á Node.js `24.17.0` LTS. Sjá einnig `web/.node-version` og `engines` í `web/package.json`.

```bash
cd web
npm install
npm run dev
```

Opnaðu síðan `http://localhost:3000`. Rótin `/` vísar sjálfkrafa á íslensku útgáfuna `/is`.

Til að byggja production útgáfu:

```bash
cd web
npm run build
```

Á Windows getur PowerShell stundum lokað á `npm.ps1`. Þá má nota `npm.cmd` í staðinn:

```powershell
cd web
npm.cmd install
npm.cmd run dev
```

Til að byggja á Windows:

```powershell
cd web
npm.cmd run build
```

## Mikilvægustu möppur

```text
web/app/                  Next.js síður, tungumálarouting og global CSS
web/components/           Endurnýtanlegar React-einingar
web/data/site-content.js  Allir textar á íslensku, ensku og pólsku
web/public/assets/        Myndir, logo og icon sem vefurinn notar
docs/                     Verkefnaskjöl, hönnunargögn og leiðbeiningar
```

## Hvernig breyti ég texta?

Byrjaðu í `web/data/site-content.js`. Þar eru valmyndir, forsíðukort, þjónustukort, fréttir og undirsíður skilgreindar sem einföld gögn fyrir `is`, `en` og `pl`. Flest dagleg efnisvinna á að vera þar, ekki inni í React-einingunum.

Allt sýnilegt efni á að vera til á öllum þremur tungumálum áður en það fer í loftið.

## Hvernig bæti ég við síðu?

1. Opnaðu `web/data/site-content.js`.
2. Bættu við nýjum hlut í `pages` undir `is`, `en` og `pl`.
3. Notaðu sér slóð fyrir hvert tungumál, t.d. `ny-sida`, `new-page`, `nowa-strona`.
4. Bættu valfrjálst við tengli í `navigation` á öllum tungumálum.
5. Slóðir verða sjálfkrafa `/is/ny-sida`, `/en/new-page` og `/pl/nowa-strona`.

## AI-studd vefvinna

Sjá `docs/technical/throunarumhverfi-fyrir-ai-vinnu.md` fyrir vinnulag fyrir fólk sem vill nota live preview, Vercel comments og AI til að breyta og rýna vefinn án þess að þurfa mikla forritunarþekkingu.

## Vercel

Vefurinn er tilbúinn fyrir Vercel. Sjá nánar í `docs/technical/vercel-deploy.md`.

## Skjölun

- `docs/README.md` er aðalyfirsýn yfir skjölin.
- `docs/technical/README.md` er aðalyfirsýn yfir tæknileg skjöl.
- `docs/technical/vefur-uppbygging.md` útskýrir tæknilega uppbyggingu.
- `docs/efnisvinna-med-ai.md` útskýrir hvernig má nota AI við texta og hvað þarf að yfirfara faglega.
- `docs/heimildir-og-akvardanir.md` skráir helstu hönnunar- og efnisákvarðanir.
- `docs/reference/README.md` safnar saman brandi, greiningu og audit-gögnum.
