import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Retenda | Your Retention Engine for DTC Ecommerce Brands",
  description:
    "Retenda is a retention-first growth partner. We transform fragmented email programs into structured, revenue-producing systems by combining strategy, creative, and deliverability.",
  keywords: [
    "DTC",
    "ecommerce",
    "retention",
    "email marketing",
    "growth agency",
    "deliverability",
    "lifecycle marketing",
  ],
  authors: [{ name: "Retenda" }],
  openGraph: {
    title: "Retenda | Your Retention Engine for DTC Ecommerce Brands",
    description:
      "Transform fragmented email programs into structured, revenue-producing systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retenda | Your Retention Engine for DTC Ecommerce Brands",
    description:
      "Transform fragmented email programs into structured, revenue-producing systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
