import type { Metadata } from "next";
import Contact from "@/components/pages/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ｜AI認定調査アシスタント",
  description:
    "AI認定調査アシスタントに関するご質問・ご相談はこちらからお問い合わせください。認定調査員・ケアマネジャー向けのAI業務効率化サービスです。",
  path: "/contact",
});

export default function Page() {
  return <Contact />;
}
