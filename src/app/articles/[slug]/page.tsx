import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/pages/Article";
import { buildMetadata, SITE_URL, OG_IMAGE } from "@/lib/seo";
import { ARTICLES, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return buildMetadata({
    title: article ? `${article.metaTitle ?? article.title}｜AI認定調査アシスタント` : "記事が見つかりません｜AI認定調査アシスタント",
    description: article?.description ?? "",
    path: `/articles/${slug}`,
    noindex: !article,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: [OG_IMAGE],
    datePublished: article.publishedDate,
    author: { "@type": "Organization", name: "AI認定調査アシスタント" },
    publisher: {
      "@type": "Organization",
      name: "AI認定調査アシスタント",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` },
    },
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "お役立ちコラム", item: `${SITE_URL}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/articles/${article.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleView article={article} />
    </>
  );
}
