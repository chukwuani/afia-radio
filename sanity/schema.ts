import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { newsType } from "./schemaTypes/newsType";
import { authorType } from "./schemaTypes/authorType";
import { privacyType } from "./schemaTypes/privacyType";
import { termsType } from "./schemaTypes/termsTypes";
import { aboutType } from "./schemaTypes/aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, newsType, authorType, privacyType, termsType, aboutType],
};
