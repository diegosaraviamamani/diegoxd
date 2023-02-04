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
    <div class="bg-[#010C15] text-white min-h-screen w-screen flex flex-col">
        <div class="m-4 bg-[#011627] flex-grow overflow-hidden border rounded-lg flex flex-col relative">
            <header class="border-b flex justify-between items-center">
                <h1 class="text-[#607B96] text-base p-4">diego-saravia</h1>
                <button class="text-[#607B96] p-4 md:hidden" @click="isMenuOpen = !isMenuOpen">
                    {{ isMenuOpen? 'x': '☰' }}
                </button>
            </header>
            <main class="flex flex-col grow max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-5rem-60px)] overflow-y-auto">
                <slot />
            </main>
            <socials-footer class="hidden md:flex" />
            <transition-fade>
                <div v-if="isMenuOpen" class="absolute bg-[#011627] inset-0  top-[3.8rem] flex flex-col md:hidden">
                    <nav-bar />
                    <socials-footer />
                </div>
            </transition-fade>
        </div>
    </div>

</template>
<style>

</style>