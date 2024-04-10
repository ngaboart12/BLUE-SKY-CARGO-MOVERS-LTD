<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	export let data;
	const blog = data.blogs.map((value: any) => {
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
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<h1 class="text-xl sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]">
			Insights
		</h1>
		<h2 class=" font-semibold text-[#083867] capitalize text-sm sm:mt-3">latest news and events</h2>
		<div class="w-full">
			<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10 mt-12">
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
		</div>
	</div>
</div>
