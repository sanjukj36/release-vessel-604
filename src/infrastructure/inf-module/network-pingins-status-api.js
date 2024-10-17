import { apiClient } from "@/infrastructure/client";
import { API_INF } from "@/lib/constants";

/**
 * @typedef {Object} PingStatus
 * @property {string} host_name
 * @property {string} host
 * @property {boolean} status
 */

/**
 * @returns {Promise<Array<undefined | PingStatus[], undefined | AxiosError | Error>>}
 */
export const getPingStatusAPI = async () => {
  return apiClient("GET", `${API_INF}/api/ping_status`)
    .then(res => {
      if (res.status === 200) {
        const { data } = res;
        const newData = data.map(x => {
          x.status = x.status === "True";
          return x;
        });
        return [newData, undefined];
      }
      return [undefined, new Error("Something Went Wrong")];
    })
    .catch(err => {
      return [undefined, err];
    });
};
