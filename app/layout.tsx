// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/constants/site";
import FloatingMenu from "@/components/layout/floating-menu";
import { ThemeProvider } from "next-themes";
import GlobalLoadingIndicator from "@/components/common/global-loading-indicator";
import RouterTransitionProvider from "@/components/common/router-transition-provider";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  weight: [
    // "100", // font-thin - 使用回数: 2回
    // "200", // font-extralight - 使用回数: 2回
    "300", // font-light - 使用回数: 2回
    "400", // font-normal - 使用回数: 5回
    "500", // font-medium - 使用回数: 28回
    "600", // font-semibold - 使用回数: 12回
    "700", // font-bold - 使用回数: 44回
    "800", // font-extrabold - 使用回数: 2回
    "900", // font-black - 使用回数: 21回
  ],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  weight: [
    // "100", // font-thin - 使用回数: 2回
    // "200", // font-extralight - 使用回数: 2回
    "300", // font-light - 使用回数: 2回
    "400", // font-normal - 使用回数: 5回
    "500", // font-medium - 使用回数: 28回
    "600", // font-semibold - 使用回数: 12回
    "700", // font-bold - 使用回数: 44回
    "800", // font-extrabold - 使用回数: 2回
    "900", // font-black - 使用回数: 21回
  ],
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`, // ページごとのタイトルテンプレート
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "美味しい",
    "食文化",
    "淡路島",
    "食品研究",
    "御食国",
    "食のアーカイブ",
    "50年先の食文化",
    "食の解像度",
    "食品開発",
    "R&D",
    "コンサルティング",
    "食の島",
    "自然の循環",
    "生産者",
    "農業",
    "畜産",
    "水産業",
  ],

  // クローラー設定
  // robots: 検索エンジンクローラーの動作を制御
  // - index: ページのインデックスを許可
  // - follow: リンクの追跡を許可
  // - googleBot: Googleクローラー用の詳細設定
  //   - max-video-preview: 動画プレビューの最大長
  //   - max-image-preview: 画像プレビューのサイズ
  //   - max-snippet: スニペットの最大長
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // アイコン設定
  // icons: ブラウザタブやブックマークで表示されるアイコン
  // - icon: 標準的なファビコン
  // - apple: iOSデバイス用のアイコン
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },

  // OGP設定（Open Graph Protocol）
  // SNSでシェアされた際の表示を制御
  // - title: シェア時のタイトル
  // - description: シェア時の説明文
  // - locale: 言語設定
  // - type: コンテンツタイプ
  // - siteName: サイト名
  // - url: シェア時のURL
  // - images: シェア時に表示される画像
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
    siteName: SITE_TITLE,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },

  // Twitter Card設定
  // Twitterでシェアされた際の表示を制御
  // - card: カードの種類（大画像）
  // - title: シェア時のタイトル
  // - description: シェア時の説明文
  // - images: シェア時に表示される画像
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  // その他のメタデータ
  // verification: 各種検証用の設定
  // - google: Google Search Console用の検証コード
  verification: {
    google: "G-82RWGM5888", // Google Search Console用
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={cn(
          `${notoSansJP.variable} ${urbanist.variable} antialiased`,
        )}
      >
        <GoogleAnalytics gaId="G-82RWGM5888" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <RouterTransitionProvider>
            <GlobalLoadingIndicator />
            <Header />
            {children}
            <FloatingMenu />
            <Footer />
          </RouterTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
