import { Metadata } from "next";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewsFeed from "./_components/news-feed";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
	title: "Entertainment News",
	description:
		"Discover the hottest trends, breaking news, and exclusive stories from the world of entertainment.",
};

const NewsPage = async () => {
	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Entertainment News</CardTitle>
					<CardDescription>
						Discover the hottest trends, breaking news, and exclusive stories from the world of
						entertainment.
					</CardDescription>
				</CardHeader>

				<NewsFeed />
			</Card>
		</main>
	);
};

export default NewsPage;
