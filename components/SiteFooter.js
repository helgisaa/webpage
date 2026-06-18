import Link from "next/link";
import { contact, navigation } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-kicker">SÁÁ</p>
          <h2>Allt annað líf</h2>
          <p>
            Skýrari leið inn í þjónustu, fræðslu og stuðning fyrir fólk með fíknivanda,
            aðstandendur og fagfólk.
          </p>
        </div>
        <div>
          <h3>Samband</h3>
          <ul>
            <li>{contact.address}</li>
            <li>
              <a href={`tel:+354${contact.phone.replace(" ", "")}`}>Sími: {contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Flýtileiðir</h3>
          <ul>
            {navigation.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Styrkja</h3>
          <ul>
            <li>Kt: {contact.kt}</li>
            <li>Bankareikn.: {contact.bank}</li>
            <li>
              <Link href="/styrkja-saa">Skoða styrktarleiðir</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
