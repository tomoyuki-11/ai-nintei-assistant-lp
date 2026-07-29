import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "@/components/pages/Article";
import { buildMetadata, SITE_URL } from "@/lib/seo";
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
    title: article ? `${article.title}｜AI認定調査アシスタント` : "記事が見つかりません｜AI認定調査アシスタント",
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
    datePublished: article.publishedDate,
    author: { "@type": "Organization", name: "AI認定調査アシスタント" },
    publisher: { "@type": "Organization", name: "AI認定調査アシスタント" },
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ArticleView article={article} />
    </>
  );
}
