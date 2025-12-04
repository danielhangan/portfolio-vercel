import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import clsx from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dan Hangan - Growth Engineer & Founder of dansugc",
    template: "%s | Dan Hangan - Growth Engineer & Founder",
  },
    description: "Growth engineer hacking virality for consumer apps with UGC. Building tools that help creators break through the noise and scale their reach.",
  openGraph: {
    title: "Dan Hangan - Growth Engineer & Founder of dansugc",
  description: "Growth engineer hacking virality for consumer apps with UGC. Building tools that help creators break through the noise and scale their reach.",
    url: baseUrl,
    siteName: "Dan Hangan",
    locale: "en_US",
    type: "website",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

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
        "text-gray-900 bg-white"
      )}
    >
      <body className="">
        <main className="flex flex-col flex-auto min-w-0 px-2 font-sans md:px-0">
          {children}
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
