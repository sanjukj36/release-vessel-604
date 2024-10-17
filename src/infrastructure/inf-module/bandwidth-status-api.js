import { AxiosError } from "axios";
import { apiClient } from "@/infrastructure/client";
import { API_INF } from "@/lib/constants";

/**
 * @typedef {Object} Bandwidth
 * @property {number} speed
 * @property {string} unit
 */

/**
 * @returns {Promise<Array<undefined | Bandwidth, undefined | AxiosError | Error>>}
 */
export const getBandWidthStatusAPI = async () => {
  return apiClient("GET", `${API_INF}/api/bandwidth_status`)
    .then(res => {
      if (res.status === 200) {
        const { data } = res;
        data.unit = "Mbps";
        data.speed = data?.download_speed ?? 0;
        delete data.download_speed;
        delete data.range;
        return [data, undefined];
      }
      return [undefined, new Error("Something went wrong")];
    })
    .catch(err => {
      return [undefined, err];
    });
};
