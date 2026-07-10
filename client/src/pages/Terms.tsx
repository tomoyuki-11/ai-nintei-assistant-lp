import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * AI認定調査アシスタント 利用規約ページ
 */
export default function Terms() {
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
            <img src="/logo.png" alt="AI認定調査アシスタント" className="h-10 w-auto" />
            <span className="hidden sm:inline text-lg font-bold text-gray-900">AI認定調査アシスタント</span>
          </button>
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="text-sm"
          >
            ホームに戻る
          </Button>
        </div>
      </nav>

      {/* Content */}
      <main className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">利用規約</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第1条 総則</h2>
              <p>
                本利用規約は、「AI認定調査アシスタント」（以下「本サービス」）の利用に関する条件を定めるものです。利用者が本サービスを利用する場合、本規約に同意したものとみなされます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第2条 利用者の資格</h2>
              <p>本サービスは、以下の条件を満たす者のみが利用できます：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>介護認定調査に従事する認定調査員</li>
                <li>介護保険関連業務に従事する職員</li>
                <li>本規約に同意できる者</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第3条 利用料金</h2>
              <p>本サービスの利用料金は以下の通りです：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>個人プラン</strong>：月額 ¥2,980（月8回の調査使用、繰越なし）</li>
                <li><strong>単発利用</strong>：1回 ¥600（月額制限なし）</li>
              </ul>
              <p className="mt-4">
                料金は予告なく変更される場合があります。変更は、本ページに掲載した時点で有効となります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第4条 支払い</h2>
              <p>
                利用料金は、指定された支払い方法により、毎月の初日までにお支払いください。支払い期限を超過した場合、本サービスの利用が制限される場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第5条 禁止事項</h2>
              <p>利用者は、本サービスの利用にあたり、以下の行為を禁止します：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>法令に違反する行為</li>
                <li>他の利用者の権利を侵害する行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>不正なアクセスまたは改ざん</li>
                <li>本サービスの内容を無断で複製・配布する行為</li>
                <li>その他当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第6条 知的財産権</h2>
              <p>
                本サービスに関する一切の知的財産権は、当社またはその権利者に帰属します。利用者は、本サービスの利用に必要な範囲内でのみ、これらを利用できます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第7条 責任の制限</h2>
              <p>
                本サービスは「現状のまま」提供されます。当社は、本サービスの利用に起因する損害について、一切の責任を負いません。ただし、当社の故意または重大な過失による場合は、この限りではありません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第8条 サービスの中断・終了</h2>
              <p>
                当社は、以下の場合、予告なく本サービスの全部または一部を中断・終了できます：
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>システムメンテナンスが必要な場合</li>
                <li>利用者が本規約に違反した場合</li>
                <li>その他当社が必要と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第9条 利用者の責任</h2>
              <p>
                利用者は、本サービスの利用に関して自身が行った一切の行為について責任を負います。利用者の行為により当社が損害を被った場合、利用者はこれを賠償する義務を負います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第10条 規約の変更</h2>
              <p>
                当社は、法令の変更またはサービス改善のため、本規約を予告なく変更することがあります。変更後の規約は、本ページに掲載した時点で有効となります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第11条 準拠法</h2>
              <p>
                本規約は、日本国の法律に準拠し、日本国の裁判所の専属的管轄に服します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">第12条 お問い合わせ</h2>
              <p>
                本規約に関するご質問やご不明な点がございましたら、以下のメールアドレスまでお問い合わせください。
              </p>
              <p className="mt-4 font-bold">
                support@ai-nintei.example.com
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                最終更新日：2026年7月6日
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="AI認定調査アシスタント" className="h-8 w-auto mb-4" />
              <p className="text-sm text-gray-400">
                認定調査業務の効率化を支援するAIアシスタント
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition">ホーム</a></li>
                <li><a href="/#features" className="hover:text-white transition">機能</a></li>
                <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">法務</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition">プライバシーポリシー</a></li>
                <li><a href="/terms" className="hover:text-white transition">利用規約</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:support@ai-nintei.example.com" className="hover:text-white transition">お問い合わせ</a></li>
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
