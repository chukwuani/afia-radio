import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { newsType } from "./schemaTypes/newsType";
import { authorType } from "./schemaTypes/authorType";
import { privacyType } from "./schemaTypes/privacyType";
import { termsType } from "./schemaTypes/termsTypes";
import { aboutType } from "./schemaTypes/aboutType";
import { podcastType } from "./schemaTypes/podcastType";
import { radioNewsType } from "./schemaTypes/radioNewsType";
import { tvPrivacyType } from "./schemaTypes/tvPrivacyType";
import { tvTermsType } from "./schemaTypes/tvTermsType";
import { videoType } from "./schemaTypes/videoType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContentType, newsType, authorType, privacyType, termsType, aboutType, podcastType, radioNewsType, tvPrivacyType, tvTermsType, videoType],
};
