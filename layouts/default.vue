<script setup lang="ts">
useHead(
    () => ({
        meta: [
            { name: 'description', content: 'Diego Saravia personal website' },
            { name: 'keywords', content: 'diego, saravia, personal, website' },
            { name: 'author', content: 'Diego Saravia' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        ],
    }),
)

const isMenuOpen = ref(false)
// inject isMenuOpen to child components
provide('isMenuOpen', isMenuOpen)

</script>
<template>
    <div class="bg-[#323233] text-white min-h-screen w-screen flex flex-col">
        <div class="m-4 bg-[#252526] flex-grow overflow-hidden rounded-lg flex flex-col relative">
            <header class="border-b md:border-b-0 flex justify-between items-center">
                <nuxt-link href="/" class="text-[#BBBBBB] text-base p-4 md:w-80 md:px-8 md:py-2 shrink-0 md:uppercase">
                    diego-saravia
                </nuxt-link>
                <button class="text-[#607B96] p-4 md:hidden text-3xl leading-6" @click="isMenuOpen = !isMenuOpen">
                    {{ isMenuOpen? '✖': '≡' }}
                </button>
                <nav-bar class="hidden md:flex" />
            </header>
            <main
                class="flex flex-col grow max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-5rem-35px)] overflow-y-auto md:flex-row md:relative">
                <slot />
            </main>
            <socials-footer class="hidden md:flex" />
            <transition-fade>
                <div v-if="isMenuOpen" class="absolute bg-[#2D2D2D] inset-0  top-[3.5rem] flex flex-col md:hidden">
                    <nav-bar />
                    <socials-footer />
                </div>
            </transition-fade>
        </div>
    </div>

</template>
<style>

</style>