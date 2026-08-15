"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Mic, Zap, FileText, Shield, Lock, KeyRound, Ban, Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, SUPPORT_EMAIL } from "@/data/faq";
import { KNOWLEDGE_BASE_ITEMS } from "@/data/knowledgeBase";

/**
 * AI認定調査アシスタント ランディングページ
 *
 * デザイン戦略：信頼と効率の融合
 * - 白と青を基調とした清潔感
 * - 40〜60代ユーザーを想定した大きな文字と高いコントラスト
 * - 業務フローの可視化と個人情報保護の強調
 */

const SIGNUP_BASE_URL = "https://ai-nintei-assistant.com/individual/register";
const signupUrl = (plan: "trial" | "monthly" | "metered") =>
  `${SIGNUP_BASE_URL}?plan=${plan}`;

/** Renders `**bold**` segments in FAQ answers as <strong>, leaving the rest as plain text. */
function formatFaqAnswer(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export default function Home() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-full.png"
              alt="AI認定調査アシスタント"
              width={1115}
              height={212}
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              機能
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              料金
            </a>
            <a
              href="#security"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              セキュリティ
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              FAQ
            </a>
            <button
              onClick={() => router.push("/contact")}
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              お問い合わせ
            </button>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="メニューを開く"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container flex flex-col py-2">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-gray-600 hover:text-blue-600 transition border-b border-gray-100"
              >
                機能
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-gray-600 hover:text-blue-600 transition border-b border-gray-100"
              >
                料金
              </a>
              <a
                href="#security"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-gray-600 hover:text-blue-600 transition border-b border-gray-100"
              >
                セキュリティ
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-gray-600 hover:text-blue-600 transition border-b border-gray-100"
              >
                FAQ
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push("/contact");
                }}
                className="py-3 text-sm text-left text-gray-600 hover:text-blue-600 transition"
              >
                お問い合わせ
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 md:py-24">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-14">
            <Image
              src="/logo-stacked.png"
              alt="AI認定調査アシスタント"
              width={419}
              height={269}
              priority
              className="h-24 md:h-32 w-auto mx-auto mb-3"
            />
            <p className="text-base md:text-lg text-gray-600">
              認定調査業務の効率化を実現するAIアシスタント
            </p>
          </div>

          {/* Mobile: Image First */}
          <div className="md:hidden mb-8">
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/lp_nintei_image.jpg"
                alt="介護認定調査の流れ"
                width={1672}
                height={941}
                priority
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  認定調査の特記事項、
                  <br />
                  もうAIに任せませんか？
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  録音するだけ。AIが文字起こしから認定調査項目に沿った記録作成まで。
                  <br />
                  <span className="text-2xl font-bold text-blue-600">
                    調査業務の負担を約7割軽減
                  </span>
                  します。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
                  onClick={() => {
                    window.open(
                      signupUrl("trial"),
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  無料で試してみる
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-6 rounded-lg"
                  onClick={() => router.push("/contact")}
                >
                  お問い合わせ
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/lp_nintei_image.jpg"
                alt="介護認定調査の流れ"
                width={1672}
                height={941}
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile: Text Content Below Image */}
          <div className="md:hidden space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-3">
                認定調査の特記事項、
                <br />
                もうAIに任せませんか？
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                録音するだけ。AIが文字起こしから認定調査項目に沿った記録作成まで。
                <br />
                <span className="text-xl font-bold text-blue-600">
                  調査業務の負担を約7割軽減
                </span>
                します。
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-base px-6 py-5 rounded-lg transition-all hover:scale-105 w-full"
                onClick={() => {
                  window.open(
                    signupUrl("trial"),
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
              >
                無料で試してみる
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-base px-6 py-5 rounded-lg w-full"
                onClick={() => router.push("/contact")}
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              動画で見る、AI認定調査アシスタント
            </h2>
            <p className="text-lg text-gray-600">
              録音から特記事項の作成まで、実際の使い方をご覧いただけます
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl bg-black h-[70vh] aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0EQqzaEXOpg?vq=hd1080"
                title="AI認定調査アシスタント 紹介動画"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              こんなお悩み、ありませんか？
            </h2>
            <p className="text-lg text-gray-600">
              認定調査員やケアマネジャーが直面する課題
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "特記事項の作成に毎回1時間以上かかっている",
              "面談中のメモに追われて、聞き取りに集中できない",
              "帰社後の清書・転記作業で残業が増えている",
              "記録の転記ミスが発生し、修正に時間がかかる",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Solution */}
      <section id="features" className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI認定調査アシスタントなら、たった3ステップ
            </h2>
            <p className="text-lg text-gray-600">
              シンプルで効率的なワークフロー
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mic,
                title: "1. 録音",
                description:
                  "訪問先でスマホで面談を録音するだけ。特別な操作は不要です。",
              },
              {
                icon: Zap,
                title: "2. AI自動作成",
                description:
                  "文字起こし＋認定調査項目に基づいた内容を自動出力。移動中に処理完了。",
              },
              {
                icon: FileText,
                title: "3. 保存・貼り付け",
                description:
                  "内容を確認し、Excelでダウンロード。市区町村の指定様式に貼り付けるだけ。",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            録音のほか、面談メモの
            <span className="font-bold">テキスト貼り付け</span>や、録音済みの
            <span className="font-bold">音声ファイルのアップロード</span>
            にも対応しています。
          </p>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              特記事項の基礎知識
            </h2>
            <p className="text-lg text-gray-600">
              特記事項の役割から書き方のコツ、AI活用の考え方までを解説します
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {KNOWLEDGE_BASE_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-gray-200 rounded-lg px-6 py-4 last:border-b!"
                >
                  <AccordionTrigger className="hover:text-blue-600 transition">
                    <span className="text-left font-bold text-gray-900">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 mt-4">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center">
          <div className="mb-8">
            <p className="text-lg md:text-xl mb-4 opacity-90">
              特記事項作成などの負担を
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">約7割軽減</h2>
            <p className="text-lg md:text-xl opacity-90">
              聞き取りに集中でき、記録はAIにおまかせ。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              { label: "訪問後の特記作成時間", value: "約70%削減", note: "※開発者実測値" },
              { label: null, value: "記録業務の残業を削減" },
              { label: null, value: "聞き漏れ・転記ミスを大幅削減" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur p-6 rounded-lg flex flex-col justify-center"
              >
                {stat.label && (
                  <p className="text-sm opacity-80 mb-2">{stat.label}</p>
                )}
                <p className={stat.label ? "text-3xl font-bold" : "text-xl font-bold"}>
                  {stat.value}
                </p>
                {stat.note && (
                  <p className="text-xs opacity-70 mt-2">{stat.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              個人情報保護を最優先に設計
            </h2>
            <p className="text-lg text-gray-600">
              介護・行政分野の厳格な要件に対応
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: Shield,
                title: "AIに学習されない",
                description:
                  "音声データ・文字起こし内容・生成結果がAIの学習に利用されることはありません。あなたのデータは完全に保護されます。",
              },
              {
                icon: Lock,
                title: "整形完了後5日で自動削除",
                description:
                  "AIによる整形が完了してから5日で記録データは自動的に削除されます。長期保存されることはありません。",
              },
              {
                icon: KeyRound,
                title: "通信は暗号化",
                description:
                  "録音データ・文字起こし内容の送受信はすべて暗号化通信（HTTPS/SSL）で行われます。",
              },
              {
                icon: Ban,
                title: "同意なき第三者提供はしない",
                description:
                  "ご本人の同意なく、収集した個人情報を第三者に販売・提供することはありません。",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            録音の際は、同席者にも一言ご説明のうえ同意を得てください。所属先・自治体の録音に関するルールがある場合は、そちらを優先してください。
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              シンプルな料金プラン
            </h2>
            <p className="text-lg text-gray-600">
              まずは無料のトライアルからお試しいただけます
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Trial Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-green-500 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">トライアル</h3>
                  <p className="text-sm opacity-90">まずは無料で試す</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ¥0
                    </div>
                    <p className="text-gray-600">14日間・3回まで</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "14日間無料",
                      "3回まで利用可能",
                      "クレジットカード不要",
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="font-bold text-gray-900">{f}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
                    onClick={() => {
                      window.open(
                        signupUrl("trial"),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                  >
                    無料で始める
                  </Button>
                </div>
              </div>

              {/* Monthly Plan (recommended) */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition ring-2 ring-blue-600 md:-mt-4 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  おすすめ
                </div>
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">月額プラン</h3>
                  <p className="text-sm opacity-90">定期利用に最適</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ¥2,980
                      <span className="text-lg text-gray-600 font-normal">
                        /月
                      </span>
                    </div>
                    <p className="text-gray-600">月8回まで（¥373/回相当）</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "月8回まで利用可能",
                      "毎月自動更新",
                      "いつでも解約可能",
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="font-bold text-gray-900">{f}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                    onClick={() => {
                      window.open(
                        signupUrl("monthly"),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                  >
                    月額プランに申し込む
                  </Button>
                </div>
              </div>

              {/* Pay-as-you-go Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gray-700 text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">従量課金</h3>
                  <p className="text-sm opacity-90">使った分だけ</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ¥600
                      <span className="text-lg text-gray-600 font-normal">
                        /回
                      </span>
                    </div>
                    <p className="text-gray-600">クレジットを購入して使用</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "使わない月は費用なし",
                      "有効期限なし",
                      "必要な時だけ購入できる",
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="font-bold text-gray-900">{f}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-gray-700 text-gray-700 hover:bg-gray-100 font-bold py-3 rounded-lg transition"
                    onClick={() => {
                      window.open(
                        signupUrl("metered"),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                  >
                    クレジットを購入する
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
              現在は個人でのご利用に対応しています。法人・複数名でのご利用は準備中です。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
            <p className="text-lg text-gray-600">
              ご不明な点はこちらからご確認ください
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 rounded-lg px-6 py-4 last:border-b!"
                >
                  <AccordionTrigger className="hover:text-blue-600 transition">
                    <span className="text-left font-bold text-gray-900">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 mt-4">
                    {faq.id === "q6" ? (
                      <div>
                        <p className="mb-3">
                          ご不明な点やお困りのことがあれば、以下のメールアドレスまでお気軽にお問い合わせください。
                        </p>
                        <a
                          href={`mailto:${SUPPORT_EMAIL}`}
                          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
                        >
                          {SUPPORT_EMAIL}
                        </a>
                      </div>
                    ) : (
                      formatFaqAnswer(faq.a)
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今日の訪問調査から、記録の負担を減らしませんか？
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            無料トライアルで、AI認定調査アシスタントの効果を実感してください。
            <br />
            クレジットカード不要、すぐに始められます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
              onClick={() => {
                window.open(
                  signupUrl("trial"),
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              無料で試してみる
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg"
              onClick={() => router.push("/contact")}
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="inline-block bg-white rounded-lg px-4 py-2.5 mb-4">
                <Image
                  src="/footer-logo.png"
                  alt="AI認定調査アシスタント"
                  width={1109}
                  height={204}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400">
                認定調査業務の効率化を実現するAIアシスタント
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/#features" className="hover:text-white transition">
                    機能
                  </a>
                </li>
                <li>
                  <a href="/#security" className="hover:text-white transition">
                    セキュリティ
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white transition">
                    料金
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/articles" className="hover:text-white transition">
                    お役立ちコラム
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">法務</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/privacy" className="hover:text-white transition">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="/tokushoho" className="hover:text-white transition">
                    特定商取引法に基づく表記
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">サポート</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">
              © 2026 AI認定調査アシスタント. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Button active state */
        button:active {
          transform: scale(0.97);
        }

        /* Link hover effect */
        a {
          transition: color 0.2s ease;
        }
      `}</style>
    </div>
  );
}
