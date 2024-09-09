"use client";

import React from "react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PodcastCardSkeleton from "./skeleton/podcast-card-skeleton";

import { getPodcasts } from "@/lib/actions/podcast";

import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Podcasts = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["top_podcasts"],
		queryFn: async () => {
			const podcasts = await getPodcasts();

			return podcasts;
		},
	});

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-0 border-b bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Stream Top Podcasts</CardTitle>
					<CardDescription>
						Stream the best podcasts from a collection of insightful, and entertaining podcasts.
					</CardDescription>
				</CardHeader>

				<Link
					href="/podcasts"
					className={cn(buttonVariants({ variant: "outline" }), "hidden md:flex rounded-full")}>
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{isPending && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<PodcastCardSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{isError && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<PodcastCardSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{data?.map((podcast, index) => (
					<Link
						key={index}
						href={`/podcasts/${podcast.id}`}
						className="group cols-span-1 gap-2 w-full text-left">
						<section className="flex items-center justify-center relative">
							<img
								alt={podcast.title}
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								height="300"
								src={podcast.coverArt}
							/>

							<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
						</section>

						<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
							{podcast.title}
						</p>

						<p className="text-sm text-muted-foreground line-clamp-2">{podcast.description}</p>
					</Link>
				))}
			</CardContent>

			<Link
				href="/podcasts"
				className={cn(
					buttonVariants({ variant: "outline", size: "lg" }),
					"flex md:hidden mx-auto rounded-full"
				)}>
				View All
			</Link>
		</Card>
	);
};

export default Podcasts;
