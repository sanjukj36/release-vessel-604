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
  return apiClient("GET", `${API_INF}/api/bandwidth-status`)
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
  return apiClient("GET", `${API_INF}/api/ping-status`)
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
  return apiClient("GET", `${API_INF}/api/transbox-storage`)
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
