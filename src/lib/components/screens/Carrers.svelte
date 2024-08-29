<script>
	import { onMount } from 'svelte';
	import Modal from '../Modal.svelte';
	import CountryButtonSelect from '../CountryButtonSelect.svelte';
	import Dropzone from 'svelte-file-dropzone';
	
	let showModal = false;
	let isLoading = false;
	let nameValue, emailValue, phoneValue, addressValue, genderValue, educationValue, messageValue;
	let files = { accepted: [], rejected: [] };
	let error = [];
	
	const educationLevels = [
		'Preschool Education', 'Primary Education', 'Secondary Education',
		'Post-Secondary Education', 'Vocational Education', 'Higher Education',
		'Undergraduate Education', 'Graduate Education', "Master's Degree Programs",
		'Doctoral Programs (Ph.D.)', 'Professional Education', 'Continuing Education', 'None'
	];
	
	const ourRoles = [
		{
			_id: "1",
			name: "Freight Coordinator",
			experience: "1-5 years",
			type: "full-time",
			location: "Kigali",
			openings: 5
		},
		{
			_id: "2",
			name: "Logistics Manager",
			experience: "2-4 years",
			type: "full-time",
			location: "Kigali",
			openings: 4
		},
		{
			_id: "3",
			name: "Warehouse Operations Supervisor",
			experience: "3-7 years",
			type: "full-time",
			location: "Kigali",
			openings: 3
		},
		{
			_id: "4",
			name: "Truck Driver",
			experience: "1-3 years",
			type: "part-time",
			location: "Kigali",
			openings: 6
		},
		{
			_id: "5",
			name: "Cargo Handler",
			experience: "4-6 years",
			type: "full-time",
			location: "Kigali",
			openings: 2
		}
	];
	
	let modelData = ourRoles[0];
	let searchvalue = '';
	
	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
	
	function validateForm() {
		error = [];
		if (!nameValue) error.push({ message: 'Name is required', field: 'name' });
		if (!emailValue) error.push({ message: 'Email is required', field: 'email' });
		if (!phoneValue) error.push({ message: 'Phone number is required', field: 'phone' });
		if (!addressValue) error.push({ message: 'Address is required', field: 'address' });
		if (!genderValue) error.push({ message: 'Gender is required', field: 'gender' });
		if (!educationValue) error.push({ message: 'Education level is required', field: 'education' });
		if (files.accepted.length === 0) error.push({ message: 'Resume is required', field: 'resume' });
	
		if (error.length === 0) {
			submitForm();
		}
	}
	
	async function submitForm() {
		isLoading = true;
		// Simulating form submission
		await new Promise(resolve => setTimeout(resolve, 2000));
		isLoading = false;
		showModal = false;
		alert('Application submitted successfully!');
	}
	
	function searchRole(value) {
		if (value === '' || !value || value.trim() === '') {
			return ourRoles;
		}
		return ourRoles.filter(role => 
			role.name.toLowerCase().includes(value.toLowerCase()) ||
			role.location.toLowerCase().includes(value.toLowerCase()) ||
			role.type.toLowerCase().includes(value.toLowerCase())
		);
	}
	
	function handleFilterChange(value) {
		// Implement filter logic here
	}
	</script>
	
	<div class="min-h-[70vh] flex relative justify-center items-center">
		<!-- Background image and overlay -->
		<div class="absolute top-0 w-full bg-black/60 h-full z-20">
			<img
						src={"/new/10.webp"}
						alt={""}
						class="w-full object-cover h-full"
					/>
		
		</div>
	
		<div class="flex flex-col gap-4 items-center z-40">
			<div class="text-white text-center max-w-3xl sm:mt-0 mt-28">
				<p class="mb-10 capitalize text-xl sm:text-2xl md:text-5xl font-bold text-white md:leading-[48px]">
					careers
				</p>
				<h2 class="font-bold text-gray-800 capitalize text-lg sm:mt-5">
					Ready to advance your career with Smart Cleans Solutions?
				</h2>
				<p class="text-[24px] text-white/90 sm:text-[20px] font-medium mt-2">
					Join our team of experts and contribute to the success of our clients while advancing your
					professional journey
				</p>
			</div>
		</div>
	</div>
	
	<div class="bg-[#F0F8FF] py-10">
		<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full">
			<div class="flex items-start gap-10 md:flex-nowrap flex-wrap">
				<div class="w-[300px] flex flex-col gap-2.5">
					<div class="w-fit">
						<button class="rounded-lg font-light px-4 py-1.5 text-[#007BFF] bg-white capitalize">
							careers
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
							<!-- Search icon SVG -->
						</div>
						<div class="w-full flex items-center gap-2">
							<input
								type="text"
								bind:value={searchvalue}
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
						{#each searchRole(searchvalue) as item}
							<button
								on:click={() => {
									modelData = item;
									showModal = true;
								}}
								class="flex items-center justify-start text-start gap-4 md:flex-nowrap flex-wrap bg-white px-4 py-4 rounded-xl cursor-pointer"
							>
								<div class="md:flex-nowrap flex-wrap">
									<!-- Role icon SVG -->
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
	
	{#if showModal}
	<Modal bind:showModal>
		<div class="flex min-w-[400px] sm:h-auto h-[300px] flex-col items-start w-full justify-start gap-2 px-4 text-center py-2 pb-4">
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
				<!-- Form fields (name, email, phone, address, gender, education, resume upload) -->
				<!-- Use the same structure as in the original code -->
				<div class="col-span-2">
					<button
						disabled={isLoading}
						on:click={validateForm}
						class="py-3 px-6 sm:mb-0 mb-5 w-fit flex items-center gap-4 bg-[#1E40AF] rounded-xl text-white capitalize font-light col-span-2"
					>
						<span>Send Application</span>
						{#if isLoading}
							<!-- Loading spinner SVG -->
						{:else}
							<!-- Arrow SVG -->
						{/if}
					</button>
				</div>
			</div>
		</div>
	</Modal>
	{/if}