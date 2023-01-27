<script setup lang="ts">
import DefaultLayout from './default.vue'
</script>
<template>
    <DefaultLayout>
        <h2 v-if="$route.path !== '/'" class="text-white text-sm pt-[21px] px-7 pb-7">
            {{ $route.name }}
        </h2>
        <div class="grow">
            <slot />
        </div>
        <socials-footer />
    </DefaultLayout>
</template>