<script setup lang="ts">
useHead(() => ({ title: 'Proyectos - Diego Saravia' }))
definePageMeta({ name: '_proyectos' })

const {
  pending,
  projects,
  selectedTags,
  tags,
  selectedCategories,
  categories
} = useProjects()

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
      <accordeon title="categorias" default-open>
        <ul class="flex flex-col gap-3 px-7 my-4 md:mt-0">
          <li v-for="category in categories" class="flex items-center">
            <input type="checkbox" :id="category" :value="category" class="bg-[#011221] rounded-lg w-5 h-5"
              v-model="selectedCategories" />
            <label :for="category" class="w-full leading-5 pl-5">{{ category }}</label>
          </li>
        </ul>
      </accordeon>
    </div>
    <section class="flex flex-col gap-5 md:gap-0 md:grow bg-[#1E1E1E]">
      <div v-if="!pending && projects.length > 0"
        class="px-7 py-10 md:p-[calc(100vw*120/1920)] grid grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 md:gap-10 md:max-h-[calc(100vh-7.5rem)] md:overflow-y-auto">
        <project-card v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </section>
  </div>
</template>