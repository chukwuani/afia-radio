"use client";

import Image from "next/image";
import React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NewsSkeleton from "@/components/skeleton/news-skeleton";

import { cn, formatDate } from "@/lib/utils";
import { NewsTypes } from "@/types";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const NewsPage = () => {
	const { isPending, isError, data, error } = useQuery<NewsTypes[]>({
		queryKey: ["news"],
		queryFn: async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/news?cursor=""&limit=6`);

			const data = await res?.json();
			return data.news;
		},
	});

	return (
		<main className="relative flex flex-col gap-6 min-[1400px]:container">
			<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-8">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Entertainment News</CardTitle>
					<CardDescription>
						Get the latest buzz on chart-toppers, rising stars, and industry shake-ups in the
						dynamic world of music
					</CardDescription>
				</CardHeader>

				<CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 w-full px-0">
					{isPending && (
						<React.Fragment>
							{Array.from({ length: 6 }).map((_, index) => (
								<NewsSkeleton key={index} />
							))}
						</React.Fragment>
					)}

					{data?.map((item, index) => (
						<Link
							key={index}
							href={`/news/${item.slug}`}
							title={item.description}
							className="group cols-span-1 gap-2 w-full">
							<section className="flex flex-col items-end gap-4">
								<AspectRatio ratio={14 / 9}>
									<Image
										src={item.mainImage}
										alt={item.altText}
										fill
										className="rounded-md border bg-muted object-cover"
										priority
									/>
								</AspectRatio>

								<section className="flex flex-col gap-2 w-fit">
									<p className="text-sm font-bold mt-3 mb-2 line-clamp-2 transition-colors group-hover:text-brand">
										{item.title}
									</p>

									<p className="text-sm leading-[1.7rem] text-muted-foreground line-clamp-2">
										{item.description}
									</p>

									<p className="text-xs text-muted-foreground">{formatDate(item._createdAt)}</p>
								</section>
							</section>
						</Link>
					))}
				</CardContent>

				<Link
					href="/news"
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
export default NewsPage;
