import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PodcastsPage = () => {
	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Top Podcasts</CardTitle>
					<CardDescription> Stream the best podcasts from your favorite stations </CardDescription>
				</CardHeader>

				<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
					{Array.from({ length: 8 }).map((_, index) => (
						<a
							key={index}
							href="/podcasts/1"
							className="group cols-span-1 gap-2 w-full text-center">
							<section className="flex items-center justify-center relative">
								<img
									alt="Product image"
									className="aspect-square rounded-md object-cover"
									height="300"
									src="https://images.audacy2-prod.ext.audacy.com/4a400168-47f2-409c-965d-de711246bee3.jpeg?auto=webp&width=125 1x"
								/>

								<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
							</section>

							<p className="text-base font-bold mt-3 mb-3 leading-none transition-colors group-hover:text-brand">
								Sofia Davis
							</p>
							<p className="text-sm text-muted-foreground line-clamp-2">
								We answer your questions on the biggest issues in the run-up to the election.
							</p>
						</a>
					))}
				</CardContent>

				<Link
					href="/podcasts"
					className={cn(
						buttonVariants({ variant: "outline", size: "lg" }),
						"flex mx-auto rounded-full"
					)}>
					Load More
				</Link>
			</Card>
		</main>
	);
};
export default PodcastsPage;
