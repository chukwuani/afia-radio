import { defineField, defineType } from "sanity";

export const newsType = defineType({
	name: "news",
	title: "News",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "description",
			type: "string",
		}),
		defineField({
			name: "category",
			type: "string",
			options: {
				list: [
					{ title: "News", value: "news" },
					{ title: "Technology", value: "technology" },
					{ title: "Sports", value: "sports" },
					{ title: "Politics", value: "politics" },
					{ title: "Business", value: "business" },
					{ title: "Entertainment", value: "entertainment" },
				],
				layout: "dropdown",
			},
		}),
		defineField({
			name: "featured",
			title: "Featured Article",
			type: "boolean",
			description: "Show in featured section on homepage",
			initialValue: false,
		}),
		defineField({
			name: "recommended",
			title: "Recommended",
			type: "boolean",
			description: "Show in recommended section",
			initialValue: false,
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: (doc) => {
					if (doc.category === "news") {
						return `${doc.title}`;
					}
					return `${doc.category}/${doc.title}`;
				},
				maxLength: 96,
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^\w\-\/]+/g, "")
						.replace(/\-\-+/g, "-")
						.replace(/^-+/, "")
						.replace(/-+$/, ""),
			},
		}),
		defineField({
			name: "author",
			type: "reference",
			to: { type: "author" },
		}),
		defineField({
			name: "mainImage",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
				},
			],
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
		defineField({
			name: "readingTime",
			type: "number",
		}),
		defineField({
			name: "body",
			type: "blockContent",
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
