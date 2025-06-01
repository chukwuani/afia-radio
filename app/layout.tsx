import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";
import NextUIProvider from "@/providers/nextui-provider";

import Header from "@/components/layouts/site-header";
import Footer from "@/components/layouts/site-footer";
import AudioPlayer from "@/components/audio/audio-player";
import { Toaster } from "@/components/ui/sonner";

import { siteConfig } from "@/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: "/images/afia-indent.png",
  keywords: [
    "Live radio",
    "Online radio",
    "FM radio",
    "Afia 993",
    "99.3 FM",
    "Southeast radio station",
    "Radio playlist",
    "Talk radio",
    "News radio",
    "Entertainment news",
    "Call-in radio show",
    "Radio interviews",
    "Morning show radio",
  ],
  authors: [
    {
      name: "Stephen",
      url: "https://www.stevecodes.netlify.app",
    },
  ],
  creator: "Stephen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sadmann17",
  },
};

// const epilogue = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-epilogue",
// });

const epilogue = localFont({
  src: [
    {
      path: "../public/fonts/epilogue/Epilogue-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-epilogue",
});

const haffer = localFont({
  src: [
    {
      path: "../public/fonts/haffer.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-haffer",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${epilogue.variable} ${haffer.variable} font-epilogue`}>
        <QueryProvider>
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <AudioPlayer />

              {children}
              <Analytics />
              <Footer />
              <Toaster richColors />
            </ThemeProvider>
          </NextUIProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
