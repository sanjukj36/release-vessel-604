import { apiClient } from "@/infrastructure/client";
import { API_INF, APIonlyIP, PortBanwidth, PortPing } from "@/lib/constants";
import { dtoToTelemetryBandwidth } from "./dtoToTelemetry";

async function pcStatusApi(param) {
  return apiClient("GET", `${API_INF}/api/app/pc/status/?param=${param}`);
}

/**
 * @typedef {Object} Bandwidth
 * @property {number} speed
 * @property {string} unit
 */
/**
 * @returns {Promise<Array<null | Bandwidth, null | AxiosError | Error | string>>}
 */
const getBandWidthStatusAPI = async () => {
  try {
    // const res = await apiClient("GET", `${API_INF}/bandwidth`);
    const res = await apiClient(
      "GET",
      `${APIonlyIP}:${PortBanwidth}/bandwidth`
    );
    if (res.status === 200) {
      const { data } = res.data;
      const dtoData = dtoToTelemetryBandwidth(data);
      // return [dtoData, null];
      return [data, null];
    }
    return [null, "Something went wrong"];
  } catch (err) {
    return [null, err?.message];
  }
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
const getPingStatusAPI = async () => {
  try {
    // const res = await apiClient("GET", `${API_INF}/ping`);
    const res = await apiClient("GET", `${APIonlyIP}:${PortPing}/ping`);
    if (res.status === 200) {
      const { data } = res.data;
      return [data, null];
    }
    return [null, "Something went wrong"];
  } catch (err) {
    return [null, err.message];
  }
};

const getDiskUsageStatusAPI = async () => {
  try {
    // const res = await apiClient("GET", `${API_INF}/storage`);
    const res = await apiClient("GET", `${APIonlyIP}:${PortBanwidth}/storage`);
    if (res.status === 200) {
      const { data } = res.data;
      return [data, null];
    }
  } catch (err) {
    return [null, err];
  }
};

/**
 * @typedef {Object} Storage
 * @property {number} free_storage
 * @property {number} total_storage
 * @property {number} used_storage
 */
/**
 * @returns {Promise<Array<null | Storage, null | AxiosError | Error>>}
 */
const getMdcStorageAPI = async () => {
  const [data, err] = await getDiskUsageStatusAPI();
  if (err) {
    return [null, err];
  }
  delete data?.mdc?.success;
  return [data?.mdc, null];
};

/**
 * @returns {Promise<Array<null | Storage, null | AxiosError | Error>>}
 */
const getTransboxStorageAPI = async () => {
  const [data, err] = await getDiskUsageStatusAPI();
  if (err) {
    return [null, err];
  }
  delete data?.transbox?.success;
  return [data?.transbox, null];
};

export default {
  getBandWidthStatusAPI,
  getPingStatusAPI,
  getMdcStorageAPI,
  getTransboxStorageAPI
};
