import { notFound } from "next/navigation";
import { Red_Hat_Display } from "next/font/google";
import "../globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteContent, isSupportedLanguage, supportedLanguages } from "@/data/site-content";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  const content = getSiteContent(lang);

  return (
    <html lang={lang}>
      <body className={redHatDisplay.className}>
        <SiteHeader lang={lang} content={content} />
        <main>{children}</main>
        <SiteFooter lang={lang} content={content} />
      </body>
    </html>
  );
}
