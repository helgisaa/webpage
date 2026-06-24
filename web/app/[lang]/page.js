import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import {
  getLanguageAlternates,
  getSiteContent,
  isSupportedLanguage,
  supportedLanguages
} from "@/data/site-content";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    return {};
  }

  const content = getSiteContent(lang);

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      languages: getLanguageAlternates()
    }
  };
}

export default async function Page({ params }) {
  const { lang } = await params;

  if (!isSupportedLanguage(lang)) {
    notFound();
  }

  return <HomePage lang={lang} content={getSiteContent(lang)} />;
}
