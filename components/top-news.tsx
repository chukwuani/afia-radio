"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import { useQuery } from "@tanstack/react-query";

import NewsSkeleton from "@/components/skeleton/news-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "./ui/button";

import { NewsTypes } from "@/types";
import { cn, formatDate } from "@/lib/utils";

const TopNews = () => {
	const { isPending, isError, data } = useQuery<NewsTypes[]>({
		queryKey: ["top_news"],
		queryFn: async () => {
			const res = await fetch('/api/news?cursor=""&limit=4');

			const data = await res?.json();
			return data.news;
		},
	});

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-0 border-t bg-background rounded-none shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Latest News</CardTitle>
					<CardDescription>
						Discover the hottest trends, breaking news, and exclusive stories from the world of
						entertainment.
					</CardDescription>
				</CardHeader>
			</section>

			<Carousel
				opts={{
					align: "start",
				}}
				orientation="horizontal"
				className="w-full">
				<CarouselContent className="gap-6 lg:gap-8 w-full px-0">
					{isError && (
						<React.Fragment>
							{Array.from({ length: 2 }).map((_, index) => (
								<NewsSkeleton key={index} />
							))}
						</React.Fragment>
					)}

					{isPending && (
						<React.Fragment>
							{Array.from({ length: 2 }).map((_, index) => (
								<NewsSkeleton key={index} />
							))}
						</React.Fragment>
					)}

					{data?.map((item, index) => (
						<CarouselItem
							key={index}
							className="md:basis-1/3">
							<Link
								key={index}
								title={item.description}
								href={`/news/${item.slug}`}
								className="group gap-2">
								<section className="flex flex-col items-end gap-4">
									<AspectRatio ratio={14 / 9}>
										<Image
											fill
											src={item.mainImage}
											alt={item.altText}
											sizes="(min-width: 768px) 50vw, (min-width: 1024px) 25vw, 100vw"
											className="rounded-md bg-muted object-cover h-full"
										/>
									</AspectRatio>

									<section className="flex flex-col gap-2 w-fit">
										<p className="text-sm md:text-xl font-bold mt-3 mb-2 line-clamp-2 transition-colors group-hover:text-brand">
											{item.title}
										</p>

										<p className="text-sm leading-[1.7rem] text-muted-foreground line-clamp-2 mb-2">
											{item.description}
										</p>
									</section>
								</section>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

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

export default TopNews;
