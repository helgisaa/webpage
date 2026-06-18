# SAA.is hönnunarskjölun

Skoðað: 18. júní 2026  
Uppruni: https://www.saa.is/  
Þema/CSS: https://www.saa.is/static/themes/main/theme.css?v=7061bba317

Þessi mappa geymir skjölun og afrit af helstu útlitseiningum núverandi SÁÁ-vefs. Markmiðið er að geta byggt nýja síðu sem heldur í kennileiti SÁÁ, en verður skýrari, hraðari og nútímalegri.

## Möppuskipan

```text
docs/saais-design-audit/
  README.md
  assets/
    fonts/
      red-hat-display.css
    icons/
      logo.svg
      favicon-32x32.png
      apple-touch-icon.png
      arrow.svg
      icon_magnifier.svg
      icon_search_close.svg
      vefverslun.svg
      styrkja.svg
      gerast-felagi.svg
      minningarkort.svg
    images/
      hero-fyrstu-skrefin.png
      hero-thjonusta-fjolskyldur.png
      hero-fraedsla.png
      news-isam.png
      news-lydheilsuhvatning.png
      banner-sumarhatid.jpg
      banner-gongudeild-von.png
      banner-spilafikn.png
      banner-vinnustadavakt.png
      event-sumarhatid.jpg
      event-golfmot.png
      jafnlaunavottun.png
  source/
    theme.css
```

## Heildaryfirbragð

Núverandi vefur notar mjög sterkt, einfalt vörumerki: appelsínurauðan SÁÁ-lit, svartan texta, mikið hvítt rými og ljósgráa hluta. Útlitið er að mestu byggt úr stórum myndaflötum, einföldum kortum, skýrum flýtileiðum og afgerandi hnöppum.

Forsíðan er ekki hefðbundin "hero texti + mynd" lendingarsíða. Hún byrjar með stórum þriggja dálka myndaborða þar sem hver mynd er smellanleg, með hvítum texta ofan á dökkum gradient. Fyrsta skjásýn er þannig meira þjónustugátt en kynningarsíða.

## Litir

Litir úr `:root` og endurteknum CSS-reglum:

| Hlutverk | Gildi | Notkun |
| --- | --- | --- |
| Aðallitur | `#ff3b00` | SÁÁ appelsínurauður, CTA, linkar, focus, borderar, mobile-menu bakgrunnur |
| Secondary | `#000000` | Texti, fyrirsagnir, hover á linka |
| Hvítur | `#ffffff` | Bakgrunnur, texti ofan á myndum, cards |
| Ljósgrár bakgrunnur | `#f3f3f3` | Box/hlutabönd, newsletter/modal bakgrunnar |
| Input/border grár | `#e0e0e0` | Input borderar og hlutlausir fletir |
| Muted texti | `#828282`, `#666666`, `#4f4f4f` | Aukatexti, labels, meta |
| Overlay | `rgba(0,0,0,0.3)` | Menu/search overlay |
| Myndagradient | `rgba(0,0,0,0)` til `rgba(0,0,0,0.6)` | Textalæsileiki ofan á myndum |
| Skuggi | `rgba(0,0,0,0.05)` og `rgba(0,0,0,0.1)` | Kort, leit, hover |

Mælt með að halda `#ff3b00` sem aðallit, en nota hann með aga. Í nýrri síðu væri gott að láta appelsínugulan lit merkja aðgerð, leiðsögn eða mikilvægt efni frekar en að lita stóra fleti óþarflega oft.

## Letur

Vefurinn notar Google Font:

```css
font-family: "Red Hat Display", sans-serif;
font-weight: 400 500 600 700 800;
```

Sama letur er notað bæði fyrir megintexta og fyrirsagnir:

```css
:root {
  --font-family-body: "Red Hat Display", sans-serif;
  --font-family-headings: "Red Hat Display", sans-serif;
}
```

Núverandi typografísk mynstur:

| Eining | Stærð/þyngd | Athugasemd |
| --- | --- | --- |
| Body | `16px`, line-height `1.75`, weight `400` | Rúmt og læsilegt |
| Section title | `28px`, weight `500`, appelsínurautt | Fer í `24px` á minni skjám |
| Hero card title | `32px`, weight `700`, hvítur | Fer í `22px` á minni skjám |
| Card title | oft `20-26px`, weight `600-700` | Svartur eða appelsínurauður eftir samhengi |
| Button text | `16-18px`, weight `500` | Hover getur orðið `800` í icon-box |

Tillaga fyrir betri síðu: halda Red Hat Display, en skilgreina skýrari skala, t.d. `16 / 18 / 24 / 32 / 44 / 56`, svo síður verði samræmdari.

## Layout og spacing

Helstu mynstur:

| Mynstur | Núverandi hegðun |
| --- | --- |
| `contentWrap` | Miðjað efni með hámarksbreidd, en hero/banner getur farið upp í `1600px` |
| Forsíðuborði | Þrír jafn háir myndadálkar á desktop, staflast á mobile |
| Section spacing | `35px` padding ofan/neðan á flestum kössum, `21px` á mobile |
| Icon-grid | CSS grid, `repeat(auto-fit, minmax(220px, 1fr))`, 19px bil |
| Cards | Hvítir fletir, léttir skuggar, oft `border-radius: 3-6px` |
| Mobile nav | Appelsínurauður full-screen/side menu með hvítum texta |

Myndahlutföll:

| Eining | Hlutfall/stærð |
| --- | --- |
| Forsíðu hero myndir | Desktop um `0.833`, mobile um `1.616` |
| Custom banner myndir | 662 x 425 |
| Event thumbnails | Dæmi 480 x 320 eða 480 x 601 |
| News images | Stærri upprunamyndir með responsive `srcset` |

## Navigation

Efsta svæðið er tvískipt:

1. Quick-nav með "Um SÁÁ", "Hafa samband", símanúmeri og Google Translate.
2. Aðalvalmynd með þjónustuflokkum: "Meðferð til betra lífs", "Þjónusta við fjölskyldur", "Styrkja starfið", "Um SÁÁ", "Hafa samband", "ISAM-SÁÁ 2027".

Leit er hringlaga icon-hnappur efst til hægri. Þegar leit opnast birtist stór hvítur search-panel með overlay.

Tillaga fyrir nýja síðu: einfalda aðalvalmynd í færri valkosti og lyfta síma/aðstoð/first steps í fasta CTA-aðgerð, sérstaklega á mobile.

## UI-einingar

### Hnappar

Primary CTA notar:

```css
background-color: #ff3b00;
color: #fff;
border-radius: 6px;
font-weight: 500;
```

Hover er oft `opacity: 0.7` eða litabreyting yfir í svart.

### Icon-box flýtileiðir

Fjórar flýtileiðir á forsíðu:

| Texti | Icon |
| --- | --- |
| Vefverslun | `assets/icons/vefverslun.svg` |
| Styrkja starfið | `assets/icons/styrkja.svg` |
| Gerast félagi | `assets/icons/gerast-felagi.svg` |
| Minningarkort | `assets/icons/minningarkort.svg` |

Þessar einingar eru outline-kort með appelsínurauðum border. Á hover fyllist bakgrunnur með appelsínurauðum hring og texti verður hvítur.

### Cards og fréttir

Fréttakort eru mynd + dagsetning + titill + inngangstexti. Núverandi fréttasvæði er tiltölulega þétt en skýrt. Fyrir betri síðu væri gagnlegt að staðla kort með:

- einu föstu myndahlutfalli,
- samræmdri dagsetningarmerkingu,
- hámarkslengd á inngangstexta,
- skýrum "Lesa meira" action.

### Carousel/banner

Miðjusvæði notar Swiper carousel fyrir stærri banner. Þar eru myndir til vinstri og texti/CTA til hægri eða yfirlagður eftir viewport. Ný útgáfa ætti að halda carousel aðeins ef efnið er virkilega tímabundið eða mikilvægt. Annars er betra að sýna 2-3 valin kort án þess að fela efni.

## Asset-yfirlit

### Lógó og icon

| Skrá | Lýsing |
| --- | --- |
| `assets/icons/logo.svg` | Aðallógó SÁÁ |
| `assets/icons/favicon-32x32.png` | Browser favicon |
| `assets/icons/apple-touch-icon.png` | Apple touch icon |
| `assets/icons/arrow.svg` | Ör í hnöppum/formum |
| `assets/icons/icon_magnifier.svg` | Leitaricon |
| `assets/icons/icon_search_close.svg` | Loka-icon fyrir leit |
| `assets/icons/vefverslun.svg` | Flýtileið icon |
| `assets/icons/styrkja.svg` | Flýtileið icon |
| `assets/icons/gerast-felagi.svg` | Flýtileið icon |
| `assets/icons/minningarkort.svg` | Flýtileið icon |

### Myndir

| Skrá | Stærð | Lýsing |
| --- | --- | --- |
| `assets/images/hero-fyrstu-skrefin.png` | 964 x 1056 | Hero mynd fyrir "Fyrstu skrefin" |
| `assets/images/hero-thjonusta-fjolskyldur.png` | 992 x 1121 | Hero mynd fyrir "Þjónusta við fjölskyldur" |
| `assets/images/hero-fraedsla.png` | 992 x 1006 | Hero mynd fyrir "Fræðsla" |
| `assets/images/news-isam.png` | 1983 x 793 | Fréttamynd fyrir ISAM/SÁÁ ráðstefnu |
| `assets/images/news-lydheilsuhvatning.png` | 1708 x 1278 | Fréttamynd um lýðheilsuhvatningu |
| `assets/images/banner-sumarhatid.jpg` | 662 x 425 | Banner fyrir sumarhátíð |
| `assets/images/banner-gongudeild-von.png` | 662 x 425 | Banner fyrir Göngudeild Von |
| `assets/images/banner-spilafikn.png` | 662 x 425 | Banner fyrir spilafíkn |
| `assets/images/banner-vinnustadavakt.png` | 662 x 425 | Banner fyrir vinnustaðavakt |
| `assets/images/event-sumarhatid.jpg` | 480 x 320 | Viðburðamynd |
| `assets/images/event-golfmot.png` | 480 x 601 | Viðburðamynd |
| `assets/images/jafnlaunavottun.png` | 500 x 500 | Vottunarmerki í footer |

## Tillögur fyrir betri útgáfu

1. Halda vörumerkinu einföldu: `#ff3b00`, svart, hvítt, ljósgrátt og Red Hat Display.
2. Breyta forsíðu í skýrari þjónustugátt með aðal CTA: "Fyrstu skrefin", "Panta viðtal", "Fyrir aðstandendur", "Styrkja".
3. Staðla myndahlutföll og kort svo forsíða hoppi minna og líti samræmdari út.
4. Nota appelsínurauðan lit fyrst og fremst fyrir aðgerðir, áherslur og leiðsögn.
5. Minnka flækjustig í valmynd og færa mikilvægustu leiðir nær notanda.
6. Gera mobile upplifun hraðari: fast símanúmer/CTA, einfaldari leit og styttri valmynd.
7. Endurvinna footer í þrjá skýra dálka: samband, flýtileiðir, styrkja/fylgja.
8. Setja upp hönnunartokens í nýja vefnum:

```css
:root {
  --color-brand: #ff3b00;
  --color-text: #000;
  --color-surface: #fff;
  --color-muted-surface: #f3f3f3;
  --color-border: #e0e0e0;
  --font-sans: "Red Hat Display", sans-serif;
  --radius-sm: 3px;
  --radius-md: 6px;
  --shadow-soft: 0 0 30px rgba(0, 0, 0, 0.05);
}
```

## Athugasemdir um réttindi

Myndir, lógó og icon hér eru sótt af núverandi vef SÁÁ til innanhúss hönnunarskjölunar og endurvinnslu í nýjum SÁÁ-vef. Ekki nota þau í öðrum verkefnum án samþykkis rétthafa.
