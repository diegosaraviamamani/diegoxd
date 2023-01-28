<script setup lang="ts">
type Props = { code: string, language: string }
const { code, language } = defineProps<Props>()

const highlightedCode = ref('')

onMounted(() => {
    highlightedCode.value = Prism.highlight(code, Prism.languages[language], language)
})
</script>
<template>
    <code v-html="highlightedCode"></code>
</template>
<style>
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    background-color: transparent !important;
}
</style>