import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// app/layout.tsx
export const metadata = {
  title: "問題・解答添削アプリ",
  description: "ファイルアップロードで問題・解答を採点するアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}

