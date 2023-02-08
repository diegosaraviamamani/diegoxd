<script setup lang="ts">
import { EMAIL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, PHONE, PHONE_URL } from '~/constants'

definePageMeta({ name: '_contáctame' })

const CONTACTS = [
    { name: EMAIL, link: EMAIL_URL },
    { name: PHONE, link: PHONE_URL },
]

const SOCIALS = [
    { name: 'Perfil LinkedIn', link: GITHUB_URL },
    { name: 'Perfil GitHub', link: LINKEDIN_URL },
]
</script>
<template>
    <div class="flex flex-col md:flex-row md:grow">
        <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
            {{ $route.name }}
        </h2>
        <div class="md:w-80 shrink-0">

            <accordeon title="contacto" default-open>
                <ul class="px-7 my-4 md:mt-0">
                    <li class="flex flex-col" v-for="{ link, name } in CONTACTS" :key="name">
                        <nuxt-link class="py-1 hover:text-white" :href="link">
                            {{ name }}
                        </nuxt-link>
                    </li>
                </ul>
            </accordeon>
            <accordeon title="también-encuentrame-en" default-open>
                <ul class="px-7 my-4 md:mt-0">
                    <li class="flex flex-col" v-for="{ link, name } in SOCIALS" :key="name">
                        <nuxt-link class="py-1 hover:text-white" :href="link" target="_blank">
                            {{ name }}
                        </nuxt-link>
                    </li>
                </ul>
            </accordeon>
        </div>
        <section class="flex flex-col gap-5 md:gap-0 md:grow bg-[#1E1E1E]">
            <div class="md:max-h-[calc(100vh-11.5rem)] md:overflow-y-auto md:h-full md:flex md:flex-col">
                <contact-form />
            </div>
        </section>
    </div>
</template>