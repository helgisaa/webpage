import Image from "next/image";
import Link from "next/link";
import { contact, localizedHref, socialMedia } from "@/data/site-content";

export function SiteFooter({ lang, content }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image src="/assets/icons/logo.svg" alt="SÁÁ" width={180} height={74} />
          <p>{content.brandLine}</p>
        </div>

        <address className="footer-contact">
          <p>{contact.addressLine1}</p>
          <p>
            {contact.addressLine2} <a href={contact.mapUrl}>({content.footer.mapLabel})</a>
          </p>
          <p>
            {content.footer.phoneLabel}:{" "}
            <a href={`tel:+354${contact.phone.replace(" ", "")}`}>{contact.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </address>

        <div className="footer-links">
          <h2>{content.footer.shortcutsTitle}</h2>
          <ul>
            {content.footer.quickLinks.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link href={localizedHref(lang, item.href)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-certification">
          <Image src="/assets/images/jafnlaunavottun.png" alt="" width={190} height={190} />
          <p>{content.footer.equalPay}</p>
        </div>

        <div className="footer-social">
          <h2>{content.footer.followTitle}</h2>
          <div className="social-links">
            {socialMedia.map((item) => (
              <a href={item.href} aria-label={item.label} key={item.href}>
                {item.shortLabel}
              </a>
            ))}
          </div>
          <div className="footer-smile" aria-hidden="true" />
        </div>

        <div className="footer-legal">
          <p>Kt: {contact.kt}</p>
          <span aria-hidden="true">|</span>
          <p>Bankareikn.: {contact.bank}</p>
        </div>
      </div>
    </footer>
  );
}
