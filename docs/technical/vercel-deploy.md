# Vercel hýsing

Vefurinn er settur upp sem venjulegt Next.js verkefni og á að virka beint á Vercel.

## Stillingar

Á Vercel má nota sjálfgefnar stillingar:

```text
Root Directory: web
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: .next
```

Verkefnið er stillt á Node.js `24.17.0` LTS með `web/.node-version` og `engines` í `web/package.json`. Vercel á því að byggja með Node 24 línunni.

Rótarslóðin `/` vísar með `web/middleware.js` yfir á `/is`. Enska og pólska útgáfan eru undir `/en` og `/pl`.

## Fyrsta birting

1. Tengja GitHub repo við Vercel.
2. Velja þetta verkefni.
3. Setja Root Directory á `web`.
4. Leyfa Vercel að finna Next.js sjálfkrafa.
5. Keyra fyrstu deployment.

## Preview og athugasemdir

Fyrir AI-studda hönnunar- og efnisvinnu er best að nota Vercel Preview Deployments. Þegar breyting er push-uð á GitHub býr Vercel til preview slóð sem teymið getur skoðað áður en breyting fer á production.

Vercel Comments má nota til að setja athugasemdir beint á hluta síðunnar. Það hentar vel fyrir fólk sem vill benda á vandamál í útliti eða texta án þess að þurfa að þekkja kóðann.

Skráð vinnulag er í `docs/technical/throunarumhverfi-fyrir-ai-vinnu.md`.

## Environment variables

Engar environment variables eru nauðsynlegar í þessari fyrstu útgáfu.

Ef ytri þjónustur bætast við síðar þarf líklega að bæta við breytum eins og:

```text
NEXT_PUBLIC_SITE_URL
```

## Fyrir production

Áður en vefurinn fer formlega í loftið þarf að staðfesta:

- að allir tenglar vísi á rétta staði,
- að íslenska, enska og pólska séu allar fullunnar,
- að símanúmer og netföng séu rétt,
- að myndaréttindi séu skýr,
- að heilbrigðis- og neyðarupplýsingar hafi verið yfirfarnar faglega,
- að SEO titlar og lýsingar séu fullunnin,
- að persónuverndartextar og form séu samþykkt.
