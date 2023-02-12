<script setup lang="ts">
import { REPO_URL } from '~~/constants';

const router = useRouter()
//inject isMenuOpen
const isMenuOpen = inject('isMenuOpen')

const getRoutes = () => ([
    router.options.routes.find(route => route.path === '/')!,
    router.options.routes.find(route => route.path === '/about')!,
    router.options.routes.find(route => route.path === '/projects')!,
    router.options.routes.find(route => route.path === '/contact')!,
])
</script>
<template>
    <nav class="border-b md:border-b-0 grow flex flex-col md:flex-row md:border-none md:bg-[#2D2D2D] text-white md:text-[#969696]"
        @click="isMenuOpen = false">
        <nuxt-link v-for="{ name, path } in getRoutes()" :key="name" :to="path"
            active-class="md:text-white md:bg-[#1E1E1E]"
            class="p-4 md:py-2 md:px-8  text-base font-normal md:border-r md:border-[#252526] md:hover: transition-all whitespace-nowrap text-ellipsis overflow-hidden">
            {{ name }}
        </nuxt-link>
        <div class="md:grow" />
        <nuxt-link :to="REPO_URL" active-class="md:text-white md:bg-[#1E1E1E]" target="_blank"
            class="hidden md:flex items-center px-4 bg-[#252526]" title="Ver código fuente">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10033_100)">
                    <path
                        d="M12 2.5C6.475 2.5 2 6.975 2 12.5C1.99887 14.5993 2.65882 16.6456 3.88622 18.3487C5.11362 20.0517 6.84615 21.3251 8.838 21.988C9.338 22.075 9.525 21.775 9.525 21.512C9.525 21.275 9.512 20.488 9.512 19.65C7 20.113 6.35 19.038 6.15 18.475C6.037 18.187 5.55 17.3 5.125 17.062C4.775 16.875 4.275 16.412 5.112 16.4C5.9 16.387 6.462 17.125 6.65 17.425C7.55 18.937 8.988 18.512 9.562 18.25C9.65 17.6 9.912 17.163 10.2 16.913C7.975 16.663 5.65 15.8 5.65 11.975C5.65 10.887 6.037 9.988 6.675 9.287C6.575 9.037 6.225 8.012 6.775 6.637C6.775 6.637 7.612 6.375 9.525 7.663C10.3391 7.43706 11.1802 7.32334 12.025 7.325C12.875 7.325 13.725 7.437 14.525 7.662C16.437 6.362 17.275 6.638 17.275 6.638C17.825 8.013 17.475 9.038 17.375 9.288C18.012 9.988 18.4 10.875 18.4 11.975C18.4 15.813 16.063 16.663 13.838 16.913C14.2 17.225 14.513 17.825 14.513 18.763C14.513 20.1 14.5 21.175 14.5 21.513C14.5 21.775 14.688 22.087 15.188 21.987C17.173 21.3168 18.8979 20.041 20.1199 18.3392C21.3419 16.6373 21.9994 14.5951 22 12.5C22 6.975 17.525 2.5 12 2.5Z"
                        fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_10033_100">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                </defs>
            </svg>
        </nuxt-link>
    </nav>
</template>