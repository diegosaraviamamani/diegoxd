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
  outline: none;
  box-sizing: border-box;
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

/* remove browser outline in all inputs */
input:focus,
textarea:focus,
select:focus {
  @apply ring-[#607B96] ring-offset-2 ring-offset-[#011221] ring-opacity-50;
}

button.btn,
a.btn {
  @apply text-[#FFFFFF] p-2 w-fit rounded-lg text-sm font-[400] bg-[#1C2B3A] hover:bg-[#607B96] transition-all cursor-pointer select-none;
}
</style>