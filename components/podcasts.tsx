import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

const Podcasts = () => {
	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-none shadow-none px-6 lg:px-8">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle>Stream Top Podcasts</CardTitle>
					<CardDescription> Stream the best podcasts from your favorite stations </CardDescription>
				</CardHeader>

				<Link
					variant="outline"
					href="/podcasts"
					className="hidden md:flex rounded-full">
					View All
				</Link>
			</section>

			<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
				{Array.from({ length: 4 }).map((_, index) => (
					<a
						key={index}
						href="/podcasts/1"
						className="group cols-span-1 gap-2 w-full text-center">
						<section className="flex items-center justify-center relative">
							<img
								alt="Sofia Davis"
								className="aspect-square rounded-md object-cover bg-black/30 w-full"
								height="300"
								src="https://images.audacy2-prod.ext.audacy.com/4a400168-47f2-409c-965d-de711246bee3.jpeg?auto=webp&width=125 1x"
							/>

							<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
						</section>

						<p className="text-sm font-bold mt-3 mb-2 leading-none transition-colors group-hover:text-brand underline-offset-2 group-hover:underline">
							Sofia Davis
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
				href="/podcasts"
				className="flex md:hidden mx-auto rounded-full">
				View All
			</Link>
		</Card>
	);
};

export default Podcasts;
