import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'f3af10kw',
	dataset: 'dnr-data-set',
	apiVersion: '2024-03-31',
	useCdn: true
});

export async function load({}) {
	const openRoles = await client.fetch(
		`*[_type == "openRoles" && isAvailable == true && (country == "rw" || country == "all")]`
	);

	return {
		openRoles: openRoles
	};
}
