# Agent reglur fyrir SÁÁ vefinn

Þetta skjal skilgreinir hvernig agent á að vinna í þessu repo og hvernig fólk á að koma breytingatillögum skýrt til agentins.

Markmiðið er að breytingar styðji tilgang vefsins, passi við hugmyndafræði verkefnisins og fari í rétta átt frá byrjun.

## Tilgangur vefsins

SÁÁ-vefurinn á að vera hlýr, skýr og aðgerðarhæfur þjónustuvefur fyrir:

- fólk sem þarf hjálp
- aðstandendur
- fagfólk
- styrktaraðila og almenning

Vefurinn á að hjálpa manneskju að rata, skilja næsta skref og finna rétta leið. Hann á ekki fyrst og fremst að vera stofnanaleg upplýsingasíða eða tækniverkefni.

Fyrir heildarmynd á að lesa:

- `Web definition/README.md`
- `Web definition/vefurinn-i-heild.md`
- `Web definition/sidumodel.md`

## Grunnreglur fyrir agent

Agent á alltaf að:

- forgangsraða skýrri leiðsögn fyrir notendur
- halda breytingum litlum, öruggum og markvissum
- fylgja SÁÁ-brandinu og tóninum í repo-inu
- fara fyrst í rétt skjal eða réttan efnisflokk áður en breyting er gerð
- halda vefnum læsilegum og skýrum á desktop og mobile

Agent á ekki að:

- bæta við stofnanalegum eða köldum tóni
- láta forsíðu eða lykilsíður líta út eins og innanhússkynningu
- harðkóða sýnilegan texta í component ef hann á heima í content-gögnum
- breyta óskyldum hlutum í leiðinni

## Röð heimilda sem agent á að fylgja

Þegar verkefni er unnið á að lesa skjölin í þessari forgangsröð eftir því sem við á.

### 1. Tilgangur og uppbygging vefsins

Notaðu þetta fyrst til að skilja hvað síðan á að gera:

- `Web definition/README.md`
- `Web definition/vefurinn-i-heild.md`
- `Web definition/sidumodel.md`
- viðeigandi síða í `Web definition/pages/`

### 2. Brand og sjónræn stefna

Notaðu þetta þegar breyting snertir útlit, tón eða framsetningu:

- `docs/reference/brand-manual/brand-leidbeiningar.md`
- `docs/heimildir-og-akvardanir.md`

### 3. Tæknileg framkvæmd

Notaðu þetta þegar breyting snertir kóða, uppbyggingu eða keyrslu:

- `.github/copilot-instructions.md`
- `docs/technical/README.md`
- `docs/technical/vefur-uppbygging.md`
- `docs/technical/throunarumhverfi-fyrir-ai-vinnu.md`
- `docs/technical/foundry-agent-instructions.md`

Ef tvö skjöl virðast stangast á skal fara eftir því sem verndar betur tilgang vefsins, notandaflæði og brandreglur.

## Rétta leiðin fyrir breytingar

### Ef breyting snertir texta eða efni

Byrjaðu í:

- `web/data/site-content.js`

Þar á að vera nær allt sýnilegt efni á vefnum.

Allar efnisbreytingar sem snerta sameiginlegt efni eiga að vera uppfærðar á:

- íslensku
- ensku
- pólsku

Ef ekki er öruggt að uppfæra öll tungumál skal taka það skýrt fram.

### Ef breyting snertir uppbyggingu eða hluta síðunnar

Skoðaðu fyrst:

- `web/components/HomePage.js`
- `web/components/ContentPage.js`
- `web/components/SiteHeader.js`
- `web/components/SiteFooter.js`
- `web/components/ButtonLink.js`

### Ef breyting snertir útlit

Skoðaðu fyrst:

- `web/app/globals.css`

Notaðu núverandi mynstur áður en nýtt kerfi er búið til.

## Staðlað breytingarform

Fólk sem vill biðja agent um breytingu á að nota þetta form eins oft og hægt er, ef Agent er óviss um hvaða hlut sér verið að tala um. Agent má líka skrifa þetta út for útfyllt sem staðfesting á skilningi:

```text
Síða/slóð:
Hluti:
Breyting:
Annað:
```

### Útskýring á reitum

- `Síða/slóð`: nákvæm síða, t.d. `/is`, `/is/fraedsla` eða `/en/treatment-options`
- `Hluti`: hvaða hluti síðunnar er undir, t.d. hero, efnisblokk 2, footer eða mobile menu
- `Vandamál`: hvað er rangt eða óskýrt í dag
- `Ósk`: hvað á að gerast í staðinn
- `Áhrif á tungumál`: hvort breyting þarf að fara á `is`, `en` og `pl`
- `Tæki`: desktop, mobile eða bæði
- `Takmarkanir`: hvað má ekki breytast
- `Prófun`: hvað þarf að sannreyna eftir breytingu

## Agent á að beina fólki í þetta form

Ef beiðni er of loðin á agent að beina notanda í staðlaða breytingarformið í stað þess að giska of mikið.

Dæmi um loðna beiðni:

```text
Þetta er eitthvað skrítið.
```

Dæmi um betri beiðni:

```text
Síða/slóð: /is
Hluti: hero tengiliðakassi
Vandamál: það er ekki nógu skýrt hvað gerist ef ég smelli á Fyrstu skrefin
Ósk: gera textann skýrari og aðgreina betur frá Bráðri stöðu
Áhrif á tungumál: is, en, pl
Tæki: bæði desktop og mobile
Takmarkanir: ekki breyta röð kassanna
Prófun: skoða readability og mobile
```

## Hvernig agent á að leiðbeina fólki

Agent á að leiðbeina fólki svona:

- benda á rétta síðu í `Web definition/pages/` þegar verið er að ræða tiltekna síðu
- benda á `web/data/site-content.js` þegar breytingin er efnisleg
- benda á `web/app/globals.css` eða component-skrár þegar breytingin er sjónræn eða byggingarleg
- minna á að allar síður eigi að vera samræmdar á íslensku, ensku og pólsku
- minna á að heilbrigðistengt eða viðkvæmt efni getur þurft faglega yfirferð

## Sérstaklega mikilvægt að fylgja þessu

### Forsíða og fyrstu skref

Breytingar á forsíðu, fyrstu skrefum, header, mega menu og hjálparkössum þurfa alltaf að styrkja leiðsögn, ekki veikja hana.

### Bráð staða

Efni sem snertir bráða stöðu þarf að vera skýrt, varkárt og ábyrgðartengt. Agent má ekki setja fram hættulegar eða óstaðfestar leiðbeiningar.

### Meðferðarúrræði

Framsetning meðferðarúrræða á að hjálpa fólki að skilja leiðirnar, ekki ýta undir að það telji sig þurfa að greina sig sjálft.

## Gátlisti fyrir agent áður en verkefni telst tilbúið

- er breytingin í réttu skjali eða réttri kóðaskrá?
- styður breytingin tilgang vefsins?
- fylgir hún brandreglum og tón?
- er næsta skref skýrt fyrir notandann?
- þarf breytingin að ná til `is`, `en` og `pl`?
- þarf faglega yfirferð?
- þarf build eða önnur sannprófun?

## Hagnýt lokaregla

Ef vafi kemur upp á agent að velja lausn sem:

- er skýrari fyrir notandann
- er mannlegri í tón
- er minni og öruggari í framkvæmd
- passar betur við núverandi vef en að búa til nýtt mynstur að óþörfu
