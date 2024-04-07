<script lang="ts">
	import imgeFive from '$lib/images/6.png';
	export let data;
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<h1 class="text-xl capitalize sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]">
			{data.service?.title}
		</h1>
		<h2 class=" font-semibold text-[#083867] text-sm sm:mt-3">
			Service DRN provides to the customers 
		</h2>
		<div class="w-full text-start mt-10 flex flex-col gap-8">
			<p class="text-[#595959] font-light">
				{data.service?.description}
			</p>
			{#each data.service?.paragraphs || [] as item }
				<p class="text-[#595959] font-light">
					{item}
				</p>
			{/each}
		</div>
	</div>
</div>
