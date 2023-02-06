<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const isSending = ref(false)
const isSent = ref(false)
const formData = reactive({ name: '', email: '', message: '' })
const onSubmit = async (e: Event) => {
    isSending.value = true
    e.preventDefault()
    try {
        const body = { ...formData, env: runtimeConfig.public.env }
        await $fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) })
        formData.name = ''
        formData.email = ''
        formData.message = ''
        isSent.value = true
    } catch (error) {
        alert('Something went wrong! Please try again later.')
    } finally {
        isSending.value = false
    }
}

</script>
<template>
    <!-- form for contact -->
    <form class="flex flex-col gap-5 p-7" @submit.prevent="onSubmit" v-if="!isSent">
        <div class="flex flex-col gap-2">
            <label for="name" class="text-[#607B96]">_nombre:</label>
            <input type="text" id="name" v-model="formData.name" required :disabled="isSending"
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] py-3 px-4 rounded-lg focus:border-[#607B96]">
        </div>
        <div class="flex flex-col gap-2">
            <label for="email" class="text-[#607B96]">_correo-electrónico:</label>
            <input type="email" id="email" v-model="formData.email" required :disabled="isSending"
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] py-3 px-4 rounded-lg focus:border-[#607B96]">
        </div>
        <div class="flex flex-col gap-2">
            <label for="message" class="text-[#607B96]">_mensaje:</label>
            <textarea id="message" v-model="formData.message" required :disabled="isSending" style="resize: none;"
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] placeholder:leading-5 py-3 px-4 rounded-lg h-36 focus:border-[#607B96]"></textarea>
        </div>
        <button type="submit" :disabled="isSending" class="btn">
            {{ isSending? 'enviando...': 'enviar-mensaje' }}
        </button>
    </form>
    <div v-else class="flex flex-col gap-5 p-7 text-center items-center">
        <h2 class="text-[#E5E9F0] text-2xl">¡Gracias! 🤘</h2>
        <p class="text-[#607B96] text-lg leading-6">
            ¡Tu mensaje ha sido enviado! Recibirás una respuesta muy pronto.
        </p>
        <button @click="isSent = !isSent" class="btn">
            enviar-nuevo-mensaje
        </button>
    </div>
</template>