import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllSchedule } from "@/lib/actions/radio";
import Image from "next/image";
import Link from "next/link";

export default async function RadioSchedule() {
	const schedule = await getAllSchedule();

	const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
	return (
		<Card className="flex flex-col gap-5 overflow-hidden border-0 bg-transparent shadow-none p-6 lg:p-14 lg:py-8 rounded-none">
			<section className="flex justify-between items-center gap-10">
				<CardHeader className="px-0">
					<CardTitle className="text-brand">Daily Radio Schedule</CardTitle>
					<CardDescription>
						Stay tuned to your favorite shows and never miss a beat.
					</CardDescription>
				</CardHeader>
			</section>

			<section className="flex flex-col gap-5">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SUNDAY</h2>

				<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
					{schedule
						.filter((item) => item.day === "SUNDAY")
						.map((item, index) => (
							<Link
								key={index}
								href={`/radio/${item.showId}`}
								className="group cols-span-1 gap-2 w-full text-left">
								<section className="flex items-center justify-center relative">
									<Image
										alt={item.show.title}
										className="aspect-square rounded-md object-cover bg-black/30 w-full"
										width={300}
										height={300}
										src={item.show.coverArt}
									/>

									<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
								</section>

								<section className="flex gap-2 items-center mt-3 mb-2">
									<p className="text-xs text-muted-foreground font-medium">
										{item.startTime} - {item.endTime}
									</p>
								</section>

								<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
									{item.show.title}
								</p>

								<p className="text-sm text-muted-foreground line-clamp-2">
									{item.show.description}
								</p>
							</Link>
						))}
				</CardContent>
			</section>

			<section className="flex flex-col gap-5">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					MONDAY - FRIDAY
				</h2>

				<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
					{schedule
						.filter((item) => item.day === "MONDAY")
						.map((item, index) => (
							<Link
								key={index}
								href={`/radio/${item.showId}`}
								className="group cols-span-1 gap-2 w-full text-left">
								<section className="flex items-center justify-center relative">
									<Image
										alt={item.show.title}
										className="aspect-square rounded-md object-cover bg-black/30 w-full"
										width={300}
										height={300}
										src={item.show.coverArt}
									/>

									<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
								</section>

								<section className="flex gap-2 items-center mt-3 mb-2">
									<p className="text-xs text-muted-foreground font-medium">
										{item.startTime} - {item.endTime}
									</p>
								</section>

								<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
									{item.show.title}
								</p>

								<p className="text-sm text-muted-foreground line-clamp-2">
									{item.show.description}
								</p>
							</Link>
						))}
				</CardContent>
			</section>

			<section className="flex flex-col gap-5">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SATURDAY</h2>

				<CardContent className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 w-full px-0">
					{schedule
						.filter((item) => item.day === "SATURDAY")
						.map((item, index) => (
							<Link
								key={index}
								href={`/radio/${item.showId}`}
								className="group cols-span-1 gap-2 w-full text-left">
								<section className="flex items-center justify-center relative">
									<Image
										alt={item.show.title}
										className="aspect-square rounded-md object-cover bg-black/30 w-full"
										width={300}
										height={300}
										src={item.show.coverArt}
									/>

									<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
								</section>

								<section className="flex gap-2 items-center mt-3 mb-2">
									<p className="text-xs text-muted-foreground font-medium">
										{item.startTime} - {item.endTime}
									</p>
								</section>

								<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
									{item.show.title}
								</p>

								<p className="text-sm text-muted-foreground line-clamp-2">
									{item.show.description}
								</p>
							</Link>
						))}
				</CardContent>
			</section>
		</Card>
	);
}
