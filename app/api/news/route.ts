import { NextResponse, type NextRequest } from "next/server";

import { sanityFetch } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NewsTypes } from "@/types";

import * as Sentry from "@sentry/nextjs";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const cursor = searchParams.get("cursor");
	const lastPublishedAt = searchParams.get("lastPublishedAt");
	const limit = searchParams.get("limit") || 8;

	let news: NewsTypes[] = [];

	try {
		if (cursor && lastPublishedAt) {
			const query = groq`*[_type == "news"  && (
      			publishedAt < $lastPublishedAt
      			|| (publishedAt == $lastPublishedAt && _id > $cursor)
    			)] | order(publishedAt desc) [0...${limit}] {
        		_id,
        		_createdAt,
				publishedAt,
        		title, 
        		description, 
				author->{
    				name,
    				"imageUrl": image.asset->url
  				},
        		"slug": slug.current, 
        		"mainImage": mainImage.asset->url, 
        		"altText": mainImage.alt
        	}`;

			news = await sanityFetch({
				query,
				params: {
					cursor,
					lastPublishedAt,
				},
			});
		} else {
			const query = groq`*[_type == "news"] | order(publishedAt desc) [0...${limit}] {
        		_id,
        		_createdAt,
				publishedAt,
        		title, 
        		description, 
				author->{
    				name,
    				"imageUrl": image.asset->url
  				},
        		"slug": slug.current, 
        		"mainImage": mainImage.asset->url, 
        		"altText": mainImage.alt
        	}`;

			news = await sanityFetch({
				query,
			});
		}

		let nextCursor = null;

		if (news.length === limit) {
			nextCursor = news[limit - 1]._id + `lastPublishedAt=${news[limit - 1].publishedAt}`;
		}

		return NextResponse.json({
			news,
			nextCursor,
		});
	} catch (error) {
		Sentry.captureException(error);
		return new Response("Internal Error", { status: 500 });
	}
}
