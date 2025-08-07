import { NextResponse, type NextRequest } from "next/server";

import { sanityFetch } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PodcastTypes } from "@/types";

import * as Sentry from "@sentry/nextjs";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const cursor = searchParams.get("cursor");
    const lastPublishedAt = searchParams.get("lastPublishedAt");
    const limit = searchParams.get("limit") || 8;

    let podcasts: PodcastTypes[] = [];

    try {
        if (cursor && lastPublishedAt) {
            const query = groq`*[_type == "podcasts"  && (
                publishedAt < $lastPublishedAt
                || (publishedAt == $lastPublishedAt && _id > $cursor)
                )] | order(publishedAt desc) [0...${limit}] {
                _id,
                _createdAt,
                publishedAt,
                title, 
                description, 
                duration,
                uploadUrl,
                "slug": slug.current, 
                "coverArt": coverArt.asset->url, 
                "altText": coverArt.alt
            }`;

            podcasts = await sanityFetch({
                query,
                params: {
                    cursor,
                    lastPublishedAt,
                },
            });
        } else {
            const query = groq`*[_type == "podcasts"] | order(publishedAt desc) [0...${limit}] {
                _id,
                _createdAt,
                publishedAt,
                title, 
                description, 
                duration,
                uploadUrl,
                "slug": slug.current, 
                "coverArt": coverArt.asset->url, 
                "altText": coverArt.alt
            }`;

            podcasts = await sanityFetch({
                query,
            });
        }

        let nextCursor = null;

        if (podcasts.length === limit) {
            nextCursor = podcasts[limit - 1]._id + `lastPublishedAt=${podcasts[limit - 1].publishedAt}`;
        }

        return NextResponse.json({
            podcasts,
            nextCursor,
        });
    } catch (error) {
        Sentry.captureException(error);
        return new Response("Internal Error", { status: 500 });
    }
}
