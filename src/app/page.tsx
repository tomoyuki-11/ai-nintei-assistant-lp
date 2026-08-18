import type { Metadata } from "next";
import Home from "@/components/pages/Home";
import { buildMetadata } from "@/lib/seo";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "AI認定調査アシスタント｜要介護認定調査の特記事項をAIが自動作成",
  description:
    "介護保険の要介護認定調査における特記事項作成をAIが自動化。録音するだけで文字起こしから調査項目に沿った記録作成まで完結し、認定調査員・ケアマネジャーの訪問調査業務を約7割軽減します。",
  path: "/",
});

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a.replace(/\*\*/g, "") },
  })),
};

const VIDEO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "AI認定調査アシスタントの使い方",
  description:
    "録音から特記事項の作成まで、AI認定調査アシスタントの実際の使い方を紹介する動画です。",
  thumbnailUrl: [
    "https://i.ytimg.com/vi/0EQqzaEXOpg/maxresdefault.jpg",
    "https://i.ytimg.com/vi/0EQqzaEXOpg/hqdefault.jpg",
  ],
  uploadDate: "2026-07-21",
  embedUrl: "https://www.youtube.com/embed/0EQqzaEXOpg",
  publisher: {
    "@type": "Organization",
    name: "AI認定調査アシスタント",
    logo: {
      "@type": "ImageObject",
      url: "https://lp.ai-nintei-assistant.com/logo-full.png",
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_JSON_LD) }}
      />
      <Home />
    </>
  );
}
