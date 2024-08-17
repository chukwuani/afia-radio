import { defineField, defineType } from "sanity";

export const termsType = defineType({
	name: "terms",
	title: "Terms",
	type: "document",
	fields: [
		defineField({
			name: "body",
			type: "blockContent",
		}),
	],
});
