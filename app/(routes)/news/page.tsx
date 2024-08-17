import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

import { sanityFetch } from "@/sanity/lib/client";
import { ALL_NEWS_QUERY } from "@/sanity/lib/queries";
import { NewsTypes } from "@/types";

import Image from "next/image";

const NewsPage = async () => {
	const news: NewsTypes[] = await sanityFetch({
		query: ALL_NEWS_QUERY,
	});

	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col gap-5 overflow-hidden border-none shadow-none px-6 lg:px-8">
				<CardHeader className="px-0">
					<CardTitle>Entertainment News</CardTitle>
					<CardDescription>
						Get the latest buzz on chart-toppers, rising stars, and industry shake-ups in the
						dynamic world of music
					</CardDescription>
				</CardHeader>

				<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full px-0">
					{news.map((item, index) => (
						<a
							key={index}
							href={`/news/${item.slug}`}
							title={item.description}
							className="group cols-span-1 gap-2 w-full">
							<section className="flex items-end gap-4">
								<Image
									alt={item.altText}
									className="size-[150px] lg:size-[150px] rounded-md object-cover"
									width="200"
									height="200"
									quality={100}
									src={item.mainImage}
								/>

								<section className="flex flex-col gap-2 w-fit">
									<p className="text-lg text-[15px] font-bold mt-3 mb-2 line-clamp-2 transition-colors group-hover:text-brand underline-offset-2 group-hover:underline">
										{item.title}
									</p>
									<p className="text-sm leading-6 text-muted-foreground line-clamp-3">
										{item.description}
									</p>
								</section>
							</section>
						</a>
					))}
				</CardContent>

				<Link
					href="/news"
					size="lg"
					variant="outline"
					className="flex mx-auto rounded-full">
					Load More
				</Link>
			</Card>
		</main>
	);
};
export default NewsPage;
