import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AudioPlayerState {
	isLive: boolean;
	isOpen: boolean;
	isPlaying: boolean;
	audioUrl: string;
	coverArt: string;
	title: string;
	artists: string[];
	volume: number;
	activeAudioId: string | null;
	setIsPlaying: (isPlaying: boolean) => void;
	onOpen: () => void;
	onCollapse: () => void;
	setVolume: (volume: number) => void;
	updateAudioInfo: (info: {
		audioId: string;
		isPlaying?: boolean;
		audioUrl: string;
		coverArt?: string;
		isLive?: boolean;
		title?: string;
		artists?: string[];
	}) => void;
	stopAllAudio: () => void;
}

export const useAudioPlayerStore = create<AudioPlayerState, [["zustand/persist", unknown]]>(
	persist(
		(set) => ({
			isLive: false,
			isOpen: false,
			isPlaying: false,
			audioUrl: "",
			coverArt: "",
			title: "",
			artists: [],
			activeAudioId: null,
			volume: 100,
			setVolume: (volume) => set({ volume }),
			setIsPlaying: (isPlaying) => set({ isPlaying }),
			onOpen: () => set({ isOpen: true }),
			onCollapse: () => set({ isOpen: false }),
			updateAudioInfo: (info) =>
				set((state) => ({
					...state,
					...info,
					activeAudioId: info.audioId,
					isPlaying: info.isPlaying ?? true,
				})),
			stopAllAudio: () => set({ isPlaying: false, activeAudioId: null }),
		}),
		{ name: "audio-player-store", storage: createJSONStorage(() => sessionStorage) }
	)
);
