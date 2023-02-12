<script setup lang="ts">
import type { PropType } from 'vue';
import { Database } from '~~/types/supabase';

type Project = { tags: string[] } & Omit<Database['public']['Tables']['projects']['Row'], 'tags'>

defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true,
    },
})
const client = useSupabaseClient<Database>()
function getImageUrl(imageKey: string) {
    const path = `thumbnails/${imageKey}`
    return client.storage.from('portfolio').getPublicUrl(path).data.publicUrl
}
</script>
<template>
    <div class="flex flex-col gap-3 h-full">
        <article
            class="overflow-hidden rounded-2xl bg-[#262728] border border-transparent hover:border-white hover:opacity-90 transition-all h-full">
            <img :src="getImageUrl(project.imageKey)" alt="Project 1" class="w-full aspect-[291/146]" />
            <div class="p-8 flex flex-col gap-5">
                <div :title="project.title" class="overflow-hidden whitespace-nowrap text-ellipsis text-white">
                    <h4>{{ project.title }}</h4>
                    <h3 class="text-xs uppercase tracking-widest">{{ project.category }}</h3>
                </div>
                <p class="text-[#BBBBBB]">
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