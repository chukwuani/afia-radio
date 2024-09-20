import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "./use-media-query";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

import * as Sentry from "@sentry/nextjs";

interface AudioPlayerHookReturn {
	isLoading: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	togglePlayPause: () => void;
	seekTo: (time: number) => void;
	handleVolumeChange: (newVolume: number) => void;
	toggleMute: () => void;
}

const useAudioPlayer = (): AudioPlayerHookReturn => {
	const {
		isPlaying,
		activeAudioId,
		setIsPlaying,
		updateAudioInfo,
		audioUrl,
		isLive,
		volume,
		setVolume,
	} = useAudioPlayerStore();

	const [isLoading, setIsLoading] = useState(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		const audio = new Audio(audioUrl);
		audioRef.current = audio;

		if (!isLive) {
			audio.addEventListener("loadedmetadata", () => {
				setDuration(audio.duration);
			});
		}

		audio.addEventListener("timeupdate", () => {
			setCurrentTime(audio.currentTime);
		});

		audio.addEventListener("ended", () => {
			setIsPlaying(false);
		});

		return () => {
			audio.pause();
			audio.src = "";
		};
	}, [audioUrl, isLive, setIsPlaying]);

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying && activeAudioId) {
				setIsLoading(true);

				audioRef.current
					.play()
					.catch((error: Error) => {
						Sentry.captureException(error);

						setIsPlaying(false);
					})
					.finally(() => setIsLoading(false));
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying, activeAudioId, setIsPlaying]);

	const togglePlayPause = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			if (isLive) {
				updateAudioInfo({
					audioUrl: "",
					audioId: "",
				});
			}
		} else {
			if (isLive) {
				updateAudioInfo({
					audioUrl: "/stream",
					audioId: "live",
				});
			}
		}

		setIsPlaying(!isPlaying);
	};

	const seekTo = (time: number) => {
		if (!audioRef.current || isLive) return;
		audioRef.current.currentTime = time;

		setCurrentTime(time);
	};

	useEffect(() => {
		if (audioRef.current && activeAudioId) {
			audioRef.current.volume = volume / 100;
		}
	}, [activeAudioId, volume]);

	const toggleMute = () => {
		if (isDesktop) {
			if (volume === 0) {
				setVolume(100);
			} else {
				setVolume(0);
			}
		}
	};

	const handleVolumeChange = (newVolume: number) => {
		setVolume(newVolume);
	};

	return {
		isLoading,
		currentTime,
		duration,
		volume,
		seekTo,
		togglePlayPause,
		handleVolumeChange,
		toggleMute,
	};
};

export default useAudioPlayer;
