<script setup lang="ts">
const SOCIAL_LINKS = [
    { name: 'Github', href: 'https://github.com/diegosaraviamamani' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/diego-saravia-mamani' },
]
</script>
<template>
    <footer class="flex justify-between text-[#607B96] border-t">
        <h4 class="px-4 py-3">find me in:</h4>
        <!-- link to github -->
        <div class="flex">
            <nuxt-link v-for="{ href, name } in SOCIAL_LINKS" :key="name" :href="href" target="_blank"
                class="w-14 text-center px-4 py-3 border-l">
                {{ name[0] }}
            </nuxt-link>
        </div>
    </footer>
</template>