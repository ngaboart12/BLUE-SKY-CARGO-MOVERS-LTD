<script lang="ts">
	import RRA from '$lib/images/RRA.png';
	import UFP from '$lib/images/usaid.png';
	import SWISS from '$lib/images/swiss_agency.png';
	import ICPAR from '$lib/images/ICPAR-Logo.png';
	import BNR from '$lib/images/bnr.png';
	import ICPAK from '$lib/images/icpak.jpg';
	import ACCA from '$lib/images/acca.jpg';
	import Minecofin from '$lib/images/minecofin.png';
	import RDB1 from '$lib/images/rdb.png';
	import WBFP from '$lib/images/social-share.png'
	import AFP from '$lib/images/images-removebg.png'

	let whichOneIsActive;
	let functionOpen = false;

	const Partnes = [
		{
			id: 1,
			image: UFP,
			name: 'Rwanda Revenue Authority',
			project: ['RRA Senior Management Training on Human Capital Risk Management'],
			description: [
				'We are proud to have executed a high-level training with the Rwanda Revenue Authority (RRA) focused on Human Capital Risk Management, where over 50 senior management officials attended the five-day intensive training'
			]
		},
		{
			id: 5,
			image: UFP,
			name: 'National Bank of Rwanda',
			project: ['Financial & Non financial due diligence of Non Umurenge SACCOs'],
			description: [
				'DNR PARTNERS CPA had the pleasure of conducting the financial and non-financial due diligence for the merger of five Non-Umurenge SACCOs operating in Rulindo District. This was part of a tender titled "Consultancy to Carry Out the Due Diligence and Asset Valuation for the Merger of Five (5) Non-Umurenge SACCOs in Rulindo District.',
				'The due diligence included financial, IT, HR, legal, and operations due diligences.',
				'The engagement involved key stakeholders such as the Central Bank of Rwanda (BNR), German Sparkassenstiftung Eastern Africa (DSIK) in Rwanda, Rulindo District, and the concerned SACCOs.'
			]
		},
		{
			id: 4,
			image: UFP,
			name: 'Institute of Certified Public Accountants of Rwanda',
			project: ['External audit services'],
			description: [
				'Since 2022, DNR has served as the external auditor for the Institute of Certified Public Accountants of Rwanda (ICPAR), the sole professional body regulating accountancy practice in Rwanda.'
			]
		},
		{
			id: 7,
			image: UFP,
			name: 'Association of Chartered Certified Accountants',
			project: ['ACCA-Approved employer'],
			description: [
				'Following a thorough review of our application and  internal policies aimed at enhancing employee competence and career growth, DNR PARTNERS has been accredited as an ACCA-Approved Employer.'
			]
		},
		{
			id: 11,
			image: UFP,
			name: 'World bank financed projects',
			project: ['External audit'],
			description: [
				'We appreciate the collaboration of the World Bank project management in Burundi for their timely responsiveness during the audit of the financial statements for the PRODECI TURIKUMWE Project for the year ended June 30, 2023'
			]
		},
		{
			id: 12,
			image: UFP,
			name: 'AfDB financed projects',
			project: ['External audit'],
			description: [
				'We appreciate the collaboration of the World Bank project management in Burundi for their timely responsiveness during the audit of the financial statements for the PARC-OBR and PARMOCAF Projects for the years 2022 and 2023'
			]
		},
		{
			id: 2,
			image: UFP,
			name: 'USAID financed projects',
			project: ['External audit'],
			description: [
				'We are proud to have executed the audit of USAID funds for projects financed by USAID in Burundi, including Urisanze, GBV, RAFG, and RISE, under SWAA Burundi for two years 2022 and 2023.'
			]
		},
		{
			id: 3,
			image: UFP,
			name: 'Swiss cooperation financed projects',
			project: ['External audit'],
			description: [
				'DNR has been serving as the external auditor for Swiss Cooperation in Burundi since 2023. The audit was conducted in accordance with international standards on auditing and in compliance with PwC instructions.'
			]
		}
	];
	function handleOnClick(id: number) {
		whichOneIsActive = id;
	}
</script>

<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-start">
	<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#083867]">Our Clientele</h2>
	<p class="text-[#797C7F] font-light mt-2">
		Our company, Your Gateway to Global Business Success, provides unparalleled expertise and
		innovative solutions tailored to your needs. We empower your vision and drive global success,
		helping you navigate international markets with confidence. With our support, you can unlock new
		opportunities and expand your reach.
	</p>

	<div
		class="grid sm:grid-cols-2 gap-x-6 mt-4 w-full cursor-pointer {functionOpen
			? 'h-auto'
			: 'h-[280px]'} overflow-hidden"
	>
		{#each Partnes as item}
			<button
				class="flex flex-col transition-all duration-300 w-full"
				on:click={() => {
					if (whichOneIsActive === item.id) {
						return handleOnClick(null);
					}
					handleOnClick(item.id);
				}}
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
				<div
					class="px-8 my-2 items-start text-start overflow-hidden {whichOneIsActive !== item.id
						? 'h-0'
						: 'h-full'}"
				>
					{#each item.project as project, index}
						<span class="text-[#083867] font-bold">{project}</span>
						{#each item.description as itemone}
							<p
								class="text-[#5E5D5D] items-start text-start text-[16px] pb-4 font-light overflow-hidden transition-all duration-300"
							>
								{itemone}
							</p>
						{/each}
					{/each}
				</div>
			</button>
		{/each}
	</div>
	<button
		type="button"
		on:click={() => (functionOpen = !functionOpen)}
		class="flex -mt-4 mx-auto bg-white items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="mr-1 h-4 w-4 {functionOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-300"
		>
			<path
				fill-rule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
		View {functionOpen ? 'Less' : 'More'}
	</button>
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
