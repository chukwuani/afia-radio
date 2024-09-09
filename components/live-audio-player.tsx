"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";

import { PauseIcon, Volume1Icon, VolumeXIcon } from "lucide-react";

import { IconProps } from "./icons";
import useAudioPlayer from "@/hooks/use-audio-player";
import { Progress } from "./ui/progress";
import { useQuery } from "@tanstack/react-query";
import { getCurrentShow } from "@/lib/actions/radio";
import LiveIndicator from "./live-indicator";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import { formatDurationShort } from "@/lib/utils";

const LiveAudioPlayer = () => {
	const { isPending, data } = useQuery({
		queryKey: ["now_playing"],
		queryFn: async () => {
			const nowPlaying = await getCurrentShow();

			return nowPlaying;
		},
	});

	const {
		isLive,
		isPlaying,
		isOpen,
		onCollapse,
		title,
		artists,
		coverArt,
		updateAudioInfo,
		audioUrl,
		activeAudioId,
	} = useAudioPlayerStore((state) => state);

	const { currentTime, duration, volume, handleVolumeChange, toggleMute, togglePlayPause } =
		useAudioPlayer(activeAudioId!, audioUrl, isLive);

	return (
		<React.Fragment>
			{isOpen && (
				<div className="fixed w-full bottom-0 left-0 p-3 border border-b-0 flex flex-col items-center px-3 bg-background z-10 gap-2">
					<div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5">
						{isLive ? (
							<div className="flex items-center w-full gap-3">
								<Image
									src={data?.show.coverArt ?? "/images/music_placeholder.jpg"}
									alt={data?.show.title ?? "Afia 99.3 Enugu"}
									className="rounded-sm object-cover aspect-square"
									width="50"
									height="50"
								/>

								<div>
									<h3 className="text-sm font-medium">{data?.show.title ?? "Afia 99.3 Enugu"}</h3>
									<p className="text-muted-foreground text-sm">
										{data?.show.host ? `with ${data?.show.host}` : "Afia Radio"}
									</p>
								</div>
							</div>
						) : (
							<div className="flex items-center w-full gap-3">
								<Image
									src={coverArt}
									alt={"audioData.title as string"}
									className="rounded-sm object-cover aspect-square"
									width="50"
									height="50"
								/>

								<div>
									<h3 className="text-sm font-medium">{title}</h3>
									<p className="text-muted-foreground text-sm">{artists.join(", ")}</p>
								</div>
							</div>
						)}

						<div className="flex justify-end md:justify-center items-center gap-2">
							<HoverCard openDelay={300}>
								<HoverCardTrigger>
									<Button
										onClick={toggleMute}
										variant="ghost"
										size="icon">
										{volume[0] === 0 ? (
											<VolumeXIcon className="w-5 h-5" />
										) : volume[0] <= 50 ? (
											<Volume1Icon className="w-5 h-5" />
										) : (
											<Volume2Icon className="w-5 h-5" />
										)}
									</Button>
								</HoverCardTrigger>
								<HoverCardContent side="top">
									<Slider
										step={1}
										value={volume}
										onValueChange={handleVolumeChange}
									/>
								</HoverCardContent>
							</HoverCard>

							<Button
								className="bg-black rounded-full hover:bg-black"
								onClick={togglePlayPause}
								variant="ghost"
								size="icon">
								{isPlaying ? (
									<PauseIcon className="w-5 h-5 text-white" />
								) : (
									<PlayIcon className="w-5 h-5 text-white" />
								)}
							</Button>

							<Button
								onClick={() => {
									onCollapse();
									updateAudioInfo({
										isPlaying: false,
										audioUrl: "",
										audioId: "",
									});
								}}
								variant="ghost"
								size="icon">
								<XIcon className="w-5 h-5" />
							</Button>
						</div>
					</div>

					<section className="w-full md:w-1/3 md:mx-auto">
						{isLive ? (
							<div className="flex items-center justify-between gap-4">
								<Progress
									value={100}
									className="flex-1 h-1"
								/>

								<LiveIndicator />
							</div>
						) : (
							<div className="flex items-center justify-between gap-4">
								<span className="text-xs text-muted-foreground">
									{formatDurationShort(currentTime)}
								</span>
								<Progress
									value={(currentTime / duration) * 100}
									className="flex-1 h-1"
								/>
								<span className="text-xs text-muted-foreground">
									{formatDurationShort(duration)}
								</span>
							</div>
						)}
					</section>
				</div>
			)}
		</React.Fragment>
	);
};

export default LiveAudioPlayer;

function PlayIcon(props: IconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="6 3 20 12 6 21 6 3" />
		</svg>
	);
}

function Volume2Icon(props: IconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
			<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
			<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
		</svg>
	);
}

function XIcon(props: IconProps) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
