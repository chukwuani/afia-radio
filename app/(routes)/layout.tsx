import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "../globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import QueryProvider from "@/providers/query-provider";

import Header from "@/components/layouts/site-header";
import Footer from "@/components/layouts/site-footer";

import { siteConfig } from "@/siteConfig";
import LiveAudioPlayer from "@/components/live-audio-player";

import { BackgroundGradient } from "@/components/aceternity/background";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: "/images/afia-indent.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>
				<QueryProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange>
						{process.env.NEXT_PUBLIC_NODE_ENV === "development" && <Header />}
						<LiveAudioPlayer />

						{children}
						{process.env.NEXT_PUBLIC_NODE_ENV === "development" && <Footer />}
					</ThemeProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
