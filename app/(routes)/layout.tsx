import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "../globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

import Header from "@/components/layouts/site-header";
import Footer from "@/components/layouts/site-footer";

import { siteConfig } from "@/siteConfig";
import AudioPlayer from "@/components/audio-player";

import { Hanken_Grotesk } from "next/font/google";

const inter = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
	icons: "/afia-indent.png",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<Header />
					<AudioPlayer />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
