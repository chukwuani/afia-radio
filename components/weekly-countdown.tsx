"use client";

import Image from "next/image";
import React from "react";

import { Layers2, ListMusic, Radio, UserRound } from "lucide-react";
import { toast } from "sonner";
import { PopoverClose } from "@radix-ui/react-popover";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Icons } from "@/components/icons";

import { cn, WeeklyCountDown } from "@/lib/utils";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import { EllipsisHorizontalIcon } from "@sanity/icons";
import { useQuery } from "@tanstack/react-query";

const WeeklyCountdown = () => {
	const { onOpen, isPlaying, isLive, updateAudioInfo, title, setIsPlaying } = useAudioPlayerStore(
		(state) => state
	);

	const { isPending, isError, data } = useQuery<WeeklyCountDown>({
		queryKey: ["weekly_countdown"],
		queryFn: async () => {
			const url = "https://spotify23.p.rapidapi.com/playlist_tracks/?id=0s6INEtIVvgp0chlhBenBk";
			const options = {
				method: "GET",
				headers: {
					"x-rapidapi-key": "2438f10de4msh1c0ebc1bfc0be83p103ae6jsnbf3e13456a50",
					"x-rapidapi-host": "spotify23.p.rapidapi.com",
				},
			};

			const response = await fetch(url, options);
			const result = await response.json();

			return result.items;
		},
	});

	const copyLink = (url: string) => {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				toast.success("Copied", { description: "Link copied to clipboard" });
			})
			.catch(() => {
				toast.error("Copy failed", { description: "Link not copied to clipboard" });
			});
	};

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-[#0F0F0F] shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<CardContent className="flex flex-col gap-10 w-full px-0">
				<CardHeader className="px-0">
					<CardTitle className="text-brand font-anton text-[36px] md:text-[50px] leading-[1.1em] font-normal tracking-[.5px] mb-2">
						Weekly Top 10
					</CardTitle>
					<CardDescription className="font-dm-sans text-muted-foreground text-sm md:text-base max-w-[480px]">
						Check out this week&apos;s ranking of the most popular music. Powered by{" "}
						<a
							href="https://open.spotify.com/"
							target="_blank"
							rel="noreferrer"
							className="transition-colors hover:text-foreground underline">
							Spotify
							<span className="sr-only">Spotify</span>
						</a>
					</CardDescription>
				</CardHeader>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 w-full mx-auto">
					{data?.map((item, index) => (
						<div
							key={item.track.id}
							className={cn(
								"flex items-center gap-6 border-b py-4 last-of-type:border-none",
								index === 8 && "md:border-none"
							)}>
							<p className="text-muted-foreground text-xs font-dm-sans hidden md:flex">
								{index + 1}
							</p>
							<Image
								src={item.track.album.images[2].url}
								alt={item.track.name}
								width={40}
								height={40}
								className="aspect-square object-cover rounded-sm"
							/>

							<div className="flex-1">
								<a
									href={item.track.external_urls.spotify}
									target="_blank"
									rel="noreferrer"
									className="font-medium text-sm hover:underline font-dm-sans line-clamp-1">
									{item.track.name}
								</a>

								<span className="text-muted-foreground text-sm font-dm-sans line-clamp-1">
									{item.track.artists.map((artist, i) => (
										<React.Fragment key={artist.id}>
											{item.track.artists.at(-1) === artist ? (
												<a
													href={item.track.artists[i].external_urls.spotify}
													target="_blank"
													rel="noreferrer"
													className="transition-colors hover:text-foreground hover:underline">
													{artist.name}
												</a>
											) : (
												<a
													href={item.track.artists[i].external_urls.spotify}
													target="_blank"
													rel="noreferrer"
													className="transition-colors hover:text-foreground hover:underline">
													{artist.name + ", "}
												</a>
											)}
										</React.Fragment>
									))}
								</span>
							</div>

							<section className="flex items-center">
								{!isLive && isPlaying && title === item.track.name ? (
									<Button
										onClick={() => {
											setIsPlaying(false);
										}}
										size="icon"
										variant="ghost">
										<Icons.pauseIcon className="size-4" />
									</Button>
								) : (
									<Button
										className="hover:bg-[#1a1a1a]"
										onClick={() => {
											onOpen();
											updateAudioInfo({
												audioId: item.track.id,
												isPlaying: true,
												audioUrl: item.track.preview_url,
												coverArt: item.track.album.images[2].url,
												isLive: false,
												title: item.track.name,
												artists: item.track.artists.map((artist) => artist.name),
											});
										}}
										size="icon"
										variant="ghost">
										<Icons.playIcon className="w-4 h-4" />
									</Button>
								)}

								<Popover>
									<PopoverTrigger asChild>
										<Button className="hover:bg-[#1a1a1a]" size="icon" variant="ghost">
											<EllipsisHorizontalIcon className="w-6 h-6" />
										</Button>
									</PopoverTrigger>
									<PopoverContent className="bg-[#1a1a1a] p-0 w-[150px] border-0">
										<div className="flex flex-col p-1">
											<a
												target="_blank"
												href={item.track.artists[0].external_urls.spotify}
												className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
												<UserRound className="size-5 text-muted-foreground" />
												<span className="text-sm font-epilogue">Go to artist</span>
											</a>
											<a
												target="_blank"
												href={item.track.album.external_urls.spotify}
												className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
												<ListMusic className="size-5 text-muted-foreground" />
												<span className="text-sm font-epilogue">Go to album</span>
											</a>
											<a
												target="_blank"
												href={item.track.external_urls.spotify}
												className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
												<Radio className="size-5 text-muted-foreground" />
												<span className="text-sm font-epilogue">Go to track</span>
											</a>
											<PopoverClose asChild>
												<button
													onClick={() => copyLink(item.track.external_urls.spotify)}
													className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
													<Layers2 className="size-5 text-muted-foreground" />
													<span className="text-sm font-epilogue">Copy link</span>
												</button>
											</PopoverClose>
										</div>
									</PopoverContent>
								</Popover>
							</section>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default WeeklyCountdown;
