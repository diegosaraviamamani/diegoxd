<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
/* import font fira code */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Fira Code', monospace;
  @apply border-[#1E2D3D];
}

body {
  @apply bg-[#010C15];
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.25s;
}

.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>