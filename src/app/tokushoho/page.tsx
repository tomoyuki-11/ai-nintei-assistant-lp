import type { Metadata } from "next";
import TokushoHo from "@/components/pages/TokushoHo";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "特定商取引法に基づく表記｜AI認定調査アシスタント",
  description: "AI認定調査アシスタントの特定商取引法に基づく表記です。販売価格、お支払い方法、返品・キャンセルについて掲載しています。",
  path: "/tokushoho",
});

export default function Page() {
  return <TokushoHo />;
}
