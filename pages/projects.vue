<script setup lang="ts">
definePageMeta({ layout: 'full', name: '_projects' })

const TAGS = [
    { name: "React", value: "react" },
    { name: "HTML", value: "html" },
    { name: "CSS", value: "css" },
    { name: "Vue", value: "vue" },
    { name: "Angular", value: "angular" },
    { name: "Gatsby", value: "gatsby" },
    { name: "Flutter", value: "flutter" },
]
</script>
<template>
    <main>
        <accordeon title="projects">
            <ul class="flex flex-col gap-5 px-7 pt-4">
                <li v-for="{ name, value } in TAGS" class="flex items-center">
                    <input type="checkbox" :id="value" :value="value" class="bg-[#011221] rounded-lg w-5 h-5" />
                    <label :for="value" class="w-full leading-5 pl-5">{{ name }}</label>
                </li>
            </ul>

        </accordeon>
        <section class="px-7 py-10 flex flex-col gap-5">
            <div class="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-5">
                <div v-for="i in 4" :key="i" class="flex flex-col gap-3 ">
                    <h3>Project 1 / social-banner</h3>
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
    </main>
</template>