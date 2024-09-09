import { defineField, defineType } from "sanity";

export const aboutType = defineType({
	name: "about",
	title: "About",
	type: "document",
	fields: [
		defineField({
			name: "body",
			type: "blockContent",
		}),
	],
});
