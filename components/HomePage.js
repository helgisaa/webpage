import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedHref } from "@/data/site-content";

const principleIcons = [ShieldCheck, HeartHandshake, Sparkles];

export function HomePage({ lang, content }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-statement">
          <div className="hero-copy">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1>{content.home.title}</h1>
            <p>{content.home.intro}</p>
            <div className="hero-actions">
              <ButtonLink href={localizedHref(lang, content.home.primaryHref)}>
                {content.labels.startHere}
              </ButtonLink>
              <ButtonLink href="tel:+3545307600" variant="secondary">
                {content.home.phoneCta}
              </ButtonLink>
            </div>
          </div>
          <aside className="hero-contact-card">
            <p>{content.home.contactCard.eyebrow}</p>
            <h2>{content.home.contactCard.title}</h2>
            <Link href={localizedHref(lang, content.home.contactCard.href)}>
              {content.home.contactCard.linkLabel}
            </Link>
          </aside>
        </div>
        <div className="hero-card-grid" aria-label={content.home.heroCardsLabel}>
          {content.heroCards.map((card) => (
            <Link className="image-card" href={localizedHref(lang, card.href)} key={card.title}>
              <Image src={card.image} alt="" fill sizes="(max-width: 900px) 33vw, 100vw" priority />
              <span className="image-card__content">
                <span>{card.eyebrow}</span>
                <strong>{card.title}</strong>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--gray">
        <div className="section-heading">
          <p className="eyebrow">{content.home.services.eyebrow}</p>
          <h2>{content.home.services.title}</h2>
        </div>
        <div className="service-grid">
          {content.serviceHighlights.map((service) => (
            <Link className="service-card" href={localizedHref(lang, service.href)} key={service.title}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="quick-panel" aria-label={content.home.quickActionsLabel}>
        {content.quickActions.map((action) => {
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
            <Link className="quick-card" href={localizedHref(lang, action.href)} key={action.title}>
              {content}
            </Link>
          );
        })}
      </section>

      <section className="section audience-band">
        {content.audiencePaths.map((path) => (
          <article key={path.title}>
            <h2>{path.title}</h2>
            <p>{path.text}</p>
            <ButtonLink href={localizedHref(lang, path.href)} variant="secondary">
              {content.labels.readPath}
            </ButtonLink>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{content.home.campaigns.eyebrow}</p>
          <h2>{content.home.campaigns.title}</h2>
        </div>
        <div className="campaign-grid">
          {content.campaigns.map((campaign) => (
            <Link className="campaign-card" href={localizedHref(lang, campaign.href)} key={campaign.title}>
              <Image src={campaign.image} alt="" width={662} height={425} />
              <div>
                <h3>{campaign.title}</h3>
                <p>{campaign.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">{content.home.principles.eyebrow}</p>
          <h2>{content.home.principles.title}</h2>
        </div>
        <div className="principles">
          {content.home.principles.items.map((item, index) => {
            const Icon = principleIcons[index] ?? Sparkles;

            return (
              <article key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--gray">
        <div className="section-heading">
          <p className="eyebrow">{content.home.news.eyebrow}</p>
          <h2>{content.home.news.title}</h2>
        </div>
        <div className="news-grid">
          {content.news.map((item) => (
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
