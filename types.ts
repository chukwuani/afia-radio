import { TypedObject } from "sanity";

export interface NewsTypes {
	_id: string;
	_createdAt: string;
	title: string;
	description: string;
	slug: string;
	mainImage: string;
	altText: string;
	publishedAt: Date;
	readingTime: number;
	body: TypedObject[];
	author: AuthorTypes;
}

export interface AuthorTypes {
	_id: string;
	_createdAt: string;
	name: string;
	slug: string;
	imageUrl: string;
	altText: string;
	bio: TypedObject[];
}
