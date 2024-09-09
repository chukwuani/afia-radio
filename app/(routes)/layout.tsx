import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

import "../globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";

import Header from "@/components/layouts/site-header";
import Footer from "@/components/layouts/site-footer";

import { siteConfig } from "@/siteConfig";
import LiveAudioPlayer from "@/components/live-audio-player";

import { Toaster } from "@/components/ui/sonner";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
	title: siteConfig.title,
	description: siteConfig.description,
	icons: "/images/afia-indent.png",
	keywords: [
		"Live radio",
		"Online radio",
		"FM radio",
		"afia 993 live",
		"99.3 FM",
		"southeast radio station",
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en">
			<body className={GeistSans.className}>
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange>
						<Header />
						<LiveAudioPlayer />

						{children}
						<Analytics />
						<Footer />
						<Toaster richColors />
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
