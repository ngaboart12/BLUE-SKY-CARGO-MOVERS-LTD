<script>
	// @ts-nocheck
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import '../../app.css';

	const meta_description = `Our consultancy is more than just a service provider; we're your trusted partner in navigating the complexities of global business.`;
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>DNR</title>
	<meta name="DNR" content={meta_description} />
	<meta name="og:description" content={meta_description} />
</svelte:head>

<Header />
<main transition:fade>
	<slot />
</main>

<Footer />
