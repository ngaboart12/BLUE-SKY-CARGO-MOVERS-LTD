import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'f3af10kw',
	dataset: 'dnr-data-set',
	apiVersion: '2024-03-31',
	useCdn: true
});

export async function load({}) {
	// update by add  sort(_createdAt desc) to the query
	const membersTeams = await client.fetch(
		`*[_type == "membersTeam" && (country == "rw" || country == "all")]`
	);
	const membersTeamsWithImages = membersTeams.map((membersTeam: { mainImage: any }) => {
		const typePrefix = membersTeam.mainImage._type ? `${membersTeam.mainImage._type}-` : 'image-';
		const removeTypePrefix = membersTeam.mainImage.asset._ref.split(typePrefix)[1];
		const lastIndex = removeTypePrefix.lastIndexOf('-');
		const modifiedFilename =
			removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
		return {
			...membersTeam,
			mainImage: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`
		};
	});
	const organizationTypes = await client.fetch(
		`*[_type == "organizationType" && (country == "rw" || country == "all")]`
	);
	const youtubeUpdates = await client.fetch(
		`*[_type == "youtubeUpdates" && (country == "rw" || country == "all")]`
	);

	const result = organizationTypes.map((organizationType: { _id: any }) => {
		return {
			...organizationType,
			membersTeams: membersTeamsWithImages
				.filter(
					(membersTeam: { organizationType: { _ref: any } }) =>
						membersTeam.organizationType._ref === organizationType._id
				)
				.sort((a: { name: string }, b: { name: string }) => {
					if (a.name.toLowerCase().startsWith('d') && !b.name.toLowerCase().startsWith('d') || a.name.toLowerCase().startsWith('m') && !b.name.toLowerCase().startsWith('m') || a.name.toLowerCase().startsWith('f') && !b.name.toLowerCase().startsWith('f')) {
						return -1;
					}
					if (!a.name.toLowerCase().startsWith('d') && b.name.toLowerCase().startsWith('d')) {
						return 1;
					}
					return 0;
				}),
		};
	});

	return {
		organizationTypes: result,
		youtubeUpdates: youtubeUpdates,
	};
}
