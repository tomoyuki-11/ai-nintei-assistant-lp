import type { Metadata } from "next";
import PrivacyPolicy from "@/components/pages/Privacy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "プライバシーポリシー｜AI認定調査アシスタント",
  description: "AI認定調査アシスタントにおける個人情報の収集・利用・管理方針について説明します。",
  path: "/privacy",
});

export default function Page() {
  return <PrivacyPolicy />;
}
