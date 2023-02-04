<script setup lang="ts">
const SOCIAL_LINKS = [
    { name: 'Github', href: 'https://github.com/diegosaraviamamani' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/diego-saravia-mamani' },
]
</script>
<template>
    <footer class="flex justify-between text-[#607B96] border-t md:justify-start w-full">
        <h4 class="px-4 py-3">find me in:</h4>
        <!-- link to github -->
        <div class="flex">
            <nuxt-link v-for="{ href, name } in SOCIAL_LINKS" :key="name" :href="href" target="_blank"
                class="w-14 text-center px-4 py-3 border-l last-of-type:md:border-r">
                {{ name[0] }}
            </nuxt-link>
        </div>
        <div class="grow hidden md:block"></div>
        <nuxt-link href="#" target="_blank" class="text-center px-4 py-3 border-l hidden md:block">
            @diegosaraviamamani
        </nuxt-link>
    </footer>
</template>