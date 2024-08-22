"use client";

import Image from "next/image";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { NewsTypes } from "@/types";
import { useEffect, useState } from "react";

const News = () => {
	const [news, setNews] = useState<NewsTypes[]>([]);

	useEffect(() => {
		const getNews = async () => {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_APP_URL}/api/news?cursor=""&limit=6`
			).catch(console.log);

			const data = await res?.json();
			setNews(data.news);
		};

		void getNews();

		return () => setNews([]);
	}, []);

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-[#DA994D]">Entertainment News</CardTitle>
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
				{news.map((item, index) => (
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
								<p className="text-[15px] font-bold mt-3 mb-2 line-clamp-2 transition-colors group-hover:text-brand underline-offset-2 group-hover:underline">
									{item.title}
								</p>

								<p className="text-[15px] text-muted-foreground line-clamp-2">{item.description}</p>

								<p className="text-xs text-muted-foreground font-medium">July 4, 2023</p>
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
