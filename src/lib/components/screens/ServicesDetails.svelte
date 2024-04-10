<script lang="ts">
	import Conctact from './../../../lib/components/Conctact.svelte';
	import Button from './../../../lib/components/Button.svelte';
	import Title from './../../../lib/components/Title.svelte';
	import ImageTwo from '$lib/images/2.png';
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import imgeFive from '$lib/images/6.png';
	export let data;

	const paragraphsPartOne = data.service?.paragraphs.slice(0, 2) || [];
	const paragraphsPartTwo = data.service?.paragraphs.slice(2, 4) || [];
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
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
		<div class="w-full mt-10 h-[400px] overflow-hidden rounded-2xl">
			<img
				src={data.service.images[0]}
				alt={data.service?.title}
				class="w-full object-cover h-full"
			/>
		</div>
		<div class="w-full text-start mt-10 flex flex-col gap-8">
			{#each paragraphsPartOne || [] as item}
				<p class="text-[#595959] font-light">
					{item}
				</p>
			{/each}

			<div class="sm:grid-cols-2 grid items-center gap-10">
				<div class="flex flex-col gap-2,5">
					<h2 class="text-[#083867] font-semibold text-2xl mb-3">How we can help</h2>
					<div class="flex flex-col gap-2">
						{#each paragraphsPartTwo || [] as item}
							<p class="text-[#595959] font-light">
								{item}
							</p>
						{/each}
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
			<div class="flex mt-8 gap-4 items-center w-full flex-wrap justify-center">
				<ServicesCard isHome expctedId={data.service.icon} />
			</div>
		</div>
	</div>
	<Conctact />
</div>
