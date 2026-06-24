import Image from "next/image";
import { ArrowRight, CalendarDays, HeartPulse, Home, Hospital, Network, Pill, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedHref } from "@/data/site-content";

const resourceIcons = {
  hospital: Hospital,
  calendar: CalendarDays,
  users: Users,
  home: Home,
  pill: Pill,
  network: Network,
  heart: HeartPulse
};

const accentClassByIcon = {
  hospital: "accent-brand",
  calendar: "accent-yellow",
  users: "accent-pink",
  home: "accent-purple",
  pill: "accent-green",
  network: "accent-yellow",
  heart: "accent-brand"
};

export function ContentPage({ lang, content, page }) {
  return (
    <>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <ButtonLink href={localizedHref(lang, page.ctaHref)}>{page.ctaLabel}</ButtonLink>
        </div>
      </section>

      {page.treatmentResources ? (
        <TreatmentResources lang={lang} page={page} />
      ) : null}

      <section className="section content-sections">
        {page.sections.map((section) => (
          <article id={section.id} className="content-block accent-brand" key={section.title}>
            <div>
              <span>{section.id ? `#${section.id}` : content.labels.sectionTag}</span>
              <h2>{section.title}</h2>
            </div>
            <p>{section.body}</p>
            <ArrowRight aria-hidden="true" />
          </article>
        ))}
      </section>
    </>
  );
}

function TreatmentResources({ lang, page }) {
  return (
    <section className="section treatment-resources" aria-label={page.treatmentResources.heading}>
      <div className="treatment-overview">
        <div>
          <p className="eyebrow">{page.treatmentResources.eyebrow}</p>
          <h2>{page.treatmentResources.heading}</h2>
          <p>{page.treatmentResources.text}</p>
        </div>
        <div className="treatment-note">
          <Network aria-hidden="true" />
          <p>{page.treatmentResources.note}</p>
        </div>
      </div>

      <div className="resource-card-grid">
        {page.treatmentResources.items.map((item) => {
          const Icon = resourceIcons[item.icon] ?? HeartPulse;
          const accentClass = accentClassByIcon[item.icon] ?? "accent-brand";

          return (
            <article className={`resource-card ${accentClass}`} id={item.id} key={item.id}>
              <div className="resource-card__media">
                <Image src={item.image} alt={item.title} width={662} height={425} />
                <span>
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <div className="resource-card__body">
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <strong>{item.duration}</strong>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="treatment-pathway">
        <p className="eyebrow">{page.treatmentResources.pathwayEyebrow}</p>
        <h2>{page.treatmentResources.pathwayTitle}</h2>
        <div>
          {page.treatmentResources.pathway.map((step, index) => {
            const Icon = resourceIcons[step.icon] ?? HeartPulse;
            const accentClass = accentClassByIcon[step.icon] ?? "accent-brand";

            return (
              <article className={accentClass} key={step.title}>
                <span>{index + 1}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="treatment-cta">
        <h2>{page.treatmentResources.ctaTitle}</h2>
        <p>{page.treatmentResources.ctaText}</p>
        <ButtonLink href={localizedHref(lang, page.ctaHref)}>{page.ctaLabel}</ButtonLink>
      </div>
    </section>
  );
}
