import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, useParams } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { getArticleBySlug } from "@/data/articles";
import NotFound from "./NotFound";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSEO({
    title: article ? `${article.title}｜AI認定調査アシスタント` : "記事が見つかりません｜AI認定調査アシスタント",
    description: article?.description ?? "",
    path: `/articles/${slug ?? ""}`,
    noindex: !article,
  });

  useEffect(() => {
    if (!article) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedDate,
      author: { "@type": "Organization", name: "AI認定調査アシスタント" },
      publisher: { "@type": "Organization", name: "AI認定調査アシスタント" },
      mainEntityOfPage: `https://lp.ai-nintei-assistant.com/articles/${article.slug}`,
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <img src="/logo-full.png" alt="AI認定調査アシスタント" className="h-10 w-auto" />
          </button>
          <Button variant="outline" onClick={() => navigate("/")} className="text-sm">
            ホームに戻る
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="py-16 md:py-24">
        <article className="container max-w-3xl">
          <a
            href="/articles"
            onClick={(e) => {
              e.preventDefault();
              navigate("/articles");
            }}
            className="text-sm text-blue-600 hover:underline"
          >
            ← お役立ちコラム一覧へ
          </a>
          <p className="text-xs text-gray-400 mt-6 mb-2">{article.publishedDate}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">{article.title}</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-3 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-200 [&_blockquote]:bg-blue-50 [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:text-gray-600 [&_blockquote]:italic">
            {article.body}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 rounded-lg"
              onClick={() => navigate("/")}
            >
              サービス詳細・無料トライアルはこちら
            </Button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400 text-center">
              © 2026 AI認定調査アシスタント. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
