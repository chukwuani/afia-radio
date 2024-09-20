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

export default async function PrivacyPage() {
	const privacy: any = await sanityFetch({
		query: PRIVACY_QUERY,
	});

	const content: TypedObject[] = privacy?.body;

	return (
		<Shell
			as="article"
			variant="content">
			<PageHeader>
				<PageHeaderHeading className="text-brand">Privacy Policy</PageHeaderHeading>
				<PageHeaderDescription>Protecting Your Data is Our Priority.</PageHeaderDescription>
			</PageHeader>

			<PortableText
				value={content}
				components={components}
			/>
		</Shell>
	);
}
