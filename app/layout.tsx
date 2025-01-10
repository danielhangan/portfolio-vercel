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
    default: "Daniel Hangan - Full'stack dev",
    template: "%s | Daniel Hangan - Full'stack dev",
  },
  description: "Welcome to my portfolio.",
  openGraph: {
    title: "Daniel Hangan - Full'stack dev",
    description: "Daniel Hangan - Full'stack dev",
    url: baseUrl,
    siteName: "Daniel Hangan",
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
        "text-black bg-white dark:text-white dark:bg-black"
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
