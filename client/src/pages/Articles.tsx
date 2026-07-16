import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { ARTICLES } from "@/data/articles";

export default function Articles() {
  useSEO({
    title: "お役立ちコラム｜AI認定調査アシスタント",
    description: "認定調査・特記事項作成に関する現場の悩みと解決方法を紹介するコラムです。認定調査員・ケアマネジャー向けの業務効率化のヒントをお届けします。",
    path: "/articles",
  });

  const [, navigate] = useLocation();

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
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">お役立ちコラム</h1>
          <p className="text-gray-600 mb-12">
            認定調査・特記事項作成にまつわる現場の悩みと、その解決方法をご紹介します。
          </p>

          <div className="space-y-8">
            {ARTICLES.map((article) => (
              <a
                key={article.slug}
                href={`/articles/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/articles/${article.slug}`);
                }}
                className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition"
              >
                <p className="text-xs text-gray-400 mb-2">{article.publishedDate}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
                <p className="text-gray-600 leading-relaxed">{article.excerpt}</p>
                <span className="inline-block mt-4 text-sm font-bold text-blue-600">続きを読む →</span>
              </a>
            ))}
          </div>
        </div>
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
