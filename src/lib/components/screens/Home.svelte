<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import imgeFour from '$lib/images/one--1.jpg?enhanced';
	import ImageOne from '$lib/images/2.2.png?enhanced';
	import ImageTwo from '$lib/images/2.png';
	import Button from '$lib/components/Button.svelte';
	import SvgOne from '$lib/images/vision/1.svelte';
	import SvgTwo from '$lib/images/vision/2.svelte';
	import SvgThree from '$lib/images/vision/3.svelte';
	import SvgFour from '$lib/images/vision/4.svelte';
	import Card from '$lib/components/Card.svelte';
	import Conctact from '$lib/components/Conctact.svelte';
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import showdown from 'showdown';
	import Partnership from '$lib/components/Partnership.svelte';
	import { page } from '$app/stores';
	import CONTENT from '../../../data/countryText.json'
	import CONTENT_IMG from "../../../data/images.json"
	import Testimonials from '../Testimonials.svelte';
	import FQs from '../FQs.svelte';
	import Event from '../Event.svelte';
	import Carousel from '../Carousel.svelte';

	const visions = [
		{
			name: 'OUR VISION',
			description: 'To be a globally trusted consulting firm in audit and advisory services.',
			icon: 1
		},
		{
			name: 'OUR MISSION',
			description:
				'To leverage innovation, expertise, and technology to offer globally competitive consultancy services to our clients.',
			icon: 2
		},
		{
			name: 'CORE BELIEF',
			description:
				'Offering proactive services and delivering effective, reliable, dependable professional advice, maintaining the highest level of confidentiality and integrity. Delivering results based on evidence and research within timeframe, while maintaining the highest level of accuracy and professionalism.',
			icon: 3
		},
		{
			name: 'CORE VALUES',
			description:
				'At DNR PARTNERS INTERNATIONAL, our values: are summarized into TRIP2C. Our values make our people live the company culture in pursuit of customer satisfaction. These are: Integrity, Professionalism, Excellence, Customer Centricity',
			icon: 4
		}
	];
	export let data;
	export const blog = data.blogs.slice(0, 4).map((value: any) => {
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
	let findContenent = CONTENT.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT[0];
	$: findImage = CONTENT_IMG.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT_IMG[0];

</script>

<Carousel>
	{#each CONTENT  as item }
		<div class="min-h-screen h-full flex relative justify-center items-center">
			<img
				src={item.heroImage}
				alt="logo"
				class="absolute top-0 w-full h-full z-10 object-cover"
			/>
			<div class="absolute top-0 w-full bg-black/70 h-full z-20"></div>
			<div class="flex flex-col gap-4 items-center z-40">
				<div class="text-white text-center max-w-4xl sm:mt-0 mt-28">
					<p class="text-xl font-light mb-10">{item.subTitle}</p>
					<p class="text-[24px] sm:text-[44px] font-medium leading-none mt-2">
						{item.title}
					</p>
					<div class="flex items-center md:gap-4 gap-2 md:flex-nowrap flex-wrap mx-auto w-fit mt-10">
						<a
							href="/contact"
							class="py-3 px-10 w-fit flex items-center gap-2 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2 mt-2"
						>
							<span>reach to us</span>
							<span>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M19.75 12.2257L4.75 12.2257"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.7002 6.2013L19.7502 12.2253L13.7002 18.2503"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</a>
						<a
							href="/services"
							class="py-3 px-10 w-fit flex items-center gap-2 bg-transparent border-[white] border rounded-xl text-[white] capitalize font-light col-span-2 mt-2"
						>
							<span>know more</span>
							<span>
								<svg
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										opacity="0.4"
										d="M19.75 12.2257L4.75 12.2257"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.7002 6.2013L19.7502 12.2253L13.7002 18.2503"
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
		</div>
	{/each}
</Carousel>

<div class="flex flex-col gap-6 sm:gap-10 mt-32">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
			<div class="">
				<img src={findImage.images[2]} alt="" class="w-[460px] h-full object-cover" />
			</div>
			<div class="flex flex-col gap-3">
				<div class="w-fit">
					<Button>about us</Button>
				</div>
				<Title
					name="We are a global chartered professional accountants and business advisors headquartered in England"
				/>
				<p class="text-[#4C4A4A] font-light">
					It has a sharp expertise from long term experiences in various business industries. The
					firm is in charge of coordinating the international activities of the DNR PARTNERS network
					Firms but does not provide, supervise or manage professional services to clients. which is
					a world-wide network of independent professional accounting firms and business advisers,
					each of which is a separate and independent legal entity. DNR PARTNERS has offices in
					England, Rwanda, Burundi, Kenya, Zambia and South Africa.
				</p>
				<a
					href="/about"
					class="py-3 px-6 w-fit flex items-center gap-2 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2 mt-2"
				>
					<span>know more</span>
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
	<div class="bg-[#F0F8FF] pt-6">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
			<div class="grid sm:grid-cols-2 items-center">
				<div class="flex flex-col gap-2">
					<div class="w-fit">
						<Button>services</Button>
					</div>
					<div class="sm:w-[60%]">
						<Title isSmall name="Your Expectation, Our Value Proposition" />
					</div>
				</div>
				<p class="text-[#636363] text-[16px] font-light">
					We offer services such as audit and assurance, Tax advisory, Accounting, Corporate finance
					advisory and Management consultancy. Our clients are from various industries like NGOs,
					Trading, Manufacturing, Universities, Coffee & Tea export, Capital market, etc.
				</p>
			</div>
			<div class="grid grid-cols-4 mt-8 gap-4 items-center w-full">
				<ServicesCard isHome />
			</div>
		</div>
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
			<div class="grid sm:grid-cols-2 items-center">
				<div class="flex flex-col gap-2">
					<div class="w-fit">
						<Button>Specialized Packages</Button>
					</div>
					<div class="sm:w-[60%]">
						<Title isSmall name="Your Packages, Our Packages" />
					</div>
				</div>
				<p class="text-[#636363] text-[16px] font-light">
					We offer specialized packages including corporate strategy planning, monitoring & evaluation tools, advanced financial modeling, sustainability management, corporate strategic positioning, e-marketing, IFRSs (including IFRS 9, 17), climate adaptation, and ESG strategy
				</p>
			</div>
			<div class="grid grid-cols-4 mt-8 gap-4 items-center w-full">
				<ServicesCard isHome={true} baseNumber={12} />
			</div>
		</div>
		<div class="relative h-[250px] mt-10 flex items-center justify-center">
			<div class="absolute top-0 w-full bg-[#083867] h-full z-10" />
			<img
				src={ImageTwo}
				alt="logo"
				class="absolute top-0 w-full h-full z-20 bg-opacity-10 object-cover"
			/>
			<div class="flex items-start z-40 max-w-2xl text-center mx-10">
				<div class="mt-4">
					<svg
						width="15"
						height="14"
						viewBox="0 0 15 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.7407 8.05138C14.5802 8.05138 15 8.47227 15 9.31406V12.7373C15 13.5791 14.5802 14 13.7407 14H10.4944C9.65485 14 9.23507 13.5791 9.23507 12.7373V9.31406C9.23507 7.34989 9.4403 5.63826 9.85075 4.17917C10.2799 2.70137 11.1101 1.41063 12.3414 0.306954C12.7519 -0.0484664 13.097 -0.0952323 13.3769 0.166657L14.6362 1.34516C14.916 1.60705 14.8507 1.92505 14.4403 2.29918C13.806 2.86037 13.2836 3.6741 12.8731 4.74036C12.4813 5.78791 12.2854 6.89159 12.2854 8.05138H13.7407ZM4.5056 8.05138C5.34515 8.05138 5.76493 8.47227 5.76493 9.31406V12.7373C5.76493 13.5791 5.34515 14 4.5056 14H1.25933C0.419776 14 0 13.5791 0 12.7373V9.31406C0 7.34989 0.205224 5.63826 0.615672 4.17917C1.04478 2.70137 1.875 1.41063 3.10634 0.306954C3.51679 -0.0484664 3.86194 -0.0952323 4.14179 0.166657L5.40112 1.34516C5.68097 1.60705 5.61567 1.92505 5.20522 2.29918C4.5709 2.86037 4.04851 3.6741 3.63806 4.74036C3.24627 5.78791 3.05037 6.89159 3.05037 8.05138H4.5056Z"
							fill="white"
						/>
					</svg>
				</div>
				<h1 class="text-xl sm:text-2xl md:text-4xl font-semibold text-white md:leading-[48px]">
					we believe in investing time to develop true long term partnerships and trusted
					relationships with our clients
				</h1>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="grid sm:grid-cols-2 gap-10">
			{#each visions as item}
				<div class="flex gap-6">
					<div>
						{#if item.icon === 1}
							<SvgOne />
						{:else if item.icon === 2}
							<SvgTwo />
						{:else if item.icon === 3}
							<SvgThree />
						{:else if item.icon === 4}
							<SvgFour />
						{:else}
							{item.icon}
						{/if}
					</div>
					<div class="flex flex-col gap-1">
						<p class="uppercase text-lg text-[#C43228]">{item.name}</p>
						<p class="font-extralight text-lg">{item.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="flex flex-col items-center gap-4">
			<Button>insights</Button>
			<Title name="Latest News And Events" />
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

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="w-full h-[350px] relative overflow-hidden rounded-2xl flex items-center">
			<enhanced:img
				src={imgeFour}
				alt="logo"
				class="absolute top-0 w-full h-full z-10 bg-opacity-10 object-cover"
			/>
			<div class="absolute top-0 w-full bg-[#083867]/75 h-full z-20" />

			<div class="z-50 flex flex-col gap-5 mx-10 sm:mx-20 my-10">
				<button class="capitalize w-fit text-white bg-[#124E89] px-6 pt-2 pb-2.5 rounded-lg"
					>services</button
				>
				<p class="text-xl sm:text-2xl md:text-4xl font-medium text-white md:leading-[48px]">
					Want to Be Part of <br /> Our Team?
				</p>
				<a
					href="/services"
					class="py-3 px-6 w-fit flex items-center gap-6 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2"
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
	<Partnership />
	<FQs />
	<Testimonials />
	<Event />
	<Conctact />
</div>
