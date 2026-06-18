# Uppbygging vefsins

Þetta skjal er fyrir fólk sem er ekki vant vefforritun en þarf að geta ratað um verkefnið.

## Stóra myndin

Vefurinn er Next.js App Router verkefni. Það þýðir að:

- `app/[lang]/layout.js` er ramminn utan um tungumálaútgáfur og setur rétt `<html lang>`.
- `app/[lang]/page.js` birtir forsíðuna fyrir hvert tungumál.
- `app/[lang]/[slug]/page.js` býr til undirsíður út frá gögnum í `data/site-content.js`.
- `middleware.js` vísar rótinni `/` á sjálfgefið tungumál, `/is`.
- `app/globals.css` geymir allt útlit í þessari fyrstu útgáfu.

## Gögnin eru viljandi einföld

Flest efni er í:

```text
data/site-content.js
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

Tungumál eru skilgreind í `languages` og `siteContent` í `data/site-content.js`.

Þegar ný síða eða ný eining er bætt við þarf að bæta henni við öll þrjú tungumálin. Það er viljandi: þannig sést strax ef þýðingu vantar.

## Hvað gera components?

```text
components/SiteHeader.js   Haus, logo, valmynd og hraðhnappar
components/SiteFooter.js   Fótur með sambandi, flýtileiðum og styrktarupplýsingum
components/HomePage.js     Forsíðan og allar hennar einingar
components/ContentPage.js  Sameiginlegt útlit fyrir undirsíður
components/ButtonLink.js   Hnappur sem virkar fyrir innri og ytri tengla
```

Ef þú ert bara að breyta texta byrjarðu ekki hér. Byrjaðu í `data/site-content.js`.

## Meðferðarúrræðin

Síðan `Meðferðarúrræðin` er venjuleg undirsíða í `data/site-content.js`, en hún notar aukahlutann `treatmentResources`.

Þar eru fimm úrræði sett fram sem einföld kort:

- `Vogur` fyrir afeitrun, greiningu og fyrstu skref.
- `Vík` fyrir inniliggjandi meðferð, að jafnaði fjórar vikur.
- `Von` fyrir göngudeild, dagmeðferð, fjölskylduþjónustu og eftirfylgd.
- `Vin` fyrir búsetuúrræði og félagslega endurhæfingu.
- `LOF` fyrir lyfjameðferð og göngudeildarmeðferð við ópíóíðafíkn.

Hvert kort hefur `label`, `title`, `duration`, `text`, `points`, `icon` og `image`. Icon heitin eru skilgreind í `components/ContentPage.js`. Myndirnar koma úr `public/assets/images/`.

Neðst á síðunni er `pathway`, sem útskýrir í einföldum skrefum að fólk þarf ekki að velja rétta úrræðið sjálft. Faglegt mat og fyrsta samtal hjálpa til við að raða úrræðunum saman.

## Valmynd og megamenu

Aðalvalmyndin er vísvitandi stutt. Hún notar `megaMenu` í `data/site-content.js` og skiptir undirleiðum í dálka.

Ef þú bætir við eða breytir valmynd:

- haltu efstu flokkum fáum,
- settu undirleiðir í `columns`,
- hafðu sama skipulag á `is`, `en` og `pl`,
- ekki setja texta beint inn í `SiteHeader.js`.

Desktop megamenu opnast með `hover` og `focus-within`, þannig að það virkar bæði með mús og lyklaborði. Farsímaútgáfan notar HTML `details` hópa.

## Assets

Myndir og tákn eru í:

```text
public/assets/images/
public/assets/icons/
```

Þetta er afritað úr `docs/saa-design-audit/assets/`. Next.js birtir skrár í `public/` beint frá rót vefsins. Dæmi:

```text
public/assets/images/banner-gongudeild-von.png
```

er notað í kóða sem:

```text
/assets/images/banner-gongudeild-von.png
```

## Hönnunarreglur í þessari útgáfu

- Appelsínurauði SÁÁ-liturinn `#ff3b00` er notaður fyrir aðgerðir og áherslur.
- Texti er svartur eða dökkgrár fyrir læsileika.
- Kort eru einföld, með litlum radius og skýrum bilum.
- Forsíðan byrjar á hjálparleiðum, ekki fréttum.
- Efnisröðun fylgir praktísku mynstri: lykilþjónusta, hagnýtar leiðir, stuðningsleiðir, traust og fréttir.
- Mobile upplifun á að gera síma, fyrstu skref og hjálp strax mjög aðgengileg.

## Næstu tæknilegu skref

Þegar grunnurinn er samþykktur er eðlilegt að bæta við:

- leit,
- formum fyrir beiðnir og vinnustaðavakt,
- prófunum fyrir lykilflæði,
- hreinsun og faglegri yfirferð á öllum þýðingum.
