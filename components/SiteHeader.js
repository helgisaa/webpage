"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { languages, localizedHref } from "@/data/site-content";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteHeader({ lang, content }) {
  const [isCompact, setIsCompact] = useState(false);
  const isCompactRef = useRef(false);

  useEffect(() => {
    const updateHeaderState = () => {
      const shouldCompact = isCompactRef.current ? window.scrollY > 32 : window.scrollY > 96;

      if (shouldCompact !== isCompactRef.current) {
        isCompactRef.current = shouldCompact;
        setIsCompact(shouldCompact);
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header className={`site-header${isCompact ? " site-header--compact" : ""}`}>
      {content.announcement ? (
        <a className="announcement-banner" href={content.announcement.href} target="_blank" rel="noreferrer">
          <span className="announcement-banner__logo">
            <Image src={content.announcement.image} alt="" width={220} height={83} priority />
          </span>
          <span className="announcement-banner__copy">
            <span>{content.announcement.label}</span>
            <strong>{content.announcement.title}</strong>
            <small>{content.announcement.meta}</small>
          </span>
          <span className="announcement-banner__cta">{content.announcement.linkLabel}</span>
        </a>
      ) : null}

      <div className="header-inner">
        <Link className="brand" href={`/${lang}`} aria-label="SÁÁ">
          <Image src="/assets/icons/logo.svg" alt="SÁÁ" width={118} height={78} priority />
          <span className="brand-tagline">{content.brandLine}</span>
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
