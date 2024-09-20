"use client";

import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import LiveIndicator from "@/components/live-indicator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress, Slider } from "@nextui-org/react";

import axios from "axios";
import { PauseIcon, PlayIcon, Volume1Icon, Volume2Icon, VolumeXIcon, XIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import * as Sentry from "@sentry/nextjs";

import useAudioPlayer from "@/hooks/use-audio-player";
import { formatDurationShort } from "@/lib/utils";
import { ScheduleWithShowAndHost } from "@/types";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

const LiveAudioPlayer = () => {
	const { isError, data, error, refetch } = useQuery({
		queryKey: ["now_playing"],
		queryFn: async () => {
			const { data: nowPlaying } = await axios.get<ScheduleWithShowAndHost>(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/on-air`
			);

			return nowPlaying;
		},
	});

	if (isError) {
		refetch();
		Sentry.captureException(error);
	}

	const {
		isLive,
		isPlaying,
		isOpen,
		onCollapse,
		title,
		artists,
		coverArt,
		updateAudioInfo,
		setIsPlaying,
	} = useAudioPlayerStore((state) => state);

	const {
		currentTime,
		duration,
		volume,
		handleVolumeChange,
		toggleMute,
		togglePlayPause,
		isLoading,
		seekTo,
	} = useAudioPlayer();

	return (
		<React.Fragment>
			{isOpen && (
				<div className="fixed w-full bottom-0 left-0 p-3 border border-b-0 flex flex-col items-center px-3 bg-background z-10 gap-2">
					<div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5">
						{isLive ? (
							<div className="flex items-center w-full gap-3">
								<Image
									src={data?.show?.coverArt ?? "/images/music_placeholder.jpg"}
									alt={data?.show?.title ?? "Afia 99.3 Enugu"}
									className="rounded-sm object-cover aspect-square"
									width="50"
									height="50"
								/>

								<div>
									<h3 className="text-sm font-medium line-clamp-1">
										{data?.show.title ?? "Afia 99.3 Enugu"}
									</h3>
									<p className="text-muted-foreground text-sm line-clamp-1">
										{data?.show?.host?.name ? `with ${data?.show?.host?.name}` : "Afia Radio"}
									</p>
								</div>
							</div>
						) : (
							<div className="flex items-center w-full gap-3">
								<Image
									src={coverArt}
									alt={title}
									className="rounded-sm object-cover aspect-square"
									width={50}
									height={50}
								/>

								<div>
									<h3 className="text-sm font-medium line-clamp-1">{title}</h3>
									<p className="text-muted-foreground text-sm line-clamp-1">{artists.join(", ")}</p>
								</div>
							</div>
						)}

						<div className="flex justify-end md:justify-center items-center gap-2">
							<VolumeButton
								volume={volume}
								toggleMute={toggleMute}
								handleVolumeChange={handleVolumeChange}
							/>

							<PlayButton
								isPlaying={isPlaying}
								togglePlayPause={togglePlayPause}
							/>

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
								<XIcon className="size-5" />
							</Button>
						</div>
					</div>

					<section className="w-full md:w-1/3 md:mx-auto">
						{isLive ? (
							<div className="flex items-center justify-between gap-4">
								<Progress
									isIndeterminate={isLoading}
									aria-label="Loading..."
									value={100}
									className="flex-1 h-1"
									classNames={{
										indicator: "bg-gradient-to-r from-brand to-brand",
									}}
								/>

								<LiveIndicator />
							</div>
						) : (
							<div className="flex items-center justify-between gap-4">
								<span className="text-xs text-muted-foreground">
									{formatDurationShort(currentTime)}
								</span>

								{isLoading ? (
									<Progress
										isIndeterminate={isLoading}
										aria-label="Loading..."
										className="flex-1 h-1"
										classNames={{
											indicator: "bg-gradient-to-r from-brand to-brand",
										}}
									/>
								) : (
									<Slider
										onChange={(v) => {
											seekTo(((v as number) / 100) * duration);
										}}
										onChangeEnd={() => setIsPlaying(true)}
										size="sm"
										step={1}
										value={(currentTime / duration) * 100}
										aria-label="Playback"
										classNames={{
											base: "max-w-md",
											track: "border-s-brand",
											filler: "bg-gradient-to-r from-brand to-brand",
										}}
										renderThumb={(props) => (
											<div
												{...props}
												className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing">
												<span className="transition-transform bg-brand rounded-full w-[10px] h-[10px] block group-data-[dragging=true]:scale-80" />
											</div>
										)}
									/>
								)}

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

const PlayButton = ({
	isPlaying,
	togglePlayPause,
}: {
	isPlaying: boolean;
	togglePlayPause: () => void;
}) => {
	return (
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
	);
};

const VolumeButton = ({
	volume,
	toggleMute,
	handleVolumeChange,
}: {
	volume: number;
	toggleMute: () => void;
	handleVolumeChange: (newVolume: number) => void;
}) => {
	const noVolume = volume === 0;
	const halfVolume = volume <= 50;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="icon">
					{noVolume ? (
						<VolumeXIcon className="size-5" />
					) : halfVolume ? (
						<Volume1Icon className="size-5" />
					) : (
						<Volume2Icon className="size-5" />
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="py-2 px-3"
				side="top">
				<Slider
					size="sm"
					step={1}
					value={volume}
					onChange={(v) => handleVolumeChange(v as number)}
					renderThumb={(props) => (
						<div
							{...props}
							className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing">
							<span className="transition-transform bg-brand rounded-full w-[10px] h-[10px] block group-data-[dragging=true]:scale-80" />
						</div>
					)}
					startContent={
						<Button
							onClick={toggleMute}
							variant="ghost"
							size="icon">
							{noVolume ? (
								<VolumeXIcon className="size-5" />
							) : halfVolume ? (
								<Volume1Icon className="size-5" />
							) : (
								<Volume2Icon className="size-5" />
							)}
						</Button>
					}
					endContent={<p className="text-sm text-muted-foreground">{volume}</p>}
				/>
			</PopoverContent>
		</Popover>
	);
};
