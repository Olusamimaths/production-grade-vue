import { reactive, toRefs } from "vue";

export const useCounter = () => {
  const state = reactive({
    currentCount: 12,
  });

  const incrementCount = () => {
    state.currentCount++;
  };

  return {
    ...toRefs(state),
    incrementCount,
  };
};
