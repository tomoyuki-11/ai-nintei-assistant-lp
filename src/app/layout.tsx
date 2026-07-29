import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const SITE_URL = "https://lp.ai-nintei-assistant.com";
const SITE_NAME = "AI認定調査アシスタント";
const TITLE = `${SITE_NAME}｜要介護認定調査の特記事項をAIが自動作成`;
const DESCRIPTION =
  "介護保険の要介護認定調査における特記事項作成をAIが自動化。録音するだけで文字起こしから調査項目に沿った記録作成まで完結し、認定調査員・ケアマネジャーの訪問調査業務を約7割軽減します。";
const TWITTER_DESCRIPTION =
  "介護保険の要介護認定調査における特記事項作成をAIが自動化。訪問調査業務を約7割軽減します。";
const OG_IMAGE = `${SITE_URL}/lp_nintei_image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ja_JP",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: TWITTER_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1,
  themeColor: "#4A4DE0",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.png`,
  description: "介護保険の要介護認定調査における特記事項作成をAIが自動化するサービス",
  email: "itcaremanagement.001@gmail.com",
};

const SOFTWARE_APPLICATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "音声録音・文字起こしテキストをAIが要介護認定調査票フォーマットに自動整形するWebアプリ。認定調査員・ケアマネジャーの業務負担を軽減します。",
  url: SITE_URL,
  offers: [
    { "@type": "Offer", name: "トライアル", price: "0", priceCurrency: "JPY" },
    { "@type": "Offer", name: "月額プラン", price: "2980", priceCurrency: "JPY" },
    { "@type": "Offer", name: "従量課金", price: "600", priceCurrency: "JPY" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_JSON_LD) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
