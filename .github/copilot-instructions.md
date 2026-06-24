# Foundry Agent Instructions

Þessar leiðbeiningar gilda fyrir vinnu í þessu repo.

## Hlutverk

Þetta verkefni er Next.js þjónustuvefur fyrir SÁÁ. Markmiðið er að vefurinn sé skýr, traustvekjandi og hlýr þjónustugátt fyrir fólk sem þarf hjálp, aðstandendur, fagfólk og styrktaraðila.

Agent á fyrst að samræma sig við þessi skjöl áður en hann framkvæmir stærri eða stefnumarkandi breytingar:

- `AGENTS.md`
- `Web definition/README.md`
- viðeigandi síðu í `Web definition/pages/`

Agent á að forgangsraða:
- skýrri leiðsögn fyrir notendur
- aðgengilegu og læsilegu viðmóti
- breytingum sem fylgja SÁÁ-brandinu
- einföldum, litlum og öruggum kóðabreytingum

## Tæknilegt samhengi

- Verkefnið notar Next.js App Router.
- Sjálft Next.js verkefnið er í `web/`.
- Helstu síður og global styling eru í `web/app/`.
- Endurnýtanlegar React einingar eru í `web/components/`.
- Allt efni og allar þýðingar eiga að koma úr `web/data/site-content.js` þegar það á við.
- Myndir, lógó og icons eru í `web/public/assets/`.
- Brandleiðbeiningar eru í `docs/reference/brand-manual/brand-leidbeiningar.md`.

## Efnisreglur

- Ekki harðkóða notendatexta í React component nema mjög góð ástæða sé fyrir því.
- Nýr eða breyttur sýnilegur texti á að fara í `web/data/site-content.js` og vera samræmdur milli tungumála ef breytingin snertir sameiginlegt efni.
- Halda skal íslensku efni skýru, beinskeyttu og mannlegu. Forðast skrifræði og stofnanalegan tón.
- Þegar notendabeiðni er óskýr á að beina henni yfir í staðlaða breytingarformið í `AGENTS.md` eða `Web definition/README.md` áður en stór breyting er útfærð.

## Brand og hönnun

SÁÁ á að vera hlýtt, skýrt, mannlegt og nútímalegt. Vefurinn má ekki verða klínískur, of formlegur eða stofnanalegur.

### Litir

Notaðu fyrst og fremst skilgreinda brand-liti:
- aðallitur: `#ff3b00`
- svartur: `#000000`
- hvítur: `#ffffff`

Leyfilegir aukalitir þegar skýr ástæða er til:
- `#ff8c00`
- `#ffc500`
- `#ff9ec9`
- `#9379ff`
- `#00e69a`
- `#e81e9e`

Reglur:
- Appelsínuguli liturinn á að leiða.
- Svart og hvítt eiga að halda kerfinu saman.
- Auka- og stemningslitir mega vera skýrir punktar, ekki ráðandi umhverfi.
- Ekki búa til nýja handahófskennda flata liti utan brand palette nema notandi biðji sérstaklega um það.
- Ekki setja inn gradients, shadows eða effects nema þeir hafi skýrt hlutverk og passi brandinu.

### Myndmál og framsetning

- Myndir eiga að virka mannlegar og trúverðugar, ekki eins og stock herferð.
- Gefa skal fyrirsögnum vægi og halda góðu andrými.
- Forðast skal of marga kassa, línur, liti og competing fókuspunkta.
- Ef UI fer að líta út eins og opinber stofnun eða heilbrigðiskerfisgátt er breytingin líklega á rangri leið.

## Vinnulag við kóðabreytingar

- Byrjaðu á minnsta mögulega samhengi sem nægir til að finna controlling code path.
- Breyttu aðeins því sem þarf til að leysa verkefnið.
- Haltu núverandi uppbyggingu, naming og style nema skýr ástæða sé til annars.
- Uppfærðu documentation aðeins ef breytingin breytir raunverulegu vinnulagi eða verkefnauppbyggingu.
- Ekki laga ótengd vandamál í leiðinni.

## Sannprófun

Eftir breytingar skal, þegar hægt er:
- keyra þrönga villuskoðun á snertum skrám
- keyra build eða aðra viðeigandi sannprófun ef breytingin er stærri
- staðfesta að UI-breytingar bæti læsileika, samræmi og notendaflæði

## Sérstaklega mikilvægt fyrir þetta repo

- Forsíða, header, mega menu og aðstoðarkassar eru kjarnasvæði fyrir notendaflæði og þurfa að vera sérstaklega skýr.
- Þegar notandi biður um sjónrænar breytingar á að bera þær saman við `docs/reference/brand-manual/brand-leidbeiningar.md` áður en litir eða stílar eru valdir.
- Þegar notandi biður um breytingu á tiltekinni síðu á fyrst að lesa viðeigandi skilgreiningu í `Web definition/pages/` ef hún er til.
- Ef óskað er eftir nýjum síðum eða efnisbreytingum, byrjaðu í `web/data/site-content.js` nema augljóst sé að verkefnið snerti layout eða component logic.
- Halda skal breytingum þannig að þær virki vel bæði á desktop og mobile.
