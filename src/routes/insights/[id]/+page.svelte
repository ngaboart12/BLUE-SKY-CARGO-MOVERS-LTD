<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import dayjs from "dayjs";
    export let data;

    const typePrefix = data.blog.mainImage._type ? `${data.blog.mainImage._type}-` : 'image-';  
    const removeTypePrefix = data.blog.mainImage.asset._ref.split(typePrefix)[1]
    const lastIndex = removeTypePrefix.lastIndexOf("-");
    const modifiedFilename = removeTypePrefix.substring(0, lastIndex) + "." + removeTypePrefix.substring(lastIndex + 1);
    const blog = {
        ...data.blog,
        mainImage: `https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`
    }

    const markdownConverter = blog.body.map((item:any) => {
        if(item._type === "image"){
            const typePrefix = 'image-';  
            const removeTypePrefix = item.asset._ref.split(typePrefix)[1]
            const lastIndex = removeTypePrefix.lastIndexOf("-");
            const modifiedFilename = removeTypePrefix.substring(0, lastIndex) + "." + removeTypePrefix.substring(lastIndex + 1);
            return `<img src="${`https://cdn.sanity.io/images/f3af10kw/dnr-data-set/${modifiedFilename}`}" alt="${item.alt}" class="w-full h-full object-cover" />`
        } else {
            return item.children.map((child:any) => {
                if(child.text === "" || child.text === " "){
                    return `<br/>`
                }
                return `<p class="text-[#797C7F] font-light">${child.text}</p>`
            }).join('')
        }
    });
</script>

<div class="flex flex-col gap-6 sm:gap-10 mt-20">
    <div class="max-w-7xl mx-auto py-8 md:px-8 px-4 w-full flex flex-col items-center">
        <div class="max-w-xl text-center">
            <Title name="Data-Driven Decisions: Leveraging Analytics in Consulting"></Title>
        </div>
        <div class="w-full flex flex-col">
            <div class="h-[400px] w-full rounded-xl overflow-hidden mt-8">
                <img src={blog.mainImage} alt={blog.title} class="w-full h-full object-cover" />
            </div>
            <div class="mt-1">
                <p class="uppercase text-[#7F7F7F] font-light">
                    {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
                </p>
            </div>

            <div class="!text-[#7F7F7F] mt-4 ">
                {@html markdownConverter.join('')}
            </div>
        </div>
    </div>
</div>
