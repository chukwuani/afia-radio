import { create } from "zustand";

interface LivePlayerStore {
	isOpen: boolean;
	onExpand: () => void;
	onCollapse: () => void;
	isPlaying: boolean;
	onPause: () => void;
	onPlay: () => void;
}

export const useLivePlayer = create<LivePlayerStore>((set) => ({
	isOpen: false,
	onExpand: () => set(() => ({ isOpen: true })),
	onCollapse: () => set(() => ({ isOpen: false })),
	isPlaying: false,
	onPlay: () => set(() => ({ isPlaying: true })),
	onPause: () => set(() => ({ isPlaying: false })),
}));
