import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export function ContentPage({ page }) {
  return (
    <>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <ButtonLink href={page.ctaHref}>{page.ctaLabel}</ButtonLink>
        </div>
      </section>

      <section className="section content-sections">
        {page.sections.map((section) => (
          <article id={section.id} className="content-block" key={section.title}>
            <div>
              <span>{section.id ? `#${section.id}` : "SÁÁ"}</span>
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
