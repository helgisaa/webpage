# SÁÁ Next.js vefur

Þetta repo inniheldur nýjan Next.js grunn fyrir SÁÁ-vef. Markmiðið er að vefurinn sé skýr þjónustugátt fyrir fólk sem þarf hjálp, aðstandendur, fagfólk og styrktaraðila.

## Keyrsla

```bash
npm install
npm run dev
```

Opnaðu síðan `http://localhost:3000`.

## Mikilvægustu möppur

```text
app/                  Next.js síður og global CSS
components/           Endurnýtanlegar React-einingar
data/site-content.js  Allir helstu textar, valmyndir og síðuupplýsingar
public/assets/        Myndir, logo og icon sem vefurinn notar
docs/                 Verkefnaskjöl, hönnunargögn og leiðbeiningar
```

## Hvernig breyti ég texta?

Byrjaðu í `data/site-content.js`. Þar eru valmyndir, forsíðukort, þjónustukort, fréttir og undirsíður skilgreindar sem einföld gögn. Flest dagleg efnisvinna á að vera þar, ekki inni í React-einingunum.

## Hvernig bæti ég við síðu?

1. Opnaðu `data/site-content.js`.
2. Bættu við nýjum hlut í `pages`.
3. Bættu valfrjálst við tengli í `navigation`.
4. Slóðin verður sjálfkrafa `/slug-id`, t.d. `pages["ny-sida"]` verður `/ny-sida`.

## Vercel

Vefurinn er tilbúinn fyrir Vercel. Sjá nánar í `docs/vercel-deploy.md`.

## Skjölun

- `docs/vefur-uppbygging.md` útskýrir tæknilega uppbyggingu.
- `docs/efnisvinna-med-ai.md` útskýrir hvernig má nota AI við texta og hvað þarf að yfirfara faglega.
- `docs/heimildir-og-akvardanir.md` skráir helstu hönnunar- og efnisákvarðanir.
- `docs/saa-design-audit/README.md` geymir audit á núverandi saa.is útliti.
