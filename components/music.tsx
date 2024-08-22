"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

const Music = () => {
	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none shadow-none p-6 lg:p-14 lg:py-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-[#509DA7]">Music Mixes</CardTitle>
					<CardDescription>Discover Endless Playlists for Every Mood and Moment</CardDescription>
				</CardHeader>

				<Link
					variant="outline"
					href="/playlists"
					className="hidden md:flex rounded-full">
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{Array.from({ length: 4 }).map((_, index) => (
					<a
						key={index}
						href="/playlists/1"
						className="group cols-span-1 gap-2 w-full text-left">
						<section className="flex items-center justify-center relative">
							<img
								alt="Product image"
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								height="300"
								src={
									index === 0
										? "https://e-cdns-images.dzcdn.net/images/cover/6998cf07f6fb61acf45247d8f3eaba6b/264x264-000000-80-0-0.jpg"
										: index === 1
											? "https://e-cdns-images.dzcdn.net/images/playlist/c763ebddc7f9d2eed96b4d493808e55f/264x264-000000-80-0-0.jpg"
											: index === 2
												? "https://e-cdns-images.dzcdn.net/images/playlist/ce6aed5d6b6f7671f7b97e811fcfcee3/264x264-000000-80-0-0.jpg"
												: index === 3
													? "https://e-cdns-images.dzcdn.net/images/playlist/0d7557851e50e7a471cc989f39e9dbc3/264x264-000000-80-0-0.jpg"
													: "https://e-cdns-images.dzcdn.net/images/playlist/a3a8153ce69314dbcd4b2f5e97048baa/264x264-000000-80-0-0.jpg"
								}
							/>

							<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
						</section>

						<p className="text-base font-bold mt-3 mb-2 leading-none transition-colors group-hover:text-brand underline-offset-2 group-hover:underline">
							African Heat
						</p>

						<p className="text-sm text-muted-foreground line-clamp-2">
							The tracks heating up the continent right now!
						</p>
					</a>
				))}
			</CardContent>

			<Link
				variant="outline"
				size="lg"
				href="/playlists"
				className="flex md:hidden mx-auto rounded-full">
				View All
			</Link>
		</Card>
	);
};

export default Music;
