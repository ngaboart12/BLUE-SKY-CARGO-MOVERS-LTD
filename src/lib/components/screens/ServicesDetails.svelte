<script lang="ts">
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';
	import Conctact from './../../../lib/components/Conctact.svelte';
	import Button from './../../../lib/components/Button.svelte';
	import Title from './../../../lib/components/Title.svelte';
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import Card from '../Card.svelte';
	import Carousel from '../Carousel.svelte';
	import { afterNavigate } from '$app/navigation';

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
	let currentIndex = 0;
	function handleChange(event) {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

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

<div class="min-h-[70vh] flex relative justify-center items-center">
	<div class="absolute top-0 w-full h-full z-10 object-cover overflow-hidden">
		<Carousel dots={false}>
			{#each data.service.images as item}
				<img src={item} alt="logo" class="w-full object-cover h-[70vh]" />
			{/each}
		</Carousel>
	</div>
	<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
	<div class="flex flex-col gap-4 items-center z-40">
		<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
			<p class="text-2xl font-light mb-10 capitalize">{data.service?.title}</p>
			<p class="text-[24px] sm:text-[24px] font-medium mt-2">
				{data.service?.description}
			</p>
			<a
				href="#anchor-sectiion"
				on:click={handleAnchorClick}
				class="bg-[#D71B30] text-white flex items-center justify-center w-[50px] h-[50px] mx-auto mt-10 rounded-full"
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
			</a>
		</div>
	</div>
</div>
<section class="flex flex-col gap-6 sm:gap-10 pt-20" id="anchor-sectiion">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div class="flex items-center justify-between w-full sm:flex-nowrap flex-wrap">
			<div class="flex flex-col gap-2">
				<h1
					class="text-xl capitalize sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]"
				>
					{data.service?.title}
				</h1>
				<h2 class=" font-semibold text-[#083867] text-sm">Service DRN provides to the customers</h2>
			</div>
			<div class="sm:w-[50%]">
				<p class="text-[#595959] font-light text-sm">
					{data.service?.description}
				</p>
			</div>
		</div>
		<div
			class="w-full mt-10 h-[400px] overflow-hidden rounded-2xl grid grid-cols-2 items-center gap-10"
		>
			<img
				src={data.service.images[0]}
				alt={data.service?.title}
				class="w-full object-cover h-full"
			/>
			<div class="flex flex-col gap-5">
				{#each paragraphsPartOne || [] as item}
					<p class="text-[#595959] font-light">
						{item}
					</p>
				{/each}
			</div>
		</div>

		{#if data.service?.functionalServices}	
		<div class="flex flex-col gap-2 items-start justify-start w-full mt-10">
			<h2 class="text-[#083867] font-semibold text-2xl mb-3">Functional Services</h2>
			<div class="-m-1.5 overflow-auto w-full">
				<div class="p-1.5 min-w-full inline-block align-middle w-full">
				  <div class="overflow-hidden w-full">
					<div class="table border-collapse table-auto w-full divide-y divide-gray-200">
					  <div class="table-header-group">
						<div class="table-row">
						  <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Service</div>
						  <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description of Service</div>
						</div>
					  </div>
					  <div class="table-row-group divide-y divide-gray-200 bg-white">
						{#each data.service?.functionalServices as item }		
						<div class="table-row">
						  <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
							{item.service}
						  </div>
						  <div class="table-cell px-6 py-4 text-sm text-gray-800">
							{item.description}
						  </div>
						</div>
						{/each}
				
					  </div>
					</div>
				  </div>
				</div>
			  </div>
		</div>
		{/if}

		{#if data.service?.keyComponents}	
		<div class="flex flex-col gap-2 items-start justify-start w-full mt-10">
			<h2 class="text-[#083867] font-semibold text-2xl mb-3">{data.service?.keyComponentsName ||  "Key Components"}</h2>
			<div class="-m-1.5 overflow-auto w-full">
				<div class="p-1.5 min-w-full inline-block align-middle w-full">
				  <div class="overflow-hidden w-full">
					<div class="table border-collapse table-auto w-full divide-y divide-gray-200">
					  <div class="table-header-group">
						<div class="table-row">
						  <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Service</div>
						  <div class="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description of Service</div>
						</div>
					  </div>
					  <div class="table-row-group divide-y divide-gray-200 bg-white">
						{#each data.service?.keyComponents as item }		
						<div class="table-row">
						  <div class="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
							{item.service}
						  </div>
						  <div class="table-cell px-6 py-4 text-sm text-gray-800">
							{item.description}
						  </div>
						</div>
						{/each}
				
					  </div>
					</div>
				  </div>
				</div>
			  </div>
		</div>
		{/if}

		<div class="w-full text-start mt-10 flex flex-col gap-8">
			<div class="sm:grid-cols-2 grid items-center gap-10">
				<div class="flex flex-col gap-2,5">
					<h2 class="text-[#083867] font-semibold text-2xl mb-3">Why Choose DNR Partners?</h2>
					<div class="flex flex-col gap-2">
							<p class="text-[#595959] font-light">
							  <b class="text-[#083867] underline">Expertise and Insight:</b> Our tax advisors possess extensive knowledge of tax regulations and strategies, delivering tailored solutions to meet your specific needs
							</p>
							<p class="text-[#595959] font-light">
								<b class="text-[#083867] underline">Global Reach with Local Expertise:</b> We offer global tax advisory services with an in-depth understanding of local regulations, ensuring comprehensive and compliant solutions.
							</p>
							<p class="text-[#595959] font-light">
								<b class="text-[#083867] underline">Proactive Approach:</b> We anticipate potential tax challenges and opportunities, providing forward-thinking advice to optimize your tax position.
							</p>
							<p class="text-[#595959] font-light">
								<b class="text-[#083867] underline">Commitment to Excellence:</b> Our focus on quality and client satisfaction ensures that we deliver reliable, actionable advice and support.
							</p>
					</div>
				</div>
				<div class="w-full mt-10 h-[350px] overflow-hidden rounded-2xl">
					<img
						src={data.service.images[1]}
						alt={data.service?.title}
						class="w-full object-cover h-full"
					/>
				</div>
			</div>
		</div>
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
				<ServicesCard isHome expctedId={data.service.icon} />
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="flex flex-col items-center gap-4">
			<Button>insights</Button>
			<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
				{#each blog as item}
					<Card
						title={item.title}
						desc={item.description}
						createdAt={item.publishedAt}
						imgUrl={item.mainImage}
						id={item._id}
					/>
				{/each}
			</div>
			<div class="flex items-end justify-end w-full">
				<a
					href="/insights"
					class="py-3 px-6 w-fit flex items-center gap-4 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2 mt-6"
				>
					<span>View more News</span>
					<span>
						<svg
							width="10"
							height="16"
							viewBox="0 0 10 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.5 1L8.5 8L1.5 15"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</a>
			</div>
		</div>
	</div>

	<Conctact />
</section>
