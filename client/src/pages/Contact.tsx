import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "itcaremanagement.001@gmail.com";

export default function Contact() {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `【お問い合わせ】${name}様より`;
    const body = `お名前：${name}\nメールアドレス：${email}\n\nお問い合わせ内容：\n${message}`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
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
            <img src="/logo.png" alt="AI認定調査アシスタント" className="h-10 w-auto" />
            <span className="hidden sm:inline text-lg font-bold text-gray-900">AI認定調査アシスタント</span>
          </button>
          <Button variant="outline" onClick={() => navigate("/")} className="text-sm">
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
              <h2 className="text-xl font-bold text-gray-900 mb-2">メールソフトを起動しました</h2>
              <p className="text-gray-700">
                起動しない場合は、お手数ですが
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 font-bold hover:underline">
                  {CONTACT_EMAIL}
                </a>
                まで直接ご連絡ください。
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setSubmitted(false)}
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

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                送信する
              </Button>
              <p className="text-xs text-gray-400 text-center">
                送信すると、お使いのメールソフトが起動します。
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
