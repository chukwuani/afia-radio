"use client";

import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/layouts/shell";

import { sanityFetch } from "@/sanity/lib/client";
import { NewsTypes } from "@/types";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import Share from "@/components/layouts/share";

interface PageProps {
	params: {
		slug: string;
	};
}

// export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
// 	const post = await getPostFromParams(params);

// 	if (!post) {
// 		return {};
// 	}

// 	const url = env.NEXT_PUBLIC_APP_URL;

// 	const ogUrl = new URL(`${url}/api/og`);
// 	ogUrl.searchParams.set("title", post.title);
// 	ogUrl.searchParams.set("type", "Blog Post");
// 	ogUrl.searchParams.set("mode", "dark");

// 	return {
// 		metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
// 		title: post.title,
// 		description: post.description,
// 		authors: post.authors.map((author) => ({
// 			name: author,
// 		})),
// 		openGraph: {
// 			title: post.title,
// 			description: post.description,
// 			type: "article",
// 			url: absoluteUrl(post.slug),
// 			images: [
// 				{
// 					url: ogUrl.toString(),
// 					width: 1200,
// 					height: 630,
// 					alt: post.title,
// 				},
// 			],
// 		},
// 		twitter: {
// 			card: "summary_large_image",
// 			title: post.title,
// 			description: post.description,
// 			images: [ogUrl.toString()],
// 		},
// 	};
// }

export default function PostPage({ params }: PageProps) {
	// const news: NewsTypes = await sanityFetch({
	// 	query: NEWS_QUERY,
	// 	params: {
	// 		slug: params.slug.replace("/", ""),
	// 	},
	// });

	// if (!news) {
	// 	notFound();
	// }

	return (
		<Shell
			as="article"
			variant="content">
			<section className="flex flex-col gap-6">
				<section className="flex items-center gap-4">
					<Image
						src="https://images.audacy2-prod.ext.audacy.com/1c59b12e-b88f-4ae3-bde4-f45ee00018ee.jpg"
						alt=""
						width={200}
						height={200}
						className="size-[200px] rounded-md aspect-square"
					/>

					<h1 className="text-4xl font-bold max-w-[400px]">Do You Work Here?</h1>
				</section>

				<p className="text-muted-foreground text-base max-w-[600px] leading-7 line-clamp-4">
					What do you do? And how do you do it? Most of us spend a lot of time at work. Sometimes
					our jobs define us, and Mike Simpson wants to learn about yours! From paleontologist to
					Oscar Mayer Wienermobile driver, we&quot;re hitting the road to get a look at how
					we&quot;re all making a living. Come feed sea otters, restore a car, park a cargo ship and
					cuddle a cow with us! New episodes on Thursdays.
				</p>
			</section>

			<Separator className="my-4" />

			<section>
				<p className="text-lg font-bold">Episodes</p>

				<section className="flex flex-col gap-6">
					{Array.from({ length: 5 }).map((_, index) => (
						<section
							key={index}
							className="flex flex-col gap-4 border-b py-4 last-of-type:border-b-0">
							<section className="flex items-center gap-4">
								<Image
									src="https://images.audacy2-prod.ext.audacy.com/1c59b12e-b88f-4ae3-bde4-f45ee00018ee.jpg"
									alt=""
									width={90}
									height={90}
									className="size-[90px] rounded-md aspect-square"
								/>

								<section>
									<p className="text-xs text-muted-foreground">Aug 7, 2024</p>
									<h1 className="text-[15px] leading-7">
										It&apos;s time to shave down some horse teeth. Also, house cows!
									</h1>
								</section>
							</section>

							<p className="text-muted-foreground text-[15px] leading-7 line-clamp-3">
								We&apos;re headed to a ranch today to meet up with Dr. Katie Nenn. She&apos;s a
								large animal veterinarian and runs NENN Equine. This started as an episode on animal
								dentistry (horse mouthwash is a thing that exists) but Dr. Nenn tells us about all
								sorts of animals that you wouldn&apos;t expect to find in Southern California. Look
								for the team from NENN on
							</p>
						</section>
					))}
				</section>
			</section>

			<Share url="https://afiaradio.vercel.app" />
		</Shell>
	);
}
