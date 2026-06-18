import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { contact, languages, localizedHref } from "@/data/site-content";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteHeader({ lang, content }) {
  const phoneHref = `tel:+354${contact.phone.replace(" ", "")}`;

  return (
    <header className="site-header">
      <div className="topbar">
        <span>{content.brandLine}</span>
        <a href={phoneHref}>
          {content.labels.phonePrefix} {contact.phone}
        </a>
      </div>
      <div className="header-inner">
        <Link className="brand" href={`/${lang}`} aria-label="SÁÁ">
          <Image src="/assets/icons/logo.svg" alt="SÁÁ" width={118} height={48} priority />
        </Link>

        <nav className="main-nav" aria-label={content.labels.mainNav}>
          {content.megaMenu.map((item) => (
            <div className="mega-nav-item" key={item.href}>
              <Link className="mega-nav-trigger" href={localizedHref(lang, item.href)}>
                {item.label}
              </Link>
              <div className="mega-menu">
                <div className="mega-menu-intro">
                  <p>{item.label}</p>
                  <span>{item.description}</span>
                </div>
                <div className="mega-menu-columns">
                  {item.columns.map((column) => (
                    <section key={column.title}>
                      <h2>{column.title}</h2>
                      {column.links.map((link) => (
                        <Link key={`${column.title}-${link.href}-${link.label}`} href={localizedHref(lang, link.href)}>
                          {link.label}
                        </Link>
                      ))}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-pill" href={phoneHref}>
            <Phone size={18} aria-hidden="true" />
            {contact.phone}
          </a>
          <ButtonLink href={localizedHref(lang, content.home.primaryHref)}>{content.labels.primaryCta}</ButtonLink>
          <div className="language-switcher" aria-label={content.labels.languages}>
            {languages.map((language) => (
              <Link
                aria-current={language.code === lang ? "page" : undefined}
                href={`/${language.code}`}
                key={language.code}
              >
                {language.shortName}
              </Link>
            ))}
          </div>
        </div>

        <details className="mobile-menu">
          <summary aria-label={content.labels.mobileMenu}>
            <Menu aria-hidden="true" />
          </summary>
          <div className="mobile-menu-panel">
            {content.megaMenu.map((item) => (
              <details className="mobile-mega-group" key={item.href}>
                <summary>{item.label}</summary>
                <div>
                  <Link href={localizedHref(lang, item.href)}>{item.description}</Link>
                  {item.columns.map((column) => (
                    <section key={column.title}>
                      <h2>{column.title}</h2>
                      {column.links.map((link) => (
                        <Link key={`${column.title}-${link.href}-${link.label}`} href={localizedHref(lang, link.href)}>
                          {link.label}
                        </Link>
                      ))}
                    </section>
                  ))}
                </div>
              </details>
            ))}
            <div className="language-switcher language-switcher--mobile" aria-label={content.labels.languages}>
              {languages.map((language) => (
                <Link
                  aria-current={language.code === lang ? "page" : undefined}
                  href={`/${language.code}`}
                  key={language.code}
                >
                  {language.shortName}
                </Link>
              ))}
            </div>
            <ButtonLink href={localizedHref(lang, content.quickActions[2].href)} variant="secondary">
              {content.labels.emergency}
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}
