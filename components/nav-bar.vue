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
    <nav class="border-b grow flex flex-col md:flex-row md:border-none " @click="isMenuOpen = false">
        <nuxt-link v-for="{ name, path } in getRoutes().slice(0, 3)" :key="name" :to="path"
            active-class="md:text-white md:border-b md:border-b-[#FEA55F]"
            class="p-4 md:px-8 text-white text-base font-normal md:border-r md:text-[#607B96] md:hover:text-white transition-all whitespace-nowrap text-ellipsis overflow-hidden">
            {{ name }}
        </nuxt-link>
        <div class="md:grow"></div>
        <nuxt-link :to="getRoutes()[3].path" active-class="md:border-b md:border-b-[#FEA55F]"
            class="p-4 md:px-8 text-white text-base font-normal md:border-l md:text-[#607B96] md:hover:text-white transition-all whitespace-nowrap text-ellipsis overflow-hidden">
            {{ getRoutes()[3].name }}
        </nuxt-link>
    </nav>
</template>