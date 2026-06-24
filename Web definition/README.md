# Web definition

Þessi mappa skilgreinir vefinn á mannamáli.

Markmiðið er að einhver sem er ekki djúpt inni í kóðanum geti:

- skilið hvað vefurinn á að gera
- séð hvernig hann er byggður upp
- séð hvernig hver lykilsíða er hugsuð
- skrifað skýrar breytingatillögur til AI eða þróunaraðila

## Byrja hér

Ef þú ert nýr í verkefninu skaltu lesa skjölin í þessari röð:

1. `vefurinn-i-heild.md`
2. `sidumodel.md`
3. skjalið fyrir viðkomandi síðu í `pages/`

## Hvað er í þessari möppu?

- `vefurinn-i-heild.md` lýsir markmiði, markhópum og meginstoðum vefsins
- `sidumodel.md` lýsir sameiginlegri uppbyggingu síðna
- `pages/` geymir eitt skjal fyrir hverja lykilsíðu og er númeruð þannig að röðin verði skýr, með forsíðu efst

## Fyrir breytingatillögur

Best er að skrifa tillögu með þessum hætti:

```text
Síða/slóð: /is/medferd-og-thjonusta
Hluti: hero eða efsti inngangur
Vandamál: textinn er of almennur og næsta skref er óskýrt
Ósk: gera skýrara fyrir hvern síðan er og bæta skýrara næsta skrefi
Tæki: desktop og mobile
Takmörkun: ekki breyta CTA-hnappi
```

### Staðlað copy-paste form

Notaðu helst þetta form þegar þú vilt senda inn breytingu:

```text
Síða/slóð:
Hluti:
Vandamál:
Ósk:
Áhrif á tungumál:
Tæki:
Takmarkanir:
Prófun:
```

### Dæmi um gott form

```text
Síða/slóð: /is/fyrir-fagfolk
Hluti: hero og efsti inngangur
Vandamál: það er ekki nógu skýrt fyrir hvaða fagstéttir þessi síða er og hvert næsta skref er
Ósk: gera skýrara hver síðan þjónar og bæta við skýrara næsta skrefi
Áhrif á tungumál: is, en, pl
Tæki: bæði desktop og mobile
Takmarkanir: ekki breyta CTA-hnappi eða footer
Prófun: skoða skönnun, læsileika og mobile
```

Ef beiðni er mjög stutt eða óskýr er líklegra að farið sé í rangan hluta síðunnar eða að breytingin verði of víð. Því skiptir máli að nota formið eins oft og hægt er.

## Mikilvæg regla

Þessi skjöl lýsa vefnum eins og hann á að virka og birtast. Þau koma ekki í staðinn fyrir tækniskjöl í `docs/technical/`, heldur eru þau brú milli efnis, hönnunar og framkvæmda.
