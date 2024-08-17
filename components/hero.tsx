"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { PlayCircleIcon } from "lucide-react";
import { useLivePlayer } from "@/store/useLivePlayer";

const Hero = () => {
	const { onExpand, onPlay } = useLivePlayer((state) => state);

	return (
		<Card className="w-full flex flex-col gap-1 overflow-hidden border-none shadow-none px-6 lg:px-8 bg-transparent">
			{/* <CardHeader className="px-0 z-10">
				<CardTitle className="text-destructive dark:text-red-600">On Air</CardTitle>
				<CardDescription> Live and local, just for you </CardDescription>
			</CardHeader> */}

			<CardContent className="grid items-center grid-cols-1 lg:grid-cols-1 w-full px-0 gap-4">
				<section className="col-span-1 rounded-md pt-12">
					<div className="flex flex-col-reverse items-center gap-10 w-full">
						{/* <section className="flex items-center justify-center w-full relative">
							<Image
								alt="Product image"
								className="aspect-video w-[90%] h-[400px] rounded-lg object-cover"
								height={1000}
								width={1000}
								quality={100}
								src="/mus.jpg"
							/>

							
						</section> */}

						<section className="flex flex-col items-center text-center max-w-[500px] gap-6">
							<p className="max-w-[400px] text-4xl md:text-6xl font-bold mt-3 mb-auto leading-none">
								Your world of Sounds
							</p>

							<p className="text-base md:text-lg text-muted-foreground">
								Save shows to listen to later, subscribe to your favourites and get fresh
								recommendations everyday.
							</p>

							<Button
								onClick={() => {
									onExpand();
									onPlay();
								}}
								className="font-bold w-fit mt-4 bg-brand rounded-full p-7">
								<PlayCircleIcon className="mr-2" />
								Listen live
							</Button>
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
				</section> */}
			</CardContent>
		</Card>
	);
};

export default Hero;
