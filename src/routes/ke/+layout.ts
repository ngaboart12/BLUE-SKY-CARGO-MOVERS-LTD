import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'f3af10kw',
	dataset: 'dnr-data-set',
	apiVersion: '2024-03-31',
	useCdn: true
});

export async function load({}) {
	const data = await client.fetch(`*[_type == "blog" && (country == "ke" || country == "all")]`);

	if (data) {
		return {
			blogs: data
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
