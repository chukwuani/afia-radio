import { defineField, defineType } from "sanity";

export const privacyType = defineType({
	name: "privacy",
	title: "Privacy",
	type: "document",
	fields: [
		defineField({
			name: "body",
			type: "blockContent",
		}),
	],
});
