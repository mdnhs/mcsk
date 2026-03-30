import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SanityLive } from "@/sanity/lib/live";
import PageFooter from "@/components/page-footer";
import PageHeader from "@/components/page-header";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#49336c",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chunkFive = localFont({
  src: "../fonts/ChunkFive.woff2",
  display: "swap",
  variable: "--font-chunk-five",
});

const gillSansCustom = localFont({
  src: "../fonts/GillSansCustom.woff2",
  display: "swap",
  variable: "--font-gill-sans",
});

const montserratLight = localFont({
  src: "../fonts/MontserratLight.woff2",
  display: "swap",
  variable: "--font-montserrat-light",
});

const montserratRegular = localFont({
  src: "../fonts/MontserratRegular.woff2",
  display: "swap",
  variable: "--font-montserrat-regular",
});

const montserrat500 = localFont({
  src: "../fonts/Montserrat500.woff2",
  display: "swap",
  variable: "--font-montserrat-500",
});

const montserrat600 = localFont({
  src: "../fonts/Montserrat600.woff2",
  display: "swap",
  variable: "--font-montserrat-600",
});

const montserrat700 = localFont({
  src: "../fonts/Montserrat700.woff2",
  display: "swap",
  variable: "--font-montserrat-700",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Baltimore Corgis",
    default: "Baltimore Corgis",
  },
  description:
    "Established in 2014, we're a community of Corgi owners based in the Baltimore area and surrounding counties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-baltimorePurple">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chunkFive.variable} ${gillSansCustom.variable} ${montserratLight.variable} ${montserratRegular.variable} ${montserrat500.variable} ${montserrat600.variable} ${montserrat700.variable} flex min-h-dvh flex-col items-center font-montserratRegular antialiased selection:bg-baltimoreGold`}
      >
        <PageHeader />
        <main className="flex h-full w-full grow flex-col items-center bg-neutral-950">
          {children}
        </main>
        <PageFooter />
        <SanityLive />
      </body>
    </html>
  );
}
