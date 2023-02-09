<script setup lang="ts">

const { formData, isLoading, isSent, onSubmit } = useContactForm()

</script>
<template>
    <!-- form for contact -->
    <form class="flex flex-col gap-5 p-7 max-w-[600px] w-full mx-auto" @submit.prevent="onSubmit" v-if="!isSent">
        <div class="flex flex-col gap-2">
            <label for="name" class="text-[#BBBBBB]">_nombre:</label>
            <input type="text" id="name" v-model="formData.name" required :disabled="isLoading"
                class="border bg-[#3C3C3C] text-[#CCCCCC] placeholder:text-[#465E77] py-3 px-4 rounded focus:border-[#007FD4]">
        </div>
        <div class="flex flex-col gap-2">
            <label for="email" class="text-[#BBBBBB]">_correo-electrónico:</label>
            <input type="email" id="email" v-model="formData.email" required :disabled="isLoading"
                class="border bg-[#3C3C3C] text-[#CCCCCC] placeholder:text-[#465E77] py-3 px-4 rounded focus:border-[#007FD4]">
        </div>
        <div class="flex flex-col gap-2">
            <label for="message" class="text-[#BBBBBB]">_mensaje:</label>
            <textarea id="message" v-model="formData.message" required :disabled="isLoading" style="resize: none;"
                class="border bg-[#3C3C3C] text-[#CCCCCC] placeholder:text-[#465E77] placeholder:leading-5 py-3 px-4 rounded h-36 focus:border-[#007FD4]"></textarea>
        </div>
        <button type="submit" :disabled="isLoading" class="btn">
            {{ isLoading? 'enviando...': 'enviar-mensaje' }}
        </button>
    </form>
    <!-- message sent -->
    <div v-else class="flex flex-col gap-5 p-7 text-center items-center">
        <h2 class="text-[#CCCCCC] text-2xl">¡Gracias! 🤘</h2>
        <p class="text-[#BBBBBB] text-lg leading-6">
            ¡Tu mensaje ha sido enviado! Recibirás una respuesta muy pronto.
        </p>
        <button @click="isSent = !isSent" class="btn">
            enviar-nuevo-mensaje
        </button>
    </div>
</template>