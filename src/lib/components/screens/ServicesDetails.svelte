<script lang="ts">
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';
	import Conctact from './../../../lib/components/Conctact.svelte';
	import Button from './../../../lib/components/Button.svelte';
	import Title from './../../../lib/components/Title.svelte';
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import { LinkedIn, Pinterest, Telegram, Facebook, X } from 'svelte-share-buttons-component';
	import Carousel from '../Carousel.svelte';
	import { afterNavigate } from '$app/navigation';
	import { copyText } from 'svelte-copy';


	afterNavigate(() => {
		window.location.reload();
	});
	export let data;


	const badData = data.blogs;

	const blog = badData.slice(0, 4).map((value: any) => {
		if (value.mainImage) {
			const typePrefix = value.mainImage._type ? `${value.mainImage._type}-` : 'image-';
			const removeTypePrefix = value.mainImage.asset._ref.split(typePrefix)[1];
			const lastIndex = removeTypePrefix.lastIndexOf('-');
			const modifiedFilename =
				removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
			return {
				...value,
				mainImage: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`
			};
		} else {
			return value;
		}
	});

	const paragraphsPartOne = data.service?.paragraphs.slice(0, 2) || [];
	const paragraphsPartTwo = data.service?.paragraphs.slice(2, 4) || [];
	function handleAnchorClick(event) {
		event.preventDefault();
		const anchor = document.getElementById('anchor-sectiion');
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
	let siema;
	let controller;
	let timer;
	const dispatch = createEventDispatcher();
	let functionOpen = false;
	let currentIndex = 0;
	function handleChange(event) {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}
	const url = `https://dnr-gamma.vercel.app/services/${data.service.icon}`;
	const title = data.service.title;
	let isLoadingCopy = false;

	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: 1,
			loop: true,
			duration: 200,
			easing: 'ease-out',
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			rtl: false,
			timer: 2000,
			onChange: handleChange
		});
	});
</script>

<div class="min-h-[70vh] flex relative justify-start items-end">
	<div class="absolute top-0 w-full h-full z-10 object-cover overflow-hidden">
		<Carousel dots={false}>
			{#each data.service.images as item}
				<img src={item} alt="logo" class="w-full object-cover h-[70vh]" />
			{/each}
		</Carousel>
	</div>
	<div class="absolute top-0 w-full bg-black/50 h-full z-20"></div>
	<div class="flex flex-col gap-4 items-center z-40 bg-[#14375a] px-12 py-12">
		<div class="text-white text-start max-w-3xl sm:mt-0 mt-28">
			<p class="text-2xl font-light mb-10 capitalize">{data.service?.title}</p>
			<p class="text-[24px] sm:text-[24px] font-medium mt-2">
				{data.service?.description}
			</p>
			<div class="flex gap-2 mt-8">
				<div class="w-10 h-10 rounded-full overflow-hidden">
					<div class="relative bottom-0.5">
						<LinkedIn text={title} {url} />
					</div>
				</div>
				<div class="w-10 h-10 rounded-full overflow-hidden">
					<div class="relative bottom-0.5">
						<Pinterest {url} description={title} />
					</div>
				</div>
				<div class="w-10 h-10 rounded-full overflow-hidden">
					<div class="relative bottom-0.5">
						<Telegram text={title} {url} />
					</div>
				</div>
				<div class="w-10 h-10 rounded-full overflow-hidden">
					<div class="relative bottom-0.5">
						<Facebook quote={title} {url} />
					</div>
				</div>
				<div class="w-10 h-10 rounded-full overflow-hidden">
					<div class="relative bottom-0.5">
						<X text={title} {url} />
					</div>
				</div>
				<button on:click={() => {
					copyText(url);
					isLoadingCopy = true;
					setTimeout(() => {
						isLoadingCopy = false;
					}, 2000);
				}} class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white text-black">
					{#if isLoadingCopy}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader animate-spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
					{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
					{/if}
				</button>
			</div>
			<!-- <a
				href="#anchor-sectiion"
				on:click={handleAnchorClick}
				class="bg-[#D71B30] text-white flex items-center justify-center w-[50px] h-[50px] mt-10 rounded-full"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-arrow-down"
					><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg
				>
			</a> -->
		</div>
	</div>
</div>
<section class="flex flex-col gap-6 sm:gap-10 pt-20" id="anchor-sectiion">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div
			class="w-full h-[400px] overflow-hidden rounded-2xl grid grid-cols-2 items-center gap-10"
		>
			<img
				src={data.service.images[0]}
				alt={data.service?.title}
				class="w-full object-cover h-full shadow-sm border border-slate-50 overflow-hidden rounded-[20px]"
			/>
			<div class="flex flex-col gap-2">
				<div class="flex flex-col gap-2">
					<h1
						class="text-xl capitalize sm:text-2xl md:text-3xl font-bold text-[#C43228] md:leading-[48px]"
					>
						{data.service?.title}
					</h1>
				</div>
				<div class="flex flex-col gap-5">
					{#each paragraphsPartOne || [] as item}
						<p class="text-[#595959] font-light">
							{item}
						</p>
					{/each}
					{#if data.service?.subTitles }
					<div class="w-full flex items-center flex-wrap gap-x-6 gap-y-3">
						{#each data.service?.subTitles as subTitles }
						   <div class="flex items-center gap-2">
								<span class="w-3 h-3 bg-slate-300 rounded-full" />
								<p class="text-[17px]">{subTitles}</p>
						   </div>
						{/each}
					</div>
					{/if}
			</div>
			</div>
		</div>
	
	</div>
</section>
