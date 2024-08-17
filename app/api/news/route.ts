import { sanityFetch } from "@/sanity/lib/client";
import { NewsTypes } from "@/types";
import { groq } from "next-sanity";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const cursor = searchParams.get("cursor");
	const limit = searchParams.get("limit") || 10;

	try {
		const query = groq`*[_type == "news" && _createdAt > $cursor] | order(_createdAt asc) [0...${limit}] {
        _id,
        _createdAt,
        title, 
        description, 
        "slug": slug.current, 
        "mainImage": mainImage.asset->url, 
        "altText": mainImage.alt
        }`;

		const news: NewsTypes[] = await sanityFetch({
			query,
			params: {
				cursor: cursor || new Date(0).toISOString(),
			},
		});

		return Response.json({ news });
	} catch (error) {
		console.log(error);
		return new Response("Internal Error", { status: 500 });
	}
}
