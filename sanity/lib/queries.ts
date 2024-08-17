import { groq } from "next-sanity";

export const ALL_NEWS_QUERY = groq`*[_type == "news" && defined(slug.current)][0...12]{
  _id,
  _createdAt,
  title, 
  description, 
  "slug": slug.current, 
  "mainImage": mainImage.asset->url, 
  "altText": mainImage.alt
}`;

export const NEWS_QUERY = groq`*[_type == "news" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,  
  "slug": slug.current, 
  "mainImage": mainImage.asset->url, 
  "altText": mainImage.alt,
  body, 
  author->{
    name,
    "imageUrl": image.asset->url
  },
  readingTime,
  publishedAt
}`;

export const PRIVACY_QUERY = groq`*[_type == "privacy"][0]{
  body
}`;

export const TERMS_QUERY = groq`*[_type == "terms"][0]{
  body
}`;
