import type { Metadata } from "next";
import NotFound from "@/components/pages/NotFound";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ページが見つかりません｜AI認定調査アシスタント",
  description: "お探しのページが見つかりませんでした。",
  path: "/404",
  noindex: true,
});

export default function Page() {
  return <NotFound />;
}
