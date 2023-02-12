function useProjects() {
  const selectedTags = ref<string[]>([]);
  const selectedCategories = ref<string[]>([]);

  const { pending, data: projects } = useLazyFetch("/api/projects");

  const tags = computed(() => {
    let allTags: string[] = [];
    if (projects.value) {
      projects.value.forEach(
        (project) => (allTags = [...allTags, ...project.tags])
      );
    }
    return [...new Set(allTags)];
  });

  const categories = computed(() => {
    let allCategories: string[] = [];
    if (projects.value) {
      projects.value.forEach(
        (project) => (allCategories = [...allCategories, project.category])
      );
    }
    return [...new Set(allCategories)];
  });

  const filteredProjects = computed(() => {
    if (projects.value) {
      if (
        selectedTags.value.length === 0 &&
        selectedCategories.value.length === 0
      ) {
        return projects.value;
      }
      if (selectedTags.value.length === 0) {
        return projects.value.filter((project) =>
          selectedCategories.value.includes(project.category)
        );
      }
      if (selectedCategories.value.length === 0) {
        return projects.value.filter((project) =>
          project.tags.some((tag) => selectedTags.value.includes(tag))
        );
      }
      return projects.value.filter(
        (project) =>
          project.tags.some((tag) => selectedTags.value.includes(tag)) &&
          selectedCategories.value.includes(project.category)
      );
    }
    return [];
  });

  return {
    projects: filteredProjects,
    tags,
    selectedTags,
    categories,
    selectedCategories,
    pending,
  };
}
export default useProjects;
