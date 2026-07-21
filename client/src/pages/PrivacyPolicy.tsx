import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

/**
 * AI認定調査アシスタント プライバシーポリシーページ
 */
export default function PrivacyPolicy() {
  useSEO({
    title: "プライバシーポリシー｜AI認定調査アシスタント",
    description: "AI認定調査アシスタントにおける個人情報の収集・利用・管理方針について説明します。",
    path: "/privacy",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
          <p className="text-sm text-gray-500 mb-8">制定日：2026年7月14日／最終改定日：2026年7月21日</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              本プライバシーポリシー（以下「本ポリシー」）は、AI認定調査アシスタント（以下「本サービス」）において、運営者がユーザーの個人情報をどのように収集・利用・管理するかを説明するものです。本サービスをご利用になる前に、本ポリシーをよくお読みください。
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 運営者について</h2>
              <p>本サービスは個人が開発・運営しています（法人・団体ではありません）。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>運営者：細見　公人</li>
                <li>サービスURL：https://ai-nintei-assistant.com/</li>
                <li>お問い合わせ：itcaremanagement.001@gmail.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 収集する情報</h2>
              <p>本サービスでは、以下の情報を収集します。</p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">（1）アカウント情報</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>メールアドレス（ログインID・連絡先として使用）</li>
                <li>パスワード（bcrypt等により不可逆なハッシュ化処理を施した上で保管します。元のパスワードは保管しません）</li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">（2）利用・決済情報</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>月ごとのサービス利用回数</li>
                <li>加入プランの種別および状態（トライアル・従量課金・月額）</li>
                <li>Stripe社が発行する顧客ID・サブスクリプションID（クレジットカード番号等の決済情報は、本サービスのサーバーには一切保存しません）</li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">（3）調査記録（保存設定による）</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>文字起こしテキスト：録音した音声の文字起こし結果</li>
                <li>整形テキスト：AIが認定調査形式に整形した記録</li>
                <li>作成日時・作成者名</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                ※ 保存設定を「確認後に保存」にした場合、ユーザーが明示的に保存を選択した場合のみデータベースに記録されます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 音声データの取り扱い</h2>
              <p>
                録音した音声ファイルは、本サービスのサーバーには保存されません。
                音声データは文字起こし処理のためにOpenAI社のWhisper APIへ送信され、テキスト変換の完了後にサーバー上から消去されます。サーバーが音声データを保持するのは、文字起こし処理が完了するまでの一時的な間のみです。
              </p>
              <p className="text-sm text-gray-500 mt-4">
                ※ OpenAI社における音声データの取り扱いについては、OpenAI社のプライバシーポリシーをご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 外部サービスへの情報送信</h2>
              <p>
                本サービスは、サービスの提供にあたり以下の外部サービスへデータを送信します。本サービスをご利用いただくことで、以下の各社のプライバシーポリシーにも同意したものとみなします。
              </p>
              <p className="font-bold text-blue-600 mt-4">
                外国にある第三者への提供（越境移転）について
              </p>
              <p className="mt-2">
                OpenAI・Anthropicはいずれも米国に所在する事業者であり、送信されたデータは米国に所在するサーバーで処理されます。これは個人情報保護法上の「外国にある第三者への個人データの提供」に該当します。両社とも、標準契約条項（SCC）等に基づくデータ処理契約（DPA）を締結し、適切な安全管理措置を講じた上でデータを取り扱っています。各社の体制の詳細は、下記のプライバシーポリシーをご確認ください。
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">OpenAI（音声文字起こし）</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>送信するデータ：録音した音声データ</li>
                <li>目的：Whisper APIを用いた音声の文字起こし</li>
                <li>
                  プライバシーポリシー：
                  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://openai.com/policies/privacy-policy
                  </a>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Anthropic（AI整形）</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>送信するデータ：文字起こしテキスト</li>
                <li>目的：Claude APIを用いた認定調査記録への整形・構造化</li>
                <li>
                  プライバシーポリシー：
                  <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.anthropic.com/privacy
                  </a>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Stripe（決済処理）</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>送信するデータ：決済に必要な情報（Stripeの画面上で直接入力。クレジットカード情報は本サービスのサーバーを経由しません）</li>
                <li>目的：月額プランおよびクレジット購入の決済処理</li>
                <li>
                  プライバシーポリシー：
                  <a href="https://stripe.com/jp/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://stripe.com/jp/privacy
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 要介護認定対象者の情報について</h2>
              <p>
                本サービスで録音・入力される調査内容には、要介護認定の対象となる方（以下「調査対象者」）の氏名・健康状態・日常生活の状況・家族構成などの個人情報が含まれる可能性があります。
              </p>
              <p className="mt-4">
                これらの情報は、文字起こしおよびAI整形の処理を通じて上記の外部サービスへ送信されます。また、保存設定に応じてデータベースに記録されます。
              </p>
              <p className="font-bold text-blue-600 mt-4">
                調査対象者の個人情報は適切に保護されており、AIモデルの学習・訓練に利用されることはありません。
              </p>
              <p className="mt-4">
                送信先であるOpenAI・Anthropicの各社においても、APIを通じて送信されたデータをモデルの学習に利用しないことが公式に明記されています（詳細は「8. AIの学習への利用について」をご参照ください）。また、通信はすべてHTTPS（SSL/TLS暗号化）で保護され、記録データは整形完了後5日で自動的に削除されます。
              </p>
              <p className="text-sm text-gray-500 mt-4">
                ※ 本サービスをご利用の調査員は、調査対象者ご本人またはご家族に対して本サービスの利用（録音・AIによる処理を含む）について説明し、同意を得た上でご使用ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. データの保管・セキュリティ</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>データはAWS（Amazon Web Services）上のサーバーで管理しています</li>
                <li>通信はすべてHTTPS（SSL/TLS暗号化）で行われます</li>
                <li>パスワードはハッシュ化して保管し、元のパスワードは保持しません</li>
                <li>ログイン状態は認証トークン（JWT）としてお使いのデバイスのlocalStorageに保存されます</li>
                <li>Google Analyticsなどのアクセス解析ツールは使用していません</li>
                <li>認証Cookieは使用していません</li>
                <li>運営者は、システム障害への対応など運用上やむを得ず必要な場合を除き、保存された調査記録の内容を閲覧することはありません</li>
              </ul>
              <p className="mt-4">
                万が一、個人データの漏えい・滅失・毀損等の事案が発生した場合には、個人情報保護法等の関係法令に基づき、個人情報保護委員会への報告および本人への通知を速やかに行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. データの保持期間と削除</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>調査記録</strong>：AIによる整形完了から5日が経過した時点で自動的に削除されます。それより前に削除したい場合は、履歴画面からいつでも手動で削除できます。</li>
                <li><strong>アカウントの削除</strong>：アカウントの削除をご希望の場合は、お問い合わせ先までご連絡ください。削除後はデータを復元できません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. AIの学習への利用について</h2>
              <p className="font-bold text-blue-600">
                本サービスを通じて送信された音声データ・文字起こしテキスト・調査記録は、AIモデルの学習・訓練には使用されません。
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>運営者：収集したデータをAIの学習目的で使用することはありません。</li>
                <li>OpenAI（Whisper API）：2023年3月1日以降、API経由で送信されたデータはモデルの学習・改善には使用されないことが公式ドキュメントで明記されています。</li>
                <li>Anthropic（Claude API）：APIの利用規約（Commercial Terms）において「顧客コンテンツをモデルの学習に使用しない」ことが明記されています。</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                ※ 上記は各社のポリシーに基づく記載です。各社のポリシー変更により取り扱いが変わる場合があります。最新情報は各社の利用規約・プライバシーポリシーをご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. 情報の利用目的</h2>
              <p>収集した情報は以下の目的にのみ利用します。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>本サービスの提供・維持・改善</li>
                <li>ユーザー認証およびアカウント管理</li>
                <li>利用プランおよびクレジットの管理</li>
                <li>ご利用に関するお問い合わせへの対応</li>
                <li>法令に基づく開示が必要な場合の対応</li>
              </ul>
              <p className="mt-4">
                上記以外の目的での利用や、第三者への個人情報の売買・無断提供は行いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. ユーザーの権利</h2>
              <p>ユーザーは以下の権利を有します。</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>保存された調査記録を履歴画面から確認・削除する権利</li>
                <li>アカウントの削除を依頼する権利</li>
                <li>保有する個人情報の開示・訂正を求める権利</li>
              </ul>
              <p className="mt-4">
                上記のご要望は、お問い合わせ先へのメールにてお受けします。ご本人確認のうえ、合理的な期間内に対応します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. 未成年者の利用</h2>
              <p>
                本サービスは、介護保険の要介護認定調査に従事する方を対象とした業務用ツールであり、18歳以上の方のみご利用いただけます。18歳未満の方は本サービスをご利用いただけません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. 本ポリシーの変更</h2>
              <p>
                本ポリシーの内容は、法令の改正やサービスの変更等に応じて変更する場合があります。内容を変更する際は、施行日を定めた上で、施行日より前にサービス内または本ページにて告知します。変更後も本サービスを継続してご利用いただいた場合は、変更後のポリシーに同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. お問い合わせ</h2>
              <p>個人情報の取り扱いに関するご質問・ご要望は、以下までご連絡ください。</p>
              <p className="mt-4 font-bold">
                メールアドレス：itcaremanagement.001@gmail.com
              </p>
              <p className="mt-4">
                お問い合わせには、通常3営業日以内にご返答します。
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                制定日：2026年7月14日／最終改定日：2026年7月21日
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
              <div className="inline-block bg-white rounded-lg px-4 py-2.5 mb-4">
                <img src="/footer-logo.png" alt="AI認定調査アシスタント" className="h-8 w-auto" />
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
