<script lang="ts">
	// import imgeThree from '$lib/images/3.png';
    import dayjs from 'dayjs'
    export let title: string;
    export let desc: any[];
    export let createdAt: string;
    export let id: string;
    export let imgUrl:string;

</script>

<a href={`/insights/${id}`} class="flex flex-col gap-2">
    <div class="w-full h-[247px]">
        <img src={imgUrl} alt={title} class="w-full h-full object-cover" />
    </div>
    <span class="text-sm text-[#797C7F] mt-2">
        {dayjs(createdAt).format("MMM DD, YYYY")}
    </span>
    <h4 class="font-medium text-black capitalize">
        {title}
    </h4>
    <p class="text-[#797C7F] font-light line-clamp-2">
        {desc}
    </p>
    <button
        class="py-3 px-6 w-fit flex items-center gap-2 bg-transparent text-[#C43228] border border-[#C43228]/50 rounded-xl capitalize font-light col-span-2 mt-2"
    >
        <span>know more</span>
        <span>
            <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.75 7.72583L0.75 7.72583"
                    stroke="#C43228"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9.7002 1.70149L15.7502 7.72549L9.7002 13.7505"
                    stroke="#C43228"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </span>
    </button>
</a>