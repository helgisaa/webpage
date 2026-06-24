# Skjöl og vinnugögn

Þessi mappa er fyrir skjöl. Hún er ekki hluti af sjálfum vefnum sem notendur sjá, heldur hjálpar hún teymi að rata í efni, ákvarðanir og vinnulag.

## Byrja hér

Ef markmiðið er að skilja hvað er hvað í repo-inu:

- `../web/data/site-content.js` er contentið sem vefurinn birtir
- `../web/app/`, `../web/components/` og `../web/public/assets/` eru sjálfur vefurinn
- `docs/` er skýringalagið utan um verkefnið

## Skjölin í þessari möppu

### Fyrir efni og ritstjórn

- `efnisvinna-med-ai.md` útskýrir hvernig má vinna texta með AI án þess að missa faglega ábyrgð.
- `heimildir-og-akvardanir.md` skráir hvaðan efni og viðmið komu og hvaða ákvarðanir voru teknar.
- `../Web definition/README.md` skilgreinir vefinn á mannamáli og lýsir uppbyggingu lykilsíðna.
- `../AGENTS.md` skilgreinir reglur fyrir agent, forgangsröð heimilda og staðlað breytingarform fyrir beiðnir.

### Fyrir tæknilega hlið vefsins

- `technical/README.md` er lendingarsíða fyrir öll tæknileg skjöl.
- `technical/vefur-uppbygging.md` sýnir hvernig vefurinn er settur saman og hvar á að breyta hverju.
- `technical/throunarumhverfi-fyrir-ai-vinnu.md` lýsir einföldu vinnulagi með localhost, preview og AI.
- `technical/foundry-agent-instructions.md` geymir leiðbeiningar fyrir sérhæfðan agent sem vinnur með repo-ið.
- `technical/vercel-deploy.md` útskýrir deploy og preview umhverfi.

### Fyrir hönnunargrunn og samanburð

- `reference/README.md` er lendingarsíða fyrir bakgrunn, brand og heimildir.
- `reference/brand-manual/brand-leidbeiningar.md` geymir brandreglur, litir, letur og myndmál.
- `reference/saa-design-audit/README.md` geymir audit á núverandi ásýnd, assets og viðmið.
- `reference/saa_greining_nyr_vefur.md` geymir upprunalega greiningu og bakgrunn.

## Hagnýt regla

Ef þú vilt breyta því sem notendur lesa eða sjá á vefnum, farðu fyrst út úr `docs/` og byrjaðu í `web/data/site-content.js`, `web/components/` eða `web/app/` eftir eðli breytingarinnar.

Ef þú vilt skilja af hverju eitthvað er svona eða hvernig á að vinna með repo-ið, byrjaðu í `docs/`.