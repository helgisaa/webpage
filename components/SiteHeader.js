import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { contact, navigation } from "@/data/site-content";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar">
        <span>Allt annað líf</span>
        <a href={`tel:+354${contact.phone.replace(" ", "")}`}>s. {contact.phone}</a>
      </div>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="SÁÁ forsíða">
          <Image src="/assets/icons/logo.svg" alt="SÁÁ" width={118} height={48} priority />
        </Link>

        <nav className="main-nav" aria-label="Aðalvalmynd">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="phone-pill" href={`tel:+354${contact.phone.replace(" ", "")}`}>
            <Phone size={18} aria-hidden="true" />
            {contact.phone}
          </a>
          <ButtonLink href="/eg-tharf-hjalp">Byrja hér</ButtonLink>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Opna valmynd">
            <Menu aria-hidden="true" />
          </summary>
          <div className="mobile-menu-panel">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/hjalp-strax" variant="secondary">
              Hjálp strax
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}
