"use client";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/layouts/shell";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
	return (
		<Shell
			as="article"
			variant="content">
			<section className="flex flex-col gap-6 max-md:text-center max-md:items-center">
				<section className="flex max-md:flex-col items-center gap-4">
					<Image
						src="https://images.audacy2-prod.ext.audacy.com/1c59b12e-b88f-4ae3-bde4-f45ee00018ee.jpg"
						alt=""
						width={200}
						height={200}
						className="size-[150px] md:size-[200px] rounded-md aspect-square"
					/>

					<section className="flex flex-col gap-10">
						<h1 className="text-4xl font-bold">Do You Work Here?</h1>

						<p className="text-muted-foreground text-[15px] md:text-base !leading-7 line-clamp-4">
							What do you do? And how do you do it? Most of us spend a lot of time at work.
							Sometimes our jobs define us, and Mike Simpson wants to learn about yours! From
							paleontologist to Oscar Mayer Wienermobile driver.
						</p>
					</section>
				</section>

				<section className="flex gap-3">
					<Button className="rounded-full py-6 px-10">Follow</Button>
					<Button
						className="rounded-full py-6 px-10"
						variant={"outline"}>
						Share
					</Button>
				</section>
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
								<section className="relative cursor-pointer min-w-[90px] aspect-square">
									<Image
										src="https://images.audacy2-prod.ext.audacy.com/1c59b12e-b88f-4ae3-bde4-f45ee00018ee.jpg"
										alt=""
										width={90}
										height={90}
										className="size-[90px] rounded-md aspect-square"
									/>

									<section className="bg-black p-2 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
										<Icons.playIcon className="size-5 text-white z-10" />
									</section>

									<span className="absolute top-0 aspect-square rounded-md size-full bg-black/30 opacity-100" />
								</section>

								<section className="flex flex-col">
									<div className="flex items-center space-x-2 text-xs text-muted-foreground">
										<p className="text-xs text-muted-foreground">Aug 7, 2024</p>
										<div>•</div>

										<div>12min</div>
									</div>

									<h1 className="text-[15px] leading-7">
										It&apos;s time to shave down some horse teeth. Also, house cows!
									</h1>
								</section>
							</section>

							<p className="text-muted-foreground text-[15px] leading-7 line-clamp-3">
								We&apos;re headed to a ranch today to meet up with Dr. Katie Nenn. She&apos;s a
								large animal veterinarian and runs NENN Equine.
							</p>
						</section>
					))}
				</section>
			</section>
		</Shell>
	);
}
