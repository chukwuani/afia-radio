"use client";

import Image from "next/image";
import React from "react";

import { Copy, EllipsisVertical, LibraryBig, Music2, UserRound } from "lucide-react";
import { toast } from "sonner";
import { PopoverClose } from "@radix-ui/react-popover";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Icons } from "@/components/icons";

import { cn, formatDurationShort, weekly_countdown } from "@/lib/utils";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

const WeeklyCountdown = () => {
	const { onOpen, isPlaying, isLive, updateAudioInfo, title, setIsPlaying } = useAudioPlayerStore(
		(state) => state
	);

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
					<CardTitle className="text-brand">Weekly Top 10</CardTitle>
					<CardDescription>
						Check out this week&apos;s ranking of the most popular music. Powered by{" "}
						<a
							href="https://open.spotify.com/"
							target="_blank"
							rel="noreferrer"
							className="transition-colors hover:text-foreground underline">
							Spotify
							<span className="sr-only">Spotify</span>
						</a>
						.
					</CardDescription>
				</CardHeader>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 w-full mx-auto">
					{weekly_countdown.map((item, index) => (
						<div
							key={item.id}
							className={cn(
								"flex items-center gap-6 border-b pb-6 last-of-type:border-none",
								index === 8 && "md:border-none"
							)}>
							<p className="text-muted-foreground text-xs">{index + 1}</p>
							<Image
								src={item.album.images[2].url}
								alt={item.name}
								width={40}
								height={40}
								className="aspect-square object-cover rounded-sm"
							/>

							<div className="flex-1">
								<a
									href={item.external_urls.spotify}
									target="_blank"
									rel="noreferrer"
									className="font-medium text-sm hover:underline">
									{item.name}
								</a>

								<span className="text-muted-foreground text-sm line-clamp-1">
									{item.artists.map((artist, i) => (
										<React.Fragment key={artist.id}>
											{item.artists.at(-1) === artist ? (
												<a
													href={item.artists[i].external_urls.spotify}
													target="_blank"
													rel="noreferrer"
													className="transition-colors hover:text-foreground hover:underline">
													{artist.name}
												</a>
											) : (
												<a
													href={item.artists[i].external_urls.spotify}
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

							<div className="text-muted-foreground text-sm">
								{formatDurationShort(item.duration_ms / 1000)}
							</div>

							{!isLive && isPlaying && title === item.name ? (
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
									onClick={() => {
										onOpen();
										updateAudioInfo({
											audioId: item.id,
											isPlaying: true,
											audioUrl: item.preview_url,
											coverArt: item.album.images[2].url,
											isLive: false,
											title: item.name,
											artists: item.artists.map((artist) => artist.name),
										});
									}}
									size="icon"
									variant="ghost">
									<Icons.playIcon className="w-5 h-5" />
								</Button>
							)}

							<Popover>
								<PopoverTrigger asChild>
									<Button
										size="icon"
										variant="ghost">
										<EllipsisVertical className="w-5 h-5" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="bg-[#0f0f11] p-0 w-[150px]">
									<div className="flex flex-col p-1">
										<a
											target="_blank"
											href={item.artists[0].external_urls.spotify}
											className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
											<UserRound className="size-5 text-muted-foreground" />
											<span className="text-sm">Go to artist</span>
										</a>
										<a
											target="_blank"
											href={item.album.external_urls.spotify}
											className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
											<LibraryBig className="size-5 text-muted-foreground" />
											<span className="text-sm">Go to album</span>
										</a>
										<a
											target="_blank"
											href={item.external_urls.spotify}
											className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
											<Music2 className="size-5 text-muted-foreground" />
											<span className="text-sm">Go to track</span>
										</a>
										<PopoverClose asChild>
											<button
												onClick={() => copyLink(item.external_urls.spotify)}
												className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground p-3 my-1">
												<Copy className="size-5 text-muted-foreground" />
												<span className="text-sm">Copy link</span>
											</button>
										</PopoverClose>
									</div>
								</PopoverContent>
							</Popover>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default WeeklyCountdown;
