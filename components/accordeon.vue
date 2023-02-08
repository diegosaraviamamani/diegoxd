<script setup lang="ts">
const { defaultOpen } = defineProps({
    title: { type: String, required: true },
    defaultOpen: { type: Boolean, default: false },
})
const isOpen = ref(defaultOpen)
</script>

<template>
    <div class="text-[#CCCCCC] cursor-pointer border-b md:border-b-0 md:border-t md:first-of-type:border-t-0">
        <p @click="isOpen = !isOpen"
            class="bg-[#1E2D3D] text-base px-7 md:px-3 py-1 md:py-2 md:bg-transparent uppercase font-bold tracking-wide">
            {{ isOpen? '▼': '▶' }} {{ title }}
        </p>
        <transition-expand>
            <template v-if="isOpen">
                <slot />
            </template>
        </transition-expand>
    </div>
</template>

<style scoped>
details:not([open])>*:not(summary) {
    display: none;
}

div:not(:last-of-type) {
    margin-bottom: 3px;
}
</style>