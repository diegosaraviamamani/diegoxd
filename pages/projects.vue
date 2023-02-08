<script setup lang="ts">
import { Database } from '~~/types/supabase';

definePageMeta({ name: '_proyectos' })
const client = useSupabaseClient<Database>()

const { data: projects } = await useAsyncData('projects', async () => {
  const { data } = await client.from('projects').select('*')
  return data
})

const selectedTags = ref<string[]>([])

const tags = computed(() => {
  let allTags: string[] = []
  if (projects.value) {
    projects.value.forEach(project => allTags = [...allTags, ...project.tags.split(',')])
  }
  return [...new Set(allTags)]
})

const filteredProjects = computed(() => {
  if (projects.value) {
    if (selectedTags.value.length === 0) {
      return projects.value
    }
    return projects.value.filter(project => {
      return project.tags.split(',').some(tag => selectedTags.value.includes(tag))
    })
  }
  return []
})

</script>
<template>
  <div class="flex flex-col md:flex-row md:grow ">
    <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
      {{ $route.name }}
    </h2>
    <div class="md:w-80 shrink-0 ">
      <accordeon title="tecnologias" default-open>
        <ul class="flex flex-col gap-3 px-7 my-4 md:mt-0">
          <li v-for="tag in tags" class="flex items-center">
            <input type="checkbox" :id="tag" :value="tag" class="bg-[#011221] rounded-lg w-5 h-5"
              v-model="selectedTags" />
            <label :for="tag" class="w-full leading-5 pl-5">{{ tag }}</label>
          </li>
        </ul>
      </accordeon>
    </div>
    <section class="flex flex-col gap-5 md:gap-0 md:grow bg-[#1E1E1E]">
      <div v-if="filteredProjects.length > 0"
        class="px-7 py-10 md:p-[calc(100vw*120/1920)] grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 md:gap-10 md:max-h-[calc(100vh-7.5rem)] md:overflow-y-auto">
        <project-card v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>