import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface IcecastVisualizerProps {
	streamUrl: string;
}

const IcecastVisualizer: React.FC<IcecastVisualizerProps> = ({ streamUrl }) => {
	const waveformRef = useRef<HTMLDivElement>(null);
	const wavesurfer = useRef<WaveSurfer | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	useEffect(() => {
		if (!waveformRef.current) return;

		wavesurfer.current = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: "violet",
			progressColor: "purple",
			cursorColor: "navy",
			barWidth: 3,
			barRadius: 3,
			cursorWidth: 1,
			height: 200,
			barGap: 3,
		});

		wavesurfer.current.load(streamUrl);

		wavesurfer.current.on("play", () => setIsPlaying(true));
		wavesurfer.current.on("pause", () => setIsPlaying(false));

		return () => {
			if (wavesurfer.current) {
				wavesurfer.current.destroy();
			}
		};
	}, [streamUrl]);

	const handlePlayPause = () => {
		if (wavesurfer.current) {
			wavesurfer.current.playPause();
		}
	};

	return (
		<div>
			<div ref={waveformRef} />
			<button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
		</div>
	);
};

export default IcecastVisualizer;
