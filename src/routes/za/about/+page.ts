import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'f3af10kw',
	dataset: 'dnr-data-set',
	apiVersion: '2024-03-31',
	useCdn: true
});

export async function load({}) {
	const membersTeams = await client.fetch(
		`*[_type == "membersTeam" && (country == "za" || country == "all")]`
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
		`*[_type == "organizationType" && (country == "za" || country == "all")]`
	);
	const openRoles = await client.fetch(
		`*[_type == "openRoles" && isAvailable == true && (country == "za" || country == "all")]`
	);
	const youtubeUpdates = await client.fetch(
		`*[_type == "youtubeUpdates" && (country == "za" || country == "all")]`
	);

	const result = organizationTypes.map((organizationType: { _id: any }) => {
		return {
			...organizationType,
			membersTeams: membersTeamsWithImages.filter(
				(membersTeam: { organizationType: { _ref: any } }) =>
					membersTeam.organizationType._ref === organizationType._id
			)
		};
	});

	return {
		organizationTypes: result,
		youtubeUpdates: youtubeUpdates,
		openRoles: openRoles
	};
}
