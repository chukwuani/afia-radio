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
			const res = await fetch('/api/news?cursor=""&limit=3');

			const data = await res?.json();
			return data.news;
		},
	});

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-background rounded-none shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand font-anton text-[36px] md:text-[50px] leading-[1.1em] font-normal tracking-[.5px] mb-2">
						Latest News
					</CardTitle>
					<CardDescription className="font-dm-sans text-muted-foreground text-sm md:text-base max-w-[480px]">
						Discover the hottest trends, breaking news, and exclusive stories from the world of
						entertainment.
					</CardDescription>
				</CardHeader>

				<Link
					href="/news"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"hidden md:flex rounded-full text-[0.75rem] tracking-[2.4px] uppercase font-dm-sans"
					)}>
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-0">
				{isError && (
					<React.Fragment>
						{Array.from({ length: 3 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{isPending && (
					<React.Fragment>
						{Array.from({ length: 3 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{data?.map((item, index) => (
					<Link
						key={index}
						title={item.title}
						href={`/news/${item.slug}`}
						className="group cols-span-1 gap-2 w-full">
						<section className="flex flex-col items-end gap-4">
							<AspectRatio ratio={14 / 9}>
								<Image
									src={item.mainImage}
									alt={item.altText}
									fill
									sizes="(min-width: 768px) 50vw, (min-width: 1024px) 25vw, 100vw"
									className="rounded-md bg-muted object-cover"
									priority
								/>
							</AspectRatio>

							<section className="flex flex-col gap-2 w-fit">
								<section className="flex gap-2 items-center">
									<p className="text-xs text-muted-foreground font-medium capitalize">
										By {item.author.name}{" "}-{" "}
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
			</CardContent>

			<Link
				href="/news"
				className={cn(
					buttonVariants({ variant: "outline", size: "lg" }),
					"flex md:hidden mx-auto rounded-full text-[0.75rem] tracking-[2.4px] uppercase font-dm-sans"
				)}>
				View All
			</Link>
		</Card>
	);
};
export default News;
