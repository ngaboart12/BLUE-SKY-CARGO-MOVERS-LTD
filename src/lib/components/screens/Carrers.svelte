<script lang="ts">
	// @ts-nocheck

	import Conctact from '$lib/components/Conctact.svelte';
	import BG_IMAGE from '$lib/images/bg-2.jpeg';
	import empty from '$lib/images/empty.png';
	import CountryButtonSelect from '../CountryButtonSelect.svelte';
	import Modal from '../Modal.svelte';
	import Dropzone from 'svelte-file-dropzone';

	const Propositions = [
		{
			titel: 'consultancy',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 1
		},
		{
			titel: 'corporate training',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 2
		},
		{
			titel: 'finacial advisory',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 3
		},
		{
			titel: 'accounting software solution',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 4
		},
		{
			titel: 'finacial advisory',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 5
		},
		{
			titel: 'corporate social responsibilities',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 6
		},
		{
			titel: 'tax advisory',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 7
		},
		{
			titel: 'audit & assurance',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 8
		},
		{
			titel: 'accounting advisory',
			description:
				'Come and experience our consultancy services for your growth. Our experts design manuals that suit your company’s need and size; corporate strategy and human capital development so as to make your company sustainable. Some of the consultancy services we offer are below:',
			icon: 9
		}
	];

	const educationLevels = [
		'Preschool Education',
		'Primary Education',
		'Secondary Education',
		'Post-Secondary Education',
		'Vocational Education',
		'Higher Education',
		'Undergraduate Education',
		'Graduate Education',
		"Master's Degree Programs",
		'Doctoral Programs (Ph.D.)',
		'Professional Education',
		'Continuing Education',
		'None'
	];

	export let data;
	let isLoading = false;

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function validateForm() {
		error = [];
		if (!nameValue || nameValue.trim() === '') {
			error.push({
				message: 'Name is required',
				field: 'name'
			});
		}
		if (!emailValue || emailValue.trim() === '') {
			error.push({
				message: 'Email is required',
				field: 'email'
			});
		}
		if (!phoneValue || phoneValue.trim() === '') {
			error.push({
				message: 'Phone number is required',
				field: 'phone'
			});
		}
		if (!addressValue || addressValue.trim() === '') {
			error.push({
				message: 'Address is required',
				field: 'address'
			});
		}
		if (!genderValue || genderValue.trim() === '') {
			error.push({
				message: 'Gender is required',
				field: 'gender'
			});
		}
		if (!educationValue || educationValue.trim() === '') {
			error.push({
				message: 'Education level is required',
				field: 'education'
			});
		}
		if (files.accepted.length === 0) {
			error.push({
				message: 'Resume is required',
				field: 'resume'
			});
		}

		if (error.length > 0) {
			return;
		}
		submitForm();
	}
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

			const uploadedFile = await client.assets.upload('file', files.accepted[0]);

			await client.create({
				_type: 'applications',
				name: nameValue,
				email: emailValue,
				phone: phoneValue,
				address: addressValue,
				message: messageValue,
				gender: genderValue,
				openRole: { _type: 'reference', _ref: modelData._id },
				resume: { _type: 'file', asset: { _type: 'reference', _ref: uploadedFile._id } }
			});
			showModal = false;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	}
	let files = {
		accepted: [],
		rejected: []
	};
	let nameValue;
	let emailValue;
	let phoneValue;
	let addressValue;
	let genderValue;
	let educationValue;
	let messageValue;

	let error = [];
	let success = false;

	let show = false;

	const allOurRoles = data.openRoles.map((item: any) => {
		return {
			_id: item._id,
			name: item.name,
			experience: item.experience,
			type: item.type,
			location: item.location,
			openings: item.openings
		};
	});
	let ourRoles = allOurRoles.slice(0, 4);
	let modelData = ourRoles[0];
	let modelDataone: any;
	let showModal = false;

	let whichOneIsActive = Propositions[0].icon;

	function handleOnClick(icon: number) {
		whichOneIsActive = icon;
	}

	let searchvalue = '';

	function searchRole(value) {
		if (value === '' || !value || value.trim() === '') {
			ourRoles = allOurRoles.slice(0, 4);
			return;
		}
		searchvalue = value;
		ourRoles = allOurRoles.filter((item) =>
			item.name.toLowerCase().includes(searchvalue.toLowerCase())
		);
	}

	let isLoadingRole = false;

	function handleFilterChange(value) {
		isLoadingRole = true;
		setTimeout(() => {
			if (value === 'all') {
				isLoadingRole = false;
			}
			isLoadingRole = false;
		}, 1000);
	}
</script>

<div class="min-h-[70vh] flex relative justify-center items-center">
	<img src={BG_IMAGE} alt="logo" class="absolute top-0 w-full h-full z-10 object-cover" />

	<div class="absolute top-0 w-full bg-black/80 h-full z-20"></div>

	<div class="flex flex-col gap-4 items-center z-40">
		<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
			<p
				class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]"
			>
				Carrers
			</p>
			<h2 class=" font-semibold text-white/90 capitalize text-sm sm:mt-3">
				Would you like to build a rewarding career with DNR Partners International?
			</h2>
			<p class="text-[24px] text-white/90 sm:text-[20px] font-medium mt-2">
				Join our team of experts and contribute to the success of our clients while advancing your
				professional journey
			</p>
		</div>
	</div>
</div>
<div class="flex flex-col gap-6 sm:gap-4">
	<div class="grid grid-cols-2 gap-20 max-w-6xl my-10 mx-auto w-full">
		<form class="flex flex-col gap-2 w-full">
			<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867] capitalize">
				Become a DNR Representative
			</h2>
			<div class="flex flex-col sm:grid sm:grid-cols-2 gap-5 h-fit font-light mt-3">
				<div class="rounded-lg bg-[#F0F0F0] col-span-2 px-4 py-3 flex items-center justify-between w-full">
					<input
						type="text"
						required
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your name"
					/>
				</div>
				<div class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full">
					<select class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full">
						{#each ["Rwanda", "burundi", "England","zambia","South Africa","Kenya","Uganda"] as item}
							<option value={item}>{item}</option>
						{/each}
					</select>
				</div>
				<div
					class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
				>
					<input
						type="email"
						required
						bind:value={emailValue}
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your profession"
					/>
				</div>
				<div class="rounded-lg bg-[#F0F0F0] col-span-2 px-4 py-3 flex items-center justify-between w-full">
					<input
						type="text"
						required
						bind:value={phoneValue}
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="enter your Company"
					/>
				</div>
				<div
					class="rounded-lg col-span-2 bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-1y98z1w"
				>
					<input
					type="text"
					required
					class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
					placeholder="enter your website"
					/>
				</div>
				<div class="col-span-2">
					{#if files.accepted.length === 0}
					<Dropzone containerClasses="!bg-transparent !border-none" on:drop={handleFilesSelect}>
						<p>Drag or drop your CV file here</p>
					</Dropzone>
				{:else}
					<div class="py-8 w-full">
						<div class="flex items-center gap-1 w-fit mx-auto">
							<div>
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
									class="feather feather-file"
									><path
										d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
									/><polyline points="13 2 13 9 20 9" /></svg
								>
							</div>
							<p>{files.accepted[0].name}</p>
						</div>
					</div>
				{/if}
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
		<div class="w-full mt-10 h-[350px] overflow-hidden rounded-2xl">
			<img
				src={"/new/11.jpg"}
				alt={""}
				class="w-full object-cover h-full"
			/>
		</div>
	</div>
	<div class="bg-[#F0F8FF] py-10">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="flex items-start gap-10 md:flex-nowrap flex-wrap">
				<div class="w-[300px] flex flex-col gap-2.5">
					<div class="w-fit">
						<button class="rounded-lg font-light px-4 py-1.5 text-[#C43228] bg-white capitalize">
							carreer
						</button>
					</div>
					<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">Open Roles</h2>
					<p class="text-[#5D5D5D] font-light">
						Offering proactive services and delivering effective, reliable, dependable the highest
						level of accuracy and professionalism.
					</p>
				</div>
				<div class="flex flex-col gap-4 w-full">
					<div class="bg-white rounded-xl py-4 sm:w-[80%] px-6 flex items-center gap-2.5 w-full">
						<div>
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.80553 15.7959C12.9424 15.7959 16.296 12.4423 16.296 8.30541C16.296 4.16854 12.9424 0.814941 8.80553 0.814941C4.66866 0.814941 1.31506 4.16854 1.31506 8.30541C1.31506 12.4423 4.66866 15.7959 8.80553 15.7959Z"
									stroke="#A2A2A2"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M14.0153 13.9043L16.9519 16.8334"
									stroke="#A2A2A2"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<div class="w-full flex items-center gap-2">
							<input
								type="text"
								on:input={(event) => searchRole(event.target.value)}
								class="text-[#A2A2A2] placeholder:capitalize font-light w-full outline-none"
								placeholder="search openings"
							/>
							<div class="flex items-end justify-end gap-2">
								<CountryButtonSelect {handleFilterChange} />
							</div>
						</div>
					</div>
					<div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
						{#if isLoadingRole}
							<div class="flex items-center justify-center col-span-2 w-[80%] h-[250px]">
								<div class="animate-spin">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="black"
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
							</div>
						{:else}
							{#if ourRoles.length === 0}
								<div class="w-full flex flex-col items-center justify-center col-span-2 h-[250px]">
									<img src={empty} alt="drn rwanda" class="w-[80px] h-[80px] object-cover" />
									<p class="text-[#828282] font-light">No open roles found</p>
								</div>
							{/if}
							{#each ourRoles as item}
								<button
									on:click={() => {
										modelData = item;
										showModal = true;
									}}
									class="flex items-center justify-start text-start gap-4 md:flex-nowrap flex-wrap bg-white px-4 py-4 rounded-xl cursor-pointer"
								>
									<div class="md:flex-nowrap flex-wrap">
										<svg
											width="40"
											height="41"
											viewBox="0 0 40 41"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M20 35.5C28.2843 35.5 35 28.7843 35 20.5C35 12.2157 28.2843 5.5 20 5.5C11.7157 5.5 5 12.2157 5 20.5C5 28.7843 11.7157 35.5 20 35.5Z"
												fill="#2A4157"
												fill-opacity="0.14"
											/>
											<path
												d="M20 13.8333V27.1666"
												stroke="#222222"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
											<path
												d="M26.6667 20.5H13.3334"
												stroke="#222222"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
										</svg>
									</div>
									<div class="flex flex-col gap-2 md:flex-nowrap flex-wrap">
										<h2 class="text-[#083867] capitalize font-medium text-lg">{item.name}</h2>
										<div class="grid sm:grid-cols-2 gap-x-12">
											<div class="flex items-center gap-1">
												<span class="text-[#464646]">Exp:</span>
												<span class="text-[#7D7D7D] font-light">{item.experience}</span>
											</div>
											<div class="flex items-center gap-1">
												<span class="text-[#464646]">Type:</span>
												<span class="text-[#7D7D7D] font-light">{item.type}</span>
											</div>
											<div class="flex items-center gap-1">
												<span class="text-[#464646]">Location:</span>
												<span class="text-[#7D7D7D] font-light">{item.location}</span>
											</div>
											<div class="flex items-center gap-1">
												<span class="text-[#464646]">Openings:</span>
												<span class="text-[#7D7D7D] font-light">{item.openings}</span>
											</div>
										</div>
									</div>
								</button>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<Conctact />
</div>

{#if showModal}
	<Modal bind:showModal>
		<div
			class="flex min-w-[400px] sm:h-auto h-[300px] flex-col items-start w-full justify-start gap-2 px-4 text-center py-2 pb-4"
		>
			<h2 class="text-2xl font-semibold text-[#083867]">Apply now</h2>
			<div class="flex flex-col gap-1 text-start items-start">
				<p class="text-lg">for <u>{modelData.name}</u></p>
				<div class="grid sm:grid-cols-2 gap-x-12">
					<div class="flex items-center gap-1">
						<span class="text-[#464646]">Exp:</span>
						<span class="text-[#7D7D7D] font-light">{modelData.experience}</span>
					</div>
					<div class="flex items-center gap-1">
						<span class="text-[#464646]">Type:</span>
						<span class="text-[#7D7D7D] font-light">{modelData.type}</span>
					</div>
					<div class="flex items-center gap-1">
						<span class="text-[#464646]">Location:</span>
						<span class="text-[#7D7D7D] font-light">{modelData.location}</span>
					</div>
					<div class="flex items-center gap-1">
						<span class="text-[#464646]">Openings:</span>
						<span class="text-[#7D7D7D] font-light">{modelData.openings}</span>
					</div>
				</div>
			</div>
			<div class="flex flex-col sm:grid sm:grid-cols-2 gap-5 w-full h-fit font-light mt-3">
				<div
					class="rounded-lg bg-[#F0F0F0] col-span-2 px-4 py-3 flex items-center justify-between w-full"
				>
					<input
						type="text"
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="Your names"
						name="name"
						bind:value={nameValue}
					/>
					{#if error.find((item) => item.field === 'name')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div
					class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-13uk75n"
				>
					<input
						type="email"
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="your email"
						name="email"
						bind:value={emailValue}
					/>
					{#if error.find((item) => item.field === 'email')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full">
					<input
						type="tel"
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="your phone number"
						name="phone"
						bind:value={phoneValue}
					/>
					{#if error.find((item) => item.field === 'phone')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div
					class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-13uk75n"
				>
					<input
						type="text"
						class="bg-transparent outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="your address"
						name="address"
						bind:value={addressValue}
					/>
					{#if error.find((item) => item.field === 'address')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div class="rounded-lg bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full">
					<select
						class="w-full bg-transparent text-[#ADADAD] rounded-[12px] border border-none outline-none"
						name="gender"
						bind:value={genderValue}
					>
						<option value="" selected hidden disabled>Your Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					{#if error.find((item) => item.field === 'gender')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div
					class="rounded-lg bg-[#F0F0F0] col-span-2 px-4 py-3 flex items-center justify-between w-full"
				>
					<select
						class="w-full bg-transparent text-[#ADADAD] rounded-[12px] border border-none outline-none"
						name="education"
						bind:value={educationValue}
					>
						<option value="" selected hidden disabled>Education Level</option>
						{#each educationLevels as item}
							<option value={item}>{item}</option>
						{/each}
					</select>

					{#if error.find((item) => item.field === 'education')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>
				<div
					class="rounded-lg relative col-span-2 bg-[#F0F0F0] border-2 border-dashed px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-1y98z1w"
				>
					{#if error.find((item) => item.field === 'resume')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
					{#if files.accepted.length === 0}
						<Dropzone containerClasses="!bg-[red] border" on:drop={handleFilesSelect}>
							   <p>Drag or drop your CV file here</p>
						</Dropzone>
					{:else}
						<div class="py-8 w-full">
							<div class="flex items-center gap-1 w-fit mx-auto">
								<div>
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
										class="feather feather-file"
										><path
											d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
										/><polyline points="13 2 13 9 20 9" /></svg
									>
								</div>
								<p>{files.accepted[0].name}</p>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="rounded-lg col-span-2 bg-[#F0F0F0] px-4 py-3 flex items-center justify-between w-full"
					data-svelte-h="svelte-1y98z1w"
				>
					<textarea
						class="bg-transparent h-20 outline-none border-none text-[#5C5C5C] placeholder:text-[#ADADAD] placeholder:capitalize w-full"
						placeholder="write something about you"
						name="message"
						bind:value={messageValue}
					></textarea>

					{#if error.find((item) => item.field === 'message')}
						<div class="text-red-500 w-5 h-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-alert-circle"
								><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line
									x1="12"
									y1="16"
									x2="12.01"
									y2="16"
								/></svg
							>
						</div>
					{/if}
				</div>

				<div class="col-span-2">
					<!-- svelte-ignore missing-declaration -->
					<button
						disabled={isLoading}
						on:click={validateForm}
						class="{isLoading &&
							'bg-opacity-80'} py-3 px-6 sm:mb-0 mb-5 w-fit flex items-center gap-4 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2"
					>
						<span>Send Application</span>
						<!-- svelte-ignore missing-declaration -->
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
							<span>
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
							</span>
						{/if}
					</button>
				</div>
			</div>
		</div>
	</Modal>
{/if}
