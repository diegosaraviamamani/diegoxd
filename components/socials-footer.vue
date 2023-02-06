<script setup lang="ts">
import { LINKEDIN_URL, GITHUB_URL } from '~/constants'
const SOCIAL_LINKS = [
    { name: 'github', href: GITHUB_URL },
    { name: 'linkedIn', href: LINKEDIN_URL },
]
</script>
<template>
    <footer class="flex justify-between text-[#607B96] border-t md:justify-start w-full">
        <!-- <h4 class="px-4 py-3">find me in:</h4> -->
        <h4 class="px-4 py-3">encuéntrame en:</h4>
        <div class="flex">
            <nuxt-link v-for="{ href, name } in SOCIAL_LINKS" :key="name" :href="href" target="_blank"
                class="w-14 text-center px-4 py-3 border-l last-of-type:md:border-r">
                <!-- github icon -->
                <template v-if="name === 'github'">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_10033_100)">
                            <path
                                d="M12 2.5C6.475 2.5 2 6.975 2 12.5C1.99887 14.5993 2.65882 16.6456 3.88622 18.3487C5.11362 20.0517 6.84615 21.3251 8.838 21.988C9.338 22.075 9.525 21.775 9.525 21.512C9.525 21.275 9.512 20.488 9.512 19.65C7 20.113 6.35 19.038 6.15 18.475C6.037 18.187 5.55 17.3 5.125 17.062C4.775 16.875 4.275 16.412 5.112 16.4C5.9 16.387 6.462 17.125 6.65 17.425C7.55 18.937 8.988 18.512 9.562 18.25C9.65 17.6 9.912 17.163 10.2 16.913C7.975 16.663 5.65 15.8 5.65 11.975C5.65 10.887 6.037 9.988 6.675 9.287C6.575 9.037 6.225 8.012 6.775 6.637C6.775 6.637 7.612 6.375 9.525 7.663C10.3391 7.43706 11.1802 7.32334 12.025 7.325C12.875 7.325 13.725 7.437 14.525 7.662C16.437 6.362 17.275 6.638 17.275 6.638C17.825 8.013 17.475 9.038 17.375 9.288C18.012 9.988 18.4 10.875 18.4 11.975C18.4 15.813 16.063 16.663 13.838 16.913C14.2 17.225 14.513 17.825 14.513 18.763C14.513 20.1 14.5 21.175 14.5 21.513C14.5 21.775 14.688 22.087 15.188 21.987C17.173 21.3168 18.8979 20.041 20.1199 18.3392C21.3419 16.6373 21.9994 14.5951 22 12.5C22 6.975 17.525 2.5 12 2.5Z"
                                fill="#607B96" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10033_100">
                                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </template>
                <!-- linkedin icon -->
                <template v-if="name === 'linkedIn'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.5 0H2.5C1.11929 0 0 1.11929 0 2.5V21.5C0 22.8807 1.11929 24 2.5 24H21.5C22.8807 24 24 22.8807 24 21.5V2.5C24 1.11929 22.8807 0 21.5 0ZM8.25 20.25H4.5V9.75H8.25V20.25ZM6.375 8.25C5.19375 8.25 4.25 7.30625 4.25 6.125C4.25 4.94375 5.19375 4 6.375 4C7.55625 4 8.5 4.94375 8.5 6.125C8.5 7.30625 7.55625 8.25 6.375 8.25ZM20.25 20.25H16.5V14.625C16.5 13.4438 16.5 11.875 14.625 11.875C12.75 11.875 12.75 13.4438 12.75 14.625V20.25H9V9.75H12.75V11.25H12.8125C13.25 10.375 14.375 9.25 16.5 9.25C20.25 9.25 20.25 12.75 20.25 16.5V20.25Z"
                            fill="#607B96" />
                    </svg>
                </template>
            </nuxt-link>
        </div>
        <div class="grow hidden md:block"></div>
        <nuxt-link href="#" target="_blank" class="text-center px-4 py-3 border-l hidden md:block">
            @diegosaraviamamani
        </nuxt-link>
    </footer>
</template>