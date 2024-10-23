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
  const imo = "9912024";
  return await apiClient(
    "GET",
    `${API}/api/app/mqtt/data/?imo=${imo}&block=${block}`,
    ""
  );
};
