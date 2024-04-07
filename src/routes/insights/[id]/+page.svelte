<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import dayjs from 'dayjs';
	export let data;
	import { LinkedIn, Pinterest, Telegram, Facebook, X } from 'svelte-share-buttons-component';
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
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<div class="max-w-xl text-center">
			<Title name="Data-Driven Decisions: Leveraging Analytics in Consulting"></Title>
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
				</div>
			</div>

			<div class="!text-[#7F7F7F] mt-4">
				{@html markdownConverter.join('')}
			</div>
		</div>
	</div>
</div>
