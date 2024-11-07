import { apiClient } from "@/infrastructure/client";
import { API, API_INF } from "@/lib/constants";

/**
 * @typedef {Object} DatabaseFile
 * @property {string} CreatedOn
 * @property {string} FileName
 * @property {number} ID
 * @property {string} ModifiedOn
 * @property {string} TransmissionStatus
 */

/**
 * @returns {Promise<Array<undefined | DatabaseFile, undefined | Error | AxiosError>>}
 */
export const getDatabaseFileStatusAPI = async () => {
  return apiClient("GET", `${API}/api/table`)
    .then(res => {
      if (res.status === 200) {
        const { data } = res.data;
        return [data, null];
      }
      return [null, "Something went wrong"];
    })
    .catch(err => {
      return [null, err.message];
    });
};
