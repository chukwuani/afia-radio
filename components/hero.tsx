"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Radio } from "lucide-react";

import { useAudioPlayerStore } from "@/store/useAudioPlayer";
import { Badge } from "./ui/badge";

const Hero = () => {
	const { onOpen, updateAudioInfo } = useAudioPlayerStore((state) => state);

	return (
		<section className="flex flex-col-reverse md:flex-row overflow-hidden border-none bg-transparent shadow-none px-6 lg:px-14  md:items-center gap-12 w-full pt-12">
			<section className="flex flex-col max-md:text-center max-md:items-center md:w-[40%] gap-8 relative">
				<h1
					className="md:max-w-[400px] text-[2.5rem] leading-[3rem] lg:text-6xl font-bold mt-3 mb-auto animate-fade-up"
					style={{ animationDelay: "0.20s", animationFillMode: "both" }}>
					24hrs Radio, Hit Music, Podcasts, All in One Place
				</h1>

				<p
					className="text-[15px] !leading-7 md:text-base text-muted-foreground max-w-[400px] animate-fade-up"
					style={{ animationDelay: "0.30s", animationFillMode: "both" }}>
					Your go-to spot for Igbo vibes, anywhere in the world. Enjoy non-stop music, news, and
					pure entertainment. Listen live now
				</p>

				<div
					className="flex animate-fade-up"
					style={{ animationDelay: "0.40s", animationFillMode: "both" }}>
					<Button
						onClick={() => {
							onOpen();
							updateAudioInfo({
								isPlaying: true,
								audioUrl: process.env.NEXT_PUBLIC_STREAM_URL!,
								isLive: true,
								audioId: "live",
							});
						}}
						className="font-bold w-fit bg-brand hover:bg-brand/90 rounded-full p-7 text-foreground">
						<Radio className="mr-2" />
						Listen live
					</Button>
				</div>
			</section>

			<div
				className="flex justify-end animate-fade-up m-auto max-h-[550px] md:w-[50%] lg:w-[60%] aspect-square"
				style={{ animationDelay: "0.10s", animationFillMode: "both" }}>
				<Image
					alt="Hero Image"
					priority
					className="rounded-lg object-cover w-full aspect-square"
					height={900}
					width={900}
					quality={100}
					src="/images/opengraph-image.jpg"
				/>

				{/* <Badge
					className="absolute bottom-4 right-4 z-20 line-clamp-1 text-xs"
					variant="secondary">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.vecteezy.com/free-vector/travel"
						className="hover:underline">
						Vectezzy
					</a>
				</Badge> */}
			</div>
		</section>
	);
};

export default Hero;
