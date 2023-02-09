function useProjects() {
  const selectedTags = ref<string[]>([]);

  const { pending, data: projects } = useLazyFetch("/api/projects");

  const tags = computed(() => {
    let allTags: string[] = [];
    if (projects.value) {
      projects.value.forEach(
        (project) => (allTags = [...allTags, ...project.tags.split(",")])
      );
    }
    return [...new Set(allTags)];
  });

  const filteredProjects = computed(() => {
    if (projects.value) {
      if (selectedTags.value.length === 0) {
        return projects.value;
      }
      return projects.value.filter((project) => {
        return project.tags
          .split(",")
          .some((tag) => selectedTags.value.includes(tag));
      });
    }
    return [];
  });

  return {
    projects: filteredProjects,
    tags,
    selectedTags,
    pending,
  };
}
export default useProjects;
