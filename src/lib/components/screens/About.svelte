<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import Title from '$lib/components/Title.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { page } from '$app/stores';
	import ModelPersonDetail from '../ModelPersonDetail.svelte';
	import ModalTwo from '../ModalTwo.svelte';
	import CONTENT from '../../../data/images.json';
	// import BG_IMAGE from '$lib/images/bg.1.jpg';
	// import BG_IMAGE_1 from '$lib/images/11.jpeg';

	let isLoading = true;
	let showModalone = false;
	let showModaltwo = false;
	let modelDataone: any;
	let modelDataTwo: any;
	let vidioLink = '';

	onMount(() => {
		isLoading = false;
	});

	$: findContenent = CONTENT.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT[0];

	const staticYoutubeUpdates = [
		{
  _id: '1',
  title: 'Introduction to Our Cleaning Services',
  image: ["/images/33.jpeg"],
  embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
},

		{
			_id: '2',
			title: 'How Our Cleaning Services Make a Difference',
			image: ["/images/0001.jpg"],
			embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			_id: '3',
			title: 'Top 5 Benefits of Professional Cleaning Services',
			image: ["/images/33333.jpeg"],
			embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			_id: '4',
			title: 'Our Comprehensive Home Maintenance Services',
			image: ["/images/009.jpeg"],
			embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			_id: '5',
			title: 'Why Choose Our Company for Your Commercial Cleaning?',
			image: ["/images/006.jpeg"],
			embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			_id: '6',
			title: 'Customer Testimonials About Our Services',
			image: ["/images/service2.jpeg"],
			embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BLAi6mggIA4?si=sYcd_iJsrHxK_Zum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		}
	];

	const youtubeUpdates = staticYoutubeUpdates.map((item) => ({
		_id: item._id,
		title: item.title,
		image: item.image,
		url: item.embed
	}));
</script>

{#if isLoading}
	<div class="flex items-center justify-center h-screen w-full">
		<div class="animate-spin">
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
				class="feather feather-loader"
			>
				<line x1="12" y1="2" x2="12" y2="6" />
				<line x1="12" y1="18" x2="12" y2="22" />
				<line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
				<line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
				<line x1="2" y1="12" x2="6" y2="12" />
				<line x1="18" y1="12" x2="22" y2="12" />
				<line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
				<line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
			</svg>
		</div>
	</div>
{:else}
	<div class="min-h-[70vh] flex relative justify-center items-center">
		<img
			src={"/new/005.jpeg"}
			alt="Background image"
			class="absolute top-0 w-full h-full z-10 object-cover"
		/>
		<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
		<div class="flex flex-col gap-4 items-center z-40">
			<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
				<p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">
					About Us
				</p>
				<p class="text-[24px] sm:text-[24px] font-medium mt-2">
					SMART CLEANS SOLUTIONS is a premier provider of comprehensive residential and commercial services across the USA, delivering top-quality solutions tailored to meet the diverse needs of our clients.
				</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-6 sm:gap-10 mt-20">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
			<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
				<div>
					<img src={"/new/009.jpeg"} alt="About Us Image" class="w-[660px] h-full object-cover" />
				</div>
				<div class="flex flex-col gap-3">
					<div class="w-fit">
						<Button>About Us</Button>
					</div>
					<Title
						name="We are a global chartered professional accountants and business advisors headquartered in England"
					/>
					<p class="text-[#4C4A4A] font-light">
						SMART CLEANS SOLUTIONS is a leading provider of comprehensive residential and commercial services across the USA, with a commitment to excellence and customer satisfaction. Our wide range of offerings includes professional cleaning, move-in/move-out services, landscaping, home repairs, and much more. We pride ourselves on delivering top-quality, customized solutions that simplify and enhance the lives of our clients. Our use of cutting-edge technology, eco-friendly practices, and a team of experienced professionals sets us apart in the industry.
					</p>
				</div>
			</div>
		</div>

		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="flex items-center justify-between">
				<Button>Updates</Button>
				<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
					Explore Our Company's World on YouTube!
				</h2>
			</div>
			<div class="flex flex-col gap-4">
				<h3 class="text-[28px] font-medium capitalize mt-4">YouTube Updates</h3>
			</div>
			<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
				{#each youtubeUpdates as item}
					<div class="overflow-hidden rounded-2xl relative h-[300px] gap-4 flex items-center justify-center">
						<img
							src={item.image[0] || item.image}
							alt={item.title}
							class="absolute left-0 top-0 w-full h-full z-10 object-cover"
						/>
						<button
							on:click={() => {
								vidioLink = item.url;
								modelDataone = item;
								showModalone = true;
							}}
							class="z-50 cursor-pointer"
						>
							<svg
								width="72"
								height="72"
								viewBox="0 0 72 72"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.4"
									d="M36.2407 65.1199C52.5325 65.1199 65.7393 51.9128 65.7393 35.6214C65.7393 19.3297 52.5325 6.1228 36.2407 6.1228C19.9492 6.1228 6.74219 19.3297 6.74219 35.6214C6.74219 51.9128 19.9492 65.1199 36.2407 65.1199Z"
									fill="#C43228"
								/>
								<path
									d="M45.0866 30.4006L36.532 25.4744C34.4081 24.2354 31.8417 24.2354 29.7178 25.4744C27.5939 26.7133 26.3254 28.8962 26.3254 31.374V41.256C26.3254 43.7044 27.5939 45.9168 29.7178 47.1558C30.7798 47.7752 31.9597 48.0702 33.1102 48.0702C34.2901 48.0702 35.4406 47.7752 36.5025 47.1558L45.0571 42.2295C47.181 40.9906 48.4494 38.8077 48.4494 36.3298C48.5084 33.8519 47.24 31.6395 45.0866 30.4006Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>

	{#if showModalone}
		<Modal bind:showModal={showModalone}>
			<VideoPlayer url={vidioLink} />
		</Modal>
	{/if}

	{#if showModaltwo}
		<ModalTwo bind:showModal={showModaltwo}>
			<ModelPersonDetail data={modelDataTwo} />
		</ModalTwo>
	{/if}
{/if}
