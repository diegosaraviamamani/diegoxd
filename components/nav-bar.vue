<script setup lang="ts">
const NAV_LINKS = [
    { name: '_hello', href: '/' },
    { name: '_about', href: '/about' },
    { name: '_projects', href: '/projects' },
    { name: '_contact-me', href: '/contact' },
]
//inject isMenuOpen
const isMenuOpen = inject('isMenuOpen')
</script>
<template>
    <nav class="border-b flex flex-col grow" @click="isMenuOpen = false">
        <nuxt-link v-for="{ name, href } in NAV_LINKS" :href="href" :key="name"
            class="p-4 text-white text-base font-normal">
            {{ name }}
        </nuxt-link>
    </nav>
</template>