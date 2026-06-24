# Uppbygging vefsins

Þetta skjal er fyrir fólk sem er ekki vant vefforritun en þarf að geta ratað um verkefnið.

## Fyrst: hvað er hvað?

Repo-ið er viljandi einfalt ef það er lesið svona:

- `web/data/site-content.js` er contentið sem vefurinn birtir
- `web/app/`, `web/components/` og `web/public/assets/` eru vefurinn sjálfur
- `docs/` er skýringalagið og þar undir eru bæði tækniskjöl og reference-gögn

Ef þú ert að leita að texta, síðum eða valmyndum, byrjaðu ekki í tækniskrám. Byrjaðu í `web/data/site-content.js`.

## Stóra myndin

Vefurinn er Next.js App Router verkefni. Það þýðir að:

- `web/app/[lang]/layout.js` er ramminn utan um tungumálaútgáfur og setur rétt `<html lang>`.
- `web/app/[lang]/page.js` birtir forsíðuna fyrir hvert tungumál.
- `web/app/[lang]/[slug]/page.js` býr til undirsíður út frá gögnum í `web/data/site-content.js`.
- `web/middleware.js` vísar rótinni `/` á sjálfgefið tungumál, `/is`.
- `web/app/globals.css` geymir allt útlit í þessari fyrstu útgáfu.

## Gögnin eru viljandi einföld

Flest efni er í:

```text
web/data/site-content.js
```

Þessi skrá er einföld miðlæg content-skrá. Hún geymir:

- símanúmer, netfang og heimilisfang,
- aðalvalmynd,
- forsíðukort,
- þjónustukort,
- fréttir,
- allar undirsíður sem birtast undir `/is`, `/en` og `/pl`.

Þetta er gert svo óvanur aðili geti breytt efni án þess að fikta í mörgum React-skrám. Allt sýnilegt efni á að vera til á íslensku, ensku og pólsku.

## Tungumál

Vefurinn gerir ráð fyrir þremur tungumálum:

```text
/is  Íslenska
/en  English
/pl  Polski
```

Tungumál eru skilgreind í `languages` og `siteContent` í `web/data/site-content.js`.

Þegar ný síða eða ný eining er bætt við þarf að bæta henni við öll þrjú tungumálin. Það er viljandi: þannig sést strax ef þýðingu vantar.

## Hvað gera components?

```text
web/components/SiteHeader.js   Haus, logo, valmynd og hraðhnappar
web/components/SiteFooter.js   Fótur með sambandi, flýtileiðum og styrktarupplýsingum
web/components/HomePage.js     Forsíðan og allar hennar einingar
web/components/ContentPage.js  Sameiginlegt útlit fyrir undirsíður
web/components/ButtonLink.js   Hnappur sem virkar fyrir innri og ytri tengla
```

Ef þú ert bara að breyta texta byrjarðu ekki hér. Byrjaðu í `web/data/site-content.js`.

## Meðferðarúrræðin

Síðan `Meðferðarúrræðin` er venjuleg undirsíða í `web/data/site-content.js`, en hún notar aukahlutann `treatmentResources`.

Þar eru fimm úrræði sett fram sem einföld kort:

- `Vogur` fyrir afeitrun, greiningu og fyrstu skref.
- `Vík` fyrir inniliggjandi meðferð, að jafnaði fjórar vikur.
- `Von` fyrir göngudeild, dagmeðferð, fjölskylduþjónustu og eftirfylgd.
- `Vin` fyrir búsetuúrræði og félagslega endurhæfingu.
- `LOF` fyrir lyfjameðferð og göngudeildarmeðferð við ópíóíðafíkn.

Hvert kort hefur `label`, `title`, `duration`, `text`, `points`, `icon` og `image`. Icon heitin eru skilgreind í `web/components/ContentPage.js`. Myndirnar koma úr `web/public/assets/images/`.

Neðst á síðunni er `pathway`, sem útskýrir í einföldum skrefum að fólk þarf ekki að velja rétta úrræðið sjálft. Faglegt mat og fyrsta samtal hjálpa til við að raða úrræðunum saman.

## Valmynd og megamenu

Aðalvalmyndin er vísvitandi stutt. Hún notar `megaMenu` í `web/data/site-content.js` og skiptir undirleiðum í dálka.

Ef þú bætir við eða breytir valmynd:

- haltu efstu flokkum fáum,
- settu undirleiðir í `columns`,
- hafðu sama skipulag á `is`, `en` og `pl`,
- ekki setja texta beint inn í `SiteHeader.js`.

Desktop megamenu opnast með `hover` og `focus-within`, þannig að það virkar bæði með mús og lyklaborði. Farsímaútgáfan notar HTML `details` hópa.

## Assets

Myndir og tákn eru í:

```text
web/public/assets/images/
web/public/assets/icons/
```

Þetta er afritað úr `docs/reference/saa-design-audit/assets/`. Next.js birtir skrár í `web/public/` beint frá rót vefsins. Dæmi:

```text
web/public/assets/images/banner-gongudeild-von.png
```

er notað í kóða sem:

```text
/assets/images/banner-gongudeild-von.png
```

## Hönnunarreglur í þessari útgáfu

- Appelsínurauði SÁÁ-liturinn `#ff3b00` er notaður fyrir aðgerðir og áherslur.
- Texti notar hlýjan dökkan lit, ekki hreinan svartan, svo stórar fyrirsagnir verði mannlegri og mildari.
- Kort eru einföld, með litlum radius og skýrum bilum.
- Forsíðan byrjar á hjálparleiðum, ekki fréttum. Hero-svæðið á að taka vel á móti fólki sem er óvisst, ekki líta út eins og innanhússkynning.
- Hjálparkassinn á forsíðu notar icon og stuttar aðgerðir: hringja, fyrstu skref og bráða stöðu.
- Efnisröðun fylgir praktísku mynstri: lykilþjónusta, hagnýtar leiðir, stuðningsleiðir, traust og fréttir.
- Mobile upplifun á að gera síma, fyrstu skref og hjálp strax mjög aðgengileg.

## Næstu tæknilegu skref

Þegar grunnurinn er samþykktur er eðlilegt að bæta við:

- leit,
- formum fyrir beiðnir og vinnustaðavakt,
- prófunum fyrir lykilflæði,
- hreinsun og faglegri yfirferð á öllum þýðingum.
