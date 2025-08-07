import { Metadata } from "next";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PodcastFeed from "./_components/podcast-feed";

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
	title: "Stream Top Podcasts",
	description:
		"Stream the best podcasts from your favorite stations. Stay updated with the latest episodes and discover new shows.",
};

const PodcastsPage = () => {


	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Stream Top Podcasts</CardTitle>
					<CardDescription>Stream the best podcasts from your favorite stations</CardDescription>
				</CardHeader>

				<PodcastFeed />
			</Card>
		</main>
	);
};
export default PodcastsPage;
