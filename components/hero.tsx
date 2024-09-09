"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Radio } from "lucide-react";

import { useAudioPlayerStore } from "@/store/useAudioPlayer";

const Hero = () => {
	const { onOpen, updateAudioInfo } = useAudioPlayerStore((state) => state);

	return (
		<Card className="w-full flex flex-col gap-1 overflow-hidden border-none bg-transparent shadow-none px-6 lg:px-14">
			<CardContent className="grid items-center grid-cols-1 lg:grid-cols-1 w-full px-0 gap-4">
				<section className="col-span-1 rounded-md pt-12">
					<div className="flex flex-col md:flex-row md:items-center gap-12 w-full">
						<section className="flex flex-col md:w-1/2 gap-6 relative">
							{/* <Link
								href="/"
								className="flex items-center w-fit">
								<Image
									width={80}
									height={80}
									className="w-fit max-w-none"
									src={"/images/afia-logo-dark.png"}
									alt="Afia Radio Home"
									title="Afia Radio Home"
								/>

								<span className="sr-only">Home</span>
							</Link> */}

							<p className="md:max-w-[400px] text-[2.5rem] leading-[3rem] lg:text-6xl font-bold mt-3 mb-auto">
								24h Radio, Hit Music, Podcasts, All in One Place
							</p>

							<p className="text-[15px] !leading-7 md:text-base text-muted-foreground max-w-[400px]">
								Your go-to spot for Igbo vibes, anywhere in the world. Enjoy non-stop music, news,
								and pure entertainment. Listen live now
							</p>

							<Button
								onClick={() => {
									onOpen();
									updateAudioInfo({
										isPlaying: true,
										audioUrl: "/stream",
										isLive: true,
										audioId: "live",
									});
								}}
								className="font-bold w-fit bg-brand hover:bg-brand/90 rounded-full p-7 text-foreground">
								<Radio className="mr-2" />
								Listen live
							</Button>
						</section>

						<Image
							alt="Product image"
							className="rounded-lg object-cover max-h-[550px] md:w-1/2 aspect-square"
							height={900}
							width={900}
							quality={100}
							src="/images/afia_anniversary.jpg"
						/>
					</div>
				</section>
			</CardContent>
		</Card>
	);
};

export default Hero;
