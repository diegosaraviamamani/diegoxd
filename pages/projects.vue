<script setup lang="ts">
import { Database } from '~~/types/supabase';

definePageMeta({ name: '_projects' })
const client = useSupabaseClient<Database>()

// const { data: projects, error } = await client.from('projects').select('*')
const { data: projects, pending } = await useAsyncData('projects', async () => {
    const { data } = await client.from('projects').select('*')
    return data
})

watchEffect(() => {
    console.log("data", projects.value)
    console.log("pending", pending.value)
})

const tags = computed(() => {
    let allTags: string[] = []
    if (projects.value) {
        projects.value.forEach(project => {
            allTags = [...allTags, ...project.tags.split(',')]
        })
        allTags = [...new Set(allTags)]
    }
    return allTags
})

const filteredProjects = computed(() => {
    if (projects.value) {
        return projects.value.filter(project => {
            return project.tags.split(',').some(tag => {
                return tags.value.includes(tag)
            })
        })
    }
    return []
})

const filters = reactive({
    vue: false,
    nuxt: false,
    react: false,
    angular: false,
})

watchEffect(() => {
    console.log("tags", tags.value)
    console.log("filteredProjects", filteredProjects.value)
    console.log("filters", filters)
})
</script>
<template>
    <div class="flex flex-col md:flex-row md:grow">
        <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
            {{ $route.name }}
        </h2>
        <div class="md:w-80 shrink-0 md:border-r">
            <accordeon title="projects" default-open>
                <ul class="flex flex-col gap-5 px-7 pt-4">
                    <li v-for="tag in tags" class="flex items-center">
                        <input type="checkbox" :id="tag" :value="tag" class="bg-[#011221] rounded-lg w-5 h-5" />
                        <label :for="tag" class="w-full leading-5 pl-5">{{ tag }}</label>
                    </li>
                </ul>
            </accordeon>
        </div>
        <section class="flex flex-col gap-5 md:gap-0 md:grow">
            <div class="hidden md:flex border-b">
                <span class="border-r px-4 py-2 w-40 text-[#607B96]">
                    {{ $route.name }}
                </span>
            </div>
            <div
                class="px-7 md:px-32 py-10 md:py-28 grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] gap-5 md:max-h-[calc(100vh-11.5rem)] md:overflow-y-auto">
                <div v-for="{ id, link, title } in projects" :key="id" class="flex flex-col gap-3 ">
                    <h3>Project 1 / {{ title }}</h3>
                    <article
                        class="overflow-hidden rounded-2xl border bg-[#011221] hover:cursor-pointer hover:border-white hover:opacity-90 transition-all">
                        <img src="https://picsum.photos/600/400" alt="Project 1" class="w-full aspect-[291/146]" />
                        <div class="p-8 flex flex-col gap-5">
                            <p class="text-[#607B96]">Duis aute irure dolor in velit esse cillum incididunt ut
                                labore.
                            </p>
                            <button class="btn">view-project</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
</template>