<script>
	import AllCountrySvg from './AllCountrySVG.svelte';
    export let onHome = false;
	export let gap = false;
	console.log(gap,"gapgapgap-")
</script>
{#if !onHome}    
<a
	href="/"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<AllCountrySvg />
	<span class="font-medium capitalize">Global Network</span>
</a>
{/if}
<a
	href="/rw"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_189_548)">
				<path
					d="M0 15C0 17.5986 0.661113 20.0428 1.82385 22.1739L15 23.4783L28.1762 22.1739C29.3389 20.0428 30 17.5986 30 15L15 13.6956L0 15Z"
					fill="#FFDA44"
				/>
				<path
					d="M28.1762 7.82607C25.6321 3.16342 20.6856 0 15 0C9.31436 0 4.36793 3.16342 1.82385 7.82607C0.661113 9.95719 0 12.4014 0 15H30C30 12.4014 29.3389 9.95719 28.1762 7.82607Z"
					fill="#338AF3"
				/>
				<path
					d="M15 30C20.6857 30 25.6321 26.8366 28.1762 22.1739H1.82385C4.36793 26.8366 9.31436 30 15 30Z"
					fill="#496E2D"
				/>
				<path
					d="M16.9565 8.77857L18.7885 9.64031L17.813 11.4145L19.8023 11.034L20.0543 13.0435L21.4398 11.5655L22.8255 13.0435L23.0775 11.034L25.0667 11.4144L24.0913 9.64025L25.9231 8.77857L24.0912 7.91695L25.0667 6.14273L23.0775 6.52324L22.8254 4.51376L21.4398 5.99173L20.0543 4.51376L19.8023 6.52324L17.8129 6.14273L18.7885 7.91701L16.9565 8.77857Z"
					fill="#FFDA44"
				/>
			</g>
			<defs>
				<clipPath id="clip0_189_548">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</span>
	<span class="font-medium capitalize">rwanda</span>
</a>
<a
	href="/bi"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_189_619)">
				<path
					d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
					fill="#F0F0F0"
				/>
				<path
					d="M24.1334 3.09994C18.7632 -1.03245 11.2369 -1.03245 5.8667 3.09988L15.0001 12.2332L24.1334 3.09994Z"
					fill="#D80027"
				/>
				<path
					d="M14.9999 17.7671L5.8667 26.9003C11.2369 31.0327 18.7632 31.0327 24.1334 26.9003L15.0001 17.7669L14.9999 17.7671Z"
					fill="#D80027"
				/>
				<path
					d="M12.2332 15L3.0999 5.86664C-1.03249 11.2369 -1.03249 18.7631 3.0999 24.1334L12.2332 15Z"
					fill="#6DA544"
				/>
				<path
					d="M17.767 15L26.9002 24.1334C31.0326 18.7631 31.0326 11.2369 26.9002 5.86664L17.767 15Z"
					fill="#6DA544"
				/>
				<path
					d="M15 21.5217C18.6018 21.5217 21.5217 18.6018 21.5217 15C21.5217 11.3981 18.6018 8.47827 15 8.47827C11.3981 8.47827 8.47827 11.3981 8.47827 15C8.47827 18.6018 11.3981 21.5217 15 21.5217Z"
					fill="#F0F0F0"
				/>
				<path
					d="M15 10.4348L15.5648 11.4131H16.6944L16.1296 12.3913L16.6944 13.3696H15.5648L15 14.3478L14.4352 13.3696H13.3057L13.8704 12.3913L13.3057 11.4131H14.4352L15 10.4348Z"
					fill="#D80027"
				/>
				<path
					d="M12.1292 15L12.694 15.9783H13.8236L13.2588 16.9565L13.8236 17.9348H12.694L12.1292 18.9131L11.5644 17.9348H10.4348L10.9996 16.9565L10.4348 15.9783H11.5644L12.1292 15Z"
					fill="#D80027"
				/>
				<path
					d="M17.8709 15L18.4357 15.9783H19.5653L19.0005 16.9565L19.5653 17.9348H18.4357L17.8709 18.9131L17.3061 17.9348H16.1765L16.7413 16.9565L16.1765 15.9783H17.3061L17.8709 15Z"
					fill="#D80027"
				/>
			</g>
			<defs>
				<clipPath id="clip0_189_619">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</span>
	<span class="font-medium capitalize">burundi</span>
</a>

<a
	href="/en"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_189_652)">
				<path
					d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
					fill="#F0F0F0"
				/>
				<path
					d="M3.10077 5.86768C1.9225 7.40066 1.03405 9.16756 0.516724 11.087H8.32012L3.10077 5.86768Z"
					fill="#0052B4"
				/>
				<path
					d="M29.4833 11.087C28.9659 9.16762 28.0774 7.40073 26.8992 5.86774L21.68 11.087H29.4833Z"
					fill="#0052B4"
				/>
				<path
					d="M0.516724 18.9131C1.03411 20.8325 1.92256 22.5994 3.10077 24.1324L8.31995 18.9131H0.516724Z"
					fill="#0052B4"
				/>
				<path
					d="M24.1323 3.10083C22.5993 1.92256 20.8324 1.03411 18.913 0.516724V8.32006L24.1323 3.10083Z"
					fill="#0052B4"
				/>
				<path
					d="M5.86768 26.8991C7.40066 28.0774 9.16756 28.9659 11.087 29.4832V21.68L5.86768 26.8991Z"
					fill="#0052B4"
				/>
				<path
					d="M11.0869 0.516724C9.1675 1.03411 7.40061 1.92256 5.86768 3.10077L11.0869 8.32V0.516724Z"
					fill="#0052B4"
				/>
				<path
					d="M18.913 29.4832C20.8324 28.9659 22.5993 28.0774 24.1323 26.8992L18.913 21.68V29.4832Z"
					fill="#0052B4"
				/>
				<path
					d="M21.68 18.9131L26.8992 24.1324C28.0774 22.5995 28.9659 20.8325 29.4833 18.9131H21.68Z"
					fill="#0052B4"
				/>
				<path
					d="M29.873 13.0435H16.9566H16.9566V0.126973C16.3161 0.0435938 15.6631 0 15 0C14.3368 0 13.6839 0.0435938 13.0435 0.126973V13.0434V13.0434H0.126973C0.0435938 13.6839 0 14.3369 0 15C0 15.6632 0.0435938 16.3161 0.126973 16.9565H13.0434H13.0434V29.873C13.6839 29.9564 14.3368 30 15 30C15.6631 30 16.3161 29.9565 16.9565 29.873V16.9566V16.9566H29.873C29.9564 16.3161 30 15.6632 30 15C30 14.3369 29.9564 13.6839 29.873 13.0435Z"
					fill="#D80027"
				/>
				<path
					d="M18.9131 18.9131L25.6066 25.6066C25.9145 25.2989 26.2081 24.9772 26.4883 24.6436L20.7577 18.9131H18.9131V18.9131Z"
					fill="#D80027"
				/>
				<path
					d="M11.0869 18.9131H11.0868L4.39337 25.6066C4.70111 25.9144 5.02284 26.2081 5.35636 26.4883L11.0869 20.7576V18.9131Z"
					fill="#D80027"
				/>
				<path
					d="M11.087 11.0871V11.0869L4.39344 4.39337C4.08559 4.70111 3.79191 5.02284 3.51172 5.35636L9.24236 11.087H11.087V11.0871Z"
					fill="#D80027"
				/>
				<path
					d="M18.9131 11.087L25.6067 4.39341C25.2989 4.08556 24.9772 3.79189 24.6437 3.51175L18.9131 9.24239V11.087Z"
					fill="#D80027"
				/>
			</g>
			<defs>
				<clipPath id="clip0_189_652">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</span>
	<span class="font-medium capitalize">England</span>
</a>
<a
	href="/za"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_189_716)">
				<path
					d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
					fill="#496E2D"
				/>
				<path
					d="M20.8696 15H15V30C16.7534 30 18.436 29.6982 20 29.1454L20.8696 15Z"
					fill="#D80027"
				/>
				<path
					d="M24.9999 26.1793C28.0683 23.4328 29.9999 19.4422 29.9999 15H24.1304L24.9999 26.1793Z"
					fill="#FF9811"
				/>
				<path d="M20 15V29.1454C21.8631 28.4867 23.5573 27.4707 25 26.1793V15H20Z" fill="black" />
				<path
					d="M27.7173 9.78263H23.8042C23.8042 9.06228 23.2202 8.47827 22.4999 8.47827C21.7795 8.47827 21.1955 9.06228 21.1955 9.78263H17.2825C17.2825 10.503 17.91 11.087 18.6302 11.087H18.5868C18.5868 11.8074 19.1707 12.3913 19.8912 12.3913C19.8912 13.1117 20.4751 13.6957 21.1955 13.6957H23.8042C24.5246 13.6957 25.1086 13.1117 25.1086 12.3913C25.829 12.3913 26.413 11.8074 26.413 11.087H26.3695C27.0899 11.0869 27.7173 10.503 27.7173 9.78263V9.78263Z"
					fill="#FF9811"
				/>
			</g>
			<defs>
				<clipPath id="clip0_189_716">
					<rect width="30" height="30" fill="white" />
				</clipPath>
			</defs>
		</svg>
	</span>
	<span class="font-medium capitalize">zambia</span>
</a>
<a
	href="/sa"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="30"
			height="30"
			viewBox="0 0 64 64"
			aria-hidden="true"
			role="img"
			class="iconify iconify--emojione"
			preserveAspectRatio="xMidYMid meet"
			><path
				d="M60.9 40c.7-2.5 1.1-5.2 1.1-8s-.4-5.5-1.1-8H31.7L14.8 7.4c-4 2.8-7.3 6.6-9.6 11L19 32L5.3 45.6c2.2 4.4 5.5 8.2 9.6 11L31.7 40h29.2z"
				fill="#699635"
			/><path
				d="M3.5 22.5c-1 3-1.5 6.2-1.5 9.5s.5 6.5 1.5 9.5l9.6-9.5l-9.6-9.5"
				fill="#3e4347"
			/><path
				d="M18.3 58.7C22.4 60.8 27.1 62 32 62c12.3 0 22.9-7.4 27.5-18.1H33.4L18.3 58.7z"
				fill="#428bc1"
			/><path
				d="M59.5 20.1C54.9 9.4 44.3 2 32 2c-4.9 0-9.6 1.2-13.7 3.3l15.1 14.8h26.1"
				fill="#ed4c5c"
			/><path
				d="M60.5 22.7c-.3-.9-.6-1.8-1-2.6H33.4L18.3 5.3c-.7.3-1.3.7-2 1.1c-.5.3-1 .7-1.5 1L31.7 24h29.2c-.1-.4-.2-.9-.4-1.3"
				fill="#ffffff"
			/><path
				d="M5.3 18.4c-.1.2-.2.4-.3.7c-.5 1.1-1 2.2-1.4 3.4l9.6 9.5l-9.6 9.5c.4 1.2.8 2.3 1.4 3.4c.1.2.2.4.3.7L19 32L5.3 18.4"
				fill="#ffce31"
			/><path
				d="M31.7 40L14.8 56.6c.3.2.7.5 1 .7c.8.5 1.6 1 2.5 1.4l15.1-14.8h26.1c.4-1 .8-2 1.2-3.1c.1-.3.1-.5.2-.8H31.7"
				fill="#ffffff"
			/></svg
		>
	</span>
	<span class="font-medium capitalize">South Africa</span>
</a>
<a
	href="/ke"
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
>
	<span>
		<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_189_733)">
				<path
					d="M15.7446 30C23.9818 30 30.6594 23.2843 30.6594 15C30.6594 6.71573 23.9818 0 15.7446 0C7.50732 0 0.829712 6.71573 0.829712 15C0.829712 23.2843 7.50732 30 15.7446 30Z"
					fill="#F0F0F0"
				/>
				<path
					d="M15.7446 0C9.83144 0 4.72217 3.46084 2.30969 8.47828H29.1794C26.767 3.46084 21.6577 0 15.7446 0Z"
					fill="black"
				/>
				<path
					d="M15.7446 30C9.83144 30 4.72217 26.5392 2.30969 21.5217H29.1794C26.767 26.5392 21.6577 30 15.7446 30Z"
					fill="#496E2D"
				/>
				<path
					d="M29.9551 10.4348H1.53403C1.07715 11.8744 0.829712 13.4081 0.829712 15C0.829712 16.5919 1.07715 18.1256 1.53403 19.5652H29.9551C30.412 18.1256 30.6594 16.5919 30.6594 15C30.6594 13.4081 30.412 11.8744 29.9551 10.4348Z"
					fill="#A2001D"
				/>
				<path
					d="M20.3889 6.93169L18.6226 6.11179L15.7446 12.6656L12.8666 6.11179L11.1003 6.93169L14.6733 15L11.1003 23.0683L12.8666 23.8882L15.7446 17.3344L18.6226 23.8882L20.3889 23.0683L16.8158 15L20.3889 6.93169Z"
					fill="#F0F0F0"
				/>
				<path
					d="M16.9442 7.70441C16.2605 6.95342 15.7446 6.5217 15.7446 6.5217C15.7446 6.5217 15.2287 6.95336 14.5449 7.70441V22.2954C15.2287 23.0465 15.7446 23.4783 15.7446 23.4783C15.7446 23.4783 16.2605 23.0466 16.9442 22.2955V7.70441Z"
					fill="#F0F0F0"
				/>
				<path
					d="M12.5022 10.5025V19.4974C13.2248 20.785 14.1091 21.8404 14.7719 22.5401V7.45987C14.1091 8.15954 13.2247 9.21499 12.5022 10.5025Z"
					fill="#A2001D"
				/>
				<path
					d="M18.9869 10.5025C18.2643 9.21493 17.38 8.15954 16.7172 7.45987V22.5401C17.3799 21.8404 18.2643 20.785 18.9869 19.4974V10.5025Z"
					fill="#A2001D"
				/>
				<path
					d="M18.9869 10.5025V19.4974C19.7184 18.1937 20.2839 16.6522 20.2839 15C20.2839 13.3478 19.7184 11.8062 18.9869 10.5025Z"
					fill="black"
				/>
				<path
					d="M12.5022 10.5025V19.4974C11.7707 18.1937 11.2053 16.6522 11.2053 15C11.2053 13.3478 11.7707 11.8062 12.5022 10.5025Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_189_733">
					<rect width="29.8297" height="30" fill="white" transform="translate(0.829712)" />
				</clipPath>
			</defs>
		</svg>
	</span>
	<span class="font-medium capitalize">Kenya</span>
</a>
<a
	class="py-3 px-6 w-full {gap === true && "relative left-2 right-2"} bg-[#FAFAFA] rounded-xl capitalize font-light flex items-center gap-2 hover:border hover:border-black duration-200 transition-all border border-transparent"
	href="/ug"
>
	<span class="w-8 h-8 rounded-full overflow-hidden">
		<img
			class="w-full h-full object-cover"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/800px-Flag_of_Uganda.svg.png?20221207005450"
			alt="ugunda"
		/>
	</span>
	<span class="font-medium capitalize"> Uganda </span>
</a>
