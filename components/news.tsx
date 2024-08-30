"use client";

import Image from "next/image";
import React from "react";

import { useQuery } from "@tanstack/react-query";

import NewsSkeleton from "@/components/skeleton/news-skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

import { NewsTypes } from "@/types";
import { formatDate } from "@/lib/utils";

const News = () => {
	const { isPending, isError, data, error } = useQuery<NewsTypes[]>({
		queryKey: ["news"],
		queryFn: async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/news?cursor=""&limit=6`);

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
					variant="outline"
					className="hidden md:flex rounded-full">
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 w-full px-0">
				{isPending && (
					<React.Fragment>
						{Array.from({ length: 6 }).map((_, index) => (
							<NewsSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{data?.map((item, index) => (
					<a
						key={index}
						title={item.description}
						href={`/news/${item.slug}`}
						className="group cols-span-1 gap-2 w-full">
						<section className="flex items-end gap-4">
							<Image
								alt={item.altText}
								className="w-full max-w-[120px] aspect-square rounded-md object-cover"
								width="200"
								height="200"
								quality={100}
								src={item.mainImage}
							/>

							<section className="flex flex-col gap-2 w-fit">
								<p className="text-[15px] font-bold mt-3 mb-2 line-clamp-2 transition-colors group-hover:text-brand">
									{item.title}
								</p>

								<p className="text-[15px] text-muted-foreground line-clamp-2">{item.description}</p>

								<p className="text-xs text-muted-foreground font-medium">
									{formatDate(item._createdAt)}
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
				className="flex md:hidden mx-auto rounded-full">
				View All
			</Link>
		</Card>
	);
};
export default News;
