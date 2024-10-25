import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Focus Apps",
  description: "Focus Apps - we make apps by love",
  keywords: "Focus Apps, Focus, FocusReader, FocusReddit, FocusPodcast, Focus for Mastodon, Focusx, FocusTwitter, Focust, FocustLite, AIChatOne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://umami.aichatone.com/script.js" data-website-id="26991839-922a-4004-9259-0181f45d417f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
