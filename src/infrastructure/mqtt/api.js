import { API } from "@/lib/constants";
import { apiClient } from "../client";

/**
 * @typedef {Object} MqttData
 * @property {string | null} title
 * @property {string | boolean | number | null} value
 * @property {string | null} unit
 * @property {string | number | null} min
 * @property {string | number | null} max
 * @property { "BOOLEAN" | "VARCHAR(50)" | null } data_type
 * @property {string | number | null } register_no
 */

/**
 * @param {string} block
 */
export const getMQTTDataAPI = async block => {
  return await apiClient("GET", `${API}/api/app/mqtt/data/?block=${block}`, "");
};

export const getMQTTDataSecAPI = async block => {
  return apiClient("GET", `${API}/api/app/mqtt/data/?block=${block}`, "")
    .then(res => {
      if (res.status === 200) {
        const { data, success } = res.data;
        if (success) {
          return [data, null];
        } else {
          return [null, "Data is empty"];
        }
      } else {
        return [null, res];
      }
    })
    .catch(err => [null, err]);
};
