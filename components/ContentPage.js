import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedHref } from "@/data/site-content";

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

      <section className="section content-sections">
        {page.sections.map((section) => (
          <article id={section.id} className="content-block" key={section.title}>
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
