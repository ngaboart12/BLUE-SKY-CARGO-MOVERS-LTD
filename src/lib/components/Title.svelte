<script lang="ts">
    export let name: string
    export let isSmall: boolean = false
</script>

{#if isSmall}
    <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-[#083867]">
        {name}
    </h2>
{:else}
    <h1 class="text-xl sm:text-2xl md:text-4xl font-bold text-[#083867] md:leading-[48px]">
        {name}
    </h1>
{/if}