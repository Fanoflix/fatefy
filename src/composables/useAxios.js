import { ref, shallowRef } from "vue";
import axios from "axios";

export const useAxios = (url, config = {}) => {
  const data = shallowRef(null);
  const response = ref(null);
  const isLoading = ref(false);
  const isFinished = ref(false);
  const aborted = ref(false);
  const error = ref(null);

  // const abort = (message) => {
  //   if (isFinished.value || !isLoading.value) return;
  // };

  const loading = (loading) => {
    isLoading.value = loading;
    isFinished.value = !loading;
  };

  const fetch = async () => {
    loading(true);
    try {
      const result = await axios.request({
        url,
        ...config,
      });
      response.value = result;
      data.value = result.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading(false);
    }
  };

  !config.skip && fetch();

  return { response, error, data, isLoading, fetch };
};
