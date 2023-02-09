function useContactForm() {
  const defaultFormData = { name: "", email: "", message: "" };
  const isLoading = ref(false);
  const isSent = ref(false);
  const runtimeConfig = useRuntimeConfig();
  const formData = ref(defaultFormData);

  const onSubmit = async (e: Event) => {
    isLoading.value = true;
    e.preventDefault();
    try {
      const body = JSON.stringify({
        ...formData.value,
        env: runtimeConfig.public.env,
      });
      await fetch("/api/contact", { method: "POST", body });
      isSent.value = true;
      formData.value = defaultFormData;
    } catch (error) {
      alert(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { formData, onSubmit, isLoading, isSent };
}

export default useContactForm;
