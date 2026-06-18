import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import {
  audiencePaths,
  campaigns,
  heroCards,
  news,
  quickActions,
  serviceHighlights
} from "@/data/site-content";

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Nýr SÁÁ-vefur</p>
          <h1>Hjálp, stuðningur og fræðsla þegar næsta skref þarf að vera skýrt.</h1>
          <p>
            Vefurinn er hugsaður sem örugg þjónustugátt: fyrir fólk í leit að hjálp,
            aðstandendur, fagfólk og þau sem vilja styðja starfið.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/eg-tharf-hjalp">Ég þarf hjálp</ButtonLink>
            <ButtonLink href="/adstandendur" variant="secondary">
              Ég er aðstandandi
            </ButtonLink>
          </div>
        </div>
        <div className="hero-card-grid" aria-label="Helstu leiðir">
          {heroCards.map((card) => (
            <Link className="image-card" href={card.href} key={card.title}>
              <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" priority />
              <span className="image-card__content">
                <span>{card.eyebrow}</span>
                <strong>{card.title}</strong>
                <small>{card.text}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="quick-panel" aria-label="Hröð hjálp">
        {quickActions.map((action) => {
          const content = (
            <>
              <span>{action.title}</span>
              <p>{action.text}</p>
              <strong>{action.action}</strong>
            </>
          );

          if (action.href.startsWith("tel:")) {
            return (
              <a className="quick-card" href={action.href} key={action.title}>
                {content}
              </a>
            );
          }

          return (
            <Link className="quick-card" href={action.href} key={action.title}>
              {content}
            </Link>
          );
        })}
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">Leiðarljós</p>
          <h2>Vefurinn byrjar á stöðu manneskjunnar, ekki skipuriti stofnunarinnar.</h2>
        </div>
        <div className="principles">
          <article>
            <ShieldCheck aria-hidden="true" />
            <h3>Öruggt</h3>
            <p>Skýrt um bráðatilvik, trúnað og hvenær þarf að leita beint í neyðarþjónustu.</p>
          </article>
          <article>
            <HeartHandshake aria-hidden="true" />
            <h3>Mannlegt</h3>
            <p>Texti sem mætir fólki án skammar og leiðir áfram með rólegu, beinu máli.</p>
          </article>
          <article>
            <Sparkles aria-hidden="true" />
            <h3>Aðgerðarhæft</h3>
            <p>Hver lykilsíða svarar: hvað get ég gert núna og hvert fer ég næst?</p>
          </article>
        </div>
      </section>

      <section className="section section--gray">
        <div className="section-heading">
          <p className="eyebrow">Meðferð og þjónusta</p>
          <h2>Helstu þjónustuleiðir á einum stað.</h2>
        </div>
        <div className="service-grid">
          {serviceHighlights.map((service) => (
            <Link className="service-card" href={service.href} key={service.title}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section audience-band">
        {audiencePaths.map((path) => (
          <article key={path.title}>
            <h2>{path.title}</h2>
            <p>{path.text}</p>
            <ButtonLink href={path.href} variant="secondary">
              Skoða leið
            </ButtonLink>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Í brennidepli</p>
          <h2>Verkefni sem eiga að vera auðfundin.</h2>
        </div>
        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <Link className="campaign-card" href={campaign.href} key={campaign.title}>
              <Image src={campaign.image} alt="" width={662} height={425} />
              <div>
                <h3>{campaign.title}</h3>
                <p>{campaign.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--gray">
        <div className="section-heading">
          <p className="eyebrow">Fréttir og viðburðir</p>
          <h2>Fréttir neðar á forsíðu, ekki fyrir framan hjálparleiðirnar.</h2>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <a className="news-card" href={item.href} key={item.title}>
              <Image src={item.image} alt="" width={760} height={420} />
              <div>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
