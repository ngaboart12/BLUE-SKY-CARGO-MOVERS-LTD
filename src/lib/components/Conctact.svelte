<script lang="ts">
	// @ts-nocheck

	import { createClient } from '@sanity/client';
	import { page } from '$app/stores';
	import Button from './Button.svelte';
	let nameValue;
	let emailValue;
	let phoneValue;
	let messageValue;
	let isLoading = false;
	let success = false;
	const country = [
		{
			country: 'en',
			email: 'england@dnrpartners.com'
		},
		{
			country: 'rw',
			email: 'rwanda@dnrpartners.com'
		},
		{
			country: 'bi',
			email: 'burundi@dnrpartners.com'
		},
		{
			country: 'za',
			email: 'zambia@dnrpartners.com'
		},
		{
			country: 'ke',
			email: 'kenya@dnrpartners.com'
		},
		{
			country: 'sa',
			email: 'southafrica@dnrpartners.com'
		},
		{
			country: 'ug',
			email: 'uganda@dnrpartners.com'
		}
	];

	async function submitForm() {
		const client = createClient({
			projectId: 'f3af10kw',
			dataset: 'dnr-data-set',
			apiVersion: '2024-03-31',
			useCdn: true,
			token:
				'skclefAj5z0Kt0AmGmYC0h3p0UOgxEU1bVxRVpeWghg4TmZTcyAius9SwDJMSuhHlcKIN4h5BD8cu93qLgPG7et4JyXOjTa7UnsnKu6FNuqNZCJYKtZnURQwaWBdVNGi8AcURrpd3Kb0kL9MoWSMwgxCVzIEJZsQZy4PHuo31VEQ4yKq54PN'
		});

		try {
			isLoading = true;
			await client.create({
				_type: 'feedbacks',
				name: nameValue,
				email: emailValue,
				phone: phoneValue,
				message: messageValue
			});
			success = true;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	}

	$: email = country.find((item) => item.country === $page.url.pathname.split('/')[1])?.email || "rwanda@dnrpartners.com";
</script>

<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
	<div class="grid sm:grid-cols-2 gap-10 items-center">
		<div class="flex flex-col gap-4">
			<div class="w-fit">
				<Button>Contact Us</Button>
			</div>
			<h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#083867]">
				Contact Us <br /> for Expert Legal Guidance
			</h2>
			<p class="text-[#797C7F] font-light">
				Provide professional advice and guidance on legal matters, helping clients understand their
				rights, obligations, and potential courses.
			</p>

			<div class="grid sm:grid-cols-2 gap-4">
				<a href="tel:+250788386134" class="flex items-center gap-2">
					<div>
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="28" cy="28" r="28" fill="#C43228" />
							<path
								d="M37.97 34.83C37.97 35.19 37.89 35.56 37.72 35.92C37.55 36.28 37.33 36.62 37.04 36.94C36.55 37.48 36.01 37.87 35.4 38.12C34.8 38.37 34.15 38.5 33.45 38.5C32.43 38.5 31.34 38.26 30.19 37.77C29.04 37.28 27.89 36.62 26.75 35.79C25.6 34.95 24.51 34.02 23.47 32.99C22.44 31.95 21.51 30.86 20.68 29.72C19.86 28.58 19.2 27.44 18.72 26.31C18.24 25.17 18 24.08 18 23.04C18 22.36 18.12 21.71 18.36 21.11C18.6 20.5 18.98 19.94 19.51 19.44C20.15 18.81 20.85 18.5 21.59 18.5C21.87 18.5 22.15 18.56 22.4 18.68C22.66 18.8 22.89 18.98 23.07 19.24L25.39 22.51C25.57 22.76 25.7 22.99 25.79 23.21C25.88 23.42 25.93 23.63 25.93 23.82C25.93 24.06 25.86 24.3 25.72 24.53C25.59 24.76 25.4 25 25.16 25.24L24.4 26.03C24.29 26.14 24.24 26.27 24.24 26.43C24.24 26.51 24.25 26.58 24.27 26.66C24.3 26.74 24.33 26.8 24.35 26.86C24.53 27.19 24.84 27.62 25.28 28.14C25.73 28.66 26.21 29.19 26.73 29.72C27.27 30.25 27.79 30.74 28.32 31.19C28.84 31.63 29.27 31.93 29.61 32.11C29.66 32.13 29.72 32.16 29.79 32.19C29.87 32.22 29.95 32.23 30.04 32.23C30.21 32.23 30.34 32.17 30.45 32.06L31.21 31.31C31.46 31.06 31.7 30.87 31.93 30.75C32.16 30.61 32.39 30.54 32.64 30.54C32.83 30.54 33.03 30.58 33.25 30.67C33.47 30.76 33.7 30.89 33.95 31.06L37.26 33.41C37.52 33.59 37.7 33.8 37.81 34.05C37.91 34.3 37.97 34.55 37.97 34.83Z"
								stroke="white"
								stroke-width="1.5"
								stroke-miterlimit="10"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-0.5">
						<span class="font-light text-sm text-[#606060]">Gives us a Call</span>
						<span class="font-m">+250 788 386 136 / +250 788 386 134</span>
					</div>
				</a>
				<a href="mailto:info@rw.dnrpartners.com" class="flex items-center gap-2 mt-4">
					<div>
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="28" cy="28" r="28" fill="#C43228" />
							<path
								d="M24.5 35.5H24C20 35.5 18 34.5 18 29.5V24.5C18 20.5 20 18.5 24 18.5H32C36 18.5 38 20.5 38 24.5V29.5C38 33.5 36 35.5 32 35.5H31.5C31.19 35.5 30.89 35.65 30.7 35.9L29.2 37.9C28.54 38.78 27.46 38.78 26.8 37.9L25.3 35.9C25.14 35.68 24.77 35.5 24.5 35.5Z"
								stroke="white"
								stroke-width="1.5"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								opacity="0.4"
								d="M31.9965 27.5H32.0055"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								opacity="0.4"
								d="M27.9945 27.5H28.0036"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								opacity="0.4"
								d="M23.9945 27.5H24.0035"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-0.5">
						<span class="font-light text-sm text-[#606060]">Email Us</span>
						<span class="font-m">
							{email}
						</span>
					</div>
				</a>
			</div>
		</div>
		<form class="flex flex-col gap-2">
			<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867] capitalize">
				send us message
			</h2>
			<div class="flex flex-col sm:grid sm:grid-cols-2 gap-5 h-fit font-light mt-3">
				<div
					class="rounded-lg bg-[#F0F0F0] col-span-2 px-4 py-3 flex items-center justify-between w-full"
				>
					<input
						type="text"
						bind:value={nameValue}
						required
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your names"
					/>
				</div>
				<div
					class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-13uk75n"
				>
					<input
						type="email"
						required
						bind:value={emailValue}
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your email"
					/>
				</div>
				<div class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full">
					<input
						type="tel"
						required
						bind:value={phoneValue}
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your phone number"
					/>
				</div>
				<div
					class="rounded-lg col-span-2 bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-1y98z1w"
				>
					<textarea
						bind:value={messageValue}
						required
						class="bg-transparent h-40 outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="write your  message"
					></textarea>
				</div>
				<div class="col-span-2">
					<div class="flex flex-col gap-2">
						<button
							disabled={isLoading}
							on:click={(event) => {
								event.preventDefault();
								submitForm();
							}}
							class="py-3 px-6 w-fit flex items-center gap-4 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2"
						>
							<span>Send Message</span>
							<span>
								{#if isLoading}
									<div class="animate-spin">
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
											><line x1="12" y1="2" x2="12" y2="6" /><line
												x1="12"
												y1="18"
												x2="12"
												y2="22"
											/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line
												x1="16.24"
												y1="16.24"
												x2="19.07"
												y2="19.07"
											/><line x1="2" y1="12" x2="6" y2="12" /><line
												x1="18"
												y1="12"
												x2="22"
												y2="12"
											/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line
												x1="16.24"
												y1="7.76"
												x2="19.07"
												y2="4.93"
											/></svg
										>
									</div>
								{:else}
									<svg
										width="10"
										height="16"
										viewBox="0 0 10 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.5 1L8.5 8L1.5 15"
											stroke="white"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								{/if}
							</span>
						</button>
						{#if success}
							<p class="text-green-600">Message sent successfully</p>
						{/if}
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
