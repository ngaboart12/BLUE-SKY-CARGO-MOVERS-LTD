<!-- <script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import DATA from '../../../data/sevrives.json';

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

<div class="min-h-[70vh] flex relative justify-center items-center">
	 <img
		src={DATA[0].images[0]}
		alt="logo"
		class="absolute top-0 w-full h-full z-10 object-cover"
	/>
	
	<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
	
	<div class="flex flex-col gap-4 items-center z-40">
		<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
			<p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">Insights</p>
			<p class="text-[24px] sm:text-[24px] font-medium mt-2">
				We provide the latest news and events to keep you informed about the latest trends in the industry.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col gap-6 sm:gap-10 mt-5">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
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
</div> -->

<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	
	// Static data for the blog posts
	export const blogs = [
		{
			_id: '1',
			title: 'How Smart Cleaning Enhances Workplace Productivity',
			description: 'Explore the benefits of smart cleaning systems in boosting workplace efficiency and employee satisfaction.',
			mainImage:  ["/images/009.jpeg"],
			publishedAt: new Date().toISOString()
		},
		{
			_id: '2',
			title: 'Eco-Friendly Cleaning Solutions for Modern Businesses',
			description: 'Discover how our eco-friendly cleaning solutions contribute to a healthier environment and sustainable practices.',
			mainImage: ["/images/0001.jpg"],
			publishedAt: new Date().toISOString()
		},
		{
			_id: '3',
			title: 'The Future of Automated Cleaning Technology',
			description: 'A deep dive into the latest advancements in automated cleaning technology and their impact on the industry.',
			mainImage: ["/images/006.jpeg"],
			publishedAt: new Date().toISOString()
		},
		{
			_id: '4',
			title: 'Maintaining Hygiene Standards with Smart Solutions',
			description: 'Learn how smart cleaning solutions help maintain high hygiene standards in various facilities.',
			mainImage: ["/images/service3.jpeg"],
			publishedAt: new Date().toISOString()
		}
	].slice(0, 4);
</script>

<div class="min-h-[70vh] flex relative justify-center items-center">
	<img
		src="https://d9hhrg4mnvzow.cloudfront.net/home.propertypreswizard.com/paint.original.jpg"  
		alt="Smart Cleans Solutions"
		class="absolute top-0 w-full h-full z-10 object-cover"
	/>
	
	<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>
	
	<div class="flex flex-col gap-4 items-center z-40">
		<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
			<p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">Smart Cleans Insights</p>
			<p class="text-[24px] sm:text-[24px] font-medium mt-2">
				Discover the latest updates and advancements in smart cleaning technologies and solutions.
			</p>
		</div>
	</div>
</div>

<div class="flex flex-col gap-6 sm:gap-10 mt-5">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div class="w-full">
			<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10 mt-12">
				{#each blogs as item}
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

