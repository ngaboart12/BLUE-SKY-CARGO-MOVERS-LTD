<script>
	import logo from '$lib/images/5.png';
	import { page } from '$app/stores';
	const menu = [
		{
			name: 'Home',
			href: `${$page.url.pathname.split('/')[1]}/`
		},
		{
			name: 'about us',
			href: `${$page.url.pathname.split('/')[1]}/about`
		},
		{
			name: 'Services',
			href: `${$page.url.pathname.split('/')[1]}/services`
		},
		{
			name: 'insights',
			href: `${$page.url.pathname.split('/')[1]}/insights`
		},
		{
			name: 'carrers',
			href: `${$page.url.pathname.split('/')[1]}/carrers`
		}
		// {
		//     name:"global network",
		//     href:"/global"
		// }
	];
</script>

<footer class="mt-24 bg-[#083867] text-white">
	<div
		class="sm:mx-10 lg:max-w-6xl relative xl:max-w-7xl z-40 md:px-[20px] px-[40px] sm:rounded-xl lg:mx-auto sm:mt-6 w-full"
	>
		<div
			class="flex items-start justify-between mt-10 gap-10 md:gap-20 py-12 md:flex-nowrap flex-wrap"
		>
			<div class="flex flex-col gap-6 md:w-[60%]">
				<div>
					<img src={logo} width={133} height={62} alt="logo" />
				</div>
				<p class="text-white font-light">
					DNR Partners International is a global network of chartered professional accountants and business advisors headquartered in England. We operate in Rwanda, Burundi, Kenya, England, Zambia, Zimbabwe, and South Africa. Our firm provides services in audit and assurance, outsourced accounting, tax and business advisory, corporate training, risk, and legal compliance.
				</p>
				<div class="flex items-center gap-8">
					<a href="https://twitter.com/ngilidius">
						<svg
							width="17"
							height="14"
							viewBox="0 0 17 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.5732 1.54632C15.9517 1.82122 15.2957 1.99303 14.6051 2.09612C15.2957 1.68377 15.8481 1.03088 16.0898 0.240539C15.4338 0.618527 14.7087 0.893428 13.9146 1.06524C13.2931 0.412352 12.3954 0 11.4286 0C9.56413 0 8.04491 1.51196 8.04491 3.36754C8.04491 3.64244 8.07944 3.88298 8.1485 4.12352C5.35177 3.98606 2.83126 2.64592 1.13941 0.584165C0.863188 1.0996 0.690551 1.64941 0.690551 2.26793C0.690551 3.43626 1.27752 4.46714 2.20976 5.08567C1.65732 5.05131 1.13941 4.91386 0.656023 4.67332V4.70768C0.656023 6.35709 1.82996 7.73159 3.3837 8.04086C3.10748 8.10958 2.79673 8.14394 2.48598 8.14394C2.27882 8.14394 2.03712 8.10958 1.82996 8.07522C2.27882 9.41536 3.52181 10.4119 5.00649 10.4119C3.83256 11.3053 2.3824 11.8551 0.794133 11.8551C0.517913 11.8551 0.241693 11.8551 0 11.8207C1.51921 12.7829 3.28012 13.3327 5.21366 13.3327C11.4631 13.3327 14.8814 8.17831 14.8814 3.71116C14.8814 3.57371 14.8814 3.4019 14.8814 3.26445C15.5374 2.81774 16.1244 2.23357 16.5732 1.54632Z"
								fill="#E7E7E7"
							/>
						</svg>
					</a>

					<a href="https://web.facebook.com/DNR-Partners-CPA-Ltd-107192017497096/">
						<svg
							width="10"
							height="19"
							viewBox="0 0 10 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.91512 18.3041V10.1064H0.143188V6.91163H2.91512V4.55556C2.91512 1.82135 4.5931 0.33252 7.04391 0.33252C8.21787 0.33252 9.22683 0.419506 9.52087 0.458386V3.3158L7.8211 3.31656C6.48821 3.31656 6.23013 3.9469 6.23013 4.87189V6.91163H9.40894L8.99505 10.1064H6.23013V18.3041H2.91512Z"
								fill="#E7E7E7"
							/>
						</svg>
					</a>

					<a href="https://rw.dnrpartners.com/#">
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.1394 1.80182C12.8221 1.80182 13.1397 1.81182 14.1995 1.85991C14.8367 1.86767 15.4678 1.98412 16.0655 2.20418C16.4989 2.37053 16.8925 2.62535 17.221 2.95224C17.5494 3.27913 17.8055 3.67085 17.9726 4.10219C18.1937 4.69697 18.3107 5.32509 18.3185 5.95924C18.3664 7.01395 18.3769 7.33013 18.3769 10C18.3769 12.6699 18.3668 12.986 18.3185 14.0408C18.3107 14.6749 18.1937 15.303 17.9726 15.8978C17.8055 16.3291 17.5494 16.7209 17.221 17.0478C16.8925 17.3747 16.4989 17.6295 16.0655 17.7958C15.4678 18.0159 14.8367 18.1323 14.1995 18.1401C13.1402 18.1877 12.8225 18.1982 10.1394 18.1982C7.45621 18.1982 7.13851 18.1882 6.07922 18.1401C5.44203 18.1323 4.81089 18.0159 4.21325 17.7958C3.77985 17.6295 3.38625 17.3747 3.05779 17.0478C2.72933 16.7209 2.47328 16.3291 2.30614 15.8978C2.08502 15.303 1.96801 14.6749 1.96022 14.0408C1.91237 12.986 1.90185 12.6699 1.90185 10C1.90185 7.33013 1.91189 7.01395 1.96022 5.95924C1.96801 5.32509 2.08502 4.69697 2.30614 4.10219C2.47328 3.67085 2.72933 3.27913 3.05779 2.95224C3.38625 2.62535 3.77985 2.37053 4.21325 2.20418C4.81089 1.98412 5.44203 1.86767 6.07922 1.85991C7.13899 1.81229 7.45668 1.80182 10.1394 1.80182ZM10.1394 0C7.41219 0 7.06866 0.011428 5.99692 0.0599971C5.163 0.0765049 4.33793 0.233646 3.55681 0.524737C2.88674 0.775994 2.27982 1.16974 1.7784 1.67849C1.26675 2.17769 0.870776 2.78206 0.618156 3.44936C0.325668 4.22675 0.167773 5.04788 0.151186 5.87782C0.103341 6.94348 0.0918579 7.28537 0.0918579 9.99952C0.0918579 12.7137 0.103341 13.0556 0.152143 14.1222C0.16873 14.9521 0.326626 15.7733 0.619113 16.5506C0.871453 17.2179 1.26709 17.8222 1.7784 18.3215C2.2801 18.8304 2.88735 19.2241 3.55777 19.4753C4.33889 19.7664 5.16396 19.9235 5.99788 19.94C7.06962 19.9876 7.41171 20 10.1403 20C12.8689 20 13.211 19.9886 14.2828 19.94C15.1167 19.9235 15.9418 19.7664 16.7229 19.4753C17.3901 19.2179 17.996 18.8247 18.5019 18.3209C19.0077 17.8172 19.4024 17.2139 19.6606 16.5497C19.9531 15.7723 20.111 14.9512 20.1276 14.1212C20.1754 13.0556 20.1869 12.7137 20.1869 9.99952C20.1869 7.28537 20.1754 6.94348 20.1266 5.87686C20.11 5.04693 19.9521 4.2258 19.6596 3.44841C19.4073 2.78119 19.0116 2.17684 18.5003 1.67754C17.9986 1.16867 17.3914 0.774919 16.721 0.523785C15.9398 0.232694 15.1148 0.0755526 14.2809 0.0590448C13.2101 0.0114281 12.8666 0 10.1394 0Z"
								fill="#E7E7E7"
							/>
							<path
								d="M10.1376 4.86475C9.11713 4.86475 8.11956 5.16591 7.27106 5.73015C6.42257 6.29439 5.76124 7.09637 5.37072 8.03466C4.9802 8.97296 4.87802 10.0054 5.07711 11.0015C5.2762 11.9976 5.7676 12.9126 6.48919 13.6307C7.21078 14.3489 8.13014 14.8379 9.13101 15.0361C10.1319 15.2342 11.1693 15.1325 12.1121 14.7439C13.0549 14.3552 13.8607 13.697 14.4277 12.8526C14.9946 12.0081 15.2972 11.0153 15.2972 9.99974C15.2972 8.63786 14.7536 7.33175 13.786 6.36875C12.8184 5.40575 11.506 4.86475 10.1376 4.86475ZM10.1376 13.3329C9.4752 13.3329 8.82767 13.1374 8.27691 12.7712C7.72614 12.4049 7.29687 11.8843 7.04337 11.2753C6.78988 10.6662 6.72356 9.99604 6.85279 9.34947C6.98202 8.7029 7.30099 8.10898 7.76938 7.64283C8.23777 7.17668 8.83454 6.85922 9.48421 6.73061C10.1339 6.602 10.8073 6.66801 11.4193 6.92029C12.0313 7.17257 12.5543 7.59979 12.9223 8.14793C13.2903 8.69606 13.4868 9.3405 13.4868 9.99974C13.4868 10.8838 13.1339 11.7316 12.5058 12.3567C11.8777 12.9817 11.0259 13.3329 10.1376 13.3329Z"
								fill="#E7E7E7"
							/>
							<path
								d="M15.5026 5.8618C16.1685 5.8618 16.7083 5.32457 16.7083 4.66186C16.7083 3.99915 16.1685 3.46191 15.5026 3.46191C14.8367 3.46191 14.2969 3.99915 14.2969 4.66186C14.2969 5.32457 14.8367 5.8618 15.5026 5.8618Z"
								fill="#E7E7E7"
							/>
						</svg>
					</a>
					<a href="https://www.linkedin.com/company/dnr-partners-cpa/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-linkedin"
							><path
								d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
							/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
						>
					</a>
				</div>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 w-full flex-wrap gap-6">
				<div class="flex flex-col gap-6">
					<p class="font-medium capitalize">head office</p>
					<div class="flex flex-col gap-4 font-light">
						<a
							target="_blank"
							href="https://maps.app.goo.gl/qHRpdGjuYQxAeSMP8"
							class="text-base flex flex-col gap-2 capitalize"
							>
							{#if $page.url.pathname.split('/')[1] === 'ke'}
								Kenya
							{:else if $page.url.pathname.split('/')[1] === 'en'}
								England
							{:else if $page.url.pathname.split('/')[1] === 'bi'}
								burundi
							{:else if $page.url.pathname.split('/')[1] === 'za'}
								Zambia
							{:else if $page.url.pathname.split('/')[1] === 'sa'}
								South Africa
							{:else}
								KG 647 St, Kigali P. O. Box 5247 Kigali, Rwanda
							{/if}
							</a
						>

						{#if $page.url.pathname.split('/')[1] === 'ke'}
						<a href="tel:+254732227307" class="text-base flex flex-col gap-2 capitalize">
							+254 732 227 307
						</a>
						{:else if $page.url.pathname.split('/')[1] === 'en'}
						<a href="tel:+447568197733" class="text-base flex flex-col gap-2 capitalize">
							+44 7568 197733
					    </a>
						{:else if $page.url.pathname.split('/')[1] === 'bi'}
						<a href="tel:+25771582452" class="text-base flex flex-col gap-2 capitalize">
							+257 71 58 24 52
					   </a>
						{:else if $page.url.pathname.split('/')[1] === 'za'}
					   	<a href="tel:+260977753307" class="text-base flex flex-col gap-2 capitalize">
						+260 97 7753307 / +260 96 6753307
				   		</a>
						{:else if $page.url.pathname.split('/')[1] === 'sa'}
						<a href="tel:+27737181692" class="text-base flex flex-col gap-2 capitalize">
							+27 73 718 1692
						</a>
						{:else}
						<a href="tel:+250788386136" class="text-base flex flex-col gap-2 capitalize">
							+250 788 386 136 <br/> / +250 788 386 134
						</a>
						{/if}


						
						<a href="mailto:info@rw.dnrpartners.com" class="text-base flex flex-col gap-2">
							info@rw.dnrpartners.com</a
						>
					</div>
				</div>
				<div class="flex flex-col gap-6 md:ml-8">
					<p class="font-medium capitalize">quick links</p>
					<div class="flex flex-col gap-4 font-light">
						{#each menu as item}
							<a href={item.href} class="text-base flex flex-col gap-2 capitalize">{item.name}</a>
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-6">
					<p class="font-medium capitalize">Key Clients</p>
					<div class="flex flex-col gap-2 font-light">
						{#each ["World Bank Projects AFDB Projects USAID Projects",
						"SIDA",
						"Save the Children",
						"Swiss Corporation",
						"Banks and other Financial Institutions Agriculture Sector Projects",
						"ICT Companies Projects",
						"Faith based Organizations",
						"Energy Sector Projects"] as item}
							<p class="text-base flex flex-col gap-2 capitalize">{item}</p>
						{/each}
					
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-[#134576] text-white sm:block hidden">
		<div
			class="sm:mx-10 lg:max-w-6xl relative xl:max-w-7xl z-40 md:px-[20px] px-[40px] sm:rounded-xl lg:mx-auto py-4 w-full"
		>
			<div class="flex justify-between items-center md:flex-nowrap flex-wrap">
				<div class="flex items-center gap-10">
					{#each ['About us', 'Contact', 'Privacy policy', 'Terms of Use'] as item}
						<a href={item} class="text-[#E7E7E7] text-sm font-light">{item}</a>
					{/each}
				</div>
				<div>
					<p class=" font-light text-sm">
						© 2024 DNR PARTNERS INTERNATIONAL . All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
