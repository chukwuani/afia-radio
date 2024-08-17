import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { newsType } from "./schemaTypes/newsType";
import { authorType } from "./schemaTypes/authorType";
import { presenterType } from "./schemaTypes/presenterType";
import { privacyType } from "./schemaTypes/privacyType";
import { termsType } from "./schemaTypes/termsTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, newsType, authorType, presenterType, privacyType, termsType],
};
