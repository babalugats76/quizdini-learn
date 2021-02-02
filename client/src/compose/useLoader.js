import { reactive, toRefs, watch } from "vue";

export default function useLoader({ callback, immediate = true, deps = [] }) {
  const state = reactive({
    data: null,
    error: null,
    executions: 0,
    inError: false,
    initialized: false,
    loading: false,
    success: null,
  });

  watch(
    deps,
    async () => {
      state.loading = true;
      const response = await callback();
      const { data = null, error = null } = response;
      state.data = data;
      state.error = error;
      state.executions += 1;
      state.initialized = !!state.executions;
      state.loading = false;
      if (data) return (state.success = true);
      if (error) return (state.inError = true);
    },
    { immediate }
  );

  return { ...toRefs(state) };
}
