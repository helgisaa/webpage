export const defaultLanguage = "is";

export const languages = [
  { code: "is", name: "Íslenska", shortName: "IS" },
  { code: "en", name: "English", shortName: "EN" },
  { code: "pl", name: "Polski", shortName: "PL" }
];

export const supportedLanguages = languages.map((language) => language.code);

export const contact = {
  phone: "530 7600",
  email: "saa@saa.is",
  address: "Efstaleiti 7, 103 Reykjavík",
  addressLine1: "Efstaleiti 7",
  addressLine2: "103 Reykjavík",
  mapUrl: "https://ja.is/kort/?d=hashid%3ANyVkl&x=359247&y=405835&type=map&nz=16.03",
  kt: "521095-2459",
  bank: "0116-26-452"
};

export const socialMedia = [
  { label: "Facebook", shortLabel: "f", href: "https://www.facebook.com/SAA.samtokin" },
  { label: "Instagram", shortLabel: "◎", href: "https://www.instagram.com/saa.samtok/" },
  { label: "LinkedIn", shortLabel: "in", href: "https://www.linkedin.com/company/s%C3%A1%C3%A1/" }
];

export function isSupportedLanguage(language) {
  return supportedLanguages.includes(language);
}

export function localizedHref(language, href) {
  if (!href || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return href;
  }

  if (href === "/") {
    return `/${language}`;
  }

  return `/${language}${href.startsWith("/") ? href : `/${href}`}`;
}

export function getSiteContent(language = defaultLanguage) {
  return siteContent[language] ?? siteContent[defaultLanguage];
}

export function getPageBySlug(language, slug) {
  const content = getSiteContent(language);
  return Object.values(content.pages).find((page) => page.slug === slug);
}

export function getPageEntryBySlug(language, slug) {
  const content = getSiteContent(language);
  const entry = Object.entries(content.pages).find(([, page]) => page.slug === slug);

  if (!entry) {
    return null;
  }

  const [key, page] = entry;
  return { key, page };
}

export function getLanguageAlternates(pageKey) {
  return Object.fromEntries(
    supportedLanguages.map((language) => {
      const page = pageKey ? getSiteContent(language).pages[pageKey] : null;
      const href = page ? `/${language}/${page.slug}` : `/${language}`;
      return [language, href];
    })
  );
}

export function getAllPageParams() {
  return supportedLanguages.flatMap((language) =>
    Object.values(getSiteContent(language).pages).map((page) => ({
      lang: language,
      slug: page.slug
    }))
  );
}

export const siteContent = {
  is: {
    meta: {
      title: "SÁÁ | Allt annað líf",
      description:
        "Nýr Next.js grunnur fyrir SÁÁ-vef sem leggur áherslu á fyrstu skref, meðferð, aðstandendur og skýra leiðsögn."
    },
    brandLine: "Allt annað líf",
    announcement: {
      label: "Ráðstefna 2027",
      title: "ISAM-SÁÁ 2027: From Science to Recovery",
      meta: "9.-11. júní 2027 · Hilton Reykjavík Nordica",
      linkLabel: "Skoða viðburð",
      href: "https://events.bizzabo.com/SAAISAM27/home",
      image: "/assets/images/isam-saa-2027-logo.png"
    },
    labels: {
      phonePrefix: "s.",
      primaryCta: "Fyrstu skrefin",
      startHere: "Byrja hér",
      mobileMenu: "Opna valmynd",
      mainNav: "Aðalvalmynd",
      emergency: "Hjálp strax",
      sectionTag: "SÁÁ",
      readPath: "Skoða leið",
      languages: "Tungumál"
    },
    navigation: [
      { label: "Hjálp og þjónusta", href: "/eg-tharf-hjalp" },
      { label: "Fræðsla og ráðgjöf", href: "/fraedsla" },
      { label: "Styrkja og taka þátt", href: "/styrkja-saa" },
      { label: "Um SÁÁ", href: "/um-saa" }
    ],
    megaMenu: [
      {
        label: "Hjálp og þjónusta",
        href: "/eg-tharf-hjalp",
        description: "Fyrstu skref, meðferð og stuðningur fyrir fólk sem þarf hjálp núna eða vill skilja næsta skref.",
        columns: [
          {
            title: "Fyrstu skref",
            links: [
              { label: "Fyrstu skrefin", href: "/eg-tharf-hjalp" },
              { label: "Ef staðan er bráð", href: "/hjalp-strax" },
              { label: "Meðferðarúrræðin", href: "/medferdarurraedi" },
              { label: "Aðstandendur", href: "/adstandendur" }
            ]
          },
          {
            title: "Meðferð",
            links: [
              { label: "Meðferð og þjónusta", href: "/medferd-og-thjonusta" },
              { label: "Meðferðarúrræðin", href: "/medferdarurraedi" },
              { label: "Vogur", href: "/medferd-og-thjonusta#vogur" },
              { label: "Vík", href: "/medferd-og-thjonusta#vik" },
              { label: "Göngudeild og dagdeild", href: "/medferd-og-thjonusta#gongudeild" }
            ]
          },
          {
            title: "Sérhæfð þjónusta",
            links: [
              { label: "Spilafíkn", href: "/medferd-og-thjonusta#spilafikn" },
              { label: "Börn og ungmenni", href: "/adstandendur" },
              { label: "Fjölskylduþjónusta", href: "/adstandendur" }
            ]
          }
        ]
      },
      {
        label: "Fræðsla og ráðgjöf",
        href: "/fraedsla",
        description: "Skýr fræðsla, leiðbeiningar og efni fyrir fagfólk, vinnustaði og fólk sem vill skilja fíknivanda betur.",
        columns: [
          {
            title: "Fræðsla",
            links: [
              { label: "Fræðsla", href: "/fraedsla" },
              { label: "Sjálfsmat og skimun", href: "/fraedsla" },
              { label: "Algengar spurningar", href: "/fraedsla" }
            ]
          },
          {
            title: "Fagfólk",
            links: [
              { label: "Fyrir fagfólk", href: "/fyrir-fagfolk" },
              { label: "Tilvísanir og beiðnir", href: "/fyrir-fagfolk" },
              { label: "Vinnustaðavakt", href: "/fyrir-fagfolk#vinnustadir" }
            ]
          }
        ]
      },
      {
        label: "Styrkja og taka þátt",
        href: "/styrkja-saa",
        description: "Leiðir fyrir einstaklinga, félaga og fyrirtæki til að styðja starf SÁÁ.",
        columns: [
          {
            title: "Styrkja",
            links: [
              { label: "Styrkja SÁÁ", href: "/styrkja-saa" },
              { label: "Gerast félagi", href: "/styrkja-saa" },
              { label: "Minningarkort og gjafir", href: "/styrkja-saa" }
            ]
          },
          {
            title: "Viðburðir og þátttaka",
            links: [
              { label: "Fréttir og viðburðir", href: "/styrkja-saa" },
              { label: "Fyrirtækjastuðningur", href: "/styrkja-saa" }
            ]
          }
        ]
      },
      {
        label: "Um SÁÁ",
        href: "/um-saa",
        description: "Hlutverk, saga, traust, gagnsæi og upplýsingar um samtökin.",
        columns: [
          {
            title: "Samtökin",
            links: [
              { label: "Um SÁÁ", href: "/um-saa" },
               { label: "Saga SÁÁ", href: "/saga-saa" },
              { label: "Hlutverk og gildi", href: "/um-saa" },
              { label: "Gagnsæi", href: "/um-saa" }
            ]
          },
          {
            title: "Hafa samband",
            links: [
              { label: "Sími 530 7600", href: "tel:+3545307600" },
              { label: "saa@saa.is", href: "mailto:saa@saa.is" }
            ]
          }
        ]
      }
    ],
    home: {
      eyebrow: "Allt annað líf",
      title: "hjálpar þér að taka fyrsta skrefið",
      intro:
        "Meðferð, ráðgjöf og stuðningur fyrir einstaklinga, fjölskyldur og samfélagið.",
      primaryCta: "Fyrstu skrefin",
      primaryHref: "/eg-tharf-hjalp",
      secondaryCta: "Ég er aðstandandi",
      secondaryHref: "/adstandendur",
      phoneCta: "Hringja í 530 7600",
      contactCard: {
        eyebrow: "Þarftu aðstoð?",
        title: "Áfengisvandi\u00a0\u00a0\u00a0vímuefnavandi\u00a0\u00a0\u00a0spilavandi",
        intro: "Ráðgjöf og næstu skref fyrir þig og þína.",
        linkLabel: "Sjá leiðir til að hafa samband",
        href: "/eg-tharf-hjalp",
        actions: [
          {
            title: "Hringja",
            text: "530 7600",
            href: "tel:+3545307600",
            icon: "phone"
          },
          {
            title: "Fyrstu skrefin",
            text: "Róleg leiðsögn",
            href: "/eg-tharf-hjalp",
            icon: "steps"
          },
          {
            title: "Bráð staða",
            text: "Hvað á að gera núna",
            href: "/hjalp-strax",
            icon: "urgent"
          }
        ]
      },
      heroCardsLabel: "Helstu leiðir",
      quickActionsLabel: "Hröð hjálp",
      servicePuzzle: {
        title: "Áfengisvandi\u00a0\u00a0\u00a0vímuefnavandi\u00a0\u00a0\u00a0spilavandi",
        items: [
          {
            title: "Ráðgjöf",
            href: "/eg-tharf-hjalp",
            icon: "message",
            color: "brand",
            details: ["Barna ráðgjöf", "Aðstandenda ráðgjöf"]
          },
          {
            title: "Afeitrun og fyrstu skrefin",
            href: "/medferd-og-thjonusta#vogur",
            icon: "shield",
            color: "yellow"
          },
          {
            title: "Inniliggjandi meðferð",
            href: "/medferd-og-thjonusta#vik",
            icon: "home",
            color: "pink"
          },
          {
            title: "Dagdeildarmeðferð",
            href: "/medferd-og-thjonusta#gongudeild",
            icon: "sun",
            color: "yellow"
          },
          {
            title: "Áfangaheimili",
            href: "/medferdarurraedi",
            icon: "key",
            color: "green"
          }
        ]
      },
      principles: {
        eyebrow: "Leiðarljós",
        title: "Vefurinn byrjar á stöðu manneskjunnar, ekki skipuriti stofnunarinnar.",
        items: [
          {
            title: "Öruggt",
            text: "Skýrt um bráðatilvik, trúnað og hvenær þarf að leita beint í neyðarþjónustu."
          },
          {
            title: "Mannlegt",
            text: "Texti sem mætir fólki án skammar og leiðir áfram með rólegu, beinu máli."
          },
          {
            title: "Aðgerðarhæft",
            text: "Hver lykilsíða svarar: hvað get ég gert núna og hvert fer ég næst?"
          }
        ]
      },
      services: {
        eyebrow: "Meðferð og þjónusta",
        title: "Helstu þjónustuleiðir á einum stað."
      },
      campaigns: {
        eyebrow: "Í brennidepli",
        title: "Verkefni sem eiga að vera auðfundin."
      },
      news: {
        eyebrow: "Fréttir og viðburðir",
        title: "Fréttir neðar á forsíðu, ekki fyrir framan hjálparleiðirnar."
      }
    },
    heroCards: [
      {
        title: "Fyrstu skrefin",
        eyebrow: "Fyrstu skrefin",
        text: "Skýr leið fyrir þig sem ert óviss, vilt ræða stöðuna eða þarft að vita hvað gerist næst.",
        href: "/eg-tharf-hjalp",
        image: "/assets/images/hero-fyrstu-skrefin.png"
      },
      {
        title: "Ég er aðstandandi",
        eyebrow: "Stuðningur fyrir fjölskyldur",
        text: "Ráðgjöf, fræðsla og þjónusta fyrir maka, foreldra, börn, vini og aðra nána aðila.",
        href: "/adstandendur",
        image: "/assets/images/hero-thjonusta-fjolskyldur.png"
      },
      {
        title: "Ég vil skilja betur",
        eyebrow: "Fræðsla",
        text: "Fordómalaust efni um fíknivanda, bata, samskipti, sjálfsmat og úrræði.",
        href: "/fraedsla",
        image: "/assets/images/hero-fraedsla.png"
      }
    ],
    quickActions: [
      {
        title: "Tala við einhvern",
        text: "Ráðgjöf og upplýsingar í síma.",
        href: "tel:+3545307600",
        action: contact.phone,
        icon: "phone"
      },
      {
        title: "Fyrstu skrefin",
        text: "Stutt leið ef þú veist ekki hvar á að byrja.",
        href: "/eg-tharf-hjalp",
        action: "Byrja hér",
        icon: "steps"
      },
      {
        title: "Ef staðan er bráð",
        text: "Ef líf eða heilsa er í hættu.",
        href: "/hjalp-strax",
        action: "Hjálp strax",
        icon: "urgent"
      }
    ],
    serviceHighlights: [
      {
        title: "Vogur",
        label: "Afeitrun og greining",
        text: "Á Sjúkrahúsinu Vogi fær fólk mat á stöðu, fráhvarfsmeðferð og næstu meðferðarskref.",
        href: "/medferd-og-thjonusta#vogur"
      },
      {
        title: "Vík",
        label: "Inniliggjandi eftirmeðferð",
        text: "Vík tekur við eftir afeitrun þegar jafnvægi er náð og býður skipulagða meðferð og stuðning.",
        href: "/medferd-og-thjonusta#vik"
      },
      {
        title: "Göngudeild og dagdeild",
        label: "Meðferð án innlagnar",
        text: "Viðtöl, dagmeðferð og eftirfylgni sem hægt er að samræma daglegu lífi.",
        href: "/medferd-og-thjonusta#gongudeild"
      },
      {
        title: "Spilafíkn",
        label: "Ráðgjöf og hópar",
        text: "Sérstök leið fyrir fólk sem glímir við fjárhættuspilavanda og aðstandendur þeirra.",
        href: "/medferd-og-thjonusta#spilafikn"
      }
    ],
    audiencePaths: [
      {
        title: "Fyrir fólk í óvissu",
        text: "Ef þú ert ekki viss hvort vandinn sé orðinn alvarlegur er samt rétt að tala við einhvern.",
        href: "/eg-tharf-hjalp"
      },
      {
        title: "Fyrir aðstandendur",
        text: "Þú mátt leita stuðnings óháð því hvort einstaklingurinn hafi farið í meðferð.",
        href: "/adstandendur"
      },
      {
        title: "Fyrir fagfólk",
        text: "Hagnýtar upplýsingar um beiðnir, tilvísanir, þjónustuleiðir og tengiliði.",
        href: "/fyrir-fagfolk"
      }
    ],
    campaigns: [
      {
        title: "Göngudeild Von",
        text: "Dagdeild SÁÁ býður upp á meðferð án innlagnar sem hægt er að samræma daglegu lífi.",
        href: "/medferd-og-thjonusta#gongudeild",
        image: "/assets/images/banner-gongudeild-von.png"
      },
      {
        title: "Vinnustaðavakt SÁÁ",
        text: "Ráðgjöf og fræðsla fyrir stjórnendur og vinnustaði sem vilja bregðast fyrr og betur við.",
        href: "/fyrir-fagfolk#vinnustadir",
        image: "/assets/images/banner-vinnustadavakt.png"
      },
      {
        title: "Meðferð við spilafíkn",
        text: "Meðferð, ráðgjafaviðtöl og stuðningshópar fyrir fólk með fjárhættuspilavanda.",
        href: "/medferd-og-thjonusta#spilafikn",
        image: "/assets/images/banner-spilafikn.png"
      }
    ],
    news: [
      {
        date: "16. júní",
        title: "Afmælisráðstefna SÁÁ 2027, í samvinnu við ISAM",
        text: "Alþjóðleg ráðstefna í tilefni 50 ára afmælis SÁÁ fer fram 9.-11. júní 2027.",
        href: "https://www.saa.is/is/frettir-greinar/afmaelisradstefna-saa-2027-i-samvinnu-vid-isam",
        image: "/assets/images/news-isam.png"
      },
      {
        date: "12. júní",
        title: "Lýðheilsuhvatning til stjórnvalda",
        text: "SÁÁ er meðal aðila sem standa að sameiginlegri hvatningu um lýðheilsustefnu.",
        href: "https://www.saa.is/is/frettir-greinar/saa-medal-theirra-adila-sem-afhentu-heilbrigdisradherra-lydheilsuhvatningu",
        image: "/assets/images/news-lydheilsuhvatning.png"
      }
    ],
    footer: {
      intro:
        "Skýrari leið inn í þjónustu, fræðslu og stuðning fyrir fólk með fíknivanda, aðstandendur og fagfólk.",
      contactTitle: "Samband",
      shortcutsTitle: "Flýtileiðir",
      followTitle: "Fylgdu okkur",
      equalPay: "Jafnlaunavottun 2023 - 2026",
      mapLabel: "sjá kort",
      quickLinks: [
        { label: "Fyrstu skrefin", href: "/eg-tharf-hjalp" },
        { label: "Meðferðarúrræðin", href: "/medferdarurraedi" },
        { label: "Um SÁÁ", href: "/um-saa" },
        { label: "Hafa samband", href: "mailto:saa@saa.is" }
      ],
      supportTitle: "Styrkja",
      supportLink: "Skoða styrktarleiðir",
      supportHref: "/styrkja-saa",
      phoneLabel: "Sími"
    },
    pages: {
      help: {
        slug: "eg-tharf-hjalp",
        title: "Fyrstu skrefin",
        eyebrow: "Fyrstu skrefin",
        intro:
          "Þessi síða er fyrir þig sem ert að velta fyrir þér eigin neyslu, lyfjanotkun, spilavanda eða annarri fíkn. Þú þarft ekki að vera með öll svörin áður en þú hefur samband.",
        ctaLabel: "Hringja í 530 7600",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "Hvað get ég gert núna?",
            body:
              "Þú getur hringt í SÁÁ, óskað eftir viðtali eða lesið þig áfram um hvaða þjónusta gæti átt við. Markmiðið er að finna næsta skref, ekki að setja fullkomna greiningu á vandann."
          },
          {
            title: "Ef staðan er hættuleg",
            body:
              "Ef líf, öryggi eða heilsa er í bráðri hættu á að hringja í 112 eða leita á bráðamóttöku. Vefurinn á að hjálpa við leiðsögn, en kemur ekki í stað neyðarþjónustu."
          },
          {
            title: "Sjálfsmat",
            body:
              "Sjálfspróf geta gefið vísbendingar um stöðu, en þau eru ekki sjúkdómsgreining. Niðurstöður ætti að ræða við fagfólk þegar ástæða er til."
          }
        ]
      },
      families: {
        slug: "adstandendur",
        title: "Aðstandendur",
        eyebrow: "Þjónusta við fjölskyldur",
        intro:
          "Aðstandendur þurfa líka stuðning. Þjónusta SÁÁ við fjölskyldur er fyrir fólk sem á náinn aðila með fíknivanda, hvort sem viðkomandi hefur farið í meðferð eða ekki.",
        ctaLabel: "Panta viðtal",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "Viðtalsþjónusta",
            body:
              "Aðstandendur geta nýtt sér viðtöl til að fá upplýsingar, ráðgjöf og greiningu á eigin stöðu. Viðtöl eru almennt um 45 mínútur og hægt er að panta tíma í síma."
          },
          {
            title: "Aðstandendanámskeið",
            body:
              "Námskeið auka þekkingu á einkennum fíknsjúkdóms, áhrifum hans á fjölskyldur, bata, sjálfsrækt, áhugahvöt til breytinga og mörk."
          },
          {
            title: "Börn og ungmenni",
            body:
              "Börn sem eiga foreldra eða nána aðstandendur með fíknivanda þurfa skýra, örugga og aldursviðeigandi leið inn í þjónustu."
          }
        ]
      },
      treatment: {
        slug: "medferd-og-thjonusta",
        title: "Meðferð og þjónusta",
        eyebrow: "Meðferð til betra lífs",
        intro:
          "SÁÁ veitir meðferð, ráðgjöf og eftirfylgni fyrir fólk með fíknivanda og fjölskyldur þeirra. Hér er þjónustan flokkuð eftir raunverulegum þörfum notenda.",
        ctaLabel: "Skoða fyrstu skrefin",
        ctaHref: "/eg-tharf-hjalp",
        sections: [
          {
            title: "Vogur",
            id: "vogur",
            body:
              "Á Sjúkrahúsinu Vogi fer fram afeitrun, greining og læknisfræðilegt mat á meðferðarþörf. Margir koma í fráhvörfum eða undir áhrifum vímuefna."
          },
          {
            title: "Vík",
            id: "vik",
            body:
              "Meðferðarstöðin Vík tekur við eftir afeitrun á Vogi þegar lágmarksjafnvægi er náð. Þar er boðið upp á skipulagða inniliggjandi eftirmeðferð."
          },
          {
            title: "Göngudeild og dagdeild",
            id: "gongudeild",
            body:
              "Göngudeild býður viðtalsþjónustu, dagmeðferð og eftirfylgni. Dagmeðferð getur hentað fólki sem býr við nægilega stöðugar aðstæður og getur sótt meðferð án innlagnar."
          },
          {
            title: "Spilafíkn",
            id: "spilafikn",
            body:
              "SÁÁ býður ráðgjöf, meðferð og stuðningshópa fyrir fólk sem glímir við vanda vegna fjárhættuspils. Aðstandendur geta einnig sótt ráðgjöf."
          }
        ]
      },
      resources: {
        slug: "medferdarurraedi",
        title: "Meðferðarúrræðin",
        eyebrow: "Hvernig úrræðin vinna saman",
        intro:
          "SÁÁ býður upp á nokkur úrræði sem geta raðast saman eftir stöðu hvers og eins. Sumir byrja á Vogi, fara síðan í Vík og halda áfram í Von. Aðrir byrja í göngudeild, nýta LOF eða þurfa búsetustuðning í Vin.",
        ctaLabel: "Hringja í 530 7600",
        ctaHref: "tel:+3545307600",
        treatmentResources: {
          eyebrow: "Einfalt yfirlit",
          heading: "Fimm úrræði sem mynda eina meðferðarleið.",
          text:
            "Þú þarft ekki að vita fyrirfram hvaða úrræði á við. Fyrsta samtal og faglegt mat hjálpar til við að velja næsta skref.",
          note:
            "Úrræðin geta tengst saman á ólíkan hátt. Röðin fer eftir heilsu, neyslusögu, aðstæðum heima, stuðningi og markmiðum hvers einstaklings.",
          items: [
            {
              id: "vogur",
              icon: "hospital",
              image: "/assets/images/hero-fyrstu-skrefin.png",
              label: "Afeitrun og fyrstu skref",
              title: "Vogur",
              duration: "Oftast um 7-10 dagar, eftir mati og aðstæðum.",
              text:
                "Vogur er sjúkrahús þar sem fólk fær afeitrun, greiningu, læknisfræðilegt mat og fyrstu meðferðarskref.",
              points: [
                "Fyrir fólk í fráhvörfum eða undir áhrifum.",
                "Læknir og teymi meta líkamlega og andlega stöðu.",
                "Næsta skref getur verið Vík, Von, LOF eða önnur eftirfylgd."
              ]
            },
            {
              id: "vik",
              icon: "calendar",
              image: "/assets/images/hero-fraedsla.png",
              label: "Inniliggjandi meðferð",
              title: "Vík",
              duration: "Að jafnaði 4 vikur / 28 dagar.",
              text:
                "Vík tekur oft við eftir Vog þegar lágmarksjafnvægi er náð. Þar er skipulögð meðferð með fræðslu, hópum, verkefnavinnu og einstaklingsviðtölum.",
              points: [
                "Dagskipulag, hreyfing, svefn, matur og stuðningur.",
                "Áfallamiðuð og félagsleg nálgun.",
                "Undirbúningur fyrir daglegt líf eftir inniliggjandi meðferð."
              ]
            },
            {
              id: "von",
              icon: "users",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Göngudeild og dagmeðferð",
              title: "Von",
              duration: "Mismunandi lengd, oft dagmeðferð og eftirfylgd.",
              text:
                "Von er göngudeild SÁÁ í Efstaleiti. Þar er viðtalsþjónusta, greining, dagmeðferð, fjölskylduþjónusta og eftirfylgd.",
              points: [
                "Hentar sumum án innlagnar.",
                "Getur komið á undan eða eftir Vogi og Vík.",
                "Styður fólk áfram í daglegu lífi."
              ]
            },
            {
              id: "vin",
              icon: "home",
              image: "/assets/images/hero-thjonusta-fjolskyldur.png",
              label: "Áfangaheimili",
              title: "Vin",
              duration: "Langtímastuðningur eftir þörfum.",
              text:
                "Vin er búsetuúrræði og áfangaheimili þar sem áhersla er á stöðugleika, félagslega endurhæfingu og stuðning í bata.",
              points: [
                "Fyrir fólk sem þarf öruggari umgjörð eftir meðferð.",
                "Styður daglegt líf, tengsl og ábyrgð.",
                "Getur tengst áframhaldandi göngudeild og stuðningi."
              ]
            },
            {
              id: "lof",
              icon: "pill",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Ópíóíðafíkn",
              title: "LOF",
              duration: "Langtíma göngudeildarmeðferð með reglulegri eftirfylgd.",
              text:
                "LOF er lyfjameðferð og göngudeildarþjónusta við ópíóíðafíkn. Meðferðin byggir á heildarmati, einstaklingsmiðaðri áætlun og eftirfylgd heilbrigðisstarfsfólks.",
              points: [
                "Getur hafist á Vogi eða í göngudeild.",
                "Lyf og eftirfylgd eru stillt eftir þörfum hvers einstaklings.",
                "Samstarf getur verið við apótek, heilsugæslu og aðra þjónustu."
              ]
            }
          ],
          pathwayEyebrow: "Hvernig púslið raðast",
          pathwayTitle: "Það er ekki ein rétt leið fyrir alla.",
          pathway: [
            {
              icon: "heart",
              title: "Fyrsta samband",
              text:
                "Þú hringir, pantar viðtal eða færð ráðgjöf. Markmiðið er að skilja stöðuna og finna næsta skref."
            },
            {
              icon: "hospital",
              title: "Mat og afeitrun ef þarf",
              text:
                "Sumir þurfa Vog fyrst. Aðrir geta byrjað í Von eða fengið sértækt mat fyrir LOF."
            },
            {
              icon: "calendar",
              title: "Meðferð og æfing",
              text:
                "Vík, Von, LOF og önnur úrræði styðja fólk við að byggja upp nýja færni og stöðugleika."
            },
            {
              icon: "home",
              title: "Stuðningur áfram",
              text:
                "Vin, göngudeild, hópar og fjölskylduþjónusta geta stutt langtímabata eftir þörfum."
            }
          ],
          ctaTitle: "Veistu ekki hvað á við?",
          ctaText:
            "Það er eðlilegt. Þú þarft ekki að velja rétta úrræðið einn. Hafðu samband og fáðu leiðsögn."
        },
        sections: [
          {
            title: "Mikilvægt",
            body:
              "Upplýsingarnar hér eru einfalt yfirlit. Endanleg meðferðaráætlun er alltaf metin út frá stöðu, heilsu og aðstæðum hvers einstaklings."
          }
        ]
      },
      education: {
        slug: "fraedsla",
        title: "Fræðsla",
        eyebrow: "Skýr þekking án fordóma",
        intro:
          "Fræðsla á að hjálpa fólki að skilja fíknivanda, bata og stuðning án skammar eða flækju. Efni ætti alltaf að enda á skýru næsta skrefi.",
        ctaLabel: "Skoða sjálfsmat",
        ctaHref: "/eg-tharf-hjalp",
        sections: [
          {
            title: "Fíkn sem heilsufarsvandi",
            body:
              "Textar ættu að útskýra einkenni, áhættu og meðferðarmöguleika á manneskjulegan hátt og forðast ásakanir eða hræðsluorðræðu."
          },
          {
            title: "Sjálfspróf og skimun",
            body:
              "Sjálfspróf veita vísbendingar en jafngilda ekki sjúkdómsgreiningu. Þessi fyrirvari þarf að fylgja öllu efni sem snertir mat á eigin stöðu."
          },
          {
            title: "Efni fyrir ólíka hópa",
            body:
              "Aðstandendur, ungmenni, fagfólk, vinnustaðir og styrktaraðilar þurfa ólíkan inngang, orðalag og næstu skref."
          }
        ]
      },
      professionals: {
        slug: "fyrir-fagfolk",
        title: "Fyrir fagfólk",
        eyebrow: "Tilvísanir, samstarf og vinnustaðir",
        intro:
          "Fagfólk þarf skýra leið að upplýsingum um þjónustu, beiðnir, viðmið, samstarf og tengiliði. Efnið hér er hannað til að verða hagnýtt vinnusvæði.",
        ctaLabel: "Hafa samband",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "Tilvísanir og beiðnir",
            body:
              "Síða fyrir fagfólk ætti að skýra hvaða upplýsingar þarf að senda, hvað gerist eftir beiðni og hvar má fá nánari ráðgjöf."
          },
          {
            title: "Vinnustaðavakt",
            id: "vinnustadir",
            body:
              "SÁÁ vinnur með fyrirtækjum og stofnunum að því að efla þekkingu og bæta viðbrögð við fíknivanda á vinnustöðum."
          },
          {
            title: "Fræðsla og samstarf",
            body:
              "Þessi hluti getur geymt fyrirlestra, fræðslupakka, tengiliði og efni sem nýtist heilbrigðis-, félags- og menntakerfi."
          }
        ]
      },
      support: {
        slug: "styrkja-saa",
        title: "Styrkja SÁÁ",
        eyebrow: "Stuðningur sem skiptir máli",
        intro:
          "Stuðningur velunnara hjálpar SÁÁ að halda úti meðferð, ráðgjöf, fræðslu og samfélagslegu starfi. Vefurinn þarf að gera stuðning einfaldan og gagnsæjan.",
        ctaLabel: "Styrkja starfið",
        ctaHref: "https://saa.getjourney.io/",
        sections: [
          {
            title: "Gerast félagi",
            body: "Félagar skapa grundvöll þess sjálfstæðis sem styrkur samtakanna byggir á."
          },
          {
            title: "Minningarkort og gjafir",
            body:
              "Skýr gjafaleið þarf að útskýra tilgang, greiðsluferli og hvernig framlagið styður starfið."
          },
          {
            title: "Fyrirtæki og viðburðir",
            body:
              "Fyrirtæki geta stutt verkefni, tekið þátt í söfnunum eða tengst fræðslu og samfélagsverkefnum."
          }
        ]
      },
      about: {
        slug: "um-saa",
        title: "Um SÁÁ",
        eyebrow: "Hlutverk, fagmennska og traust",
        intro:
          "SÁÁ er samfélagslegt og faglegt afl í meðferð, ráðgjöf og fræðslu um áfengis-, vímuefna- og fíknivanda.",
        ctaLabel: "Hafa samband",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "Allt annað líf",
            body:
              "Merki og rödd vefsins eiga að halda í þennan kjarna: von, fagmennsku, mannlega nálgun og skýra leið til hjálpar."
          },
          {
            title: "Gagnsæi",
            body:
              "Ársskýrslur, stefnur, stjórn, samþykktir, persónuvernd og upplýsingar fyrir fjölmiðla eiga að vera aðgengileg og auðfundin."
          },
          {
            title: "Skýr uppbygging",
            body:
              "Nýi vefurinn er byggður þannig að einfalt sé að breyta textum og slóðum í einni skýrri content-skrá án þess að þurfa að fara djúpt í React."
          }
        ]
      },
      history: {
        slug: "saga-saa",
        title: "Saga SÁÁ",
        eyebrow: "Frá grasrótarframtaki að landsþjónustu",
          layout: "timeline",
        intro:
          "Saga SÁÁ er saga samtaka sem urðu til árið 1977 til að bæta aðgengi að meðferð, fræðslu og skilningi á fíknivanda á Íslandi. Hér er einföld tímalína sem dregur saman helstu áfanga út frá aðgengilegum heimildum.",
        ctaLabel: "Sjá Um SÁÁ",
        ctaHref: "/um-saa",
        sections: [
          {
            title: "1. október 1977 · SÁÁ stofnað",
            body:
              "Samtök áhugafólks um áfengis- og vímuefnavandann voru stofnuð í Háskólabíói. Markmiðið var að byggja upp meðferð, fræðslu og öflugri baráttu gegn vanþekkingu og fordómum í kringum fíknivanda á Íslandi."
          },
          {
            title: "Nóvember 1977 · Fræðslu- og leiðbeiningarstöð opnuð",
            body:
              "Skömmu eftir stofnun var opnuð fræðslu- og leiðbeiningarstöð í Lágmúla í Reykjavík. Sú starfsemi þróaðist síðar í göngudeild SÁÁ og varð mikilvægur inngangur að ráðgjöf og stuðningi."
          },
          {
            title: "1977–1978 · Fyrsta afeitrunarstarfsemi hefst",
            body:
              "Afeitrunarstarf hófst mjög fljótt eftir stofnun. Fyrst í Reykjadal, síðan í Langholtsskóla yfir sumartíma og loks að Silungapolli áður en Vogur opnaði."
          },
          {
            title: "14. ágúst 1978 · Eftirmeðferðarheimilið að Sogni opnað",
            body:
              "Með opnun Sogns bætti SÁÁ við skipulagðri eftirmeðferð og styrkti þannig heildstæða meðferðarleið eftir fyrstu skref."
          },
          {
            title: "Nóvember 1980 · Eftirmeðferðarstöð að Staðarfelli opnuð",
            body:
              "Staðarfell varð hluti af uppbyggingu inniliggjandi eftirmeðferðar SÁÁ á tímabili þegar þjónustan var enn að taka á sig form."
          },
          {
            title: "Desember 1983 · Sjúkrahúsið Vogur opnar",
            body:
              "Með opnun Vogs fékk afeitrun, greining og læknisfræðilegt mat varanlegri og sérhæfðari umgjörð. Vogur varð einn af lykilstoðum starfsemi SÁÁ."
          },
          {
            title: "1991 · Meðferð flyst frá Sogni að Vík",
            body:
              "Inniliggjandi eftirmeðferð sem áður var á Sogni fluttist að Vík á Kjalarnesi þar sem skipulögð meðferð og endurhæfing þróuðust áfram."
          },
          {
            title: "2006 · VON opnar í Efstaleiti 7",
            body:
              "Göngudeildarstarfsemi fluttist í nýtt húsnæði í Efstaleiti 7 í október 2006. Þar styrktist umgjörð fyrir viðtöl, dagmeðferð, fjölskylduþjónustu og eftirfylgd."
          },
          {
            title: "1. mars 2018 · Inniliggjandi eftirmeðferð sameinuð á Vík",
            body:
              "Þegar inniliggjandi eftirmeðferð var sameinuð á nýuppbyggðri Vík varð meðferðarleiðin skýrari og samþættari."
          },
          {
            title: "Í dag · Breið og fjölþætt þjónusta",
            body:
              "Í dag byggir SÁÁ á blöndu af sjúkrahúsþjónustu, göngudeild, inniliggjandi meðferð, búsetuúrræðum, þjónustu við aðstandendur, fræðslu og rannsóknum. Kjarni starfseminnar er enn að berjast gegn fordómum og bæta aðgengi að faglegri hjálp."
          },
          {
            title: "Um heimildir",
            body:
              "Tímalínan hér er samantekt byggð á aðgengilegum opinberum upplýsingum um tilgang og skipulag SÁÁ, ásamt samhljóða sögulýsingu sem hefur verið birt opinberlega. Áður en efnið verður formleg sögusíða í lofti er eðlilegt að það fari í yfirferð hjá SÁÁ."
          }
        ]
      },
      urgent: {
        slug: "hjalp-strax",
        title: "Ef staðan er bráð",
        eyebrow: "Hjálp strax",
        intro:
          "Ef líf, öryggi eða heilsa er í hættu þarf að leita strax til neyðarþjónustu. Þessi síða á að vera skýr, stutt og sýnileg.",
        ctaLabel: "Hringja í 112",
        ctaHref: "tel:112",
        sections: [
          {
            title: "Hvenær á að hringja í 112?",
            body:
              "Hringdu í 112 ef einstaklingur er í lífshættu, með alvarleg fráhvörf, meðvitundarskerðingu, sjálfsvígshættu eða aðra bráða heilsuógn."
          },
          {
            title: "Hvenær á að hafa samband við SÁÁ?",
            body:
              "Hafðu samband við SÁÁ þegar þú þarft ráðgjöf, mat á meðferðarþörf, viðtal eða leið inn í þjónustu."
          }
        ]
      }
    }
  },
  en: {
    meta: {
      title: "SÁÁ | A whole different life",
      description:
        "A Next.js foundation for the SÁÁ website focused on first steps, treatment, families and clear guidance."
    },
    brandLine: "A whole different life",
    announcement: {
      label: "Conference 2027",
      title: "ISAM-SÁÁ 2027: From Science to Recovery",
      meta: "June 9-11, 2027 · Hilton Reykjavík Nordica",
      linkLabel: "View event",
      href: "https://events.bizzabo.com/SAAISAM27/home",
      image: "/assets/images/isam-saa-2027-logo.png"
    },
    labels: {
      phonePrefix: "tel.",
      primaryCta: "First steps",
      startHere: "Start here",
      mobileMenu: "Open menu",
      mainNav: "Main navigation",
      emergency: "Urgent help",
      sectionTag: "SÁÁ",
      readPath: "View path",
      languages: "Languages"
    },
    navigation: [
      { label: "Help and services", href: "/need-help" },
      { label: "Education and advice", href: "/education" },
      { label: "Support and participate", href: "/support-saa" },
      { label: "About SÁÁ", href: "/about-saa" }
    ],
    megaMenu: [
      {
        label: "Help and services",
        href: "/need-help",
        description: "First steps, treatment and support for people who need help now or want to understand the next step.",
        columns: [
          {
            title: "First steps",
            links: [
              { label: "I need help", href: "/need-help" },
              { label: "If the situation is urgent", href: "/urgent-help" },
              { label: "Treatment options", href: "/treatment-options" },
              { label: "Family and loved ones", href: "/families" }
            ]
          },
          {
            title: "Treatment",
            links: [
              { label: "Treatment and services", href: "/treatment-and-services" },
              { label: "Treatment options", href: "/treatment-options" },
              { label: "Vogur", href: "/treatment-and-services#vogur" },
              { label: "Vík", href: "/treatment-and-services#vik" },
              { label: "Outpatient and day treatment", href: "/treatment-and-services#outpatient" }
            ]
          },
          {
            title: "Specialised services",
            links: [
              { label: "Gambling harm", href: "/treatment-and-services#gambling" },
              { label: "Children and young people", href: "/families" },
              { label: "Family services", href: "/families" }
            ]
          }
        ]
      },
      {
        label: "Education and advice",
        href: "/education",
        description: "Clear education, guidance and material for professionals, workplaces and people who want to understand addiction better.",
        columns: [
          {
            title: "Education",
            links: [
              { label: "Education", href: "/education" },
              { label: "Self-assessment", href: "/education" },
              { label: "Frequently asked questions", href: "/education" }
            ]
          },
          {
            title: "Professionals",
            links: [
              { label: "For professionals", href: "/professionals" },
              { label: "Referrals and requests", href: "/professionals" },
              { label: "Workplace support", href: "/professionals#workplaces" }
            ]
          }
        ]
      },
      {
        label: "Support and participate",
        href: "/support-saa",
        description: "Ways for individuals, members and companies to support SÁÁ’s work.",
        columns: [
          {
            title: "Support",
            links: [
              { label: "Support SÁÁ", href: "/support-saa" },
              { label: "Become a member", href: "/support-saa" },
              { label: "Memorial cards and gifts", href: "/support-saa" }
            ]
          },
          {
            title: "Events and participation",
            links: [
              { label: "News and events", href: "/support-saa" },
              { label: "Company support", href: "/support-saa" }
            ]
          }
        ]
      },
      {
        label: "About SÁÁ",
        href: "/about-saa",
        description: "Purpose, history, trust, transparency and information about SÁÁ.",
        columns: [
          {
            title: "The organisation",
            links: [
              { label: "About SÁÁ", href: "/about-saa" },
              { label: "Purpose and values", href: "/about-saa" },
              { label: "Transparency", href: "/about-saa" }
            ]
          },
          {
            title: "Contact",
            links: [
              { label: "Phone 530 7600", href: "tel:+3545307600" },
              { label: "saa@saa.is", href: "mailto:saa@saa.is" }
            ]
          }
        ]
      }
    ],
    home: {
      eyebrow: "A whole different life",
      title: "helps you take the first step",
      intro:
        "Treatment, counselling and support for individuals, families and the community.",
      primaryCta: "I need help",
      primaryHref: "/need-help",
      secondaryCta: "I am a family member",
      secondaryHref: "/families",
      phoneCta: "Call 530 7600",
      contactCard: {
        eyebrow: "Do you need support?",
        title: "Choose the next step.",
        intro: "You do not need to know which service fits. We can help you find the right path.",
        linkLabel: "See ways to get in touch",
        href: "/need-help",
        actions: [
          {
            title: "Call",
            text: "530 7600",
            href: "tel:+3545307600",
            icon: "phone"
          },
          {
            title: "First steps",
            text: "Calm guidance",
            href: "/need-help",
            icon: "steps"
          },
          {
            title: "Urgent situation",
            text: "What to do now",
            href: "/urgent-help",
            icon: "urgent"
          }
        ]
      },
      heroCardsLabel: "Main pathways",
      quickActionsLabel: "Quick help",
      servicePuzzle: {
        title: "Alcohol problems, substance use problems, gambling harm",
        items: [
          {
            title: "Counselling",
            href: "/need-help",
            icon: "message",
            color: "brand",
            details: ["Children's counselling", "Family counselling"]
          },
          {
            title: "Detox and first steps",
            href: "/treatment-and-services#vogur",
            icon: "shield",
            color: "yellow"
          },
          {
            title: "Residential treatment",
            href: "/treatment-and-services#vik",
            icon: "home",
            color: "pink"
          },
          {
            title: "Day treatment",
            href: "/treatment-and-services#outpatient",
            icon: "sun",
            color: "purple"
          },
          {
            title: "Transitional housing",
            href: "/treatment-options",
            icon: "key",
            color: "green"
          }
        ]
      },
      principles: {
        eyebrow: "Principles",
        title: "The website starts with the person’s situation, not the organisation chart.",
        items: [
          {
            title: "Safe",
            text: "Clear guidance about urgent situations, confidentiality and when to contact emergency services."
          },
          {
            title: "Human",
            text: "Language that meets people without shame and guides them forward in a calm, direct way."
          },
          {
            title: "Actionable",
            text: "Every key page answers: what can I do now, and where do I go next?"
          }
        ]
      },
      services: {
        eyebrow: "Treatment and services",
        title: "The main service pathways in one place."
      },
      campaigns: {
        eyebrow: "Featured",
        title: "Projects that should be easy to find."
      },
      news: {
        eyebrow: "News and events",
        title: "News sits below help pathways, not in front of them."
      }
    },
    heroCards: [
      {
        title: "I need help",
        eyebrow: "First steps",
        text: "A clear path if you are unsure, want to talk about your situation or need to know what happens next.",
        href: "/need-help",
        image: "/assets/images/hero-fyrstu-skrefin.png"
      },
      {
        title: "I am close to someone",
        eyebrow: "Support for families",
        text: "Counselling, education and services for partners, parents, children, friends and other loved ones.",
        href: "/families",
        image: "/assets/images/hero-thjonusta-fjolskyldur.png"
      },
      {
        title: "I want to understand",
        eyebrow: "Education",
        text: "Non-judgemental information about addiction, recovery, relationships, self-assessment and support.",
        href: "/education",
        image: "/assets/images/hero-fraedsla.png"
      }
    ],
    quickActions: [
      {
        title: "Talk to someone",
        text: "Counselling and information by phone.",
        href: "tel:+3545307600",
        action: contact.phone,
        icon: "phone"
      },
      {
        title: "First steps",
        text: "A short path if you do not know where to begin.",
        href: "/need-help",
        action: "Start here",
        icon: "steps"
      },
      {
        title: "If the situation is urgent",
        text: "If life or health is at risk.",
        href: "/urgent-help",
        action: "Urgent help",
        icon: "urgent"
      }
    ],
    serviceHighlights: [
      {
        title: "Vogur",
        label: "Detox and assessment",
        text: "At Vogur Hospital people receive assessment, withdrawal care and guidance on next treatment steps.",
        href: "/treatment-and-services#vogur"
      },
      {
        title: "Vík",
        label: "Residential continuing care",
        text: "Vík receives people after detox when basic stability has been reached and offers structured treatment and support.",
        href: "/treatment-and-services#vik"
      },
      {
        title: "Outpatient and day treatment",
        label: "Treatment without admission",
        text: "Conversations, day treatment and follow-up that can be combined with everyday life.",
        href: "/treatment-and-services#outpatient"
      },
      {
        title: "Gambling harm",
        label: "Counselling and groups",
        text: "A dedicated pathway for people experiencing gambling-related harm and for their loved ones.",
        href: "/treatment-and-services#gambling"
      }
    ],
    audiencePaths: [
      {
        title: "For people who are unsure",
        text: "If you are not sure whether the problem has become serious, it can still be right to talk to someone.",
        href: "/need-help"
      },
      {
        title: "For loved ones",
        text: "You can seek support whether or not the person close to you has entered treatment.",
        href: "/families"
      },
      {
        title: "For professionals",
        text: "Practical information about referrals, requests, service pathways and contacts.",
        href: "/professionals"
      }
    ],
    campaigns: [
      {
        title: "Von outpatient service",
        text: "SÁÁ day treatment offers treatment without admission that can be combined with everyday life.",
        href: "/treatment-and-services#outpatient",
        image: "/assets/images/banner-gongudeild-von.png"
      },
      {
        title: "SÁÁ workplace support",
        text: "Counselling and education for managers and workplaces that want to respond earlier and better.",
        href: "/professionals#workplaces",
        image: "/assets/images/banner-vinnustadavakt.png"
      },
      {
        title: "Treatment for gambling harm",
        text: "Treatment, counselling sessions and support groups for people affected by gambling-related harm.",
        href: "/treatment-and-services#gambling",
        image: "/assets/images/banner-spilafikn.png"
      }
    ],
    news: [
      {
        date: "16 June",
        title: "SÁÁ anniversary conference 2027, in collaboration with ISAM",
        text: "An international conference marking SÁÁ’s 50th anniversary will take place 9-11 June 2027.",
        href: "https://www.saa.is/is/frettir-greinar/afmaelisradstefna-saa-2027-i-samvinnu-vid-isam",
        image: "/assets/images/news-isam.png"
      },
      {
        date: "12 June",
        title: "Public health call to government",
        text: "SÁÁ is among the organisations behind a joint call for stronger public health policy.",
        href: "https://www.saa.is/is/frettir-greinar/saa-medal-theirra-adila-sem-afhentu-heilbrigdisradherra-lydheilsuhvatningu",
        image: "/assets/images/news-lydheilsuhvatning.png"
      }
    ],
    footer: {
      intro:
        "A clearer path into services, education and support for people with addiction problems, families and professionals.",
      contactTitle: "Contact",
      shortcutsTitle: "Shortcuts",
      followTitle: "Follow us",
      equalPay: "Equal pay certification 2023 - 2026",
      mapLabel: "see map",
      quickLinks: [
        { label: "First steps", href: "/need-help" },
        { label: "Treatment options", href: "/treatment-options" },
        { label: "About SÁÁ", href: "/about-saa" },
        { label: "Contact us", href: "mailto:saa@saa.is" }
      ],
      supportTitle: "Support",
      supportLink: "View ways to support",
      supportHref: "/support-saa",
      phoneLabel: "Phone"
    },
    pages: {
      help: {
        slug: "need-help",
        title: "I need help",
        eyebrow: "First steps",
        intro:
          "This page is for you if you are wondering about your alcohol use, drug use, medication use, gambling or another addiction-related problem. You do not need to have all the answers before you contact us.",
        ctaLabel: "Call 530 7600",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "What can I do now?",
            body:
              "You can call SÁÁ, ask for an appointment or keep reading about which service may fit your situation. The goal is to find the next step, not to make a perfect diagnosis."
          },
          {
            title: "If the situation is dangerous",
            body:
              "If life, safety or health is in immediate danger, call 112 or go to an emergency department. This website can guide you, but it does not replace emergency services."
          },
          {
            title: "Self-assessment",
            body:
              "Self-assessment tools can give useful indications, but they are not a medical diagnosis. Results should be discussed with professionals when there is reason to do so."
          }
        ]
      },
      families: {
        slug: "families",
        title: "Family and loved ones",
        eyebrow: "Services for families",
        intro:
          "Loved ones need support too. SÁÁ’s family services are for people close to someone with an addiction-related problem, whether or not that person has entered treatment.",
        ctaLabel: "Book a conversation",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "Counselling conversations",
            body:
              "Loved ones can use conversations to receive information, counselling and help understanding their own situation. Sessions are generally around 45 minutes and can be booked by phone."
          },
          {
            title: "Courses for loved ones",
            body:
              "Courses build knowledge about symptoms of addiction, effects on families, recovery, self-care, motivation for change and boundaries."
          },
          {
            title: "Children and young people",
            body:
              "Children who have parents or close family members with addiction problems need a clear, safe and age-appropriate path into support."
          }
        ]
      },
      treatment: {
        slug: "treatment-and-services",
        title: "Treatment and services",
        eyebrow: "Treatment for a better life",
        intro:
          "SÁÁ provides treatment, counselling and follow-up for people with addiction problems and their families. The services here are organised around real user needs.",
        ctaLabel: "View first steps",
        ctaHref: "/need-help",
        sections: [
          {
            title: "Vogur",
            id: "vogur",
            body:
              "Vogur Hospital provides detox, assessment and medical evaluation of treatment needs. Many people arrive in withdrawal or under the influence of substances."
          },
          {
            title: "Vík",
            id: "vik",
            body:
              "The Vík treatment centre receives people after detox at Vogur once basic stability has been reached. It offers structured residential continuing care."
          },
          {
            title: "Outpatient and day treatment",
            id: "outpatient",
            body:
              "Outpatient services offer counselling, day treatment and follow-up. Day treatment can suit people with sufficiently stable circumstances who can attend treatment without admission."
          },
          {
            title: "Gambling harm",
            id: "gambling",
            body:
              "SÁÁ offers counselling, treatment and support groups for people experiencing gambling-related harm. Loved ones can also seek counselling."
          }
        ]
      },
      resources: {
        slug: "treatment-options",
        title: "Treatment options",
        eyebrow: "How the services work together",
        intro:
          "SÁÁ offers several services that can be combined according to each person’s situation. Some people start at Vogur, continue to Vík and then receive follow-up in Von. Others begin in outpatient care, use LOF or need residential support at Vin.",
        ctaLabel: "Call 530 7600",
        ctaHref: "tel:+3545307600",
        treatmentResources: {
          eyebrow: "Simple overview",
          heading: "Five services that can form one treatment path.",
          text:
            "You do not need to know in advance which service is right for you. The first conversation and professional assessment help decide the next step.",
          note:
            "The services can connect in different ways. The order depends on health, substance use history, home situation, support and each person’s goals.",
          items: [
            {
              id: "vogur",
              icon: "hospital",
              image: "/assets/images/hero-fyrstu-skrefin.png",
              label: "Detox and first steps",
              title: "Vogur",
              duration: "Usually around 7-10 days, depending on assessment and circumstances.",
              text:
                "Vogur is a hospital where people receive detox, diagnosis, medical assessment and the first steps in treatment.",
              points: [
                "For people in withdrawal or under the influence.",
                "A doctor and team assess physical and mental health.",
                "The next step may be Vík, Von, LOF or other follow-up."
              ]
            },
            {
              id: "vik",
              icon: "calendar",
              image: "/assets/images/hero-fraedsla.png",
              label: "Residential treatment",
              title: "Vík",
              duration: "Usually 4 weeks / 28 days.",
              text:
                "Vík often follows Vogur once basic stability has been reached. It offers structured treatment with education, groups, project work and individual sessions.",
              points: [
                "Daily structure, movement, sleep, meals and support.",
                "A trauma-informed and social approach.",
                "Preparation for everyday life after residential treatment."
              ]
            },
            {
              id: "von",
              icon: "users",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Outpatient and day treatment",
              title: "Von",
              duration: "Length varies, often day treatment and follow-up.",
              text:
                "Von is SÁÁ’s outpatient clinic at Efstaleiti. It provides counselling, assessment, day treatment, family services and follow-up.",
              points: [
                "Can be suitable without hospital admission.",
                "Can come before or after Vogur and Vík.",
                "Supports people as they continue everyday life."
              ]
            },
            {
              id: "vin",
              icon: "home",
              image: "/assets/images/hero-thjonusta-fjolskyldur.png",
              label: "Transitional housing",
              title: "Vin",
              duration: "Longer-term support according to need.",
              text:
                "Vin is a residential support service and transitional home focused on stability, social rehabilitation and support in recovery.",
              points: [
                "For people who need a safer setting after treatment.",
                "Supports daily life, relationships and responsibility.",
                "Can connect with ongoing outpatient care and support."
              ]
            },
            {
              id: "lof",
              icon: "pill",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Opioid addiction",
              title: "LOF",
              duration: "Long-term outpatient treatment with regular follow-up.",
              text:
                "LOF is medication treatment and outpatient care for opioid addiction. It is based on a comprehensive assessment, an individual treatment plan and follow-up by healthcare professionals.",
              points: [
                "Can begin at Vogur or in outpatient care.",
                "Medication and follow-up are adjusted to each person’s needs.",
                "Care may involve pharmacies, primary care and other services."
              ]
            }
          ],
          pathwayEyebrow: "How the path comes together",
          pathwayTitle: "There is not one right route for everyone.",
          pathway: [
            {
              icon: "heart",
              title: "First contact",
              text:
                "You call, book a conversation or receive advice. The aim is to understand the situation and find the next step."
            },
            {
              icon: "hospital",
              title: "Assessment and detox if needed",
              text:
                "Some people need Vogur first. Others can start in Von or receive a specific assessment for LOF."
            },
            {
              icon: "calendar",
              title: "Treatment and practice",
              text:
                "Vík, Von, LOF and other services help people build new skills and stability."
            },
            {
              icon: "home",
              title: "Ongoing support",
              text:
                "Vin, outpatient care, groups and family services can support long-term recovery as needed."
            }
          ],
          ctaTitle: "Not sure what applies?",
          ctaText:
            "That is normal. You do not have to choose the right service alone. Contact SÁÁ and get guidance."
        },
        sections: [
          {
            title: "Important",
            body:
              "This page is a simple overview. The final treatment plan is always assessed according to each person’s situation, health and circumstances."
          }
        ]
      },
      education: {
        slug: "education",
        title: "Education",
        eyebrow: "Clear knowledge without judgement",
        intro:
          "Education should help people understand addiction, recovery and support without shame or unnecessary complexity. Content should always end with a clear next step.",
        ctaLabel: "View self-assessment",
        ctaHref: "/need-help",
        sections: [
          {
            title: "Addiction as a health issue",
            body:
              "Texts should explain symptoms, risk and treatment options in a human way and avoid blame or fear-based language."
          },
          {
            title: "Self-assessment and screening",
            body:
              "Self-assessment tools provide indications but are not the same as a medical diagnosis. This note should accompany all content related to assessing one’s own situation."
          },
          {
            title: "Content for different groups",
            body:
              "Loved ones, young people, professionals, workplaces and supporters need different entry points, wording and next steps."
          }
        ]
      },
      professionals: {
        slug: "professionals",
        title: "For professionals",
        eyebrow: "Referrals, collaboration and workplaces",
        intro:
          "Professionals need a clear path to information about services, requests, criteria, collaboration and contacts. This area is designed to become a practical work space.",
        ctaLabel: "Contact us",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "Referrals and requests",
            body:
              "A page for professionals should explain what information is needed, what happens after a request and where further advice can be found."
          },
          {
            title: "Workplace support",
            id: "workplaces",
            body:
              "SÁÁ works with companies and institutions to increase knowledge and improve responses to addiction-related problems in workplaces."
          },
          {
            title: "Education and collaboration",
            body:
              "This area can hold lectures, education packages, contacts and material useful for health, social and education services."
          }
        ]
      },
      support: {
        slug: "support-saa",
        title: "Support SÁÁ",
        eyebrow: "Support that matters",
        intro:
          "Support from friends of SÁÁ helps sustain treatment, counselling, education and community work. The website should make support simple and transparent.",
        ctaLabel: "Support the work",
        ctaHref: "https://saa.getjourney.io/",
        sections: [
          {
            title: "Become a member",
            body: "Members help create the independent foundation on which the strength of the organisation rests."
          },
          {
            title: "Memorial cards and gifts",
            body:
              "A clear giving path should explain the purpose, payment process and how the contribution supports the work."
          },
          {
            title: "Companies and events",
            body:
              "Companies can support projects, participate in fundraising or connect with education and community initiatives."
          }
        ]
      },
      about: {
        slug: "about-saa",
        title: "About SÁÁ",
        eyebrow: "Purpose, professionalism and trust",
        intro:
          "SÁÁ is a social and professional force in treatment, counselling and education about alcohol, drug and addiction-related problems.",
        ctaLabel: "Contact us",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "A whole different life",
            body:
              "The identity and voice of the website should hold on to this core: hope, professionalism, a human approach and a clear path to help."
          },
          {
            title: "Transparency",
            body:
              "Annual reports, policies, board information, statutes, privacy information and media material should be accessible and easy to find."
          },
          {
            title: "Clear structure",
            body:
              "The new website is structured so that text and links can be edited in one clear content file without needing to go deep into React."
          }
        ]
      },
      urgent: {
        slug: "urgent-help",
        title: "If the situation is urgent",
        eyebrow: "Urgent help",
        intro:
          "If life, safety or health is at risk, emergency services should be contacted immediately. This page should be clear, short and visible.",
        ctaLabel: "Call 112",
        ctaHref: "tel:112",
        sections: [
          {
            title: "When should I call 112?",
            body:
              "Call 112 if someone is in life-threatening danger, has severe withdrawal symptoms, impaired consciousness, suicidal risk or another urgent health threat."
          },
          {
            title: "When should I contact SÁÁ?",
            body:
              "Contact SÁÁ when you need counselling, assessment of treatment needs, an appointment or a path into services."
          }
        ]
      }
    }
  },
  pl: {
    meta: {
      title: "SÁÁ | Zupełnie inne życie",
      description:
        "Podstawa strony SÁÁ w Next.js, skupiona na pierwszych krokach, leczeniu, bliskich i jasnym prowadzeniu użytkownika."
    },
    brandLine: "Zupełnie inne życie",
    announcement: {
      label: "Konferencja 2027",
      title: "ISAM-SÁÁ 2027: From Science to Recovery",
      meta: "9-11 czerwca 2027 · Hilton Reykjavík Nordica",
      linkLabel: "Zobacz wydarzenie",
      href: "https://events.bizzabo.com/SAAISAM27/home",
      image: "/assets/images/isam-saa-2027-logo.png"
    },
    labels: {
      phonePrefix: "tel.",
      primaryCta: "Pierwsze kroki",
      startHere: "Zacznij tutaj",
      mobileMenu: "Otwórz menu",
      mainNav: "Główna nawigacja",
      emergency: "Pilna pomoc",
      sectionTag: "SÁÁ",
      readPath: "Zobacz ścieżkę",
      languages: "Języki"
    },
    navigation: [
      { label: "Pomoc i usługi", href: "/potrzebuje-pomocy" },
      { label: "Edukacja i porady", href: "/edukacja" },
      { label: "Wesprzyj i weź udział", href: "/wesprzyj-saa" },
      { label: "O SÁÁ", href: "/o-saa" }
    ],
    megaMenu: [
      {
        label: "Pomoc i usługi",
        href: "/potrzebuje-pomocy",
        description: "Pierwsze kroki, leczenie i wsparcie dla osób, które potrzebują pomocy teraz albo chcą zrozumieć następny krok.",
        columns: [
          {
            title: "Pierwsze kroki",
            links: [
              { label: "Potrzebuję pomocy", href: "/potrzebuje-pomocy" },
              { label: "Jeśli sytuacja jest pilna", href: "/pilna-pomoc" },
              { label: "Możliwości leczenia", href: "/mozliwosci-leczenia" },
              { label: "Bliscy i rodzina", href: "/bliscy" }
            ]
          },
          {
            title: "Leczenie",
            links: [
              { label: "Leczenie i usługi", href: "/leczenie-i-uslugi" },
              { label: "Możliwości leczenia", href: "/mozliwosci-leczenia" },
              { label: "Vogur", href: "/leczenie-i-uslugi#vogur" },
              { label: "Vík", href: "/leczenie-i-uslugi#vik" },
              { label: "Ambulatorium i leczenie dzienne", href: "/leczenie-i-uslugi#ambulatoryjne" }
            ]
          },
          {
            title: "Usługi specjalistyczne",
            links: [
              { label: "Szkody związane z hazardem", href: "/leczenie-i-uslugi#hazard" },
              { label: "Dzieci i młodzież", href: "/bliscy" },
              { label: "Usługi dla rodzin", href: "/bliscy" }
            ]
          }
        ]
      },
      {
        label: "Edukacja i porady",
        href: "/edukacja",
        description: "Jasna edukacja, wskazówki i materiały dla specjalistów, miejsc pracy oraz osób, które chcą lepiej zrozumieć uzależnienie.",
        columns: [
          {
            title: "Edukacja",
            links: [
              { label: "Edukacja", href: "/edukacja" },
              { label: "Samoocena", href: "/edukacja" },
              { label: "Częste pytania", href: "/edukacja" }
            ]
          },
          {
            title: "Specjaliści",
            links: [
              { label: "Dla specjalistów", href: "/dla-specjalistow" },
              { label: "Skierowania i zgłoszenia", href: "/dla-specjalistow" },
              { label: "Wsparcie dla miejsc pracy", href: "/dla-specjalistow#miejsca-pracy" }
            ]
          }
        ]
      },
      {
        label: "Wesprzyj i weź udział",
        href: "/wesprzyj-saa",
        description: "Sposoby, w jakie osoby prywatne, członkowie i firmy mogą wspierać pracę SÁÁ.",
        columns: [
          {
            title: "Wsparcie",
            links: [
              { label: "Wesprzyj SÁÁ", href: "/wesprzyj-saa" },
              { label: "Zostań członkiem", href: "/wesprzyj-saa" },
              { label: "Karty pamięci i darowizny", href: "/wesprzyj-saa" }
            ]
          },
          {
            title: "Wydarzenia i udział",
            links: [
              { label: "Aktualności i wydarzenia", href: "/wesprzyj-saa" },
              { label: "Wsparcie firm", href: "/wesprzyj-saa" }
            ]
          }
        ]
      },
      {
        label: "O SÁÁ",
        href: "/o-saa",
        description: "Cel, historia, zaufanie, przejrzystość i informacje o SÁÁ.",
        columns: [
          {
            title: "Organizacja",
            links: [
              { label: "O SÁÁ", href: "/o-saa" },
              { label: "Cel i wartości", href: "/o-saa" },
              { label: "Przejrzystość", href: "/o-saa" }
            ]
          },
          {
            title: "Kontakt",
            links: [
              { label: "Telefon 530 7600", href: "tel:+3545307600" },
              { label: "saa@saa.is", href: "mailto:saa@saa.is" }
            ]
          }
        ]
      }
    ],
    home: {
      eyebrow: "Zupełnie inne życie",
      title: "pomaga Ci zrobić pierwszy krok",
      intro:
        "Leczenie, poradnictwo i wsparcie dla osób indywidualnych, rodzin i społeczności.",
      primaryCta: "Potrzebuję pomocy",
      primaryHref: "/potrzebuje-pomocy",
      secondaryCta: "Jestem bliską osobą",
      secondaryHref: "/bliscy",
      phoneCta: "Zadzwoń 530 7600",
      contactCard: {
        eyebrow: "Potrzebujesz wsparcia?",
        title: "Wybierz następny krok.",
        intro: "Nie musisz wiedzieć, która usługa pasuje. Pomożemy Ci znaleźć właściwą drogę.",
        linkLabel: "Zobacz sposoby kontaktu",
        href: "/potrzebuje-pomocy",
        actions: [
          {
            title: "Zadzwoń",
            text: "530 7600",
            href: "tel:+3545307600",
            icon: "phone"
          },
          {
            title: "Pierwsze kroki",
            text: "Spokojne wskazówki",
            href: "/potrzebuje-pomocy",
            icon: "steps"
          },
          {
            title: "Pilna sytuacja",
            text: "Co zrobić teraz",
            href: "/pilna-pomoc",
            icon: "urgent"
          }
        ]
      },
      heroCardsLabel: "Główne ścieżki",
      quickActionsLabel: "Szybka pomoc",
      servicePuzzle: {
        title: "Problemy alkoholowe, problemy z substancjami, szkody związane z hazardem",
        items: [
          {
            title: "Poradnictwo",
            href: "/potrzebuje-pomocy",
            icon: "message",
            color: "brand",
            details: ["Poradnictwo dla dzieci", "Poradnictwo dla bliskich"]
          },
          {
            title: "Detoks i pierwsze kroki",
            href: "/leczenie-i-uslugi#vogur",
            icon: "shield",
            color: "yellow"
          },
          {
            title: "Leczenie stacjonarne",
            href: "/leczenie-i-uslugi#vik",
            icon: "home",
            color: "pink"
          },
          {
            title: "Leczenie dzienne",
            href: "/leczenie-i-uslugi#ambulatoryjne",
            icon: "sun",
            color: "purple"
          },
          {
            title: "Dom przejściowy",
            href: "/mozliwosci-leczenia",
            icon: "key",
            color: "green"
          }
        ]
      },
      principles: {
        eyebrow: "Zasady",
        title: "Strona zaczyna od sytuacji człowieka, a nie od struktury organizacji.",
        items: [
          {
            title: "Bezpiecznie",
            text: "Jasne informacje o sytuacjach nagłych, poufności i tym, kiedy kontaktować się ze służbami ratunkowymi."
          },
          {
            title: "Po ludzku",
            text: "Język, który nie zawstydza i prowadzi dalej spokojnie oraz bezpośrednio."
          },
          {
            title: "Praktycznie",
            text: "Każda kluczowa strona odpowiada: co mogę zrobić teraz i dokąd mam pójść dalej?"
          }
        ]
      },
      services: {
        eyebrow: "Leczenie i usługi",
        title: "Główne ścieżki usług w jednym miejscu."
      },
      campaigns: {
        eyebrow: "W centrum uwagi",
        title: "Projekty, które powinny być łatwe do znalezienia."
      },
      news: {
        eyebrow: "Aktualności i wydarzenia",
        title: "Aktualności są niżej niż ścieżki pomocy, a nie przed nimi."
      }
    },
    heroCards: [
      {
        title: "Potrzebuję pomocy",
        eyebrow: "Pierwsze kroki",
        text: "Jasna ścieżka, jeśli nie masz pewności, chcesz porozmawiać o swojej sytuacji albo wiedzieć, co dzieje się dalej.",
        href: "/potrzebuje-pomocy",
        image: "/assets/images/hero-fyrstu-skrefin.png"
      },
      {
        title: "Jestem bliską osobą",
        eyebrow: "Wsparcie dla rodzin",
        text: "Poradnictwo, edukacja i usługi dla partnerów, rodziców, dzieci, przyjaciół i innych bliskich osób.",
        href: "/bliscy",
        image: "/assets/images/hero-thjonusta-fjolskyldur.png"
      },
      {
        title: "Chcę lepiej zrozumieć",
        eyebrow: "Edukacja",
        text: "Informacje bez oceniania o uzależnieniu, zdrowieniu, relacjach, samoocenie i możliwościach wsparcia.",
        href: "/edukacja",
        image: "/assets/images/hero-fraedsla.png"
      }
    ],
    quickActions: [
      {
        title: "Porozmawiaj z kimś",
        text: "Poradnictwo i informacje telefonicznie.",
        href: "tel:+3545307600",
        action: contact.phone,
        icon: "phone"
      },
      {
        title: "Pierwsze kroki",
        text: "Krótka ścieżka, jeśli nie wiesz, od czego zacząć.",
        href: "/potrzebuje-pomocy",
        action: "Zacznij tutaj",
        icon: "steps"
      },
      {
        title: "Gdy sytuacja jest pilna",
        text: "Jeśli życie lub zdrowie jest zagrożone.",
        href: "/pilna-pomoc",
        action: "Pilna pomoc",
        icon: "urgent"
      }
    ],
    serviceHighlights: [
      {
        title: "Vogur",
        label: "Detoks i ocena",
        text: "W szpitalu Vogur osoby otrzymują ocenę sytuacji, opiekę w odstawieniu i wskazanie kolejnych kroków leczenia.",
        href: "/leczenie-i-uslugi#vogur"
      },
      {
        title: "Vík",
        label: "Stacjonarna kontynuacja leczenia",
        text: "Vík przyjmuje osoby po detoksie, gdy osiągnięta jest podstawowa stabilizacja, i oferuje uporządkowane leczenie oraz wsparcie.",
        href: "/leczenie-i-uslugi#vik"
      },
      {
        title: "Ambulatorium i leczenie dzienne",
        label: "Leczenie bez przyjęcia",
        text: "Rozmowy, leczenie dzienne i dalsze wsparcie, które można łączyć z codziennym życiem.",
        href: "/leczenie-i-uslugi#ambulatoryjne"
      },
      {
        title: "Szkody związane z hazardem",
        label: "Poradnictwo i grupy",
        text: "Osobna ścieżka dla osób doświadczających problemów związanych z hazardem oraz dla ich bliskich.",
        href: "/leczenie-i-uslugi#hazard"
      }
    ],
    audiencePaths: [
      {
        title: "Dla osób, które nie mają pewności",
        text: "Jeśli nie wiesz, czy problem stał się poważny, nadal warto z kimś porozmawiać.",
        href: "/potrzebuje-pomocy"
      },
      {
        title: "Dla bliskich",
        text: "Możesz szukać wsparcia niezależnie od tego, czy bliska osoba rozpoczęła leczenie.",
        href: "/bliscy"
      },
      {
        title: "Dla specjalistów",
        text: "Praktyczne informacje o skierowaniach, zgłoszeniach, ścieżkach usług i kontaktach.",
        href: "/dla-specjalistow"
      }
    ],
    campaigns: [
      {
        title: "Ambulatorium Von",
        text: "Leczenie dzienne SÁÁ oferuje pomoc bez przyjęcia, którą można łączyć z codziennym życiem.",
        href: "/leczenie-i-uslugi#ambulatoryjne",
        image: "/assets/images/banner-gongudeild-von.png"
      },
      {
        title: "Wsparcie SÁÁ dla miejsc pracy",
        text: "Poradnictwo i edukacja dla kadry zarządzającej oraz miejsc pracy, które chcą reagować wcześniej i lepiej.",
        href: "/dla-specjalistow#miejsca-pracy",
        image: "/assets/images/banner-vinnustadavakt.png"
      },
      {
        title: "Leczenie szkód związanych z hazardem",
        text: "Leczenie, rozmowy doradcze i grupy wsparcia dla osób dotkniętych problemami związanymi z hazardem.",
        href: "/leczenie-i-uslugi#hazard",
        image: "/assets/images/banner-spilafikn.png"
      }
    ],
    news: [
      {
        date: "16 czerwca",
        title: "Konferencja jubileuszowa SÁÁ 2027 we współpracy z ISAM",
        text: "Międzynarodowa konferencja z okazji 50-lecia SÁÁ odbędzie się 9-11 czerwca 2027 r.",
        href: "https://www.saa.is/is/frettir-greinar/afmaelisradstefna-saa-2027-i-samvinnu-vid-isam",
        image: "/assets/images/news-isam.png"
      },
      {
        date: "12 czerwca",
        title: "Apel do władz w sprawie zdrowia publicznego",
        text: "SÁÁ jest jedną z organizacji stojących za wspólnym apelem o silniejszą politykę zdrowia publicznego.",
        href: "https://www.saa.is/is/frettir-greinar/saa-medal-theirra-adila-sem-afhentu-heilbrigdisradherra-lydheilsuhvatningu",
        image: "/assets/images/news-lydheilsuhvatning.png"
      }
    ],
    footer: {
      intro:
        "Jaśniejsza droga do usług, edukacji i wsparcia dla osób z problemami uzależnienia, rodzin i specjalistów.",
      contactTitle: "Kontakt",
      shortcutsTitle: "Skróty",
      followTitle: "Obserwuj nas",
      equalPay: "Certyfikat równości płac 2023 - 2026",
      mapLabel: "zobacz mapę",
      quickLinks: [
        { label: "Pierwsze kroki", href: "/potrzebuje-pomocy" },
        { label: "Możliwości leczenia", href: "/mozliwosci-leczenia" },
        { label: "O SÁÁ", href: "/o-saa" },
        { label: "Kontakt", href: "mailto:saa@saa.is" }
      ],
      supportTitle: "Wsparcie",
      supportLink: "Zobacz sposoby wsparcia",
      supportHref: "/wesprzyj-saa",
      phoneLabel: "Telefon"
    },
    pages: {
      help: {
        slug: "potrzebuje-pomocy",
        title: "Potrzebuję pomocy",
        eyebrow: "Pierwsze kroki",
        intro:
          "Ta strona jest dla Ciebie, jeśli zastanawiasz się nad swoim używaniem alkoholu, narkotyków, leków, hazardem lub innym problemem związanym z uzależnieniem. Nie musisz mieć wszystkich odpowiedzi, zanim się skontaktujesz.",
        ctaLabel: "Zadzwoń 530 7600",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "Co mogę zrobić teraz?",
            body:
              "Możesz zadzwonić do SÁÁ, poprosić o rozmowę albo przeczytać dalej, jaka usługa może pasować do Twojej sytuacji. Celem jest znalezienie następnego kroku, a nie postawienie idealnej diagnozy."
          },
          {
            title: "Jeśli sytuacja jest niebezpieczna",
            body:
              "Jeśli życie, bezpieczeństwo lub zdrowie jest bezpośrednio zagrożone, zadzwoń pod 112 albo udaj się na ostry dyżur. Ta strona pomaga w orientacji, ale nie zastępuje służb ratunkowych."
          },
          {
            title: "Samoocena",
            body:
              "Narzędzia samooceny mogą dać przydatne wskazówki, ale nie są diagnozą medyczną. Wyniki warto omówić ze specjalistami, gdy jest ku temu powód."
          }
        ]
      },
      families: {
        slug: "bliscy",
        title: "Bliscy i rodzina",
        eyebrow: "Usługi dla rodzin",
        intro:
          "Bliscy również potrzebują wsparcia. Usługi rodzinne SÁÁ są dla osób bliskich komuś z problemem uzależnienia, niezależnie od tego, czy ta osoba rozpoczęła leczenie.",
        ctaLabel: "Umów rozmowę",
        ctaHref: "tel:+3545307600",
        sections: [
          {
            title: "Rozmowy doradcze",
            body:
              "Bliscy mogą skorzystać z rozmów, aby otrzymać informacje, poradnictwo i pomoc w zrozumieniu własnej sytuacji. Spotkania trwają zwykle około 45 minut i można je umówić telefonicznie."
          },
          {
            title: "Kursy dla bliskich",
            body:
              "Kursy poszerzają wiedzę o objawach uzależnienia, wpływie na rodziny, zdrowieniu, dbaniu o siebie, motywacji do zmiany i granicach."
          },
          {
            title: "Dzieci i młodzież",
            body:
              "Dzieci, których rodzice lub bliscy mają problemy z uzależnieniem, potrzebują jasnej, bezpiecznej i odpowiedniej do wieku drogi do wsparcia."
          }
        ]
      },
      treatment: {
        slug: "leczenie-i-uslugi",
        title: "Leczenie i usługi",
        eyebrow: "Leczenie ku lepszemu życiu",
        intro:
          "SÁÁ oferuje leczenie, poradnictwo i dalsze wsparcie osobom z problemami uzależnienia oraz ich rodzinom. Usługi są tu ułożone według realnych potrzeb użytkowników.",
        ctaLabel: "Zobacz pierwsze kroki",
        ctaHref: "/potrzebuje-pomocy",
        sections: [
          {
            title: "Vogur",
            id: "vogur",
            body:
              "Szpital Vogur zapewnia detoks, ocenę i medyczną ocenę potrzeb leczenia. Wiele osób przychodzi w stanie odstawienia albo pod wpływem substancji."
          },
          {
            title: "Vík",
            id: "vik",
            body:
              "Ośrodek leczenia Vík przyjmuje osoby po detoksie w Vogur, gdy osiągnięta jest podstawowa stabilizacja. Oferuje uporządkowaną stacjonarną kontynuację leczenia."
          },
          {
            title: "Ambulatorium i leczenie dzienne",
            id: "ambulatoryjne",
            body:
              "Usługi ambulatoryjne oferują rozmowy, leczenie dzienne i dalsze wsparcie. Leczenie dzienne może pasować osobom z wystarczająco stabilną sytuacją, które mogą uczestniczyć w leczeniu bez przyjęcia."
          },
          {
            title: "Szkody związane z hazardem",
            id: "hazard",
            body:
              "SÁÁ oferuje poradnictwo, leczenie i grupy wsparcia dla osób doświadczających problemów związanych z hazardem. Bliscy także mogą szukać poradnictwa."
          }
        ]
      },
      resources: {
        slug: "mozliwosci-leczenia",
        title: "Możliwości leczenia",
        eyebrow: "Jak usługi działają razem",
        intro:
          "SÁÁ oferuje kilka form pomocy, które można łączyć zależnie od sytuacji danej osoby. Niektórzy zaczynają w Vogur, kontynuują w Vík i potem korzystają z Von. Inni zaczynają ambulatoryjnie, korzystają z LOF albo potrzebują wsparcia mieszkaniowego w Vin.",
        ctaLabel: "Zadzwoń 530 7600",
        ctaHref: "tel:+3545307600",
        treatmentResources: {
          eyebrow: "Prosty przegląd",
          heading: "Pięć usług, które mogą stworzyć jedną ścieżkę leczenia.",
          text:
            "Nie musisz z góry wiedzieć, która usługa jest właściwa. Pierwsza rozmowa i profesjonalna ocena pomagają wybrać następny krok.",
          note:
            "Usługi mogą łączyć się na różne sposoby. Kolejność zależy od zdrowia, historii używania substancji, sytuacji domowej, wsparcia i celów każdej osoby.",
          items: [
            {
              id: "vogur",
              icon: "hospital",
              image: "/assets/images/hero-fyrstu-skrefin.png",
              label: "Detoks i pierwsze kroki",
              title: "Vogur",
              duration: "Zwykle około 7-10 dni, zależnie od oceny i sytuacji.",
              text:
                "Vogur to szpital, w którym osoby otrzymują detoks, diagnozę, ocenę medyczną i pierwsze kroki leczenia.",
              points: [
                "Dla osób w objawach odstawienia albo pod wpływem substancji.",
                "Lekarz i zespół oceniają stan fizyczny i psychiczny.",
                "Następnym krokiem może być Vík, Von, LOF albo inne dalsze wsparcie."
              ]
            },
            {
              id: "vik",
              icon: "calendar",
              image: "/assets/images/hero-fraedsla.png",
              label: "Leczenie stacjonarne",
              title: "Vík",
              duration: "Zwykle 4 tygodnie / 28 dni.",
              text:
                "Vík często następuje po Vogur, gdy osiągnięta jest podstawowa stabilizacja. Leczenie obejmuje edukację, grupy, pracę nad zadaniami i rozmowy indywidualne.",
              points: [
                "Plan dnia, ruch, sen, posiłki i wsparcie.",
                "Podejście uwzględniające traumę i sytuację społeczną.",
                "Przygotowanie do codziennego życia po leczeniu stacjonarnym."
              ]
            },
            {
              id: "von",
              icon: "users",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Ambulatorium i leczenie dzienne",
              title: "Von",
              duration: "Długość jest różna, często leczenie dzienne i dalsze wsparcie.",
              text:
                "Von to poradnia ambulatoryjna SÁÁ w Efstaleiti. Oferuje rozmowy, ocenę, leczenie dzienne, usługi dla rodzin i dalsze wsparcie.",
              points: [
                "Może pasować bez przyjęcia do szpitala.",
                "Może być przed albo po Vogur i Vík.",
                "Wspiera osoby w powrocie do codziennego życia."
              ]
            },
            {
              id: "vin",
              icon: "home",
              image: "/assets/images/hero-thjonusta-fjolskyldur.png",
              label: "Mieszkanie przejściowe",
              title: "Vin",
              duration: "Dłuższe wsparcie według potrzeb.",
              text:
                "Vin to wsparcie mieszkaniowe i dom przejściowy, gdzie nacisk jest na stabilność, rehabilitację społeczną i wsparcie w zdrowieniu.",
              points: [
                "Dla osób, które po leczeniu potrzebują bezpieczniejszego otoczenia.",
                "Wspiera codzienne życie, relacje i odpowiedzialność.",
                "Może łączyć się z dalszą opieką ambulatoryjną i wsparciem."
              ]
            },
            {
              id: "lof",
              icon: "pill",
              image: "/assets/images/banner-gongudeild-von.png",
              label: "Uzależnienie od opioidów",
              title: "LOF",
              duration: "Długoterminowe leczenie ambulatoryjne z regularną kontrolą.",
              text:
                "LOF to leczenie lekami i opieka ambulatoryjna przy uzależnieniu od opioidów. Opiera się na pełnej ocenie, indywidualnym planie i kontroli przez personel medyczny.",
              points: [
                "Może rozpocząć się w Vogur albo ambulatoryjnie.",
                "Leki i kontrola są dopasowywane do potrzeb osoby.",
                "Opieka może obejmować współpracę z aptekami, podstawową opieką zdrowotną i innymi usługami."
              ]
            }
          ],
          pathwayEyebrow: "Jak układa się ścieżka",
          pathwayTitle: "Nie ma jednej właściwej drogi dla wszystkich.",
          pathway: [
            {
              icon: "heart",
              title: "Pierwszy kontakt",
              text:
                "Dzwonisz, umawiasz rozmowę albo otrzymujesz poradę. Celem jest zrozumienie sytuacji i znalezienie następnego kroku."
            },
            {
              icon: "hospital",
              title: "Ocena i detoks, jeśli trzeba",
              text:
                "Niektóre osoby potrzebują najpierw Vogur. Inne mogą zacząć w Von albo otrzymać specjalistyczną ocenę dla LOF."
            },
            {
              icon: "calendar",
              title: "Leczenie i ćwiczenie nowych umiejętności",
              text:
                "Vík, Von, LOF i inne usługi pomagają budować nowe umiejętności i stabilność."
            },
            {
              icon: "home",
              title: "Dalsze wsparcie",
              text:
                "Vin, opieka ambulatoryjna, grupy i usługi rodzinne mogą wspierać długoterminowe zdrowienie według potrzeb."
            }
          ],
          ctaTitle: "Nie wiesz, co pasuje?",
          ctaText:
            "To normalne. Nie musisz wybierać właściwej usługi samodzielnie. Skontaktuj się z SÁÁ i otrzymaj wskazówki."
        },
        sections: [
          {
            title: "Ważne",
            body:
              "Ta strona jest prostym przeglądem. Ostateczny plan leczenia jest zawsze oceniany według sytuacji, zdrowia i okoliczności danej osoby."
          }
        ]
      },
      education: {
        slug: "edukacja",
        title: "Edukacja",
        eyebrow: "Jasna wiedza bez oceniania",
        intro:
          "Edukacja ma pomagać zrozumieć uzależnienie, zdrowienie i wsparcie bez wstydu i zbędnej złożoności. Treści powinny zawsze kończyć się jasnym następnym krokiem.",
        ctaLabel: "Zobacz samoocenę",
        ctaHref: "/potrzebuje-pomocy",
        sections: [
          {
            title: "Uzależnienie jako kwestia zdrowia",
            body:
              "Teksty powinny wyjaśniać objawy, ryzyko i możliwości leczenia w ludzki sposób, bez obwiniania i języka opartego na strachu."
          },
          {
            title: "Samoocena i badania przesiewowe",
            body:
              "Narzędzia samooceny dają wskazówki, ale nie są diagnozą medyczną. Taka informacja powinna towarzyszyć wszystkim treściom dotyczącym oceny własnej sytuacji."
          },
          {
            title: "Treści dla różnych grup",
            body:
              "Bliscy, młodzież, specjaliści, miejsca pracy i osoby wspierające potrzebują różnych punktów wejścia, języka i następnych kroków."
          }
        ]
      },
      professionals: {
        slug: "dla-specjalistow",
        title: "Dla specjalistów",
        eyebrow: "Skierowania, współpraca i miejsca pracy",
        intro:
          "Specjaliści potrzebują jasnej drogi do informacji o usługach, zgłoszeniach, kryteriach, współpracy i kontaktach. Ten obszar ma być praktycznym miejscem pracy.",
        ctaLabel: "Skontaktuj się",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "Skierowania i zgłoszenia",
            body:
              "Strona dla specjalistów powinna wyjaśniać, jakie informacje są potrzebne, co dzieje się po zgłoszeniu i gdzie można uzyskać dalszą poradę."
          },
          {
            title: "Wsparcie dla miejsc pracy",
            id: "miejsca-pracy",
            body:
              "SÁÁ współpracuje z firmami i instytucjami, aby zwiększać wiedzę i poprawiać reakcje na problemy uzależnień w miejscach pracy."
          },
          {
            title: "Edukacja i współpraca",
            body:
              "Ten obszar może zawierać wykłady, pakiety edukacyjne, kontakty i materiały przydatne dla ochrony zdrowia, pomocy społecznej i edukacji."
          }
        ]
      },
      support: {
        slug: "wesprzyj-saa",
        title: "Wesprzyj SÁÁ",
        eyebrow: "Wsparcie, które ma znaczenie",
        intro:
          "Wsparcie przyjaciół SÁÁ pomaga utrzymać leczenie, poradnictwo, edukację i pracę społeczną. Strona powinna sprawiać, że wsparcie jest proste i przejrzyste.",
        ctaLabel: "Wesprzyj pracę",
        ctaHref: "https://saa.getjourney.io/",
        sections: [
          {
            title: "Zostań członkiem",
            body: "Członkowie pomagają tworzyć niezależną podstawę, na której opiera się siła organizacji."
          },
          {
            title: "Karty pamięci i darowizny",
            body:
              "Jasna ścieżka darowizn powinna wyjaśniać cel, proces płatności i to, jak wkład wspiera pracę."
          },
          {
            title: "Firmy i wydarzenia",
            body:
              "Firmy mogą wspierać projekty, uczestniczyć w zbiórkach albo łączyć się z edukacją i inicjatywami społecznymi."
          }
        ]
      },
      about: {
        slug: "o-saa",
        title: "O SÁÁ",
        eyebrow: "Cel, profesjonalizm i zaufanie",
        intro:
          "SÁÁ jest społeczną i profesjonalną siłą w leczeniu, poradnictwie i edukacji dotyczącej alkoholu, substancji psychoaktywnych i problemów uzależnienia.",
        ctaLabel: "Skontaktuj się",
        ctaHref: "mailto:saa@saa.is",
        sections: [
          {
            title: "Zupełnie inne życie",
            body:
              "Tożsamość i głos strony powinny zachować ten rdzeń: nadzieję, profesjonalizm, ludzkie podejście i jasną drogę do pomocy."
          },
          {
            title: "Przejrzystość",
            body:
              "Raporty roczne, polityki, informacje o zarządzie, statuty, prywatność i materiały dla mediów powinny być dostępne i łatwe do znalezienia."
          },
          {
            title: "Jasna struktura",
            body:
              "Nowa strona jest zbudowana tak, aby teksty i linki można było edytować w jednym jasnym pliku z treścią bez wchodzenia głęboko w React."
          }
        ]
      },
      urgent: {
        slug: "pilna-pomoc",
        title: "Jeśli sytuacja jest pilna",
        eyebrow: "Pilna pomoc",
        intro:
          "Jeśli życie, bezpieczeństwo lub zdrowie jest zagrożone, należy natychmiast skontaktować się ze służbami ratunkowymi. Ta strona powinna być jasna, krótka i widoczna.",
        ctaLabel: "Zadzwoń 112",
        ctaHref: "tel:112",
        sections: [
          {
            title: "Kiedy dzwonić pod 112?",
            body:
              "Zadzwoń pod 112, jeśli ktoś jest w sytuacji zagrożenia życia, ma ciężkie objawy odstawienia, zaburzenia świadomości, ryzyko samobójcze lub inne pilne zagrożenie zdrowia."
          },
          {
            title: "Kiedy kontaktować się z SÁÁ?",
            body:
              "Skontaktuj się z SÁÁ, gdy potrzebujesz poradnictwa, oceny potrzeb leczenia, rozmowy lub drogi do usług."
          }
        ]
      }
    }
  }
};
