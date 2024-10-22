import { API } from "@/lib/constants";
import { apiClient } from "../client";

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
