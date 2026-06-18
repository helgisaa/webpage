import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata = {
  title: "SÁÁ | Allt annað líf",
  description:
    "Nýr Next.js grunnur fyrir SÁÁ-vef sem leggur áherslu á fyrstu skref, meðferð, aðstandendur og skýra leiðsögn.",
  metadataBase: new URL("https://saa.is")
};

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <body className={redHatDisplay.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
