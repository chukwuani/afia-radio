import { defineField, defineType } from "sanity";

export const tvTermsType = defineType({
    name: "tvTerms",
    title: "Tv Terms",
    type: "document",
    fields: [
        defineField({
            name: "body",
            type: "blockContent",
        }),
    ],
});
