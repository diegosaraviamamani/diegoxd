<script setup lang="ts">
definePageMeta({ name: '_contact-me' })

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
    <div class="flex flex-col md:flex-row md:grow">
        <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
            {{ $route.name }}
        </h2>
        <div class="md:w-80 shrink-0 md:border-r">

            <accordeon title="contacts" default-open>
                <ul class="px-7 my-4 text-[#607B96]">
                    <li class="flex flex-col" v-for="{ link, name } in CONTACTS" :key="name">
                        <nuxt-link class="py-1 hover:text-white" :href="link">
                            {{ name }}
                        </nuxt-link>
                    </li>
                </ul>
            </accordeon>
            <accordeon title="find-me-also-in" default-open>
                <ul class="px-7 mt-4 text-[#607B96]">
                    <li class="flex flex-col" v-for="{ link, name } in SOCIALS" :key="name">
                        <nuxt-link class="py-1 hover:text-white" :href="link" target="_blank">
                            {{ name }}
                        </nuxt-link>
                    </li>
                </ul>
            </accordeon>
        </div>
        <section class="flex flex-col gap-5 md:gap-0 md:grow">
            <div class="hidden md:flex border-b">
                <span class="border-r px-4 py-2 w-40 text-[#607B96]">
                    {{ $route.name }}
                </span>
            </div>
            <div class="md:max-h-[calc(100vh-11.5rem)] md:overflow-y-auto">
                <contact-form />
            </div>
        </section>
    </div>
</template>