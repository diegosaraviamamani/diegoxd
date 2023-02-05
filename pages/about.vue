<script setup lang="ts">
definePageMeta({ name: '_about' })
const route = useRoute()
const router = useRouter()

const info = {
    personal: [
        { name: 'bio', id: 'bio', content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.' },
        { name: 'education', id: 'education', content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.' },
        { name: 'experience', id: 'experience', content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.' },
    ],
    professional: [
        { name: 'skills', id: 'skills', content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.' },
        { name: 'interests', id: 'interests', content: 'I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.' },
    ]
}
type InfoKeys = keyof typeof info

const isActive = (section: string, option: string) => {
    return route.query.section === section && route.query.option === option
}

const content = computed(() => {
    const { section, option } = route.query as { section: InfoKeys, option: string }
    return info[section]?.find(({ id }) => id === option)?.content
})

watchEffect(() => {
    const { query: { section, option } } = route
    if (!section && !option) {
        router.replace({ query: { section: section || 'personal', option: option || 'bio' } })
    }
})

</script>
<template>
    <div class="flex flex-col md:flex-row">
        <h2 v-if="$route.path !== '/'" class="text-white text-sm py-6 px-7 md:hidden">
            {{ $route.name }}
        </h2>
        <div class="md:w-80 shrink-0 md:border-r">
            <accordeon v-for="(section, key, index) in info" :key="index" :title="key" default-open>
                <ul class="px-7 my-4 text-[#607B96]">
                    <li class="flex flex-col" v-for="{ id, name } in section" :key="id">
                        <nuxt-link :href="{ query: { section: key, option: id } }"
                            :class="{ 'text-white': isActive(key, id) }" class="py-1 hover:text-white">
                            {{ name }}
                        </nuxt-link>
                    </li>
                </ul>
            </accordeon>
        </div>
        <div class="flex flex-col gap-6">
            <h3 class="px-7 pt-6">
                // {{ route.query.section }}
                <span class="text-[#607B96]">
                    / {{ route.query.option }}
                </span>
            </h3>
            <p class="px-7 pb-6 text-[#607B96]">
                {{ content }}
            </p>
        </div>
    </div>
</template>