<script setup lang="ts">
const { defaultOpen } = defineProps({
    title: { type: String, required: true },
    defaultOpen: { type: Boolean, default: false },
})
const isOpen = ref(defaultOpen)
</script>

<template>
    <div class="cursor-pointer">
        <p @click="isOpen = !isOpen" class="bg-[#1E2D3D] text-base px-7 py-1">
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