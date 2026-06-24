# Vefurinn í heild

## Tilgangur vefsins

Vefurinn á að vera skýr, hlýr og aðgerðarhæfur þjónustuvefur fyrir fólk sem þarf hjálp, aðstandendur, fagfólk og styrktaraðila.

Hann á ekki fyrst og fremst að sýna skipurit, innri uppbyggingu eða stofnanalegt tungumál. Hann á að hjálpa manneskju að skilja stöðuna sína og finna næsta skref.

## Helstu markhópar

### Fólk sem þarf hjálp

Þarf að geta áttað sig hratt á:

- hvort SÁÁ eigi við
- hvað hægt er að gera núna
- hvert næsta skref er
- hvernig hægt er að ná sambandi

### Aðstandendur

Þurfa að sjá fljótt:

- að þjónusta sé líka til fyrir þau
- hvernig þau geta fengið viðtal, fræðslu eða stuðning
- hvað þau geta gert án þess að þurfa að skilja allt kerfið

### Fagfólk

Þarf greiðan aðgang að:

- tilvísunum
- samstarfsleiðum
- fræðslu og vinnustaðaþjónustu

### Styrktaraðilar og almenningur

Þurfa að skilja:

- hlutverk SÁÁ
- hvernig hægt er að styðja starfið
- að samtökin séu traust og skýr

## Meginstoðir vefsins

### 1. Fyrstu skref eru í forgangi

Notandi á að finna hjálparleiðir áður en hann sér fréttir, innri upplýsingar eða aukaatriði.

### 2. Content stýrir meiru en kóði

Flest sýnilegt efni er skilgreint í `web/data/site-content.js`. Það á að gera breytingar einfaldari og skýrari.

### 3. Tungumál eru hluti af grunninum

Vefurinn er byggður fyrir íslensku, ensku og pólsku. Sama efnisheild á helst að vera skilgreind á öllum tungumálum.

### 4. Sama hönnunarmál á að halda vefnum saman

Haus, footer, hero, efnisblokkir og CTA eiga að mynda samræmda heild. Breytingar eiga að passa inn í það mynstri frekar en að búa til nýtt mynstur á hverri síðu.

## Fastir sameiginlegir hlutar

### Haus

Hausinn inniheldur:

- tilkynningaborða ef við á
- lógó
- megamenu
- aðal CTA
- tungumálaval
- mobile menu

### Footer

Footer inniheldur:

- brand line
- samband og heimilisfang
- flýtileiðir
- samfélagsmiðla
- jafnlaunavottun og grunnupplýsingar

## Tvær megingerðir síðna

### Forsíða

Forsíðan er sérsmíðuð og leiðir fólk áfram um helstu leiðir vefsins.

### Efnissíður

Undirsíður deila sameiginlegu sniði með hero, CTA og efnisblokkum. Ein síða, `Meðferðarúrræðin`, bætir við sérhæfðri resource-uppsetningu.

## Hvernig á að skrifa breytingatillögu

Góð tillaga á að segja:

- hvaða síða er undir
- hvaða hluti á síðunni er undir
- hvað er að í dag
- hvað á að gerast í staðinn
- hvort breytingin sé efnisleg, sjónræn eða byggingarleg

## Hvað þetta skjal á ekki að gera

Þetta skjal á ekki að vera tækniskjal um routing, imports eða build. Fyrir það á að nota `docs/technical/`.
