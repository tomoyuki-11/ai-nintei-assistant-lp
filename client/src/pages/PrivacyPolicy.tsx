import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * AI認定調査アシスタント プライバシーポリシーページ
 */
export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 個人情報の定義</h2>
              <p>
                本プライバシーポリシーにおいて、「個人情報」とは、利用者が本サービスを利用する際に提供する、利用者を特定できる情報を指します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 収集する情報</h2>
              <p>本サービスでは、以下の情報を収集する場合があります：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>ユーザー登録時に提供いただく情報（メールアドレス、氏名等）</li>
                <li>認定調査の音声録音データ</li>
                <li>サービス利用ログ（アクセス日時、機能利用履歴等）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 音声データの取扱い</h2>
              <p className="font-bold text-blue-600">
                重要：AI学習には一切使用いたしません
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>提供いただいた音声データは、文字起こしと認定調査項目の自動出力のためのみに使用します</li>
                <li>AI モデルの学習・改善には使用いたしません</li>
                <li>音声データは、アップロード日から10日後に自動的に削除されます</li>
                <li>削除後は復旧できませんので、必要に応じて事前にバックアップをお取りください</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 情報の利用目的</h2>
              <p>収集した情報は、以下の目的でのみ使用します：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>本サービスの提供・運営</li>
                <li>利用者サポートおよび問い合わせ対応</li>
                <li>サービス改善のための統計分析（個人を特定できない形式）</li>
                <li>利用規約違反の検出・防止</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 情報の第三者提供</h2>
              <p>
                利用者の同意なく、個人情報を第三者に提供することはありません。ただし、以下の場合は例外とします：
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>法律により開示が要求された場合</li>
                <li>人の生命、身体または財産の保護のために必要と判断される場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 情報セキュリティ</h2>
              <p>
                当社は、収集した個人情報を適切に管理し、不正アクセス、改ざん、漏洩等から保護するため、必要な技術的・組織的措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 利用者の権利</h2>
              <p>
                利用者は、自身の個人情報について、開示、修正、削除を請求する権利を有します。請求は、お問い合わせフォームよりご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. 本ポリシーの変更</h2>
              <p>
                当社は、法令の変更またはサービス改善のため、本ポリシーを予告なく変更することがあります。変更後のポリシーは、本ページに掲載した時点で有効となります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. お問い合わせ</h2>
              <p>
                本ポリシーに関するご質問やご不明な点がございましたら、以下のメールアドレスまでお問い合わせください。
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
