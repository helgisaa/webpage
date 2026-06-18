# Heimildir og ákvarðanir

Þetta skjal skráir hvað var notað sem grunnur fyrir fyrstu Next.js útgáfuna og hvaða ákvarðanir voru teknar.

## Lesið í repo-inu

- `saa_greining_nyr_vefur.md`
- `docs/saa-design-audit/README.md`
- `docs/saa-design-audit/source/theme.css`
- `docs/saa-design-audit/assets/fonts/red-hat-display.css`
- myndir og tákn úr `docs/saa-design-audit/assets/`

## Skoðað á saa.is

Skoðaðar voru núverandi lykilsíður á saa.is, meðal annars:

- forsíða,
- meðferðastaðir,
- fjölskylduþjónusta og aðstandendanámskeið,
- sálfræðiþjónusta barna,
- göngudeild í Reykjavík,
- AUDIT sjálfspróf,
- styrktarleiðir,
- Vinnustaðavakt SÁÁ.

## Helstu efnisákvarðanir

- Forsíðan er hjálpar- og leiðsagnarsíða, ekki fréttaforsíða.
- Aðalvalmynd er notendamiðuð: „Ég þarf hjálp“, „Aðstandendur“, „Meðferð og þjónusta“ o.s.frv.
- Sími `530 7600` er sýnilegur í haus og lykilköllum.
- Bráð staða fær sérstaka síðu og má ekki blandast saman við almennan þjónustutexta.
- Sjálfspróf eru kynnt sem vísbendingar, ekki sjúkdómsgreining.
- Aðstandendur eru meðhöndlaðir sem sjálfstæður lykilmarkhópur.

## Helstu hönnunarákvarðanir

- Haldið er í SÁÁ appelsínurauða litinn `#ff3b00`.
- Red Hat Display er notað áfram.
- Myndir úr núverandi audit eru nýttar sem raunverulegt sjónrænt efni.
- Kort eru einföld, skýr og með litlum radius.
- Fréttir eru neðar á forsíðu en hjálparleiðir og þjónustuleiðir.

## Af hverju miðlæg content-skrá?

Efni er sett í `data/site-content.js` til að auðvelda:

- breytingar með AI-aðstoð,
- yfirferð fyrir fólk sem er ekki vant React,
- skýra ábyrgð á textum og slóðum.

## Atriði sem þarf að ákveða síðar

- Ritstjórnarferli og ábyrgð á uppfærslum.
- Hvort beiðnaferli verður stafrænt.
- Hvaða tungumál eiga að vera í fyrstu útgáfu.
- Hver á faglega ábyrgð á hverjum efnisflokki.
- Hvernig árangur vefsins verður mældur.
