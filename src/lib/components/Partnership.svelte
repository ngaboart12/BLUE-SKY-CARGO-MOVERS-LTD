<script lang="ts">
	import RRA from '$lib/images/RRA.png';
	import CISI from '$lib/images/cisi.jpg';
	import RSSB from '$lib/images/rssb.jpg';
	import ICPAR from '$lib/images/icpar.jpg';
	import BNR from '$lib/images/bnr.png';
	import ICPAK from '$lib/images/icpak.jpg';
	import ACCA from '$lib/images/acca.jpg';
	import Minecofin from '$lib/images/minecofin.png';
	import RDB1 from '$lib/images/rdb.png';
</script>

<div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-start">
	<h2 class="text-xl mb-6 sm:text-2xl md:text-3xl font-bold text-[#083867]">Our Partnerships</h2>
	<div class=" gap-10 flex justify-between flex-wrap">
		<a target="_blank" href="https://ecms.rra.gov.rw/home" class="flex justify-center items-center">
			<img src={RRA} alt="RRA RWANDA REVENUE AUTHORITY" class="h-14" />
		</a>
		<a
			href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/africa/capital-markets-authority-(rwanda)-certification-licensing-programme"
			target="_blank"
			class="flex justify-center items-center"
		>
			<img
				src={CISI}
				alt="Capital Markets Authority (Rwanda) Certification Licensing"
				class="h-14"
			/>
		</a>
		<a href="https://www.rssb.rw/" class="flex justify-center items-center">
			<img src={RSSB} alt="RSSB" class="h-14" />
		</a>
		<a href="https://icparwanda.com/" class="flex justify-center items-center">
			<img src={ICPAR} alt="ICPAR ()" class="h-14" />
		</a>
		<a href="https://www.bnr.rw/about/" class="flex justify-center items-center">
			<img src={BNR} alt="BNR National Bank of Rwanda" class="h-14" />
		</a>
		<a href="https://www.icpak.com/venue/rwanda/" class="flex justify-center items-center">
			<img src={ICPAK} alt="BNR National Bank of Rwanda" class="h-14" />
		</a>
		<a href="https://www.accaglobal.com/gb/en.html" class="flex justify-center items-center">
			<img src={ACCA} alt="Association of Chartered Certified Accountants" class="h-14" />
		</a>
		<a href="http://www.minecofin.gov.rw/" class="flex justify-center items-center">
			<img src={Minecofin} alt="Association of Chartered Certified Accountants" class="h-14" />
		</a>
		<a href="https://org.rdb.rw/" class="flex justify-center items-center">
			<img src={RDB1} alt="RDB" class="h-14" />
		</a>
	</div>
</div>
