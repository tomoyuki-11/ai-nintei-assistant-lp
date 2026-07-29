import type { Metadata } from "next";
import Terms from "@/components/pages/Terms";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "利用規約｜AI認定調査アシスタント",
  description: "AI認定調査アシスタントのご利用にあたっての利用規約です。料金プラン、禁止事項、免責事項などを掲載しています。",
  path: "/terms",
});

export default function Page() {
  return <Terms />;
}
