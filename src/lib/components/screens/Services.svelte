<script lang="ts">
	import ServicesCard from '$lib/components/ServicesCard.svelte';
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<h1 class="text-xl sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]">
			Services
		</h1>
		<h2 class=" font-semibold text-[#083867] capitalize text-sm sm:mt-3">latest news and events</h2>

		<div class="flex mt-8 gap-4 items-center w-full flex-wrap justify-center">
			<ServicesCard />
		</div>
	</div>
</div>
