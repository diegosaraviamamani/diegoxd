<script setup lang="ts">
const isSending = ref(false)
const isSent = ref(true)
const formData = reactive({ name: '', email: '', message: '' })
const onSubmit = async (e: Event) => {
    isSending.value = true
    e.preventDefault()
    try {
        await $fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
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
            <label for="name" class="text-[#607B96]">_name:</label>
            <input type="text" id="name" v-model="formData.name" required placeholder="Jonathan Davis"
                :disabled="isSending"
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] py-3 px-4 rounded-lg">
        </div>
        <div class="flex flex-col gap-2">
            <label for="email" class="text-[#607B96]">_email:</label>
            <input type="email" id="email" v-model="formData.email" required placeholder="jonathan-davis@gmail.com"
                :disabled="isSending"
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] py-3 px-4 rounded-lg">
        </div>
        <div class="flex flex-col gap-2">
            <label for="message" class="text-[#607B96]">_message:</label>
            <textarea id="message" v-model="formData.message" required :disabled="isSending"
                placeholder="Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips."
                class="border bg-[#011221] text-[#E5E9F0] placeholder:text-[#465E77] placeholder:leading-5 py-3 px-4 rounded-lg h-36"></textarea>
        </div>
        <button type="submit" :disabled="isSending"
            class="text-[#FFFFFF] bg-[#263B50] p-2 w-fit rounded-lg text-base font-[400]">
            {{ isSending? 'sending...': 'submit-message' }}
        </button>
    </form>
    <div v-else class="flex flex-col gap-5 p-7 text-center items-center">
        <h2 class="text-[#E5E9F0] text-2xl">Thank you! 🤘</h2>
        <p class="text-[#607B96] text-lg leading-6">Your message has been accepted. You will recieve answer really soon!
        </p>
        <button @click="isSent = false" class="text-[#FFFFFF] bg-[#263B50] p-2 w-fit rounded-lg text-base font-[400]">
            send-new-message
        </button>
    </div>
</template>