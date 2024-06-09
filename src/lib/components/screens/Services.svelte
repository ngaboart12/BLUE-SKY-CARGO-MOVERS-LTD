<script lang="ts">
	import ServicesCard from '$lib/components/ServicesCard.svelte';
	import DATA from '../../../data/sevrives.json';
	const data = DATA[0];
</script>


<div class="min-h-[70vh] flex relative justify-center items-center bg-red-400">
	<img
		src={data.images[1]}
		alt="logo"
		class="absolute top-0 w-full h-full z-10 object-cover"
	/>
	<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
	<div class="flex flex-col gap-4 items-center z-40">
		<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
			<p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">All Services</p>
			<p class="text-[24px] sm:text-[24px] font-medium mt-2">
				All our services are tailored to meet the needs of our clients. We offer a wide range of services for you
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col gap-6 sm:gap-10 mt-10">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div class="grid grid-cols-4 mt-8 gap-4 items-center w-full flex-wrap justify-center">
			<ServicesCard />
		</div>
	</div>
</div>
