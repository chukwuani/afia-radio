"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

const Presenters = () => {
	const images = [
		"https://mmo.aiircdn.com/370/63d96b191c472.jpg",
		"https://mmo.aiircdn.com/370/6087d237a49f0.jpg",
		"https://mmo.aiircdn.com/370/622f5f529adff.jpg",
		"https://mmo.aiircdn.com/370/634866d65b077.jpg",
		"https://mmo.aiircdn.com/370/60868ad95db10.jpg",
		"https://mmo.aiircdn.com/370/660ff71a92fcc.jpg",
		"https://mmo.aiircdn.com/370/622efac5c9f5d.jpg",
		"https://mmo.aiircdn.com/370/668eafc862171.jpg",
		"https://mmo.aiircdn.com/370/60868ad64fd3b.jpg",
		"https://mmo.aiircdn.com/370/65d70945238ae.jpg",
	];

	const updateImageSrc = (index: number) => {
		return images[index];
	};

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Presenters</CardTitle>
					<CardDescription>Meet the people who make up Afia Radio.</CardDescription>
				</CardHeader>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{Array.from({ length: 8 }).map((_, index) => (
					<a
						key={index}
						href="/podcasts/1"
						className="group cols-span-1 gap-2 w-full text-left">
						<section className="flex items-center justify-center relative">
							<img
								alt="Sofia Davis"
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								height="300"
								src={updateImageSrc(index)}
							/>
						</section>

						<p className="text-base font-bold mt-3 mb-2 leading-none transition-colors group-hover:text-brand">
							Sofia Davis
						</p>

						<p className="text-sm text-muted-foreground mb-4">The Breakfast Show</p>
					</a>
				))}
			</CardContent>
		</Card>
	);
};

export default Presenters;
