"use client";

import Image from "next/image";
import React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RadioCardSkeleton from "@/components/skeleton/radio-card-skeleton";

import { getCurrentShow, getDailyShows } from "@/lib/actions/radio";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Radio = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["radio_shows"],
		queryFn: async () => {
			const schedule = await getDailyShows();
			const nowPlaying = await getCurrentShow();

			return { schedule, nowPlaying };
		},
	});

	console.error(error);

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-0 border-b bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Afia Radio</CardTitle>
					<CardDescription> Live and local, just for you </CardDescription>
				</CardHeader>

				<Link
					href="/radio"
					className={cn(buttonVariants({ variant: "outline" }), "hidden md:flex rounded-full")}>
					View Schedule
				</Link>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{isPending && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<RadioCardSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{isError && (
					<React.Fragment>
						{Array.from({ length: 4 }).map((_, index) => (
							<RadioCardSkeleton key={index} />
						))}
					</React.Fragment>
				)}

				{data?.schedule.map((item, index) => (
					<Link
						key={index}
						href={`/radio/${item.showId}`}
						className="group cols-span-1 gap-2 w-full text-left">
						<section className="flex items-center justify-center relative">
							<Image
								alt={item.show.title}
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								width={300}
								height={300}
								src={item.show.coverArt}
							/>

							<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
						</section>

						<section className="flex gap-2 items-center mt-3 mb-2">
							{data.nowPlaying?.showId === item.showId && (
								<p className="text-sm text-brand font-medium uppercase">Live:</p>
							)}
							<p className="text-xs text-muted-foreground font-medium">
								{item.startTime} - {item.endTime}
							</p>
						</section>

						<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
							{item.show.title}
						</p>

						<p className="text-sm text-muted-foreground line-clamp-2">{item.show.description}</p>
					</Link>
				))}
			</CardContent>

			<Link
				href="/radio"
				className={cn(
					buttonVariants({ variant: "outline", size: "lg" }),
					"flex md:hidden mx-auto rounded-full"
				)}>
				View Schedule
			</Link>
		</Card>
	);
};

export default Radio;
