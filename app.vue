<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
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