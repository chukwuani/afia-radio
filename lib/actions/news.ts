"use server";

import { sanityFetch } from "@/sanity/lib/client";
import { FILTER_NEWS_QUERY } from "@/sanity/lib/queries";
import { NewsTypes } from "@/types";

export const filterNews = async (debouncedQuery: string) => {
	const news: NewsTypes[] = await sanityFetch({
		query: FILTER_NEWS_QUERY,
		params: {
			searchQuery: debouncedQuery,
		},
	});

	return news;
};
