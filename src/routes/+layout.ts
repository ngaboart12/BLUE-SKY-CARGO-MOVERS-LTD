import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'f3af10kw',
	dataset: 'dnr-data-set',
	apiVersion: '2024-03-31',
	useCdn: true
});


