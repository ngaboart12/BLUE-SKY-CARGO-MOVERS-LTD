<script lang="ts">
        export let data;
    	const markdownConverter = data.body.map((item: any) => {
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
	});
</script>

<div class="flex items-start flex-col content-start justify-start">
    <div class="!text-[#7F7F7F]">
        {@html markdownConverter.join('')}
    </div>
</div>