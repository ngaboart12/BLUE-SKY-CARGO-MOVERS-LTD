<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import imgeFour from '$lib/images/11.jpeg?enhanced';
	import ImageTwo from '$lib/images/009.jpeg';
	import Button from '$lib/components/Button.svelte';
	import SvgOne from '$lib/images/vision/1.svelte';
	import SvgTwo from '$lib/images/vision/2.svelte';
	import SvgThree from '$lib/images/vision/3.svelte';
	import SvgFour from '$lib/images/vision/4.svelte';
	import Card from '$lib/components/Card.svelte';
	import Conctact from '$lib/components/Conctact.svelte';
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import Partnership from '$lib/components/Partnership.svelte';
	import { page } from '$app/stores';
	import CONTENT from '../../../data/countryText.json'
	import CONTENT_IMG from "../../../data/images.json"
	import Carousel from '../Carousel.svelte';
	import Map from '../Map.svelte';
	import CountryButton from '../CountryButton.svelte';
	import blogsData from '../../../data/blogs.json';
	

	const visions = [
    {
        name: 'OUR VISION',
        description: 'To be the leading logistics and cargo moving company in East Africa, known for our exceptional service quality, reliability, and innovative solutions.',
        icon: 1
    },
    {
        name: 'OUR MISSION',
        description: 'To provide comprehensive, efficient, and tailored logistics solutions that exceed our clients expectations, ensuring timely and secure delivery of cargo across all borders.',
        icon: 2
    },
    {
        name: 'CORE BELIEF',
        description: 'We believe in the power of seamless logistics to drive economic growth and facilitate international trade, while maintaining the highest standards of integrity and professionalism.',
        icon: 3
    },
    {
        name: 'OUR CORE VALUES',
        description: 'Excellence in Service Delivery, Customer Satisfaction, Integrity and Professionalism, Innovation in Logistics, Timely and Secure Deliveries, Environmental Responsibility',
        icon: 4
    }
];

	export const blog = blogsData.blogs.slice(0, 8).map((value: any) => {
    if (value.mainImage && value.mainImage.length > 0) {
        return {
            ...value,
            mainImage: value.mainImage[0] // Access the first image in the array
        };
    } else {
        return value;
    }
});
	let findContenent = CONTENT.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT[0];
	$: findImage = CONTENT_IMG.find((item) => item.path === $page.url.pathname.split('/')[1]) || CONTENT_IMG[0];

	const HERO_CONTENT = [
    {
        title: 'BLUE SKY CARGO MOVERS LTD',
        subTitle: 'Your Trusted Partner in Global Logistics and Cargo Solutions',
    },
    {
        title: 'Excellence in Every Shipment',
        subTitle: 'Experience unparalleled freight forwarding and customs clearing services tailored to your unique needs',
    },
    {
        title: 'Comprehensive Care for Your Cargo',
        subTitle: 'From sea freight to inland transportation, we ve got every aspect of your logistics covered',
    },
    {
        title: 'Innovative Solutions for Modern Trade',
        subTitle: 'Cutting-edge techniques and efficient practices for seamless international cargo movement',
    },
    {
        title: 'Your Reliable Partner in Global Trade',
        subTitle: 'Professional and customer-focused services to enhance your import and export operations',
    },
    {
        title: 'Connecting Borders, Simplifying Trade',
        subTitle: 'Let us handle the complexities of logistics while you focus on growing your business',
    }
]
</script>

<div class="min-h-[75vh] h-full flex relative justify-start items-end">
	<!-- <video src="/02.mp4" autoplay loop muted class="absolute top-0 w-full h-full z-10 object-cover" /> -->
	<img src={"/new/blueskyhome.jpg"} alt="Description of the image" class="absolute top-0 w-full h-full z-10 object-cover" />
	<div class="absolute top-0 w-full bg-black/40 h-full z-20"></div>
	<div class="flex flex-col gap-4 items-start z-40 bg-[#14375a] px-12 py-12 pb-12">
		<div class="text-white text-start max-w-4xl sm:mt-0 mt-28 overflow-hidden">
				<div class="flex flex-col w-full">
					<p class="text-xl f font-medium mb-10">
						{HERO_CONTENT[0].title}
					</p>
					<p class="text-[24px] sm:text-[24px] font-light leading-7 mt-2">
						{HERO_CONTENT[0].subTitle}
					</p>
				</div>
			<div class="flex items-center md:gap-4 gap-2 md:flex-nowrap flex-wrap w-fit mt-10">
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
<!-- <div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-start">
	<h2 class="text-xl mb-6 sm:text-2xl md:text-3xl font-bold text-[#083867]">Our Network</h2>
	<Carousel perPage={5}> 
		<CountryButton  gap={true} onHome />
	</Carousel>
</div> -->

<div class="flex flex-col gap-6 sm:gap-10 mt-10">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
			<div class="overflow-hidden w-full">
				<!-- <Map /> -->
				<div class="w-full mt-10 h-[650px] overflow-hidden rounded-2xl">
					<img
						src={"/new/001.jpeg"}
						alt={""}
						class="w-full object-cover h-full"
					/>
				</div>
			</div>
			<div class="flex flex-col gap-3">
				<div class="w-fit">
					<Button>WELCOME</Button>
				</div>
				<Title
					name="Empowering businesses worldwide with cutting-edge solutions and strategic insights that drive exceptional growth"
				/>
				<p class="text-[#4C4A4A] font-light">
					At Blue Sky Cargo Movers Ltd, we are redefining excellence in logistics and freight forwarding services across East Africa and beyond. With our headquarters in Kigali, Rwanda, and strategic offices at major entry points such as Gatuna, Rusumo, Gisenyi, and Rusizi, as well as at the ports of Mombasa and Dar es Salaam, we offer unparalleled expertise and innovative solutions that drive success in today's complex global trade environment. Our comprehensive range of services, including sea freight, inland transportation, warehousing, and customs clearing, ensures that your cargo is handled with the utmost care and delivered on time, every time.
				</p>
				<a
					href="/about"
					class="py-3 px-6 w-fit flex items-center gap-2 bg-[#007BFF] rounded-xl text-white capitalize font-light col-span-2 mt-2"
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
						<Button>Our Services</Button>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-4 mt-8 gap-4 items-center w-full">
				<ServicesCard isHome />
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
					{#if item.icon === 4 }
						<div class="grid grid">
							<div class="flex flex-col gap-1">
								<p class="uppercase text-lg text-[#007BFF]">{item.name}</p>
								<div class="grid grid-cols-2 gap-2">
									<div class="flex flex-col">
										<span class="font-extralight text-lg">Integrity</span>
										<span class="font-extralight text-lg">Professionalism</span>
										<span class="font-extralight text-lg">Excellence</span>
									</div>
									<div class="flex flex-col">
										<span class="font-extralight text-lg">Customer centricity</span>
										<span class="font-extralight text-lg">Serving</span>
									</div>
								</div> 
							</div>
						</div>
						{:else}
						<div class="flex flex-col gap-1">
							<p class="uppercase text-lg text-[#007BFF]">{item.name}</p>
							<p class="font-extralight text-lg">{item.description}</p>
						</div>
					{/if}
				</div>
			{/each}
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
					class="py-3 px-6 w-fit flex items-center gap-2 bg-[#007BFF] text-white border border-[#0056b3] rounded-xl capitalize font-light col-span-2 mt-2"
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
					href="/carrers"
					class="py-3 px-6 w-fit flex items-center gap-6 bg-[#007BFF] rounded-xl text-white capitalize font-light col-span-2"
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
	<!-- <Partnership /> -->
	<div class="w-full text-start mt-10 flex flex-col gap-8 max-w-7xl mx-auto">
		<div class="sm:grid-cols-2 grid items-center gap-10">
			<div class="flex flex-col gap-2.5">
				<h2 class="text-[#083867] font-semibold text-2xl mb-3">Why Choose Blue Sky Cargo Movers Ltd?</h2>
				<ul class="flex flex-col gap-2 list-disc ml-8">
					<li class="text-[#595959] font-light">
						Blue Sky Cargo Movers Ltd is a well-established forwarding company with a proven track record in delivering exceptional logistics solutions.
					</li>
					<li class="text-[#595959] font-light">
						We offer personalized client handling to ensure tailored services that meet specific needs and requirements.
					</li>
					<li class="text-[#595959] font-light">
						Our zero tolerance policy guarantees strict adherence to ethical practices and full compliance with legal standards.
					</li>
					<li class="text-[#595959] font-light">
						We provide comprehensive services including road transport, ocean transport, customs clearing, and logistics advisory.
					</li>
					<li class="text-[#595959] font-light">
						Our strategic office locations ensure efficient handling of logistics across major entry points and ports in the region.
					</li>
				</ul>
			</div>
			
			<div class="w-full mt-10 h-[350px] overflow-hidden rounded-2xl">
				<img
					src={"/new/007.jpeg"}
					alt={""}
					class="w-full object-cover h-full"
				/>
			</div>
		</div>
	</div>
	<Conctact />
</div>
