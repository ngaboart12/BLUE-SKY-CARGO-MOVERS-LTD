<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Title from '$lib/components/Title.svelte';
	import imgeFive from '$lib/images/6.png';
	import imgeSix from '$lib/images/7.png';
	import ImageOne from '$lib/images/1.png';
	import ImageThree from '$lib/images/8.png';
	import ImageFour from '$lib/images/9.png';



	const visions = [
		{
			name: 'OUR VISION',
			description: 'To be a globally trusted consulting firm.',
			icon: 1
		},
		{
			name: 'OUR MISSION',
			description:
				'To leverage on innovation, expertise and technology to offer globally competitive consultancy services to our clients',
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
				'At DNR PARTNERS INTERNATIONAL, our values: are summarized into TRIP2C. Our values make our people live the company culture in pursuit of customer satisfaction. These are: Trust, Respect, Integrity, Professional competence Confidentiality and Customer value.',
			icon: 4
		}
	];
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="w-full flex flex-col gap-4">
			<h2 class="text-[28px] font-medium capitalize">about us</h2>
		</div>
		<div class="w-full flex h-[400px] flex-wrap md:flex-nowrap gap-10 mt-10">
				<div class="rounded-2xl overflow-hidden sm:w-[700px]">
					<img src={imgeFive} alt="" class="w-full h-full object-cover" />
				</div>

				<div class="w-full relative">
					<div class=" sm:flex hidden absolute -top-[60px] right-0 px-6 py-6 h-fit bg-[#083867]  text-white rounded-xl gap-4 w-[480px] items-center z-10">
						<span>
							<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 11.4V7.85001C0 6.48334 0.216667 5.21667 0.65 4.05001C1.11667 2.88334 1.9 1.73334 3 0.600006L4.95 2.05001C4.21667 2.85 3.68333 3.6 3.35 4.30001C3.01667 4.96667 2.81667 5.63334 2.75 6.30001H5.1V11.4H0ZM8.3 11.4V7.85001C8.3 6.48334 8.51667 5.21667 8.95 4.05001C9.41667 2.88334 10.2 1.73334 11.3 0.600006L13.25 2.05001C12.5167 2.85 11.9833 3.6 11.65 4.30001C11.3167 4.96667 11.1167 5.63334 11.05 6.30001H13.4V11.4H8.3Z" fill="white"/>
							</svg>								
						</span>
						<p class="font-extralight text-xl">
							We believe in investing time  to develop true long term partnerships and trusted relationships with our clients
						</p>
					</div>
					<img src={imgeSix} alt="" class="w-full rounded-2xl h-full object-cover" />
				</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
			<div class="">
				<img
					src={ImageOne}
					width={325.69}
					height={328.41}
					alt=""
					class="w-[460px] h-full object-cover"
				/>
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
				<button
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
				</button>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="w-full flex flex-col gap-4">
			<div class="w-fit">
				<Button>services</Button>
			</div>
			<Title name="Meet The Team" />
		</div>
		<div class="flex items-center flex-wrap sm:w-auto w-full mt-4">
			<button class="flex flex-col bg-[#C43228]/10 sm:w-auto w-full">
				<span class="px-8 font-light py-3.5 text-[#C43228]">Board of directors</span>
				<span class="w-full h-1 bg-[#C43228]" />
			</button>
			<button class="flex flex-col bg-transparent sm:w-auto w-full">
				<span class="px-8 font-light py-3.5 text-[#828282] capitalize">senior management</span>
				<span class="w-full h-1 bg-[#E4E4E4]" />
			</button>
		</div>
		<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
			{#each [1,2,3,4,1,2,3,4] as item }
				<div class="flex flex-col">
					<img src={ImageThree} alt="" class="w-full h-full object-cover rounded-2xl" />
					<span class="font-light mt-2">Dieudone Ngirimana</span>
					<span class="font-light text-[#6C6C6C]">Chair person</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="bg-[#F0F8FF] py-10">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="flex items-start gap-10 md:flex-nowrap flex-wrap">
				<div class="w-[300px] flex flex-col gap-2.5">
					<div class="w-fit">
						<button class="rounded-lg font-light px-4 py-1.5 text-[#C43228] bg-white capitalize">
							carreer
						</button>  
					</div>
					<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
						Open Roles
					</h2>
					<p class="text-[#5D5D5D] font-light">Offering proactive services and delivering effective, reliable, dependable the highest level of accuracy and professionalism.</p>
				</div>
				<div class="flex flex-col gap-4 w-full">
					<div class="bg-white rounded-xl py-4 sm:w-[80%] px-6 flex items-center gap-2.5 w-full">
						<div>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.80553 15.7959C12.9424 15.7959 16.296 12.4423 16.296 8.30541C16.296 4.16854 12.9424 0.814941 8.80553 0.814941C4.66866 0.814941 1.31506 4.16854 1.31506 8.30541C1.31506 12.4423 4.66866 15.7959 8.80553 15.7959Z" stroke="#A2A2A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M14.0153 13.9043L16.9519 16.8334" stroke="#A2A2A2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<div class="w-full">
							<input type="text" class="text-[#A2A2A2] placeholder:capitalize font-light w-full outline-none" placeholder="search openings" />
						</div>
					</div>
					<div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
						{#each [1,2,3,4] as item }
						<div class="flex items-center gap-4 md:flex-nowrap flex-wrap bg-white px-4 py-4 rounded-xl cursor-pointer">
							<div class="md:flex-nowrap flex-wrap">
								<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20 35.5C28.2843 35.5 35 28.7843 35 20.5C35 12.2157 28.2843 5.5 20 5.5C11.7157 5.5 5 12.2157 5 20.5C5 28.7843 11.7157 35.5 20 35.5Z" fill="#2A4157" fill-opacity="0.14"/>
									<path d="M20 13.8333V27.1666" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
									<path d="M26.6667 20.5H13.3334" stroke="#222222" stroke-width="1.5" stroke-linecap="round"/>
								</svg>
							</div>
							<div class="flex flex-col gap-2 md:flex-nowrap flex-wrap">
								<h2 class="text-[#083867] capitalize font-medium text-lg">accountant manager</h2>
								<div class="grid sm:grid-cols-2 gap-x-12">
									<div class="flex items-center gap-1">
										<span class="text-[#464646]">Exp:</span>
										<span class="text-[#7D7D7D] font-light">5-6 years</span>
									</div>
									<div class="flex items-center gap-1">
										<span class="text-[#464646]">Type:</span>
										<span class="text-[#7D7D7D] font-light">Full Time</span>
									</div>
									<div class="flex items-center gap-1">
										<span class="text-[#464646]">Location:</span>
										<span class="text-[#7D7D7D] font-light">Kigali City</span>
									</div>
									<div class="flex items-center gap-1">
										<span class="text-[#464646]">Openings:</span>
										<span class="text-[#7D7D7D] font-light">5</span>
									</div>
								</div>
							</div>
						</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div  class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="flex items-center justify-between">
			<Button>updates</Button>
			<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
				Explore Our Company's World on YouTube!"
			</h2>
		</div>
		<div class="flex flex-col gap-4">
			<h3  class="text-[28px] font-medium capitalize mt-4">youtube updates</h3>
		</div>
		<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"> 
			 {#each [1,2,4] as item }
				<div class="overflow-hidden rounded-2xl relative h-[300px] gap-4 flex items-center justify-center">
					<img src={ImageFour} alt="" class="absolute left-0 top-0 w-full h-full z-10 object-cover" />
					<div class="z-50 cursor-pointer">
						<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.4" d="M36.2407 65.1199C52.5325 65.1199 65.7393 51.9128 65.7393 35.6214C65.7393 19.3297 52.5325 6.1228 36.2407 6.1228C19.9492 6.1228 6.74219 19.3297 6.74219 35.6214C6.74219 51.9128 19.9492 65.1199 36.2407 65.1199Z" fill="#C43228"/>
							<path d="M45.0866 30.4006L36.532 25.4744C34.4081 24.2354 31.8417 24.2354 29.7178 25.4744C27.5939 26.7133 26.3254 28.8962 26.3254 31.374V41.256C26.3254 43.7044 27.5939 45.9168 29.7178 47.1558C30.7798 47.7752 31.9597 48.0702 33.1102 48.0702C34.2901 48.0702 35.4406 47.7752 36.5025 47.1558L45.0571 42.2295C47.181 40.9906 48.4494 38.8077 48.4494 36.3298C48.5084 33.8519 47.24 31.6395 45.0866 30.4006Z" fill="white"/>
						</svg>	
					</div>
				</div>
			 {/each}
		</div>
	</div>
</div>
