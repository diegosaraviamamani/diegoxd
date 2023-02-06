<script setup lang="ts">
import type { PropType } from 'vue';
import { Database } from '~~/types/supabase';

defineProps({
    project: {
        type: Object as PropType<Database['public']['Tables']['projects']['Row']>,
        required: true,
    },
})
const client = useSupabaseClient<Database>()
const getImageUrl = (imageKey?: string) => imageKey ? client.storage.from('portfolio').getPublicUrl(`thumbnails/${imageKey}`).data.publicUrl : "https://picsum.photos/600/400"
</script>
<template>
    <div class="flex flex-col gap-3 h-full">
        <h3 :title="project.title" class="overflow-hidden whitespace-nowrap text-ellipsis text-[#5565E8]">
            Project 1 <span class="text-[#607B96]">// {{ project.title }}</span>
        </h3>
        <article
            class="overflow-hidden rounded-2xl border bg-[#011221]  hover:border-white hover:opacity-90 transition-all h-full">
            <img :src="getImageUrl(project.imageKey)" alt="Project 1" class="w-full aspect-[291/146]" />
            <div class="p-8 flex flex-col gap-5">
                <p class="text-[#607B96]">
                    Duis aute irure dolor in velit esse cillum incididunt ut labore.
                </p>
                <nuxt-link v-if="project.link" :href="project.link" class="btn" target="_blank">
                    ver-projecto
                </nuxt-link>
                <nuxt-link v-if="project.repo" :href="project.repo" class="btn" target="_blank">
                    ver-repositorio
                </nuxt-link>
            </div>
        </article>
    </div>
</template>