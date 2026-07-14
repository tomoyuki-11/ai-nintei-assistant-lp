import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const ROWS: { term: string; desc: React.ReactNode }[] = [
  { term: "販売事業者", desc: "細見 公人" },
  { term: "運営統括責任者", desc: "細見 公人" },
  {
    term: "所在地",
    desc: "ご請求をいただいた場合、遅滞なく開示いたします。",
  },
  {
    term: "電話番号",
    desc: "ご請求をいただいた場合、遅滞なく開示いたします。",
  },
  { term: "メールアドレス", desc: "itcaremanagement.001@gmail.com" },
  {
    term: "販売価格",
    desc: (
      <ul className="list-disc list-inside space-y-1">
        <li>トライアル：無料（14日間・3回まで）</li>
        <li>月額プラン：¥2,980／月（税込・月8回まで）</li>
        <li>従量課金：¥600／回（税込）</li>
      </ul>
    ),
  },
  {
    term: "商品代金以外に必要な料金",
    desc: "インターネット接続料金・通信料金は利用者様のご負担となります。",
  },
  {
    term: "お支払い方法",
    desc: "クレジットカード決済（Stripe社の決済システムを利用）",
  },
  {
    term: "お支払い時期",
    desc: "月額プランは申込時に課金され、以後は毎月同日に自動課金されます。従量課金はクレジット購入時に都度課金されます。",
  },
  {
    term: "サービス提供時期",
    desc: "決済完了後、直ちにご利用いただけます。",
  },
  {
    term: "返品・キャンセル・解約について",
    desc: "本サービスはデジタルサービスの性質上、提供開始後の返金には応じられません。月額プランはいつでも解約手続きが可能で、解約後は次回更新日以降の課金が停止します（日割り返金は行いません）。",
  },
  {
    term: "動作環境",
    desc: "インターネット接続環境および対応ブラウザ（Chrome、Safari等の最新版）を搭載したスマートフォンまたはパソコン",
  },
];

export default function TokushoHo() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">特定商取引法に基づく表記</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-8">
              特定商取引法に基づき、以下のとおり表示いたします。
            </p>

            <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
              {ROWS.map((row) => (
                <div key={row.term} className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 shrink-0 bg-gray-50 px-5 py-4 font-bold text-gray-900 text-sm">
                    {row.term}
                  </div>
                  <div className="flex-1 px-5 py-4 text-sm text-gray-700">{row.desc}</div>
                </div>
              ))}
            </div>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">最終更新日：2026年7月13日</p>
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
