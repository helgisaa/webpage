import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/data/site-content";

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | SÁÁ`,
    description: page.intro
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return <ContentPage page={page} />;
}
