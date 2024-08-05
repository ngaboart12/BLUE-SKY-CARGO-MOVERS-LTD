<script lang="ts">
    export let basePath:string;
    export let icon:number;
    export let images:string;
    export let title:string;;
    export let description:string;
    export let subTitles:string[];

    let isHoverd = false;
</script>

<a href="{basePath}/services/{icon}"
    on:mouseenter={() => isHoverd = true}
    on:mouseleave={() => isHoverd = false}
    class="group relative flex gap-x-6 items-start rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
>
<div
    class="mt-1 flex h-8 w-8 flex-none relative items-center justify-center overflow-hidden rounded-lg bg-gray-50 group-hover:bg-white"
>
    <img src={images} alt="1" class="object-cover w-full h-full" />
</div>
<div class="flex flex-col">
    <span class="font-semibold text-gray-900 truncate">
        {title}
    </span>
    <div class="text-gray-500 text-sm line-clamp-1">{description}</div>
    {#if isHoverd}
        <div class="flex items-start flex-col gap-0.5 mt-2">
            {#each subTitles as subTitle}
                <div class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span class="text-gray-500 text-sm line-clamp-1">{subTitle}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>
</a>