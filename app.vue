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
  @apply border-[#474747];
  outline: none;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: red blue;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  border-left: 1px solid #474747;
  width: 15px;
}

*::-webkit-scrollbar-track {
  background: #1E1E1E;
  border-left: 1px solid #474747;
  
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  transition: all 1s;
  border-left: 1px solid #474747;
  background-color: #1E1E1E;
}
*:hover::-webkit-scrollbar-thumb {
  transition: all 1s;
  background-color: #424242;
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
  @apply text-[#FFFFFF] p-2 w-fit rounded-lg text-sm font-[400] bg-[#10639C] hover:bg-[#1077BB] transition-all cursor-pointer select-none;
}
</style>