"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import { CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NewsSkeleton from "@/components/skeleton/news-skeleton";
import { Button } from "@/components/ui/button";

import { formatDate } from "@/lib/utils";
import { NewsTypes } from "@/types";

import useInfinteQuery from "@/hooks/use-infinite-query";

const NewsFeed = () => {
	const {
		data: news,
		status,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useInfinteQuery("/api/news", "infinite_news");

	return (
		<>
			<CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-0">
				{status === "pending" ? (
					<React.Fragment>
						{Array.from({ length: 8 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				) : status === "error" ? (
					<React.Fragment>
						{Array.from({ length: 8 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				) : (
					<React.Fragment>
						{news?.pages?.map((group, i) => (
							<React.Fragment key={i}>
								{group?.news?.map((item: NewsTypes) => (
									<Link
										key={item._id}
										href={`/news/${item.slug}`}
										title={item.description}
										className="group cols-span-1 gap-2 w-full">
										<section className="flex flex-col items-end gap-4">
											<AspectRatio ratio={14 / 9}>
												<Image
													src={item.mainImage}
													alt={item.altText}
													fill
													className="rounded-md bg-muted object-cover"
													priority
												/>
											</AspectRatio>

											<section className="flex flex-col gap-2 w-fit">
												<section className="flex gap-2 items-center">
													<p className="text-xs text-muted-foreground font-medium capitalize">
														By {item.author.name} -{" "}
													</p>
													<p className="text-xs text-muted-foreground font-medium inline-flex capitalize">
														{formatDate(item._createdAt)}
													</p>
												</section>

												<p className="font-anton text-[24px] leading-[140%] tracking-normal mt-1 mb-2 line-clamp-2 transition-colors group-hover:text-brand">
													{item.title}
												</p>

												<p className="text-sm font-dm-sans text-muted-foreground line-clamp-2">
													{item.description}
												</p>
											</section>
										</section>
									</Link>
								))}
							</React.Fragment>
						))}
					</React.Fragment>
				)}
			</CardContent>

			<Button
				variant="outline"
				size="lg"
				disabled={!hasNextPage || isFetchingNextPage}
				onClick={() => fetchNextPage()}
				className="flex mx-auto rounded-full">
				{isFetchingNextPage
					? "Loading more..."
					: hasNextPage
					? "Load More"
					: "Nothing more to load"}
			</Button>
		</>
	);
};

export default NewsFeed;
