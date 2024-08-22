"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IconProps } from "./icons";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, Volume1Icon, VolumeXIcon } from "lucide-react";
import { useLivePlayer } from "@/store/useLivePlayer";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Slider } from "./ui/slider";

const AudioPlayer = () => {
	const [volume, setVolume] = useState([100]);

	const { isOpen, onCollapse, isPlaying, onPause, onPlay } = useLivePlayer((state) => state);

	const audioUrl = "https://stm01.virtualcast.com.br:8248/acusticacamaqua";
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		const audio = new Audio(audioUrl);
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
	}, [audioUrl]);

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
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
				onPause();
			} else {
				audioRef.current.play();
				onPlay();
			}
		}
	};

	const toggleMute = () => {
		if (volume[0] === 0) {
			setVolume([100]);
		} else {
			setVolume([0]);
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
		<>
			{isOpen && (
				<div className="fixed max-md:w-full bottom-0 md:bottom-8 md:right-10 md:rounded-lg p-3 border shadow-lg mt-auto mx-auto flex flex-col items-center px-3 bg-background z-10">
					<div className="flex items-center w-full justify-between gap-10">
						<div className="flex items-center gap-2">
							<Image
								src="https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x"
								alt="Album Cover"
								className="rounded-md"
								width="40"
								height="40"
								style={{ aspectRatio: "40/40", objectFit: "cover" }}
							/>

							<div>
								<h3 className="text-sm font-medium">The Breakfast Show</h3>
								<p className="text-muted-foreground text-sm">with Sofia</p>
							</div>
						</div>

						<div
							id="playing2"
							className="playing !hidden">
							<div className="rect1"></div>
							<div className="rect2"></div>
							<div className="rect3"></div>
							<div className="rect4"></div>
							<div className="rect5"></div>
							<div className="rect1"></div>
							<div className="rect2"></div>
							<div className="rect3"></div>
							<div className="rect4"></div>
							<div className="rect5"></div>
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
		</>
	);
};

export default AudioPlayer;

function ForwardIcon(props: IconProps) {
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
			<polyline points="15 17 20 12 15 7" />
			<path d="M4 18v-2a4 4 0 0 1 4-4h12" />
		</svg>
	);
}

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

function RewindIcon(props: IconProps) {
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
			<polygon points="11 19 2 12 11 5 11 19" />
			<polygon points="22 19 13 12 22 5 22 19" />
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
