import { type Metadata } from "next";
import { siteConfig } from "@/siteConfig";
// import { absoluteUrl } from "@/lib/utils";

import { PortableText } from "@portabletext/react";

import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/layouts/page-header";
import { Shell } from "@/components/layouts/shell";
import { components } from "@/components/portable-component";

import { PRIVACY_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { TypedObject } from "sanity";

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

export default async function PrivacyPage() {
	const privacy: any = await sanityFetch({
		query: PRIVACY_QUERY,
	});

	const content: TypedObject[] = privacy.body;

	return (
		<Shell
			as="article"
			variant="content">
			<PageHeader>
				<PageHeaderHeading>Privacy Policy</PageHeaderHeading>
				<PageHeaderDescription>Protecting Your Data is Our Priority.</PageHeaderDescription>
			</PageHeader>

			<PortableText
				value={content}
				components={components}
			/>
		</Shell>
	);
}
