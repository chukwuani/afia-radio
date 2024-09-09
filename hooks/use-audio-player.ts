import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "./use-media-query";
import { useAudioPlayerStore } from "@/store/useAudioPlayer";

interface AudioPlayerHookReturn {
	currentTime: number;
	duration: number;
	volume: number[];
	togglePlayPause: () => void;
	seekTo: (time: number) => void;
	handleVolumeChange: (newVolume: number[]) => void;
	toggleMute: () => void;
	isPlaying: boolean;
}

const useAudioPlayer = (
	audioId: string,
	audioUrl: string,
	isLive: boolean
): AudioPlayerHookReturn => {
	const { isPlaying, activeAudioId, setIsPlaying, updateAudioInfo, stopAllAudio } =
		useAudioPlayerStore();

	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const [volume, setVolume] = useState([100]);

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

		audio.addEventListener("ended", () => {
			setIsPlaying(false);
		});

		return () => {
			audio.pause();
			audio.src = "";
		};
	}, [audioUrl, setIsPlaying]);

	useEffect(() => {
		if (audioRef.current) {
			if (isPlaying && activeAudioId === audioId) {
				audioRef.current.play().catch((err) => {
					console.log(err);
					setIsPlaying(false);
				});
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying, activeAudioId, audioId]);

	const togglePlayPause = () => {
		if (!audioRef.current) return;

		if (isPlaying && activeAudioId === audioId) {
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
		if (audioRef.current) {
			audioRef.current.volume = volume[0] / 100;
		}
	}, [volume]);

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

	return {
		isPlaying: isPlaying && activeAudioId === audioId,
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
