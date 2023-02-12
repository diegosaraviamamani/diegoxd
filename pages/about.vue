<script setup lang="ts">
import { ABOUT_DATA } from '../constants';
useHead(() => ({ title: 'Acerca de - Diego Saravia' }))
definePageMeta({ name: '_acerca-de' })

const route = useRoute()

const isActive = (section: string, option: string) => {
  return route.query.section === section && route.query.option === option
}
function scrollTo(id: string) {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}



</script>
<template>

  <div class="flex flex-col md:flex-row grow">
    <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
      {{ $route.name }}
    </h2>
    <div class="md:w-80 shrink-0">
      <accordeon v-for="(section) in ABOUT_DATA" :key="section.id" :title="section.label" default-open>
        <ul class="px-7 my-4 md:mt-0">
          <li class="flex flex-col" v-for="{ id, name } in section.data" :key="section.id">
            <a @click.prevent="scrollTo(`#${[name, id].join('-')}`)" class="py-1 hover:text-white transition-all"
              :class="isActive(name, id) ? 'text-white' : 'text-[#CCCCCC]'">
              <!-- svg markdown icon file -->
              <svg class="w-4 h-4 inline-block mr-2" width="17" height="16" viewBox="0 0 17 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.44684 0.844727H16.0466C16.2617 0.844727 16.468 0.930181 16.6201 1.08229C16.7722 1.2344 16.8577 1.44071 16.8577 1.65582V14.6334C16.8577 14.8485 16.7722 15.0548 16.6201 15.2069C16.468 15.359 16.2617 15.4445 16.0466 15.4445H1.44684C1.23172 15.4445 1.02542 15.359 0.873307 15.2069C0.721197 15.0548 0.635742 14.8485 0.635742 14.6334V1.65582C0.635742 1.44071 0.721197 1.2344 0.873307 1.08229C1.02542 0.930181 1.23172 0.844727 1.44684 0.844727ZM4.69122 10.9834V7.73904L6.31342 9.36124L7.93561 7.73904V10.9834H9.5578V5.30576H7.93561L6.31342 6.92795L4.69122 5.30576H3.06903V10.9834H4.69122ZM13.6133 8.55014V5.30576H11.9911V8.55014H10.3689L12.8022 10.9834L15.2355 8.55014H13.6133Z"
                  fill="currentColor" />
              </svg>
              {{ name }}
            </a>
          </li>
        </ul>
      </accordeon>
    </div>
    <section
      class="flex flex-col flex-grow gap-6 md:gap-0 md:grow bg-[#1E1E1E] md:max-h-[calc(100vh-7.5rem)] overflow-y-auto relative">
      <div class="md:flex md:items-start" v-if="$route.path === '/about'">
        <div class="hidden md:flex my-10 ml-10 md:my-5 overflow-y-hidden shrink-0 text-[#607B96] ">
          <ol class="hidden md:block lg:hidden">
            <li v-for="i in 88" class="flex text-[#858585]">
              <span class="text-right w-4">{{ i }}</span>
              <span class="w-10"></span>
            </li>
          </ol>
          <ol class="hidden lg:block">
            <li v-for="i in 68" class="flex text-[#858585]">
              <span class="text-right w-4">{{ i }}</span>
              <span class="w-10"></span>
            </li>
          </ol>
        </div>
        <div>
          <div v-for="(section) in ABOUT_DATA" :key="section.id" class="px-7 pb-6 md:pl-0">
            <div v-for="{ id, name, data } in section.data" class="flex flex-col" :id="[name, id].join('-')">
              <br />
              <highlight-code class="text-[#43D9AD]" language="typescript" :code="`const ${name} = [`" />

              <template v-for="d in data">
                <template v-if="typeof d === 'string'">
                  <highlight-code class="ml-4" language="typescript" :code="`'${d}'`" />
                </template>
                <template v-else>
                  <highlight-code class="ml-4" language="typescript" code="{" />
                  <highlight-code v-for="(value, key) in d" class="ml-8" language="typescript"
                    :code="`${key}: '${value}'`" />
                  <highlight-code class="ml-4" language="typescript" code="}," />
                </template>
              </template>
              <highlight-code :code="`]`" language="typescript" />
              <br>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>