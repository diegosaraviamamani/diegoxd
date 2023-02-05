<script setup lang="ts">
definePageMeta({ name: '_hello' })
const code = ref(`const githubLink = 'https:// github.com/example/url'`)
</script>
<template>
    <div class="flex flex-col grow gap-[calc(100vh*12/45)] md:gap-[calc(100vh*5/67)] px-7 md:px-[calc(100vw*311/1920)]">
        <div class="flex-[4] md:flex-[25] flex flex-col justify-end gap-2">
            <h3 class="text-[#E5E9F0] text-lg">Hi all. I am</h3>
            <h1 class="text-[#E5E9F0] text-6xl">Diego Saravia</h1>
            <p class="text-[#43D9AD] md:text-3xl">> Front-end developer</p>
        </div>
        <div class="flex-[2] md:flex-[22] flex flex-col gap-4 text-base">
            <HighlightCode code="// find my profile on Github:" language="typescript"></HighlightCode>
            <nuxt-link to="https://github.com/diegosaraviamamani" target="_blank" class="text-[#43D9AD]">
                <HighlightCode :code="code" language="typescript"></HighlightCode>
            </nuxt-link>
        </div>
    </div>
</template>