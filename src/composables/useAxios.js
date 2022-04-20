import { ref, shallowRef } from "vue";
import axios from "axios";

export const useAxios = (url = null, config = {}) => {
  const data = ref(null);
  const response = ref(null);
  const isLoading = ref(false);
  const isFinished = ref(false);
  const aborted = ref(false);
  const error = ref(null);

  // todo
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
      const apiResponse = await axios.request({
        url,
        ...config,
      });
      response.value = apiResponse;
      data.value = apiResponse.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading(false);
    }
  };

  !config.skip && fetch();
  return { response, data, error, isLoading, isFinished, fetch };
};
