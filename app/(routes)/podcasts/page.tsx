import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PodcastsPage = () => {
	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col items-center justify-center text-center gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Coming Soon....</CardTitle>
					<CardDescription>Stream the best podcasts from your favorite stations.</CardDescription>
				</CardHeader>

				<img
					alt="Product image"
					className="aspect-square max-w-[300px] rounded-md object-cover"
					height="300"
					src="/images/993-podcast.jpg"
				/>
			</Card>
		</main>
	);
};
export default PodcastsPage;
