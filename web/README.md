# Vefurinn

Þessi mappa er sjálft Next.js verkefnið fyrir nýja SÁÁ-vefinn. Ef þú vilt keyra, byggja eða breyta því sem birtist á vefnum, byrjaðu hér.

```text
app/                  Next.js síður, tungumálarouting og global CSS
components/           Endurnýtanlegar React-einingar
data/site-content.js  Textar, valmyndir, síður, kort, fréttir og tungumál
public/assets/        Myndir, logo og icon sem vefurinn notar
```

Skjöl, brandgrunnur og bakgrunnsgögn eru ekki hér heldur í `../docs/`.

## Keyrsla

```powershell
npm.cmd install
npm.cmd run dev
```

Opnaðu síðan:

```text
http://localhost:3000/is
```

## Build

```powershell
npm.cmd run build
```

Ef breyting snýst um texta, síðu, kort, frétt eða þýðingu, byrjaðu í `data/site-content.js`.
