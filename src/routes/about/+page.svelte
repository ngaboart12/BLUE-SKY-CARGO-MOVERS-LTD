<script lang="ts">
	// @ts-nocheck
	import Button from '$lib/components/Button.svelte';
	import Title from '$lib/components/Title.svelte';
	import imgeFive from '$lib/images/two--2.jpg';
	import imgeSix from '$lib/images/three-99.jpg';
	import ImageOne from '$lib/images/onnw.png';
	import ImageFour from '$lib/images/9.png';
	import empty from '$lib/images/empty.png';
	import Modal from '$lib/components/Modal.svelte';
	import { createClient } from '@sanity/client';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import Dropzone from 'svelte-file-dropzone';

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	export let data;

	const typeJob = data.organizationTypes;
	let whichIsActive = typeJob[0]._id;

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

	const youtubeUpdates = data.youtubeUpdates.map((item: any) => {
		const typePrefix = item.mainImage._type ? `${item.mainImage._type}-` : 'image-';
		const removeTypePrefix = item.mainImage.asset._ref.split(typePrefix)[1];
		const lastIndex = removeTypePrefix.lastIndexOf('-');
		const modifiedFilename =
			removeTypePrefix.substring(0, lastIndex) + '.' + removeTypePrefix.substring(lastIndex + 1);
		return {
			_id: item._id,
			title: item.title,
			image: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`,
			url: item.link
		};
	});

	let ourRoles = allOurRoles.slice(0, 4);
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

	let showModal = false;
	let modelData = ourRoles[0];

	let showModalone = false;
	let modelDataone: any;
	let isLoading = false;
	let vidioLink = '';

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

	let nameValue;
	let emailValue;
	let phoneValue;
	let addressValue;
	let genderValue;
	let educationValue;
	let messageValue;

	let error = [];

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
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="w-full flex flex-col gap-4">
			<h2 class="text-[28px] font-medium capitalize">about us</h2>
		</div>
		<div class="w-full flex h-[400px] flex-wrap md:flex-nowrap gap-10 mt-10">
			<div class="rounded-2xl overflow-hidden sm:w-[700px]">
				<img src={imgeFive} alt="" class="w-full h-full object-cover" />
			</div>

			<div class="w-full relative">
				<div
					class=" sm:flex hidden absolute -top-[60px] right-0 px-6 py-6 h-fit bg-[#083867] text-white rounded-xl gap-4 w-[480px] items-center z-10"
				>
					<span>
						<svg
							width="14"
							height="12"
							viewBox="0 0 14 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 11.4V7.85001C0 6.48334 0.216667 5.21667 0.65 4.05001C1.11667 2.88334 1.9 1.73334 3 0.600006L4.95 2.05001C4.21667 2.85 3.68333 3.6 3.35 4.30001C3.01667 4.96667 2.81667 5.63334 2.75 6.30001H5.1V11.4H0ZM8.3 11.4V7.85001C8.3 6.48334 8.51667 5.21667 8.95 4.05001C9.41667 2.88334 10.2 1.73334 11.3 0.600006L13.25 2.05001C12.5167 2.85 11.9833 3.6 11.65 4.30001C11.3167 4.96667 11.1167 5.63334 11.05 6.30001H13.4V11.4H8.3Z"
								fill="white"
							/>
						</svg>
					</span>
					<p class="font-extralight text-xl">
						We believe in investing time to develop true long term partnerships and trusted
						relationships with our clients
					</p>
				</div>
				<img src={imgeSix} alt="" class="w-full rounded-2xl h-full object-cover" />
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4">
		<div class="grid justify-items-center md:grid-cols-2 gap-4 md:gap-10 items-center">
			<div class="">
				<img
					src={ImageOne}
					width={325.69}
					height={328.41}
					alt=""
					class="w-[460px] h-full object-cover"
				/>
			</div>
			<div class="flex flex-col gap-3">
				<div class="w-fit">
					<Button>about us</Button>
				</div>
				<Title
					name="We are a global chartered professional accountants and business advisors headquartered in England"
				/>
				<p class="text-[#4C4A4A] font-light">
					It has a sharp expertise from long term experiences in various business industries. The
					firm is in charge of coordinating the international activities of the DNR PARTNERS network
					Firms but does not provide, supervise or manage professional services to clients. which is
					a world-wide network of independent professional accounting firms and business advisers,
					each of which is a separate and independent legal entity. DNR PARTNERS has offices in
					England, Rwanda, Burundi, Kenya, Zambia and South Africa.
				</p>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="w-full flex flex-col gap-4">
			<div class="w-fit">
				<Button>services</Button>
			</div>
			<Title name="Meet The Team" />
		</div>
		<div class="flex items-center flex-wrap sm:w-auto w-full mt-4">
			{#each typeJob as item}
				<button
					on:click={() => {
						whichIsActive = item._id;
					}}
					class="flex flex-col transition-all duration-300 {item._id === whichIsActive
						? 'bg-[#C43228]/10'
						: 'bg-transparent'} sm:w-auto w-full"
				>
					<span
						class="px-8 font-light py-3.5 transition-all duration-300 {item._id === whichIsActive
							? 'text-[#C43228]'
							: 'text-[#828282]'} capitalize">{item.title}</span
					>
					<span
						class="w-full h-1 transition-all duration-300 {item._id === whichIsActive
							? 'bg-[#C43228]'
							: 'bg-[#E4E4E4]'}"
					/>
				</button>
			{/each}
		</div>
		<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
			{#if typeJob.find((item) => item._id === whichIsActive).membersTeams.length === 0}
				<div class="w-full flex items-center justify-center col-span-4 h-[250px]">
					<p class="text-[#828282] font-light">No team members found</p>
				</div>
			{/if}

			{#each typeJob.find((item) => item._id === whichIsActive).membersTeams as item}
				<div class="flex flex-col">
					<img src={item.mainImage} alt="" class="w-full h-[300px] object-cover rounded-2xl" />
					<span class="font-light mt-2 capitalize">{item.name}</span>
					<span class="font-light text-[#6C6C6C] capitalize">{item.subtitle}</span>
				</div>
			{/each}
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
						<div class="w-full">
							<input
								type="text"
								on:input={(event) => searchRole(event.target.value)}
								class="text-[#A2A2A2] placeholder:capitalize font-light w-full outline-none"
								placeholder="search openings"
							/>
						</div>
					</div>
					<div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
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
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
		<div class="flex items-center justify-between">
			<Button>updates</Button>
			<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
				Explore Our Company's World on YouTube!"
			</h2>
		</div>
		<div class="flex flex-col gap-4">
			<h3 class="text-[28px] font-medium capitalize mt-4">youtube updates</h3>
		</div>
		<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
			{#each youtubeUpdates as item}
				<div
					class="overflow-hidden rounded-2xl relative h-[300px] gap-4 flex items-center justify-center"
				>
					<img
						src={item.image}
						alt=""
						class="absolute left-0 top-0 w-full h-full z-10 object-cover"
					/>
					<button
						on:click={() => {
							vidioLink = item.url;
							modelDataone = item;
							showModalone = true;
						}}
						class="z-50 cursor-pointer"
					>
						<svg
							width="72"
							height="72"
							viewBox="0 0 72 72"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								opacity="0.4"
								d="M36.2407 65.1199C52.5325 65.1199 65.7393 51.9128 65.7393 35.6214C65.7393 19.3297 52.5325 6.1228 36.2407 6.1228C19.9492 6.1228 6.74219 19.3297 6.74219 35.6214C6.74219 51.9128 19.9492 65.1199 36.2407 65.1199Z"
								fill="#C43228"
							/>
							<path
								d="M45.0866 30.4006L36.532 25.4744C34.4081 24.2354 31.8417 24.2354 29.7178 25.4744C27.5939 26.7133 26.3254 28.8962 26.3254 31.374V41.256C26.3254 43.7044 27.5939 45.9168 29.7178 47.1558C30.7798 47.7752 31.9597 48.0702 33.1102 48.0702C34.2901 48.0702 35.4406 47.7752 36.5025 47.1558L45.0571 42.2295C47.181 40.9906 48.4494 38.8077 48.4494 36.3298C48.5084 33.8519 47.24 31.6395 45.0866 30.4006Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			{/each}
		</div>
	</div>
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
					<button
						disabled={isLoading}
						on:click={validateForm}
						class="{isLoading &&
							'bg-opacity-80'} py-3 px-6 sm:mb-0 mb-5 w-fit flex items-center gap-4 bg-[#D71A30] rounded-xl text-white capitalize font-light col-span-2"
					>
						<span>Send Application</span>
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

{#if showModalone}
	<Modal bind:showModal={showModalone}>
		<VideoPlayer url={vidioLink} />
	</Modal>
{/if}
