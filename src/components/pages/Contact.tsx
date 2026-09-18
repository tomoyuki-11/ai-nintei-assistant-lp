"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "itcaremanagement.001@gmail.com";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("送信に失敗しました。しばらくしてから再度お試しいただくか、直接メールにてご連絡ください。");
    } finally {
      setSubmitting(false);
    }
  }

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
        <div className="container max-w-xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-gray-600">
              サービスに関するご質問・ご相談は、下記フォームよりお気軽にお問い合わせください。
            </p>
          </div>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">お問い合わせを受け付けました</h2>
              <p className="text-gray-700">
                ご入力いただいたメールアドレス宛にご返信します。通常3営業日以内にご返答します。
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setName("");
                  setEmail("");
                  setMessage("");
                  setSubmitted(false);
                }}
              >
                フォームに戻る
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 shadow-md p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">お名前</Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田 太郎"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">お問い合わせ内容</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600">
                  {error}
                  （
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-bold">
                    {CONTACT_EMAIL}
                  </a>
                  ）
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
              >
                {submitting ? "送信中..." : "送信する"}
              </Button>
            </form>
          )}
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
