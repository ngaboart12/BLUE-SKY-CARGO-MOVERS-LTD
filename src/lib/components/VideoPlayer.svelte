<script lang="ts">
	export let url: any;

	let isLoading = true;

	function getId(urlLink: any) {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = urlLink.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	}
	const videoId = getId(url);

	setTimeout(() => {
		isLoading = false;
	}, 1000);
</script>

<div>
	<h2 class="text-2xl font-semibold text-[#083867] ml-4">Watch Video</h2>
	<div
		class="flex w-[1000px] h-[500px] flex-col items-start justify-start gap-2 px-4 text-center py-2 pb-4"
	>
		{#if isLoading}
			<div class="h-full w-full flex items-center justify-center">
				<div class="animate-spin w-[30px] h-[30px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-loader"
						><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line
							x1="4.93"
							y1="4.93"
							x2="7.76"
							y2="7.76"
						/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line
							x1="2"
							y1="12"
							x2="6"
							y2="12"
						/><line x1="18" y1="12" x2="22" y2="12" /><line
							x1="4.93"
							y1="19.07"
							x2="7.76"
							y2="16.24"
						/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg
					>
				</div>
			</div>
		{:else}
			<iframe
				width="1145"
				height="644"
				class="w-full h-full"
				src="https://www.youtube.com/embed/{videoId}"
				title="Dnr YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		{/if}
	</div>
</div>
