import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Retenda | Retention is the profitability engine for your DTC ecommerce brand",
  description:
    "At Retenda, we focus on retention, which is your only way to profitability. We transform leaky funnels into structured revenue-producing systems by combining strategy, creative and deliverability.",
  keywords: [
    "DTC",
    "ecommerce",
    "retention",
    "email marketing",
    "growth agency",
    "deliverability",
    "lifecycle marketing",
    "profitability",
    "revenue optimization",
  ],
  authors: [{ name: "Retenda" }],
  openGraph: {
    title: "Retenda | Retention is the profitability engine for your DTC ecommerce brand",
    description:
      "We transform leaky funnels into structured revenue-producing systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retenda | Retention is the profitability engine for your DTC ecommerce brand",
    description:
      "We transform leaky funnels into structured revenue-producing systems.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth bg-oxford-blue`}>
      <body className="font-sans bg-oxford-blue">{children}</body>
    </html>
  );
}
