import { defineField, defineType } from "sanity";

export const tvPrivacyType = defineType({
    name: "tvPrivacy",
    title: "TV Privacy",
    type: "document",
    fields: [
        defineField({
            name: "body",
            type: "blockContent",
        }),
    ],
});
