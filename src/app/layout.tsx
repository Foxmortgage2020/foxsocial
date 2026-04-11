import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FoxSocial — Your content. On autopilot.",
  description:
    "FoxSocial finds, scores, and transforms news, podcasts, and videos into ready-to-publish content for LinkedIn, Instagram, and TikTok. In your voice. Every week.",
  openGraph: {
    title: "FoxSocial — Your content. On autopilot.",
    description:
      "AI-powered content production for professionals. LinkedIn, Instagram & TikTok posts created in your voice, every week.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
