<script lang="ts">
	// import Modal from './Modal.svelte';
	import DATA from '../../data/sevrives.json';
	let showModal = false;
	let data = DATA;
	export let expctedId: number = null;
	export let baseNumber:number = 8;
	export let endNumber:number = 16;
	export let isHome = false;
	const filteredData = data.filter((item) => item.icon !== expctedId);
	data = isHome ? filteredData.slice(baseNumber,endNumber) : filteredData;
	const DATA_NUMBER = isHome ? data.slice(0, 8) : data;
	import { page } from '$app/stores';
	const country = ['en', 'rw', 'bi', 'za', 'ke', 'sa'];
	$: basePath = country.includes($page.url.pathname.split('/')[1]) ? `/${$page.url.pathname.split('/')[1]}` : '';
	
</script>

{#each DATA_NUMBER as item}
<a
  href={basePath ? `${basePath}/services/${item.icon}` : `/services/${item.icon}`}
  class="relative group grid cursor-pointer h-[22rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <img
   src={item.images[0]}
   alt=""
    class="absolute group-hover:scale-110 object-cover duration-300 transition-all inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none" />
<div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/80"></div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block font-sans text-2xl font-medium capitalize tracking-normal text-white antialiased">
		{item.title}
    </h2>
	<p class="line-clamp-3  text-gray-400 font-light">
		{item.description}
	</p>
  </div>
</a>  
{/each}
