"use client";

import React from "react";
import Image from "next/image";

import { CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import NewsSkeleton from "@/components/skeleton/news-skeleton";
import { Button } from "@/components/ui/button";

import { formatDate } from "@/lib/utils";
import { PodcastTypes } from "@/types";

import useInfinteQuery from "@/hooks/use-infinite-query";
import { Icons } from "@/components/icons";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

const PodcastFeed = () => {
	const {
		data: podcasts,
		status,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useInfinteQuery("/api/podcasts", "infinite_podcasts");

	const { onOpen, isPlaying, isLive, updateAudioInfo, title, setIsPlaying } = useAudioPlayerStore(
		(state) => state
	);

	return (
		<>
			<CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 w-full px-0">
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
						{podcasts?.pages?.map((group, i) => (
							<React.Fragment key={i}>
								{group?.podcasts?.map((item: PodcastTypes) => (
									
										<section key={item._id} className="group cols-span-1 gap-2 w-full text-left">
											<section className="flex items-center justify-center relative">
												<Image
													alt={item.altText}
													className="aspect-square rounded-md object-cover"
													height="300"
													width="300"
													src={item.coverArt}
												/>

												<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />

												{!isLive && isPlaying && title === item.title ? (
													<button
														onClick={() => {
															setIsPlaying(false);
														}}
														className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
														<Icons.pauseIcon className="size-8 text-white z-10" />
													</button>
												) : (
													<button
														onClick={() => {
															onOpen();
															updateAudioInfo({
																audioId: item._id,
																isPlaying: true,
																audioUrl: item.uploadUrl,
																coverArt: item.coverArt,
																isLive: false,
																title: item.title,
																artists: ["993 Voices"],
															});
														}}
														className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
														<Icons.playIcon className="size-8 text-white z-10" />
													</button>
												)}
											</section>

											<section className="flex items-center space-x-2 text-xs text-muted-foreground mt-3 mb-2 font-medium">
												<p className="text-xs text-muted-foreground">
													{formatDate(item.publishedAt)}
												</p>
												<div>•</div>

												<div>{item.duration}mins</div>
											</section>

											<p className="text-base font-bold mt-3 mb-3 tracking-wide transition-colors group-hover:text-brand">
												{item.title}
											</p>

											<p className="text-sm text-muted-foreground line-clamp-2">
												{item.description}
											</p>
										</section>
							
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

export default PodcastFeed;
