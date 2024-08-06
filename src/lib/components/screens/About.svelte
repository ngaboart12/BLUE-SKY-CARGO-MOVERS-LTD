<script lang="ts">
	// @ts-nocheck
	import Button from '$lib/components/Button.svelte';
	import Title from '$lib/components/Title.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { createClient } from '@sanity/client';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import Dropzone from 'svelte-file-dropzone';
	import { browser } from '$app/environment';
	import CONTENT from '../../../data/images.json'
	import BG_IMAGE from '$lib/images/bg.1.jpeg'
	import BG_IMAGE_1 from '$lib/images/11.png'
	import { page } from '$app/stores';
	import ModelPersonDetail from '../ModelPersonDetail.svelte';
	import ModalTwo from '../ModalTwo.svelte';




	$: findContenent = CONTENT.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT[0];


	export let data;

	const typeJob = data.organizationTypes;
	let whichIsActive = typeJob[1]._id;
	const typeJobs = typeJob.reverse();


	const youtubeUpdates = data.youtubeUpdates.map((item: any) => {
		const typePrefix = item.mainImage._type ? `${item.mainImage._type}-` : 'image-';
		const removeTypePrefix = item.mainImage.asset._ref.split(typePrefix)[1];
		const lastIndex = removeTypePrefix.lastIndexOf('-');
		const modifiedFilename =
			removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
		return {
			_id: item._id,
			title: item.title,
			image: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`,
			url: item.link
		};
	});
	let showModalone = false;
	let showModaltwo = false;
	let modelDataone:any;
	let modelDataTwo: any;
	let vidioLink = '';

</script>

{#if !browser}
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
				><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line
					x1="4.93"
					y1="4.93"
					x2="7.76"
					y2="7.76"
				/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line
					x1="2"
					y1="12"
					x2="6"
					y2="12"
				/><line x1="18" y1="12" x2="22" y2="12" /><line
					x1="4.93"
					y1="19.07"
					x2="7.76"
					y2="16.24"
				/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg
			>
		</div>
	</div>
{:else}

<div class="min-h-[70vh] flex relative justify-center items-center">
	<img
	   src={BG_IMAGE}
	   alt="logo"
	   class="absolute top-0 w-full h-full z-10 object-cover"
   />
   
   <div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
   
   <div class="flex flex-col gap-4 items-center z-40">
	   <div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
		   <p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">
			About Us
		   </p>
		   <p class="text-[24px] sm:text-[24px] font-medium mt-2">
			DNR partners international is a global network of independent professional accounting and business advisers with over 20 years of experience.
		   </p>
	   </div>
   </div>
</div>
	<div class="flex flex-col gap-6 sm:gap-10 mt-20">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
			<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
				<div class="">
					<img src={BG_IMAGE_1} alt="" class="w-[460px] h-full object-cover" />
				</div>
				<div class="flex flex-col gap-3">
					<div class="w-fit">
						<Button>about us</Button>
					</div>
					<Title
						name="We are a global chartered professional accountants and business advisors headquartered in England"
					/>
					<p class="text-[#4C4A4A] font-light">
						DNR PARTNERS INTERNATIONAL is a leading global network of accounting and business advisors with a 20-year legacy of excellence. Headquartered in the UK, we have a strong African presence, delivering tailored solutions to businesses navigating complex markets. Our Tier 1 accreditation from the Central Bank of Rwanda underscores our commitment to local standards and our capacity to provide world-class financial advisory services.
					</p>
				</div>
			</div>
		</div>

		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="w-full flex flex-col gap-4">
				<div class="w-fit">
					<Button>services</Button>
				</div>
				<Title name="Meet Our Team" />
			</div>
			<div class="flex items-center flex-wrap sm:w-auto w-full mt-4">
				{#each typeJobs as item}
					<button
						on:click={() => {
							whichIsActive = item._id;
						}}
						class="flex flex-col transition-all duration-300 {item._id === whichIsActive
							? 'bg-[#C43228]/10'
							: 'bg-transparent'} sm:w-auto w-full"
					>
						<span
							class="px-8 font-light py-3.5 transition-all duration-300 {item._id === whichIsActive
								? 'text-[#C43228]'
								: 'text-[#828282]'} capitalize">{item.title}</span
						>
						<span
							class="w-full h-1 transition-all duration-300 {item._id === whichIsActive
								? 'bg-[#C43228]'
								: 'bg-[#E4E4E4]'}"
						/>
					</button>
				{/each}
			</div>
			<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
				{#if typeJob.find((item) => item._id === whichIsActive).membersTeams.length === 0}
					<div class="w-full flex items-center justify-center col-span-4 h-[250px]">
						<p class="text-[#828282] font-light">No team members found</p>
					</div>
				{/if}

				{#each typeJob.find((item) => item._id === whichIsActive).membersTeams as item}
					<div class="flex flex-col overflow-hidden">
						<div class="relative overflow-hidden group">
							<a target="_blank" href={item?.linkedin} class="absolute group-hover:opacity-100 opacity-0 duration-200 transition-all cursor-pointer top-0 flex flex-col items-center justify-center rounded-2xl left-0 bg-black/60 w-full h-full text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
								<h3 class="font-semibold">Meet {item.name}</h3>
								<p class="text-sm text-center">
									{item?.bio}
								</p>
							</a>
							<img src={item.mainImage} alt="" class="w-full h-[300px] object-cover rounded-2xl" />
						</div>
						<span class="font-light mt-2 capitalize">{item.name}</span>
						<div class="flex items-center justify-between gap-3">
							<span class="font-light text-[#6C6C6C] capitalize truncate">{item.subtitle}</span>
							<div class="flex gap-2 items-center">
								<a target="_blank" href={item?.linkedin}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C6C6C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="flex items-center justify-between">
				<Button>updates</Button>
				<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
					Explore Our Company's World on YouTube!"
				</h2>
			</div>
			<div class="flex flex-col gap-4">
				<h3 class="text-[28px] font-medium capitalize mt-4">youtube updates</h3>
			</div>
			<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
				{#each youtubeUpdates as item}
					<div
						class="overflow-hidden rounded-2xl relative h-[300px] gap-4 flex items-center justify-center"
					>
						<img
							src={item.image}
							alt=""
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
{/if}

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
