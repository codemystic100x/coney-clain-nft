// import 'server-only';

import { createClient, type QueryParams } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'xk79w49k',
  dataset: 'production',
  apiVersion: '2024-05-20',
  useCdn: false,
});

export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);
