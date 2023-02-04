<script setup lang="ts">
definePageMeta({ name: '_hello' })
const code = ref(`const githubLink = 'https:// github.com/example/url'`)
</script>
<template>
    <div class="flex flex-col grow gap-48">
        <div class="flex-[4] flex flex-col justify-end gap-2 px-7">
            <h3 class="text-[#E5E9F0] text-lg">Hi all. I am</h3>
            <h1 class="text-[#E5E9F0] text-6xl">Diego Saravia</h1>
            <p class="text-[#43D9AD] md:text-3xl">> Front-end developer</p>
        </div>
        <div class="flex-[2] flex flex-col gap-4 px-7 text-base">
            <HighlightCode code="// find my profile on Github:" language="typescript"></HighlightCode>
            <HighlightCode :code="code" language="typescript"></HighlightCode>
        </div>
    </div>
</template>