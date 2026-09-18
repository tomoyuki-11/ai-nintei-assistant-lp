"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Article as ArticleData } from "@/data/articles";

export default function Article({ article }: { article: ArticleData }) {
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
        <article className="container max-w-3xl">
          <a
            href="/articles"
            onClick={(e) => {
              e.preventDefault();
              router.push("/articles");
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
              onClick={() => router.push("/")}
            >
              サービス詳細・無料トライアルはこちら
            </Button>
          </div>
        </article>
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
