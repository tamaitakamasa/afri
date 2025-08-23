// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants/site";
import FloatingMenu from "@/components/layout/floating-menu";
import { ThemeProvider } from "next-themes";
import GlobalLoadingIndicator from "@/components/common/global-loading-indicator";
import RouterTransitionProvider from "@/components/common/router-transition-provider";
import { cn } from "@/lib/utils";

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

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
