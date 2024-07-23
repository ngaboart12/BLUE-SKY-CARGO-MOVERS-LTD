<script>
	import ServicesDetails from '$lib/components/screens/ServicesDetails.svelte';
	export let data;
	console.log(data);
	const dataone = data;
</script>

<ServicesDetails data={dataone} />
