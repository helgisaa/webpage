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
  Sparkles,
  SunMedium,
  Users,
  House,
  KeyRound
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

const serviceBandIcons = {
  message: MessageCircle,
  shield: ShieldCheck,
  home: House,
  sun: SunMedium,
  key: KeyRound,
  sparkles: Sparkles,
  users: Users
};

export function HomePage({ lang, content }) {
  return (
    <>
      <section className="home-hero">
        <div className="service-band-wrap">
          <div className="service-band-header">
            <h2>{content.home.servicePuzzle.title}</h2>
          </div>
          <div className="service-band" aria-label={content.home.servicePuzzle.title}>
            {content.home.servicePuzzle.items.map((item) => {
              const Icon = serviceBandIcons[item.icon] ?? Sparkles;

              return (
                <Link
                  className={`service-band__item service-band__item--${item.color}`}
                  href={localizedHref(lang, item.href)}
                  key={item.title}
                >
                  <span className="service-band__main">
                    <span className="service-band__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="service-band__text">
                      <strong>{item.title}</strong>
                      {item.details?.length ? (
                        <span className="service-band__details" aria-hidden="true">
                          {item.details.map((detail) => (
                            <span key={detail}>{detail}</span>
                          ))}
                        </span>
                      ) : null}
                    </span>
                  </span>
                  <span className="service-band__arrow">
                    <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

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
