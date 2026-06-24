import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  HeartHandshake,
  LifeBuoy,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedHref } from "@/data/site-content";

const principleIcons = [ShieldCheck, HeartHandshake, Sparkles];
const actionIcons = {
  phone: PhoneCall,
  message: MessageCircle,
  steps: LifeBuoy,
  urgent: AlertTriangle
};

export function HomePage({ lang, content }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-statement">
          <div className="hero-copy">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1 className="hero-title">
              <Image
                className="hero-title__logo"
                src="/assets/icons/logo.svg"
                alt="SÁÁ"
                width={214}
                height={142}
                priority
              />
              <span>{content.home.title}</span>
            </h1>
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
            <span>{content.home.contactCard.intro}</span>
            <div className="hero-contact-actions">
              {content.home.contactCard.actions.map((action) => {
                const Icon = actionIcons[action.icon] ?? MessageCircle;

                return (
                  <SmartLink href={action.href} lang={lang} key={action.title}>
                    <span className="hero-contact-action__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{action.title}</strong>
                      <small>{action.text}</small>
                    </span>
                  </SmartLink>
                );
              })}
            </div>
          </aside>
        </div>
        <div className="hero-card-grid" aria-label={content.home.heroCardsLabel}>
          {content.heroCards.map((card) => (
            <Link className="image-card" href={localizedHref(lang, card.href)} key={card.title}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 900px) 33vw, 100vw"
                priority
              />
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
          const Icon = actionIcons[action.icon] ?? LifeBuoy;
          const content = (
            <>
              <div className="quick-card__top">
                <span className="quick-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="quick-card__label">{action.title}</span>
              </div>
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
              <Image src={campaign.image} alt={campaign.title} width={662} height={425} />
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
              <Image src={item.image} alt={item.title} width={760} height={420} />
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

function SmartLink({ children, href, lang }) {
  const resolvedHref = localizedHref(lang, href);

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return <a href={resolvedHref}>{children}</a>;
  }

  return <Link href={resolvedHref}>{children}</Link>;
}
