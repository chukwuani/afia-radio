import Image from "next/image";

import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/layouts/page-header";
import { Shell } from "@/components/layouts/shell";
import { components } from "@/components/portable-component";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { ABOUT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { TypedObject } from "sanity";

import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
	const about: any = await sanityFetch({
		query: ABOUT_QUERY,
	});

	const content: TypedObject[] = about?.body;

	return (
		<Shell
			as="article"
			variant="content">
			<PageHeader>
				<PageHeaderHeading className="text-brand">About Afia 993</PageHeaderHeading>
				<PageHeaderDescription>
					Afia 99.3FM, Enugu. Your Number One Voice Of Enterprise! Discover the latest music tracks,
					explore captivating podcasts, or tune in to radio shows.
				</PageHeaderDescription>
			</PageHeader>

			<AspectRatio ratio={16 / 11}>
				<Image
					src={"/opengraph-image.jpg"}
					alt={"Afia Radio"}
					fill
					className="rounded-md border bg-muted object-cover"
					priority
				/>
			</AspectRatio>

			<PortableText
				value={content}
				components={components}
			/>
		</Shell>
	);
}
