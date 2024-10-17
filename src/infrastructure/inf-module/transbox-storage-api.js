import { apiClient } from "@/infrastructure/client";
import { API_INF } from "@/lib/constants";

/**
 * @typedef {Object} Storage
 * @property {number} free_storage
 * @property {number} total_storage
 * @property {number} used_storage
 */

/**
 * @returns {Promise<Array<undefined | Storage, undefined | AxiosError | Error>>}
 */
export const getTransboxStorageAPI = async () => {
  return apiClient("GET", `${API_INF}/api/transbox_storage`)
    .then(res => {
      if (res.status === 200) {
        const { data } = res;
        return [data, undefined];
      }
      return [undefined, new Error("Something Went Wrong")];
    })
    .catch(err => {
      return [undefined, err];
    });
};
