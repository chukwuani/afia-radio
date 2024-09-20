import { PortableText } from "@portabletext/react";

import {
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/layouts/page-header";
import { Shell } from "@/components/layouts/shell";
import { components } from "@/components/portable-component";

import { TERMS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { TypedObject } from "sanity";

export default async function TermsPage() {
	const terms: any = await sanityFetch({
		query: TERMS_QUERY,
	});

	const content: TypedObject[] = terms?.body;

	return (
		<Shell
			as="article"
			variant="content">
			<PageHeader>
				<PageHeaderHeading className="text-brand">Terms & Conditions</PageHeaderHeading>
				<PageHeaderDescription>A few rules for us and you.</PageHeaderDescription>
			</PageHeader>

			<PortableText
				value={content}
				components={components}
			/>
		</Shell>
	);
}
