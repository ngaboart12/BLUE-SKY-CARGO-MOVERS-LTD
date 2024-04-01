import { createClient } from '@sanity/client';

const _client = createClient({
	projectId: "f3af10kw",
	dataset: "dnr-data-set",
	apiVersion: "2024-03-31",
	useCdn: true
	});

export async function load({ params }) {
    const id = params.id;
    const data = await _client.fetch(`*[_type == "blog" && _id == $id]`, { id });
    if (data) {
        return {
            blog:data[0]
        }
        }
        return {
        status: 500,
        body: new Error("Internal Server Error")
        };
}