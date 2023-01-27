<template>
    <code v-html="highlightedCode"></code>
</template>

<script setup lang="ts">
const { code, language } = defineProps<{
    code: string
    language: string
}>()

const highlightedCode = computed(() => Prism.highlight(code, Prism.languages[language], language))
</script>
<style>
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    background-color: transparent !important;

}
</style>