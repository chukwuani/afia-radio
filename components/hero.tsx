"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Radio } from "lucide-react";

import { useLivePlayer } from "@/store/useLivePlayer";

const Hero = () => {
	const { onExpand, onPlay } = useLivePlayer((state) => state);

	return (
		<Card className="w-full flex flex-col gap-1 overflow-hidden border-none bg-transparent shadow-none px-6 lg:px-14">
			<CardContent className="grid items-center grid-cols-1 lg:grid-cols-1 w-full px-0 gap-4">
				<section className="col-span-1 rounded-md pt-12">
					<div className="flex flex-col md:flex-row items-center gap-12 w-full">
						<section className="flex flex-col max-md:items-center max-md:text-center md:w-1/2 gap-6 relative">
							<Link
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
							</Link>

							<p className="max-w-[250px] md:max-w-[350px] text-5xl md:text-6xl font-bold mt-3 mb-auto">
								Radio, Music, Podcasts, All in One Place
							</p>

							<p className="text-lg md:text-lg text-muted-foreground max-w-[400px]">
								Your go-to spot for Igbo vibes, anywhere in the world. Enjoy non-stop music, news,
								and pure entertainment. Listen live now
							</p>

							<Button
								onClick={() => {
									onExpand();
									onPlay();
								}}
								className="font-bold w-fit bg-brand hover:bg-brand/90 rounded-full p-7 text-foreground">
								<Radio className="mr-2" />
								Listen live
							</Button>
						</section>

						<Image
							alt="Product image"
							className="rounded-lg object-cover md:w-1/2 aspect-square"
							height={900}
							width={900}
							quality={100}
							src="/images/mic.jpg"
						/>
					</div>
				</section>
			</CardContent>
		</Card>
	);
};

export default Hero;
