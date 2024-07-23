import DATA from '../../../../data/sevrives.json';

export async function load({ params }) {
	console.log(params,"---");
	let id = params.id;
	let data = DATA.filter((item) => item.icon === Number(id))[0];
	if (data) {
		return {
			service: data
		};
	}
}
