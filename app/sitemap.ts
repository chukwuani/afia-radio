import { type MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/utils";
import db from "@/lib/prismadb";
import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/client";
import { NewsTypes } from "@/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	async function getAllShows() {
		try {
			return await db.show.findMany({
				select: {
					id: true,
				},
				take: 50000, // Google's limit is 50,000 URLs per sitemap
			});
		} catch (err) {
			return [];
		}
	}

	const showsRoutes = (await getAllShows()).map((show) => ({
		url: absoluteUrl(`/radio/${show.id}`),
		lastModified: new Date().toISOString(),
	}));

	async function getAllNews() {
		try {
			const query = groq`*[_type == "news" && defined(slug.current)][0...50000]{
             _id,
             "slug": slug.current, 
            }`; // Google's limit is 50,000 URLs per sitemap

			const news: NewsTypes[] = await sanityFetch({
				query,
			});

			return news;
		} catch (err) {
			return [];
		}
	}

	const newsRoutes = (await getAllNews()).map((news) => ({
		url: absoluteUrl(`/news/${news.slug}`),
		lastModified: new Date().toISOString(),
	}));

	const routes = [
		"",
		"/podcasts",
		"/playlists",
		"/news",
		"/radio",
		"/about",
		"/terms",
		"/privacy",
	].map((route) => ({
		url: absoluteUrl(route),
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...showsRoutes, ...newsRoutes];
}
