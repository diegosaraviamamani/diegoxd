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
const NAV_LINKS = [
    { name: '_hello', href: '/' },
    { name: '_about', href: '/about' },
    { name: '_projects', href: '/projects' },
    { name: '_contact-me', href: '/_contact-me' },
]

const isMenuOpen = ref(false)
watchEffect(() => {
    if (isMenuOpen.value) {
        console.log('open')
    } else {
        console.log('close')
    }
})

</script>
<template>
    <div class="bg-[#010C15] text-white min-h-screen w-screen flex flex-col">
        <div class="m-4 bg-[#011627] flex-grow overflow-hidden border rounded-lg flex flex-col relative">
            <header class="border-b flex justify-between items-center">
                <h1 class="text-[#607B96] text-base p-4">diego-saravia</h1>
                <button class="text-[#607B96] p-4" @click="isMenuOpen = !isMenuOpen">
                    {{ isMenuOpen? 'x': '☰' }}
                </button>
            </header>
            <slot />
            <transition-fade>
                <div v-if="isMenuOpen" class="absolute bg-[#011627] inset-0  top-[3.8rem] flex flex-col">
                    <nav class="border-b flex flex-col grow" @click="isMenuOpen = false">
                        <nuxt-link v-for="{ name, href } in NAV_LINKS" :href="href" :key="name"
                            class="p-4 text-white text-base font-normal">
                            {{ name }}
                        </nuxt-link>
                    </nav>
                    <socials-footer />
                </div>
            </transition-fade>
        </div>
    </div>

</template>
<style>
/* import font fira code */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

* {
    font-family: 'Fira Code', monospace;
    @apply border-[#1E2D3D] box-border;
}

body {
    @apply bg-[#010C15];
}
</style>