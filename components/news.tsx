"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { useQuery } from "@tanstack/react-query";

import NewsSkeleton from "@/components/skeleton/news-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "./ui/button";

import { NewsTypes } from "@/types";
import { cn, formatDate } from "@/lib/utils";

const News = () => {
	const { isPending, isError, data } = useQuery<NewsTypes[]>({
		queryKey: ["news"],
		queryFn: async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/news?cursor=""&limit=4`);

			const data = await res?.json();
			return data.news;
		},
	});

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Entertainment News</CardTitle>
					<CardDescription>
						Get the latest buzz on chart-toppers, rising stars, and industry shake-ups in the
						dynamic world of music
					</CardDescription>
				</CardHeader>

				<Link
					href="/news"
					className={cn(buttonVariants({ variant: "outline" }), "hidden md:flex rounded-full")}>
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full px-0">
				{isError && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{isPending && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{data?.map((item, index) => (
					<Link
						key={index}
						title={item.description}
						href={`/news/${item.slug}`}
						className="group cols-span-1 gap-2 w-full">
						<section className="flex flex-col items-end gap-4">
							<AspectRatio ratio={14 / 9}>
								<Image
									src={item.mainImage}
									alt={item.altText}
									fill
									sizes="100vw"
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
					"flex md:hidden mx-auto rounded-full"
				)}>
				View All
			</Link>
		</Card>
	);
};
export default News;
