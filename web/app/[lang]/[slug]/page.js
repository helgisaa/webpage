import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import {
  getAllPageParams,
  getLanguageAlternates,
  getPageEntryBySlug,
  getSiteContent,
  isSupportedLanguage
} from "@/data/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPageParams();
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;

  if (!isSupportedLanguage(lang)) {
    return {};
  }

  const entry = getPageEntryBySlug(lang, slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.page.title} | SÁÁ`,
    description: entry.page.intro,
    alternates: {
      languages: getLanguageAlternates(entry.key)
    }
  };
}

export default async function Page({ params }) {
  const { lang, slug } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  const entry = getPageEntryBySlug(lang, slug);

  if (!entry) {
    notFound();
  }

  return <ContentPage lang={lang} content={getSiteContent(lang)} page={entry.page} />;
}
