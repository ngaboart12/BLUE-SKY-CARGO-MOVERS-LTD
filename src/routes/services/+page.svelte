<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
		<h1 class="text-xl sm:text-2xl md:text-5xl font-bold text-[#C43228] md:leading-[48px]">
			Services
		</h1>
		<h2 class=" font-semibold text-[#083867] capitalize text-sm sm:mt-3">latest news  and events</h2>
	
		<div class="flex mt-8 gap-4 items-center w-full flex-wrap justify-center">
			{#each [1, 2, 3, 5, 6,1, 2, 3,] as item}
				<div class="py-12 px-6 bg-white rounded-xl w-[390px]">
					<div class="flex items-center gap-4">
						<div>
							<svg
								width="48"
								height="49"
								viewBox="0 0 48 49"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M31.1395 17C31.0465 16.9845 30.938 16.9845 30.845 17C28.7054 16.9225 27 15.1705 27 13C27 10.7829 28.7829 9 31 9C33.2171 9 35 10.7984 35 13C34.9845 15.1705 33.2791 16.9225 31.1395 17Z"
									stroke="#083867"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M30.0418 27.8656C31.9493 28.2318 34.0517 27.8497 35.5276 26.7192C37.4908 25.2226 37.4908 22.7706 35.5276 21.2739C34.0378 20.1436 31.9075 19.7614 30 20.1435"
									stroke="#C43228"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11.8605 17C11.9535 16.9845 12.062 16.9845 12.155 17C14.2946 16.9225 16 15.1705 16 13C16 10.7829 14.2171 9 12 9C9.78295 9 8 10.7984 8 13C8.0155 15.1705 9.72093 16.9225 11.8605 17Z"
									stroke="#083867"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13.9523 27.8656C11.7723 28.2318 9.36947 27.8497 7.68274 26.7192C5.43909 25.2226 5.43909 22.7706 7.68274 21.2739C9.38538 20.1436 11.82 19.7614 14 20.1435"
									stroke="#C43228"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M22.1396 28C22.0465 27.9845 21.938 27.9845 21.845 28C19.7055 27.9225 18 26.1706 18 24C18 21.783 19.783 20 22 20C24.2171 20 26 21.7985 26 24C25.9845 26.1706 24.2791 27.938 22.1396 28Z"
									stroke="#083867"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M17.5992 33.2676C15.4669 34.7663 15.4669 37.2217 17.5992 38.7205C20.0189 40.4265 23.9811 40.4265 26.4008 38.7205C28.5331 37.2217 28.5331 34.7663 26.4008 33.2676C23.9962 31.5775 20.0189 31.5775 17.5992 33.2676Z"
									stroke="#C43228"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<div class="flex flex-col gap-2">
							<span class="capitalize text-[#083867] font-semibold">consultancy </span>
							<p class="line-clamp-2 text-[#595959] font-light">
								Come and experience our consultancy services for your growth. Our experts design
								manuals that suit your company’s need and size
							</p>
							<button class="flex items-center gap-2.5 text-[#C43228]">
								<span>Learn more</span>
								<span
									><svg
										width="17"
										height="15"
										viewBox="0 0 17 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.4"
											d="M16.25 7.72559L1.25 7.72559"
											stroke="#C43228"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M10.2002 1.70124L16.2502 7.72524L10.2002 13.7502"
											stroke="#C43228"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
