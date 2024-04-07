import DATA from '../../../data/sevrives.json';

export function load({ params }) {
	const id = params.id;
	const data = DATA.filter((item) => item.icon === Number(id))[0];
	if (data) {
		return {
			service: data
		};
	}
}
