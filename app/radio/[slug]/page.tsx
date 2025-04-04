import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { absoluteUrl } from "@/lib/utils";
import { Show, ShowWithHost } from "@/types";

import { Shell } from "@/components/layouts/shell";
import { CardContent } from "@/components/ui/card";

import axios from "axios";

interface PageProps {
	params: {
		slug: string;
	};
}

interface ShowById {
	show: ShowWithHost;
	similarShows: Show[];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const {
		data: { show },
	} = await axios.get<ShowById>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/${params.slug}`);

	if (!show) {
		return {};
	}

	const url = process.env.NEXT_PUBLIC_APP_URL!;

	return {
		metadataBase: new URL(url),
		title: show.title,
		description: show.description,
		authors: { name: show.host.name },
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
	const {
		data: { show, similarShows },
	} = await axios.get<ShowById>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/shows/${params.slug}`);

	if (!show) {
		notFound();
	}

	return (
		<Shell
			as="article"
			variant="content"
			className="gap-0">
			<section className="flex flex-col gap-6 max-md:text-center max-md:items-center">
				<section className="flex max-md:flex-col items-center gap-4">
					<Image
						src={show.coverArt}
						alt={show.title}
						width={500}
						height={500}
						className="size-[150px] md:size-[200px] rounded-md object-cover aspect-square"
					/>

					<section className="flex flex-col gap-2">
						<h1 className="text-4xl md:text-5xl font-bold">{show.title}</h1>

						<p className="text-muted-foreground text-sm mb-8">with {show.host.name}</p>
					</section>
				</section>
			</section>

			<section className="w-full py-12">
				<div className="">
					<div className="grid gap-8">
						<div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Show Note
							</h2>

							<p className="mt-6 leading-7 text-muted-foreground whitespace-pre-line">
								{show.description}
							</p>
						</div>

						{show.host.bio && (
							<div>
								<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
									<div className="w-full space-y-4">
										<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
											Meet the Host
										</h2>

										<p className="mt-6 leading-7 text-muted-foreground whitespace-pre-line">
											{show.host.bio}
										</p>
									</div>
								</div>
							</div>
						)}

						<div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Other Shows
							</h2>

							<CardContent className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8 w-full px-0">
								{similarShows.map((item, index) => (
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
