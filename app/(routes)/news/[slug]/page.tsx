import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shell } from "@/components/layouts/shell";
import { components } from "@/components/portable-component";

import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/client";
import { NewsTypes } from "@/types";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

export default async function PostPage({ params }: PageProps) {
	const news: NewsTypes = await sanityFetch({
		query: NEWS_QUERY,
		params: {
			slug: params.slug.replace("/", ""),
		},
	});

	if (!news) {
		notFound();
	}

	const author = news.author;
	const content = news.body;

	return (
		<Shell
			as="article"
			variant="content">
			<Link
				href="/news"
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"absolute left-[-200px] top-14 hidden xl:inline-flex"
				)}>
				<ChevronLeftIcon
					className="mr-2 size-4"
					aria-hidden="true"
				/>
				See all news
			</Link>

			<div className="space-y-2">
				<h1 className="inline-block text-4xl font-bold leading-tight">{news.title}</h1>

				<div className="flex items-center space-x-4 pt-4">
					<Link
						key={author._id}
						href={`/authors/${author.name}`}
						className="flex items-center space-x-2 text-sm">
						<Image
							src={author.imageUrl}
							alt={author.name}
							width={40}
							height={40}
							className="rounded-full size-10 object-cover bg-white"
						/>
						<div className="flex-1 text-left leading-tight">
							<p className="font-medium">{author.name}</p>

							<div className="flex items-center space-x-2 text-xs text-muted-foreground">
								<time dateTime={""}>{formatDate(news.publishedAt)}</time>

								<div>•</div>

								<div>{news.readingTime}min</div>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<AspectRatio ratio={16 / 11}>
				<Image
					src={news.mainImage}
					alt={news.altText}
					fill
					className="rounded-md border bg-muted object-cover"
					priority
				/>
			</AspectRatio>

			<PortableText
				value={content}
				components={components}
			/>

			<Share url="https://afiaradio.vercel.app" />

			<Separator className="my-4" />

			<Link
				href="/news"
				className={cn(buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" }))}>
				<ChevronLeftIcon
					className="mr-2 size-4"
					aria-hidden="true"
				/>
				See all posts
				<span className="sr-only">See all posts</span>
			</Link>
		</Shell>
	);
}
