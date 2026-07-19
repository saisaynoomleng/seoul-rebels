import { defineQuery } from 'next-sanity';

export const ALL_STOCKISTS = defineQuery(`*[_type == 'stockist'
 && defined(slug.current)
 ]| order(_createdAt){
  _id,
  name,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "city": contacts.city,
  "country": contacts.country
 }
`);

export const STOCKIST = defineQuery(`*[_type == 'stockist'
 && slug.current == $slug
 ][0]{
  _id,  
  name,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  contacts,
  storeHours[],
  "imageAssetId": mainImage.asset._ref,
 }
`);
