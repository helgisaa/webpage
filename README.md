# SÁÁ Next.js vefur

Þetta repo inniheldur nýjan Next.js grunn fyrir SÁÁ-vef. Markmiðið er að vefurinn sé skýr þjónustugátt fyrir fólk sem þarf hjálp, aðstandendur, fagfólk og styrktaraðila.

## Keyrsla

Verkefnið er stillt á Node.js `24.17.0` LTS. Sjá einnig `.node-version` og `engines` í `package.json`.

```bash
npm install
npm run dev
```

Opnaðu síðan `http://localhost:3000`. Rótin `/` vísar sjálfkrafa á íslensku útgáfuna `/is`.

Til að byggja production útgáfu:

```bash
npm run build
```

Á Windows getur PowerShell stundum lokað á `npm.ps1`. Þá má nota `npm.cmd` í staðinn:

```powershell
npm.cmd install
npm.cmd run build
```

## Mikilvægustu möppur

```text
app/                  Next.js síður, tungumálarouting og global CSS
components/           Endurnýtanlegar React-einingar
data/site-content.js  Allir textar á íslensku, ensku og pólsku
public/assets/        Myndir, logo og icon sem vefurinn notar
docs/                 Verkefnaskjöl, hönnunargögn og leiðbeiningar
```

## Hvernig breyti ég texta?

Byrjaðu í `data/site-content.js`. Þar eru valmyndir, forsíðukort, þjónustukort, fréttir og undirsíður skilgreindar sem einföld gögn fyrir `is`, `en` og `pl`. Flest dagleg efnisvinna á að vera þar, ekki inni í React-einingunum.

Allt sýnilegt efni á að vera til á öllum þremur tungumálum áður en það fer í loftið.

## Hvernig bæti ég við síðu?

1. Opnaðu `data/site-content.js`.
2. Bættu við nýjum hlut í `pages` undir `is`, `en` og `pl`.
3. Notaðu sér slóð fyrir hvert tungumál, t.d. `ny-sida`, `new-page`, `nowa-strona`.
4. Bættu valfrjálst við tengli í `navigation` á öllum tungumálum.
5. Slóðir verða sjálfkrafa `/is/ny-sida`, `/en/new-page` og `/pl/nowa-strona`.

## Vercel

Vefurinn er tilbúinn fyrir Vercel. Sjá nánar í `docs/vercel-deploy.md`.

## Skjölun

- `docs/vefur-uppbygging.md` útskýrir tæknilega uppbyggingu.
- `docs/efnisvinna-med-ai.md` útskýrir hvernig má nota AI við texta og hvað þarf að yfirfara faglega.
- `docs/heimildir-og-akvardanir.md` skráir helstu hönnunar- og efnisákvarðanir.
- `docs/saa-design-audit/README.md` geymir audit á núverandi saa.is útliti.
