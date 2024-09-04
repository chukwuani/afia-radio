import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/layouts/shell";
import { Icons } from "@/components/icons";

import { getPodcastById } from "@/lib/actions/podcast";
import { absoluteUrl, formatDate, formatDuration } from "@/lib/utils";

interface PageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const podcast = await getPodcastById(params.slug);

	if (!podcast) {
		return {};
	}

	const url = process.env.NEXT_PUBLIC_APP_URL!;

	return {
		metadataBase: new URL(url),
		title: podcast.title,
		description: podcast.description,
		authors: { name: podcast.host },
		openGraph: {
			title: podcast.title,
			description: podcast.description,
			url: absoluteUrl(`/podcasts/${params.slug}`),
			images: [podcast.coverArt],
		},
		twitter: {
			card: "summary_large_image",
			title: podcast.title,
			description: podcast.description,
			images: [podcast.coverArt],
		},
	};
}

export default async function PostPage({ params }: PageProps) {
	const podcast = await getPodcastById(params.slug);

	return (
		<Shell
			as="article"
			variant="content">
			<section className="flex flex-col gap-6 max-md:text-center max-md:items-center">
				<section className="flex max-md:flex-col items-center gap-4">
					<img
						src={podcast?.coverArt}
						alt={podcast?.title}
						width={200}
						height={200}
						className="size-[150px] md:size-[200px] rounded-md object-cover aspect-square"
					/>

					<section className="flex flex-col gap-2">
						<h1 className="text-4xl font-bold">{podcast?.title}</h1>

						<p className="text-muted-foreground text-sm mb-8">with {podcast?.host}</p>

						<p className="text-muted-foreground text-[15px] md:text-base !leading-7 line-clamp-4">
							{podcast?.description}
						</p>
					</section>
				</section>
			</section>

			<Separator className="my-4" />

			<section>
				<p className="text-lg font-bold">Episodes</p>

				<section className="flex flex-col gap-6">
					{podcast?.episodes.map((item, index) => (
						<section
							key={index}
							className="flex flex-col gap-4 border-b py-4 last-of-type:border-b-0">
							<section className="flex items-center gap-4">
								<section className="relative cursor-pointer min-w-[90px] aspect-square">
									<img
										src={podcast.coverArt}
										alt={item.title}
										width={90}
										height={90}
										className="size-[90px] rounded-md aspect-square object-cover"
									/>

									<section className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
										<Icons.playIcon className="size-5 text-white z-10" />
									</section>

									<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-100" />
								</section>

								<section className="flex flex-col">
									<div className="flex items-center space-x-2 text-xs text-muted-foreground">
										<p className="text-xs text-muted-foreground">{formatDate(item.releaseDate)}</p>
										<div>•</div>

										<div>{formatDuration(item.duration)}</div>
									</div>

									<h1 className="text-[15px] leading-7">{item.title}</h1>
								</section>
							</section>

							<p className="text-muted-foreground text-[15px] leading-7 line-clamp-3">
								{item.description}
							</p>
						</section>
					))}
				</section>
			</section>
		</Shell>
	);
}
