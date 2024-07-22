<script lang="ts">
	import RRA from '$lib/images/RRA.png';
	import CISI from '$lib/images/cisi.jpg';
	import RSSB from '$lib/images/rssb.jpg';
	import ICPAR from '$lib/images/icpar.jpg';
	import BNR from '$lib/images/bnr.png';
	import ICPAK from '$lib/images/icpak.jpg';
	import ACCA from '$lib/images/acca.jpg';
	import Minecofin from '$lib/images/minecofin.png';
	import RDB1 from '$lib/images/rdb.png';

	let whichOneIsActive;
	const Partnes = [
		{
			id: 1,
			image: RRA,
			name: 'Rwanda Revenue Authority',
			project: ['Tax Administration System'],
			description: ['We are proud to have worked with the Rwanda Revenue Authority to develop a new tax administration system that is more efficient and user-friendly. Our team of experts worked closely with the RRA to design and implement a system that meets their needs and helps them better serve the people of Rwanda.'],
		},
		{
			id: 2,
			image: CISI,
			name: 'Chartered Institute for Securities & Investment',
			project: ['Training and Certification'],
			description: ['We are proud to partner with the Chartered Institute for Securities & Investment to provide training and certification programs for finance professionals in Rwanda. Our courses are designed to help individuals develop the skills and knowledge they need to succeed in the financial services industry.'],
		},
		{
			id: 3,
			image: RSSB,
			name: 'Rwanda Social Security Board',
			project: ['Pension Management System'],
			description: ['We are proud to have worked with the Rwanda Social Security Board to develop a new pension management system that is more efficient and user-friendly. Our team of experts worked closely with the RSSB to design and implement a system that meets their needs and helps them better serve the people of Rwanda.'],
		},
		{
			id: 4,
			image: ICPAR,
			name: 'Institute of Certified Public Accountants of Rwanda',
			project: ['Training and Certification'],
			description: ['We are proud to partner with the Institute of Certified Public Accountants of Rwanda to provide training and certification programs for finance professionals in Rwanda. Our courses are designed to help individuals develop the skills and knowledge they need to succeed in the accounting industry.'],
		},
		{
			id: 5,
			image: BNR,
			name: 'Bank of Rwanda',
			project: ['Financial Management System'],
			description: ['We are proud to have worked with the Bank of Rwanda to develop a new financial management system that is more efficient and user-friendly. Our team of experts worked closely with the BNR to design and implement a system that meets their needs and helps them better serve the people of Rwanda.'],
		},
		{
			id: 6,
			image: ICPAK,
			name: 'Institute of Certified Public Accountants of Kenya',
			project: ['Training and Certification'],
			description: ['We are proud to partner with the Institute of Certified Public Accountants of Kenya to provide training and certification programs for finance professionals in Kenya. Our courses are designed to help individuals develop the skills and knowledge they need to succeed in the accounting industry.'],
		},
		{
			id: 7,
			image: ACCA,
			name: 'Association of Chartered Certified Accountants',
			project: ['Training and Certification'],
			description: ['We are proud to partner with the Association of Chartered Certified Accountants to provide training and certification programs for finance professionals in Rwanda. Our courses are designed to help individuals develop the skills and knowledge they need to succeed in the accounting industry.'],
		},
		{
			id: 8,
			image: Minecofin,
			name: 'Ministry of Finance and Economic Planning',
			project: ['Economic Development Strategy'],
			description: ['We are proud to have worked with the Ministry of Finance and Economic Planning to develop a new economic development strategy that will help Rwanda achieve its development goals. Our team of experts worked closely with the Ministry to design and implement a strategy that will drive economic growth and create new opportunities for the people of Rwanda.'],
		},
		{
			id: 9,
			image: RDB1,
			name: 'Rwanda Development Board',
			project: ['Investment Promotion'],
			description: ['We are proud to have worked with the Rwanda Development Board to promote investment in Rwanda. Our team of experts worked closely with the RDB to attract new investors and create new opportunities for economic growth in Rwanda.'],
		},
	];
	function handleOnClick(id: number) {
		whichOneIsActive = id;
	}

</script>

<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-start">
	<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#083867]">Our Clientele</h2>
	<p class="text-[#797C7F] font-light mt-2">
		Our company, Your Gateway to Global Business Success, provides unparalleled expertise and innovative solutions tailored to your needs. We empower your vision and drive global success, helping you navigate international markets with confidence. With our support, you can unlock new opportunities and expand your reach.
	</p>

	<div class="grid sm:grid-cols-2 gap-x-6 mt-4 w-full cursor-pointer">
		{#each Partnes as item}
			<button
				class="flex flex-col transition-all duration-300 w-full"
				on:click={() => handleOnClick(item.id)}
			>
				<div
					class="py-4 px-4 transition-all duration-300 w-full {whichOneIsActive === item.id
						? 'bg-[#083867]'
						: 'bg-[#F0F8FF]'} rounded-xl"
				>
					<div class="flex justify-between items-center">
						<div class="flex items-center gap-4">
							<div
								class=" transition-all duration-300 {whichOneIsActive === item.id
									? 'text-white'
									: 'text-[#083867]'}"
							>
								<span>
									<img src={item.image} alt={item.name} class="h-[40px] w-[40px] object-contain" />
								</span>
							</div>
							<h4
								class=" transition-all duration-300 {whichOneIsActive === item.id
									? 'text-white'
									: 'text-[#083867]'} font-light capitalize"
							>
								{item.name}
							</h4>
						</div>
						<div
							class=" transition-all duration-300 {whichOneIsActive === item.id
								? 'rotate-0 text-white'
								: 'rotate-180 text-black'}"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19.5303 16.0303C19.2641 16.2966 18.8474 16.3208 18.5538 16.1029L18.4697 16.0303L12 9.561L5.53033 16.0303C5.26406 16.2966 4.8474 16.3208 4.55379 16.1029L4.46967 16.0303C4.2034 15.7641 4.1792 15.3474 4.39705 15.0538L4.46967 14.9697L11.4697 7.96967C11.7359 7.7034 12.1526 7.6792 12.4462 7.89705L12.5303 7.96967L19.5303 14.9697C19.8232 15.2626 19.8232 15.7374 19.5303 16.0303Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="px-8 my-2 items-start text-start overflow-hidden {whichOneIsActive !==
					item.id
						? 'h-0'
						: 'h-full'}">
					{#each item.project as project, index}
					<span class="text-[#083867] font-bold">{project}</span>	
					<p
						class="text-[#5E5D5D] items-start text-start text-[16px] font-light overflow-hidden transition-all duration-300 "
					>
						{item.description[index]}
					</p>
					{/each}
				</div>
			</button>
		{/each}
	</div>

</div>


<!-- <div class=" gap-10 flex justify-between flex-wrap">
	<a target="_blank" href="https://ecms.rra.gov.rw/home" class="flex justify-center items-center">
		<img src={RRA} alt="RRA RWANDA REVENUE AUTHORITY" class="h-14" />
	</a>
	<a
		href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/africa/capital-markets-authority-(rwanda)-certification-licensing-programme"
		target="_blank"
		class="flex justify-center items-center"
	>
		<img
			src={CISI}
			alt="Capital Markets Authority (Rwanda) Certification Licensing"
			class="h-14"
		/>
	</a>
	<a href="https://www.rssb.rw/" class="flex justify-center items-center">
		<img src={RSSB} alt="RSSB" class="h-14" />
	</a>
	<a href="https://icparwanda.com/" class="flex justify-center items-center">
		<img src={ICPAR} alt="ICPAR ()" class="h-14" />
	</a>
	<a href="https://www.bnr.rw/about/" class="flex justify-center items-center">
		<img src={BNR} alt="BNR National Bank of Rwanda" class="h-14" />
	</a>
	<a href="https://www.icpak.com/venue/rwanda/" class="flex justify-center items-center">
		<img src={ICPAK} alt="BNR National Bank of Rwanda" class="h-14" />
	</a>
	<a href="https://www.accaglobal.com/gb/en.html" class="flex justify-center items-center">
		<img src={ACCA} alt="Association of Chartered Certified Accountants" class="h-14" />
	</a>
	<a href="http://www.minecofin.gov.rw/" class="flex justify-center items-center">
		<img src={Minecofin} alt="Association of Chartered Certified Accountants" class="h-14" />
	</a>
	<a href="https://org.rdb.rw/" class="flex justify-center items-center">
		<img src={RDB1} alt="RDB" class="h-14" />
	</a>
</div> -->