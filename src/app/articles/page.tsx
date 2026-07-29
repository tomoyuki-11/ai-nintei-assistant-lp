import type { Metadata } from "next";
import Articles from "@/components/pages/Articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "お役立ちコラム｜AI認定調査アシスタント",
  description: "認定調査・特記事項作成に関する現場の悩みと解決方法を紹介するコラムです。認定調査員・ケアマネジャー向けの業務効率化のヒントをお届けします。",
  path: "/articles",
});

export default function Page() {
  return <Articles />;
}
