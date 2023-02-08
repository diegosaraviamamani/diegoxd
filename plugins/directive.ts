export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("resize", {
    mounted(el, binding) {
      const height = binding.value;
      el.style.height = height + "px";
    },
    // updated(el, binding) {
    //   const height = binding.value.height;
    //   el.style.height = height + "px";
    // },
    getSSRProps(binding, vnode) {
      const height = binding.value.height;
      return {
        style: `height: ${height}px`,
      };
    },
  });
});
