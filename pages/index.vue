<script setup lang="ts">
const code = ref(`const githubLink = 'https:// github.com/example/url'`)
</script>
<template>
    <main class="flex flex-col grow p-7">
        <div class="flex-[4] flex flex-col justify-center gap-2">
            <h3 class="text-[#E5E9F0] text-lg">Hi all. I am</h3>
            <h1 class="text-[#E5E9F0] text-6xl">Diego Saravia</h1>
            <p class="text-[#43D9AD]">> Front-end developer</p>
        </div>
        <div class="flex-[2] flex flex-col justify-center">
            <HighlightCode :code="code" language="typescript"></HighlightCode>
        </div>
    </main>
</template>