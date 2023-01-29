<script setup lang="ts">
const { title } = defineProps({ title: { type: String, required: true } })
const isOpen = ref(false)
</script>

<template>
    <div class="cursor-pointer">
        <p @click="isOpen = !isOpen" class="bg-[#1E2D3D] text-base px-7 py-1">
            {{ isOpen? '▼': '▶' }}
            {{ title }}
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