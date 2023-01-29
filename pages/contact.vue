<script setup lang="ts">
definePageMeta({ layout: 'full', name: '_contact-me' })

const CONTACTS = [
    { name: 'bolivaristadiego@gmail.com', link: 'mailto:bolivaristadiego@gmail.com' },
    { name: '+591 68002172', link: 'tel:+59168002172' },
]

const SOCIALS = [
    { name: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/diego-saravia-mamani' },
    { name: 'GitHub Profile', link: 'https://github.com/diegosaraviamamani' },
]
</script>
<template>
    <main class="flex flex-col">
        <accordeon title="contacts">
            <ul class="px-7 my-4 text-[#607B96]">
                <li class="flex flex-col" v-for="{ link, name } in CONTACTS" :key="name">
                    <nuxt-link class="py-1 hover:text-white" :href="link">
                        {{ name }}
                    </nuxt-link>
                </li>
            </ul>
        </accordeon>
        <accordeon title="find-me-also-in">
            <ul class="px-7 mt-4 text-[#607B96]">
                <li class="flex flex-col" v-for="{ link, name } in SOCIALS" :key="name">
                    <nuxt-link class="py-1 hover:text-white" :href="link" target="_blank">
                        {{ name }}
                    </nuxt-link>
                </li>
            </ul>
        </accordeon>
        <contact-form />
    </main>
</template>