<script setup lang="ts">
import { LINKEDIN_URL, GITHUB_URL } from '~/constants'
const SOCIAL_LINKS = [
    { name: 'linkedIn', href: LINKEDIN_URL },
]
</script>
<template>
    <footer class="flex justify-between  border-t md:justify-start w-full bg-[#007ACC] text-white">
        <!-- <h4 class="px-4 py-3">find me in:</h4> -->
        <h4 class="px-4 py-2">encuéntrame en:</h4>
        <div class="flex">
            <nuxt-link :href="LINKEDIN_URL" target="_blank"
                class="w-14 text-center px-4 py-2 border-l last-of-type:md:border-r">
                <!-- linkedin icon -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.5 0H2.5C1.11929 0 0 1.11929 0 2.5V21.5C0 22.8807 1.11929 24 2.5 24H21.5C22.8807 24 24 22.8807 24 21.5V2.5C24 1.11929 22.8807 0 21.5 0ZM8.25 20.25H4.5V9.75H8.25V20.25ZM6.375 8.25C5.19375 8.25 4.25 7.30625 4.25 6.125C4.25 4.94375 5.19375 4 6.375 4C7.55625 4 8.5 4.94375 8.5 6.125C8.5 7.30625 7.55625 8.25 6.375 8.25ZM20.25 20.25H16.5V14.625C16.5 13.4438 16.5 11.875 14.625 11.875C12.75 11.875 12.75 13.4438 12.75 14.625V20.25H9V9.75H12.75V11.25H12.8125C13.25 10.375 14.375 9.25 16.5 9.25C20.25 9.25 20.25 12.75 20.25 16.5V20.25Z"
                        fill="currentColor" />
                </svg>
            </nuxt-link>
        </div>
        <div class="grow hidden md:block"></div>
        <nuxt-link href="#" target="_blank" class="text-center px-4 py-2 border-l hidden md:block">
            @diegosaraviamamani
        </nuxt-link>
    </footer>
</template>