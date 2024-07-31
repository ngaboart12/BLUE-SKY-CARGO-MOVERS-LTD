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
				</div>
			</div>
		</div>

		{#if data.service?.functionalServices || data.service?.keyComponents}	
		<div class="flex flex-col gap-2 items-start justify-start w-full mt-10">
			<h2 class="text-[#083867] font-semibold text-2xl mb-3">{ data.service?.functionalServices ? "Functional Services" : data.service?.keyComponentsName ||  "Key Components"}</h2>
			<div class="-m-1.5 overflow-auto w-full {functionOpen ? "h-auto" : "h-[200px]"}">
				<div class="p-1.5 min-w-full inline-block align-middle w-full">
				  <div class="overflow-hidden w-full">
					<div class="table border-collapse table-auto w-full divide-y divide-gray-200">
					  <div class="table-header-group">
						<div class="table-row">
						  <div class="table-cell px-6 py-3 text-start text-base font-medium text-gray-500 uppercase">Service</div>
						  <div class="table-cell px-6 py-3 text-start text-base font-medium text-gray-500 uppercase">Description of Service</div>
						</div>
					  </div>
					  <div class="table-row-group divide-y divide-gray-200 bg-white">
						{#each (data.service?.functionalServices || data.service?.keyComponents) as item }		
						<div class="table-row">
						  <div class="table-cell px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">
							{item.service}
						  </div>
						  <div class="table-cell px-6 py-4 text-base text-gray-800">
							{item.description}
						  </div>
						</div>
						{/each}
				
					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div class="flex items-center flex-col w-full justify-center -mt-10">
				<div class="w-full text-center items-center h-[40px] bg-gradient-to-t {functionOpen ? "" : "from-slate-50/90"} flex justify-center">
				</div>
				<button type="button"
				on:click={() => functionOpen = !functionOpen}
				class="flex -mt-4 bg-white items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-4 w-4 {functionOpen ? "rotate-180" :"rotate-0"} transition-all duration-300 ">
					<path fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd" />
				</svg>
				View {functionOpen ? "Less" : "More"}
			</button>
			</div>
		</div>
		{/if}
	</div>
	<div class="bg-[#F0F8FF] pt-6 pb-10">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
			<div class="grid sm:grid-cols-2 items-center">
				<div class="flex flex-col gap-2">
					<div class="w-fit">
						<Button>More Services</Button>
					</div>
					<div class="sm:w-[60%]">
						<Title isSmall name="Explore more services that suit you." />
					</div>
				</div>
				<p class="text-[#636363] text-[16px] font-light">
					We offer services such as audit and assurance, Tax advisory, Accounting, Corporate finance
					advisory and Management consultancy. Our clients are from various industries like NGOs,
					Trading, Manufacturing, Universities, Coffee & Tea export, Capital market, etc.
				</p>
			</div>
			<div class="grid grid-cols-4 mt-8 gap-4 items-center w-full">
				<ServicesCard isHome expctedId={data.service.icon} baseNumber={17} endNumber={21} />
			</div>
		</div>
	</div>

	<Conctact />
</section>
