# Þróunarumhverfi fyrir AI-studda vefvinnu

Þetta skjal er fyrir fólk sem hefur litla eða enga forritunarþekkingu en vill geta unnið í SÁÁ-vefnum með aðstoð AI. Markmiðið er að gera ferlið sýnilegt, öruggt og endurtekanlegt.

## Markmiðið

Við viljum að fólk geti:

- séð vefinn breytast live á eigin tölvu,
- skoðað hverja breytingu á Vercel preview slóð áður en hún fer í loftið,
- sett athugasemdir beint á ákveðna hluta síðunnar,
- sent AI skýr fyrirmæli sem hægt er að framkvæma án misskilnings,
- haldið `main` branch stöðugum og deploy-hæfum.

## Ráðlagt vinnulag

```text
1. Breyting er unnin með AI í repo-inu.
2. Vefurinn er skoðaður live á localhost.
3. Breyting er commit-uð og push-uð á GitHub.
4. Vercel býr til Preview Deployment.
5. Teymið setur comment á preview með Vercel Toolbar.
6. AI fær comment/screenshot/slóð og lagar.
7. Þegar allt er samþykkt fer breyting á production.
```

## Hvað þarf að setja upp á tölvu?

### Lágmarksuppsetning

1. **VS Code** til að opna repo-ið og skoða skrár.
2. **GitHub Desktop** fyrir fólk sem vill ekki nota terminal mikið.
3. **Node.js 24 LTS** því verkefnið er stillt á Node `24.17.0`.
4. **Codex eða annað AI coding tól** sem getur lesið repo-ið og gert breytingar.
5. **Vercel account** fyrir preview, comments og deploy.

### Fyrsta keyrsla

Opna repo-ið í VS Code og keyra:

```powershell
cd web
npm.cmd install
npm.cmd run dev
```

Opna svo:

```text
http://localhost:3000/is
```

Vefurinn uppfærist sjálfkrafa þegar AI eða notandi breytir skrám. Þetta er besta leiðin fyrir þann sem er að vinna í útliti eða texta að sjá breytingar strax.

## Hvernig á óforritari að biðja AI um breytingu?

Best er að skrifa beiðnina svona:

```text
Síða: /is
Hluti: efsti ráðstefnubanner
Vandamál: lógóið er of stórt þegar búið er að scrolla
Ósk: minnka lógóið um ca. 25% og halda textanum stærri
Prófun: skoða desktop og mobile
```

Ef notað er Vercel comment:

```text
Vercel preview: [setja slóð]
Comment: [afrita texta úr commenti]
Screenshot: [setja inn mynd ef til er]
Ósk: laga þetta og keyra build
```

AI getur unnið miklu hraðar ef beiðnin inniheldur:

- nákvæma síðu eða slóð,
- hvaða hluta er verið að tala um,
- hvað er rangt,
- hvað á að gerast í staðinn,
- hvort breytingin á að gilda á desktop, mobile eða bæði.

## Vercel Preview Comments

Vercel Comments er mjög hentugt fyrir þetta verkefni. Á preview deployment er hægt að setja athugasemd beint á hluta síðunnar með Vercel Toolbar. Þetta hentar sérstaklega vel fyrir fólk sem vill ekki tala um skráarnöfn eða CSS heldur bara benda á það sem sést.

Ráðlagt:

- nota Vercel Preview fyrir allar stærri breytingar,
- setja comments á nákvæman stað í UI,
- hafa comment stutt og aðgerðamiðað,
- resolve-a comment þegar AI hefur lagað það og breytingin hefur verið skoðuð.

Dæmi um góð comment:

```text
Minnka þetta logo þegar scrollað er.
```

```text
Þessi texti má vera stærri og með meiri andrými.
```

```text
Þessi kassi má ekki detta út fyrir skjá á mobile.
```

## Mælt með hlutverkum

### Efnisritstjóri

- Breytir eða biður AI um breytingar á texta í `web/data/site-content.js`.
- Passar að íslenska, enska og pólska séu uppfærðar saman.
- Skoðar live preview.

### Hönnunaryfirferð

- Skoðar preview deployment.
- Setur Vercel comments á útlitsatriði.
- Skoðar desktop og mobile.

### AI/coding ábyrgð

- Les comments og screenshot.
- Gerir breytingar í repo.
- Keyrir `npm.cmd run build` inni í `web/`.
- Commit-ar og push-ar þegar breytingin er tilbúin.

## Hvar á að breyta hverju?

```text
web/data/site-content.js      Textar, valmyndir, cards, síður og tungumál
web/components/               Uppbygging hluta, t.d. header, footer, forsíða
web/app/globals.css           Útlit, litir, bil, stærðir og responsive hegðun
web/public/assets/            Myndir, logo og icon
docs/                         Leiðbeiningar og ákvarðanir
```

Fyrir óforritara er best að byrja á `web/data/site-content.js`. Ef breytingin snýst um útlit á AI frekar að breyta `web/components/` og `web/app/globals.css`.

## Branch og deploy regla

Einfaldasta reglan:

- `main` á alltaf að vera build-hæfur.
- Litlar breytingar mega fara beint á `main`.
- Stærri breytingar ættu að fara í sér branch og Vercel Preview.
- `preview` branch má nota til að prófa Vercel Preview án þess að snerta production.
- Alltaf keyra `npm.cmd run build` inni í `web/` áður en ýtt er á GitHub.

## Checklisti áður en ýtt er á GitHub

```text
[ ] Vefurinn skoðaður á localhost
[ ] Desktop skoðað
[ ] Mobile skoðað
[ ] Íslenska, enska og pólska yfirfarin ef texti breyttist
[ ] npm.cmd run build keyrir án villna inni í web/
[ ] Commit message lýsir breytingunni
```

## Hagnýt viðmið fyrir AI athugasemdir

Góð beiðni:

```text
Á /is forsíðu, minnkaðu SÁÁ logo í sticky nav þegar scrollað er. Það má vera ca. 60px breitt. Ekki breyta hero logo.
```

Óskýr beiðni:

```text
Logo skrítið.
```

AI getur oft lagað óskýra beiðni, en það tekur lengri tíma og eykur líkur á að röngum hlut sé breytt.
