import { notFound } from "next/navigation";

import { absoluteUrl } from "@/lib/utils";

import { Shell } from "@/components/layouts/shell";

import { Metadata } from "next";
import { getShowById } from "@/lib/actions/radio";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { show } = await getShowById(params.slug);

	if (!show) {
		return {};
	}

	const url = process.env.NEXT_PUBLIC_APP_URL!;

	return {
		metadataBase: new URL(url),
		title: show.title,
		description: show.description,
		authors: { name: show.host },
		openGraph: {
			title: show.title,
			description: show.description,
			url: absoluteUrl(`/radio/${params.slug}`),
			images: [show.coverArt],
		},
		twitter: {
			card: "summary_large_image",
			title: show.title,
			description: show.description,
			images: [show.coverArt],
		},
	};
}

export default async function PostPage({ params }: PageProps) {
	const { show, otherShows } = await getShowById(params.slug);

	if (!show) {
		notFound();
	}

	return (
		<Shell
			as="article"
			variant="content">
			<section className="flex flex-col gap-6 max-md:text-center max-md:items-center">
				<section className="flex max-md:flex-col items-center gap-4">
					<img
						src={show.coverArt}
						alt={show.title}
						width={500}
						height={500}
						className="size-[150px] md:size-[200px] rounded-md object-cover aspect-square"
					/>

					<section className="flex flex-col gap-2">
						<h1 className="text-4xl md:text-5xl font-bold">{show.title}</h1>

						<p className="text-muted-foreground text-sm mb-8">with {show.host}</p>
					</section>
				</section>
			</section>

			<section className="w-full py-12">
				<div className="">
					<div className="grid gap-8">
						{/* <div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Latest Episodes
							</h2>

							<div className="grid gap-4 mt-6">
									{recentEpisodes.map((episode) => (
										<Card
											key={episode.id}
											className="p-4 flex items-center gap-4">
											<div className="flex-1">
												<h3 className="text-xl font-bold">{episode.title}</h3>
												<p className="text-muted-foreground">
													{episode.airDate} • {episode.duration}
												</p>
											</div>
											<Link
												href="#"
												className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
												prefetch={false}>
												Listen
											</Link>
										</Card>
									))}
								</div>
						</div> */}

						<div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Show Notes
							</h2>
							<p className="mt-6 text-muted-foreground">{show.description}</p>

							<p className="mt-6 text-muted-foreground">{show.showNote}</p>
						</div>

						{/* <div>
							<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
								<div className="w-full md:w-[40%] aspect-square overflow-hidden rounded-lg">
									<img
										src="/images/afia_anniversary.jpg"
										width={400}
										height={400}
										alt="About"
										className="object-cover"
										style={{ aspectRatio: "400/400", objectFit: "cover" }}
									/>
								</div>
								<div className="w-full md:w-[60%] space-y-4">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
										Meet the Hosts
									</h2>

									<p className="text-muted-foreground text-base leading-7">
										We are a team of passionate individuals dedicated to creating innovative
										solutions that empower our clients to achieve their goals. With years of
										experience in the industry, we have developed a deep understanding of the
										challenges our clients face and have tailored our services to meet their unique
										needs.
									</p>
								</div>
							</div>
						</div> */}

						<div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Other Shows
							</h2>

							<CardContent className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8 w-full px-0">
								{otherShows.map((item, index) => (
									<Link
										key={index}
										href={`/radio/${item.id}`}
										className="group cols-span-1 gap-2 w-full text-left">
										<section className="flex items-center justify-center relative">
											<Image
												alt={item.title}
												className="aspect-square rounded-md object-cover bg-black/30 w-full"
												width={300}
												height={300}
												src={item.coverArt}
											/>

											<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100" />
										</section>

										<p className="text-base font-bold mt-3 mb-2 transition-colors group-hover:text-brand">
											{item.title}
										</p>

										<p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
									</Link>
								))}
							</CardContent>
						</div>
					</div>
				</div>
			</section>
		</Shell>
	);
}
