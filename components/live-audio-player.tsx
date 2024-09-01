"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";

import { PauseIcon, Volume1Icon, VolumeXIcon } from "lucide-react";

import { useLivePlayer } from "@/store/useLivePlayer";
import { IconProps } from "./icons";
import { useMediaQuery } from "@/hooks/use-media-query";

const LiveAudioPlayer = () => {
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const [volume, setVolume] = useState([100]);

	const { isOpen, onCollapse, isPlaying, onPause, onPlay } = useLivePlayer((state) => state);

	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		const audio = new Audio("/stream");
		audioRef.current = audio;

		audio.addEventListener("loadedmetadata", () => {
			setDuration(audio.duration);
		});

		audio.addEventListener("timeupdate", () => {
			setCurrentTime(audio.currentTime);
		});

		return () => {
			audio.pause();
			audio.src = "";
		};
	}, []);

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume[0] / 100;
		}
	}, [volume]);

	const togglePlayPause = () => {
		if (isPlaying) {
			onPause();
		} else {
			onPlay();
		}
	};

	const toggleMute = () => {
		if (isDesktop) {
			if (volume[0] === 0) {
				setVolume([100]);
			} else {
				setVolume([0]);
			}
		}
	};

	const handleVolumeChange = (newVolume: number[]) => {
		setVolume(newVolume);
	};

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<React.Fragment>
			{isOpen && (
				<div className="fixed w-full md:max-w-sm bottom-0 md:bottom-8 md:right-10 md:rounded-lg p-3 border shadow-lg mt-auto mx-auto flex flex-col items-center px-3 bg-background z-10">
					<div className="flex items-center w-full justify-between gap-10">
						<div className="flex items-center gap-2">
							<Image
								src="https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x"
								alt="Show Cover"
								className="rounded-md object-cover aspect-square"
								width="40"
								height="40"
							/>

							<div>
								<h3 className="text-sm font-medium">The Breakfast Show</h3>
								<p className="text-muted-foreground text-sm">with Sofia</p>
							</div>
						</div>

						<div className="flex items-center gap-2">
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
									onPause();
								}}
								variant="ghost"
								size="icon">
								<XIcon className="w-5 h-5" />
							</Button>
						</div>
					</div>
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
