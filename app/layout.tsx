import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import clsx from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Daniel Hangan - Social Growth Engineer & Founder",
    template: "%s | Daniel Hangan",
  },
  description:
    "Social Growth Engineer & Founder. Building stuff while having fun. Creator of DansUGC - helping creators go viral on TikTok.",
  keywords: [
    "Daniel Hangan",
    "DansUGC",
    "UGC",
    "TikTok",
    "Social Growth",
    "Growth Engineer",
    "Founder",
    "Creator Tools",
  ],
  authors: [{ name: "Daniel Hangan" }],
  creator: "Daniel Hangan",
  openGraph: {
    title: "Daniel Hangan - Social Growth Engineer & Founder",
    description:
      "Social Growth Engineer & Founder. Building stuff while having fun. Creator of DansUGC.",
    url: baseUrl,
    siteName: "Daniel Hangan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og?title=Daniel%20Hangan`,
        width: 1200,
        height: 630,
        alt: "Daniel Hangan - Social Growth Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hangan - Social Growth Engineer & Founder",
    description:
      "Social Growth Engineer & Founder. Building stuff while having fun. Creator of DansUGC.",
    creator: "@danielhangan_",
    images: [`${baseUrl}/og?title=Daniel%20Hangan`],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        GeistSans.variable,
        GeistMono.variable,
        "bg-neutral-950 text-neutral-100"
      )}
    >
      <body className="antialiased">
        <main className="flex flex-col flex-auto min-w-0 font-sans">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
