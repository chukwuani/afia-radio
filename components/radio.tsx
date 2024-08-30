"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

const Radio = () => {
	const images = [
		"https://images.audacy2-prod.ext.audacy.com/54dcdfda-dcfa-4d1e-aa30-334848dd7b64.jpg?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/54dcdfda-dcfa-4d1e-aa30-334848dd7b64.jpg?auto=webp&width=250 2x",
		"https://images.radio.com/logos/ComedyNow.jpg?auto=webp&width=125 1x, https://images.radio.com/logos/ComedyNow.jpg?auto=webp&width=250 2x",
		"https://images.audacy2-prod.ext.audacy.com/3ba0e832-d55d-40a8-b861-bfaf00a6a80f.jpg?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/3ba0e832-d55d-40a8-b861-bfaf00a6a80f.jpg?auto=webp&width=250 2x",
		"https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=125 1x, https://images.audacy2-prod.ext.audacy.com/9d337f80-58d1-4891-8a76-d327c98d0c82.png?auto=webp&width=250 2x",
	];

	const updateImageSrc = (index: number) => {
		return images[index];
	};

	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none bg-transparent shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Afia Radio</CardTitle>
					<CardDescription> Live and local, just for you </CardDescription>
				</CardHeader>

				<Link
					variant="outline"
					href="/radio"
					className="hidden md:flex rounded-full">
					View Schedule
				</Link>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{Array.from({ length: 4 }).map((_, index) => (
					<a
						key={index}
						href="/radio/1"
						className="group cols-span-1 gap-2 w-full text-left">
						<section className="flex items-center justify-center relative">
							<img
								alt="Sofia Davis"
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								height="300"
								src={updateImageSrc(index)}
							/>

							<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
						</section>

						<p className="text-xs text-muted-foreground font-medium mt-3 mb-2">4:00pm - 9:00pm</p>

						<p className="text-base font-bold mt-3 mb-2 leading-none transition-colors group-hover:text-brand">
							The Morning Show
						</p>

						<p className="text-sm text-muted-foreground line-clamp-2">
							We answer your questions on the biggest issues in the run-up to the election.
						</p>
					</a>
				))}
			</CardContent>

			<Link
				variant="outline"
				size="lg"
				href="/radio"
				className="flex md:hidden mx-auto rounded-full">
				View Schedule
			</Link>
		</Card>
	);
};

export default Radio;
