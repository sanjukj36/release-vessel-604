import { AxiosError } from "axios";
import { apiClient } from "@/infrastructure/client";
import { API_INF } from "@/lib/constants";

/**
 * @returns {Promise<Array<undefined | string, undefined | AxiosError | Error>>}
 */
export const getBandWidthStatusAPI = async () => {
  return apiClient("GET", `${API_INF}/api/bandwidth_status`)
    .then(res => {
      if (res.status === 200) {
        const { data } = res.data;
        return [data, new Error("Something went wrong")];
      }
      return [undefined];
    })
    .catch(err => {
      return [undefined, err];
    });
};
