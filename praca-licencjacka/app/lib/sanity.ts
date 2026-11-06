import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: '4a44cg9r',
	dataset: 'production',
	apiVersion: '2026-11-06',
	useCdn: true,
});
