"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { PlayCircleIcon, Radio } from "lucide-react";
import { useLivePlayer } from "@/store/useLivePlayer";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background";
import Link from "next/link";

const Hero = () => {
	const { onExpand, onPlay } = useLivePlayer((state) => state);

	return (
		<Card className="w-full flex flex-col gap-1 overflow-hidden border-none shadow-none px-6 lg:px-20 bg-transparent">
			<CardContent className="grid items-center grid-cols-1 lg:grid-cols-1 w-full px-0 gap-4">
				<section className="col-span-1 rounded-md pt-12">
					<div className="flex max-md:flex-col items-center gap-12 w-full">
						<section className="flex flex-col max-w-[500px] gap-6">
							<Link
								href="/"
								className="flex items-center">
								<Image
									width={80}
									height={80}
									className="w-[100px] max-w-none"
									src={"/afia-logo.png"}
									alt="Afia Radio"
									title="Afia Radio"
								/>

								<span className="sr-only">Home</span>
							</Link>

							<p className="max-w-[350px] text-6xl md:text-6xl font-bold mt-3 mb-auto leading-none">
								Radio, Music, Podcasts, All in One Place
							</p>

							<p className="text-lg md:text-lg text-muted-foreground">
								Save shows to listen to later, subscribe to your favourites and get fresh
								recommendations everyday.
							</p>

							<Button
								onClick={() => {
									onExpand();
									onPlay();
								}}
								className="font-bold w-fit bg-brand rounded-full p-7">
								<Radio className="mr-2" />
								Listen live
							</Button>
						</section>

						<section className="flex items-center justify-center w-full relative">
							<Image
								alt="Product image"
								className="rounded-lg object-cover"
								height={1000}
								width={1000}
								quality={100}
								src="/sound-2.jpg"
							/>
						</section>

						{/* <section className="flex items-center justify-center w-full max-w-[150px] relative">
							<Image
								alt="Product image"
								className="size-[auto] rounded-lg object-cover"
								height={200}
								width={200}
								quality={100}
								src="/afia-logo.png"
							/>
							<span className="absolute top-0 aspect-square rounded-full size-full bg-destructive pulse"></span>
							<span className="absolute top-0 aspect-square rounded-full size-full border-2 border-destructive ping"></span>
						</section> */}
					</div>
				</section>

				{/* <BackgroundGradientAnimation /> */}

				{/* <section className="col-span-2">
					<section className="grid grid-cols-1 lg:grid-cols-2 py-auto gap-4 lg:gap-8">
						{Array.from({ length: 8 }).map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-3 border rounded-md">
								<img
									className="size-20 rounded-bl-md rounded-tl-md"
									src="https://images.audacy2-prod.ext.audacy.com/4a400168-47f2-409c-965d-de711246bee3.jpeg?auto=webp&width=125%201x"
									alt="Avatar"
								/>

								<div className="grid gap-1">
									<p className="text-sm font-medium leading-none">The Road Show</p>
									<p className="text-sm text-muted-foreground">4:00pm - 7:00pm</p>
								</div>
							</div>
						))}
					</section>
				</section>  */}
			</CardContent>
		</Card>
	);
};

export default Hero;
