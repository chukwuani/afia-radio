"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { IconProps } from "./icons";
import { useEffect, useRef, useState } from "react";
import { PauseIcon } from "lucide-react";
import { useLivePlayer } from "@/store/useLivePlayer";

const AudioPlayer = () => {
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

	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	return (
		<>
			{isOpen && (
				<div className="fixed bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 md:rounded-lg p-4 border shadow-lg mt-auto mx-auto flex flex-col items-center w-full md:max-w-[500px] px-4 bg-background z-10">
					<div className="flex items-center w-full justify-between">
						<div className="flex items-center gap-2">
							<Image
								src="https://images.audacy2-prod.ext.audacy.com/4a400168-47f2-409c-965d-de711246bee3.jpeg?auto=webp&width=125"
								alt="Album Cover"
								className="rounded-md"
								width="40"
								height="40"
								style={{ aspectRatio: "40/40", objectFit: "cover" }}
							/>

							<div>
								<h3 className="text-sm font-medium">Starlight</h3>
								<p className="text-muted-foreground text-sm">Muse</p>
							</div>
						</div>

						<div
							id="playing2"
							className="playing">
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
							<Button
								variant="ghost"
								size="icon">
								<Volume2Icon className="w-5 h-5" />
							</Button>

							<Button
								onClick={togglePlayPause}
								variant="ghost"
								size="icon">
								{isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
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
