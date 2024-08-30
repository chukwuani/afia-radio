import { type Metadata } from "next";

import { siteConfig } from "@/siteConfig";
// import { absoluteUrl } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/layouts/page-header";
import { Shell } from "@/components/layouts/shell";

// export function generateMetadata({ params }: PageProps): Metadata {
// 	const page = getPageFromParams(params);

// 	if (!page) {
// 		return {};
// 	}

// 	const url = absoluteUrl("/");

// 	const ogUrl = new URL(`${url}/api/og`);
// 	ogUrl.searchParams.set("title", page.title);
// 	ogUrl.searchParams.set("type", siteConfig.name);
// 	ogUrl.searchParams.set("mode", "light");

// 	return {
// 		title: page.title,
// 		description: page.description,
// 		openGraph: {
// 			title: page.title,
// 			description: page.description,
// 			type: "article",
// 			url: absoluteUrl(page.slug),
// 			images: [
// 				{
// 					url: ogUrl.toString(),
// 					width: 1200,
// 					height: 630,
// 					alt: page.title,
// 				},
// 			],
// 		},
// 		twitter: {
// 			card: "summary_large_image",
// 			title: page.title,
// 			description: page.description,
// 			images: [ogUrl.toString()],
// 		},
// 	};
// }

// export function generateStaticParams(): PageProps["params"][] {
// 	return allPages.map((page) => ({
// 		slug: page.slugAsParams.split("/"),
// 	}));
// }

export default function AboutPage() {
	return (
		<Shell
			as="article"
			variant="content">
			<PageHeader>
				<PageHeaderHeading>About Afia</PageHeaderHeading>
				<PageHeaderDescription>
					About the project and the author of the project.
				</PageHeaderDescription>
			</PageHeader>
			<Separator className="my-4" />
		</Shell>
	);
}
