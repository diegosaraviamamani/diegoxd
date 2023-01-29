<script setup lang="ts">
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
    <nav class="border-b flex flex-col grow" @click="isMenuOpen = false">
        <nuxt-link v-for="{ name, path } in getRoutes()" :key="name" :to="path"
            class="p-4 text-white text-base font-normal">
            {{ name }}
        </nuxt-link>
    </nav>
</template>