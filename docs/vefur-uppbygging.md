# Uppbygging vefsins

Þetta skjal er fyrir fólk sem er ekki vant vefforritun en þarf að geta ratað um verkefnið.

## Stóra myndin

Vefurinn er Next.js App Router verkefni. Það þýðir að:

- `app/layout.js` er ramminn utan um allar síður: haus, meginmál og fótur.
- `app/page.js` birtir forsíðuna.
- `app/[slug]/page.js` býr til undirsíður út frá gögnum í `data/site-content.js`.
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
- allar undirsíður sem birtast í `/[slug]`.

Þetta er gert svo óvanur aðili geti breytt efni án þess að fikta í mörgum React-skrám.

## Hvað gera components?

```text
components/SiteHeader.js   Haus, logo, valmynd og hraðhnappar
components/SiteFooter.js   Fótur með sambandi, flýtileiðum og styrktarupplýsingum
components/HomePage.js     Forsíðan og allar hennar einingar
components/ContentPage.js  Sameiginlegt útlit fyrir undirsíður
components/ButtonLink.js   Hnappur sem virkar fyrir innri og ytri tengla
```

Ef þú ert bara að breyta texta byrjarðu ekki hér. Byrjaðu í `data/site-content.js`.

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
- Mobile upplifun á að gera síma, fyrstu skref og hjálp strax mjög aðgengileg.

## Næstu tæknilegu skref

Þegar grunnurinn er samþykktur er eðlilegt að bæta við:

- leit,
- formum fyrir beiðnir og vinnustaðavakt,
- prófunum fyrir lykilflæði,
- fleiri tungumálum fyrir lykilefni.
