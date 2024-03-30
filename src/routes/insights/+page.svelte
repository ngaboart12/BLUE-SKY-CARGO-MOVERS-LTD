<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Title from '$lib/components/Title.svelte';
	import imgeFive from '$lib/images/6.png';
	import imgeSix from '$lib/images/7.png';
	import ImageOne from '$lib/images/1.png';
	import ImageThree from '$lib/images/8.png';
	import ImageFour from '$lib/images/9.png';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<h1 class="text-xl sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]">
			Insights
		</h1>
		<h2 class=" font-semibold text-[#083867] capitalize text-sm sm:mt-3">latest news  and events</h2>
		<div class="w-full">
			<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10 mt-12">
				{#each [1, 2, 4, 5,1, 2, 4, 5,1, 2, 4, 5,1, 2, 4, 5,1, 2, 4, 5] as item}
					<Card />	
				{/each}
			</div>
		</div>
	</div>
</div>
