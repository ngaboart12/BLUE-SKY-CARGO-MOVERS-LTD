<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import dayjs from 'dayjs';
	export let data;
	import { LinkedIn, Pinterest, Telegram, Facebook, X } from 'svelte-share-buttons-component';
	import Button from '../Button.svelte';
	import Card from '../Card.svelte';
	import { copyText } from 'svelte-copy';
	let isLoadingCopy = false;


	const url = 'https://dnr-gamma.vercel.app/insights/f7dda0fe-9710-4f0d-90f3-a858ae1af190';
	const title = data.blog.title;

	const typePrefix = data.blog.mainImage._type ? `${data.blog.mainImage._type}-` : 'image-';
	const removeTypePrefix = data.blog.mainImage.asset._ref.split(typePrefix)[1];
	const lastIndex = removeTypePrefix.lastIndexOf('-');
	const modifiedFilename =
		removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
	const blog = {
		...data.blog,
		mainImage: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`
	};

	const markdownConverter = blog.body.map((item: any) => {
		if (item._type === 'image') {
			const typePrefix = 'image-';
			const removeTypePrefix = item.asset._ref.split(typePrefix)[1];
			const lastIndex = removeTypePrefix.lastIndexOf('-');
			const modifiedFilename =
				removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
			return `<img src="${`https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`}" alt="${item.alt}" class="w-full h-full object-cover my-4" />`;
		} else {
			const style = item.style || 'normal';
			if (/^h\d/.test(style)) {
				const level = style.replace(/[^\d]/g, '');
				return `<h2 class="my-heading level-${level} text-xl font-bold text-[#083867] md:leading-[48px]">${item.children[0].text}</h2>`;
			}
			return item.children
				.map((child: any) => {
					if (child.text === '' || child.text === ' ') {
						return `<br/>`;
					}
					return `<p class="text-[#797C7F] font-light">${child.text}</p>`;
				})
				.join('');
		}
	});

	const blogs = data.blogs.map((value: any) => {
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
	}).slice(0, 4);
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div class="w-full flex gap-10 flex-col sm:flex-row">
			<div class="flex flex-col flex-1 sm:w-full">
				<div class="max-w-xl text-start">
					<Title isSmall name="Data-Driven Decisions: Leveraging Analytics in Consulting"></Title>
				</div>
				<div class="w-full flex flex-col">
					<div class="h-[400px] w-full rounded-xl overflow-hidden mt-8">
						<img src={blog.mainImage} alt={blog.title} class="w-full h-full object-cover" />
					</div>
					<div class="flex items-center justify-between mt-2">
						<p class="uppercase text-[#7F7F7F] font-light">
							{dayjs(blog.publishedAt).format('MMMM D, YYYY')}
						</p>
						<div class="flex gap-2">
							<div class="w-10 h-10 rounded-full overflow-hidden">
								<div class="relative bottom-0.5">
									<LinkedIn text={title} {url} />
								</div>
							</div>
							<div class="w-10 h-10 rounded-full overflow-hidden">
								<div class="relative bottom-0.5">
									<Pinterest {url} description={title} />
								</div>
							</div>
							<div class="w-10 h-10 rounded-full overflow-hidden">
								<div class="relative bottom-0.5">
									<Telegram text={title} {url} />
								</div>
							</div>
							<div class="w-10 h-10 rounded-full overflow-hidden">
								<div class="relative bottom-0.5">
									<Facebook quote={title} {url} />
								</div>
							</div>
							<div class="w-10 h-10 rounded-full overflow-hidden">
								<div class="relative bottom-0.5">
									<X text={title} {url} />
								</div>
							</div>
							<button on:click={() => {
								copyText(url);
								isLoadingCopy = true;
								setTimeout(() => {
									isLoadingCopy = false;
								}, 2000);
							}} class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white shadow border text-black">
								{#if isLoadingCopy}
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader animate-spin"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
								{:else}
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
								{/if}
							</button>
						</div>
					</div>
		
					<div class="!text-[#7F7F7F] mt-4">
						{@html markdownConverter.join('')}
					</div>
				</div>
			</div>
			<div  class="md:w-[380px] w-full bg-white rounded-md md:shadow-xl md:border p-8">
				<div class="flex flex-col">
					<div class="w-fit">
						<Button>
							Related Insights
						</Button>
					</div>
					<div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-3 gap-y-10 mt-4">
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
	</div>
</div>
