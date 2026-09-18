"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ARTICLES } from "@/data/articles";

export default function Articles() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <Image src="/logo-full.png" alt="AI認定調査アシスタント" width={1115} height={212} className="h-10 w-auto" />
          </button>
          <Button variant="outline" onClick={() => router.push("/")} className="text-sm">
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
                  router.push(`/articles/${article.slug}`);
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="inline-block bg-white rounded-lg px-4 py-2.5 mb-4">
                <Image src="/footer-logo.png" alt="AI認定調査アシスタント" width={1109} height={204} className="h-8 w-auto" />
              </div>
              <p className="text-sm text-gray-400">
                認定調査業務の効率化を実現するAIアシスタント
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">ホーム</a></li>
                <li><a href="/#features" className="hover:text-white transition">機能</a></li>
                <li><a href="/#security" className="hover:text-white transition">セキュリティ</a></li>
                <li><a href="/#pricing" className="hover:text-white transition">料金</a></li>
                <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/articles" className="hover:text-white transition">お役立ちコラム</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">法務</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition">プライバシーポリシー</a></li>
                <li><a href="/terms" className="hover:text-white transition">利用規約</a></li>
                <li><a href="/tokushoho" className="hover:text-white transition">特定商取引法に基づく表記</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/contact" className="hover:text-white transition">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
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
